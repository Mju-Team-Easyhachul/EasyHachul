import React from "react";
import { generatePath } from "react-router";
import SearchPresenter from "./SearchPresenter";

var Dijkstras = (function () {
  var Dijkstras = function () {
      this.graph = [];
      this.queue;
      this.distance = [];
      this.previous = []
  }

  Dijkstras.prototype.setGraph = function (graph)
  {
      // Error check graph
      if (typeof graph !== 'object') {
          throw "graph isn't an object (" + typeof graph + ")";
      }

      if (graph.length < 1) {
          throw "graph is empty";
      }

      for (var index in graph) {
          // Error check each node
          var node = graph[index];
          if (typeof node !== 'object' || node.length !== 2) {
              throw "node must be an array and contain 2 values (name, vertices). Failed at index: " + index;
          }

          var nodeName = node[0];
          var vertices = node[1];
          this.graph[nodeName] = [];

          for (var v in vertices) {
              // Error check each node
              var vertex = vertices[v];
              if (typeof vertex !== 'object' || vertex.length !== 2) {
                  throw "vertex must be an array and contain 2 values (name, vertices). Failed at index: " + index + "[" + v + "]" ;
              }
              var vertexName = vertex[0];
              var vertexCost = vertex[1];
              this.graph[nodeName][vertexName] = vertexCost;
          }
      }
  }

  Dijkstras.prototype.getPath = function (source, target)
  {
      // Check source and target exist
      if (typeof this.graph[source] === 'undefined') {
          throw "source " + source + " doesn't exist";
      }
      if (typeof this.graph[target] === 'undefined') {
          throw "target " + target + " doesn't exist";
      }

      // Already at target
      if (source === target) {
          return [];
      }

      // Reset all previous values
      this.queue = new MinHeap();
      this.queue.add(source, 0);
      this.previous[source] = null;

      // Loop all nodes
      var u = null
      while ((u = this.queue.shift())) {
          // Reached taget!
          if (u === target) {
              var path = [];
              while (this.previous[u] != null) {
                  path.unshift(u);
                  u = this.previous[u];
              }
              return path;
          }

          // all remaining vertices are inaccessible from source
          if (this.queue.getDistance(u) == Infinity) {
              return [];
          }

          var uDistance = this.queue.getDistance(u)
          for (var neighbour in this.graph[u]) {
              var nDistance = this.queue.getDistance(neighbour),
                  aDistance = uDistance + this.graph[u][neighbour];

              if (aDistance < nDistance) {
                  this.queue.update(neighbour, aDistance);
                  this.previous[neighbour] = u;
              }
          }
      }

      return [];
  }



  // Fibonacci Heap (min first)
  var MinHeap = (function() {
      var MinHeap = function () {
          this.min = null;
          this.roots = [];
          this.nodes = [];
      }

      MinHeap.prototype.shift = function()
      {
          var minNode = this.min;

          // Current min is null or no more after it
          if (minNode == null || this.roots.length < 1) {
              this.min = null;
              return minNode
          }

          // Remove it
          this.remove(minNode);

          // Consolidate
          if (this.roots.length > 50) {
              this.consolidate();
          }

          // Get next min
          var lowestDistance = Infinity,
              length = this.roots.length;

          for (var i = 0; i < length; i++) {
              var node = this.roots[i],
                  distance = this.getDistance(node);

              if (distance < lowestDistance) {
                  lowestDistance = distance;
                  this.min = node;
              }
          }

          return minNode;
      }

      MinHeap.prototype.consolidate = function()
      {
          // Consolidate
          var depths = [ [], [], [], [], [], [], [] ],
              maxDepth = depths.length - 1, // 0-index
              removeFromRoots = [];

          // Populate depths array
          var length = this.roots.length;
          for (var i = 0; i < length; i++) {
            var node = this.roots[i],
            depthss = this.nodes[node].depth;

            if (depthss < maxDepth) {
                depths[depthss].push(node);
            }
          }

          // Consolidate
          for (var depth = 0; depth <= maxDepth; depth++) {
              while (depths[depth].length > 1) {

                  var first = depths[depth].shift(),
                      second = depths[depth].shift(),
                      newDepth = depth + 1,
                      pos = -1;

                  if (this.nodes[first].distance < this.nodes[second].distance) {
                      this.nodes[first].depth = newDepth;
                      this.nodes[first].children.push(second);
                      this.nodes[second].parent = first;

                      if (newDepth <= maxDepth) {
                          depths[newDepth].push(first);
                      }

                      // Find position in roots where adopted node is
                      pos = this.roots.indexOf(second);

                  } else {
                      this.nodes[second].depth = newDepth;
                      this.nodes[second].children.push(first);
                      this.nodes[first].parent = second;

                      if (newDepth <= maxDepth) {
                          depths[newDepth].push(second);
                      }

                      // Find position in roots where adopted node is
                      pos = this.roots.indexOf(first);
                  }

                  // Remove roots that have been made children
                  if (pos > -1) {
                      this.roots.splice(pos, 1);
                  }
              }
          }
      }

      MinHeap.prototype.add = function(node, distance)
      {
          // Add the node
          this.nodes[node] = {
              node: node,
              distance: distance,
              depth: 0,
              parent: null,
              children: []
          };

          // Is it the minimum?
          if (!this.min || distance < this.nodes[this.min].distance) {
              this.min = node;
          }

          // Other stuff
          this.roots.push(node);
      }

      MinHeap.prototype.update = function(node, distance)
      {
          this.remove(node);
          this.add(node, distance);
      }

      MinHeap.prototype.remove = function(node)
      {
          if (!this.nodes[node]) {
              return;
          }

          // Move children to be children of the parent
          var numChildren = this.nodes[node].children.length;
          if (numChildren > 0) {
              for (var i = 0; i < numChildren; i++) {
                  var child = this.nodes[node].children[i];
                  this.nodes[child].parent = this.nodes[node].parent;

                  // No parent, then add to roots
                  if (this.nodes[child].parent == null) {
                      this.roots.push(child);
                  }
              }
          }

          var parent = this.nodes[node].parent;

          // Root, so remove from roots
          if (parent == null) {
              var pos = this.roots.indexOf(node);
              if (pos > -1) {
                  this.roots.splice(pos, 1);
              }
          } else {
              // Go up the parents and decrease their depth
              while (parent) {
                  this.nodes[parent].depth--;
                  parent = this.nodes[parent].parent
              }
          }
      }

      MinHeap.prototype.getDistance = function(node)
      {
          if (this.nodes[node]) {
              return this.nodes[node].distance;
          }
          return Infinity;
      }

      return MinHeap;
  })();

  return Dijkstras;
})();

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      DepartureTime: "00:00",
      DepartureStation: 0,
      ArrivalStation: 0,
      SearchDepartureTime: "00:00",
      SearchDepartureStation: 0,
      SearchArrivalStation: 0,
      ActiveTab: "최소시간",
      SearchResult: false,
      Share: false,
      SearchList: [],
      DijkstraMinute: 0,
      DijkstraSecond: 0,
      DijkstraStationNum : 0,
      DijkstraArrivalTime : "00:00",
      DijkstraDistance : 0,
      DijkstraMoney : 0,
    };
  }
    
  componentDidMount(){
    this.setState({
      SearchList: JSON.parse(localStorage.getItem("SearchList")) || [],
    })
  }

  setActiveTab = (Tab) => {
    this.setState({
      ActiveTab: Tab,
      SearchResult: false,
      Share: false,
    });
  };

  setDepartureTime =(e) => {
    this.setState({
      DepartureTime: e.target.value,
    });
  };

  setDepartureStation = (e) => {
    this.setState({
      DepartureStation: Number(e.target.value),
    });
  };

  setArrivalStation = (e) => {
    this.setState({
      ArrivalStation: Number(e.target.value),
    });
  };

  setActiveSearchResult = (e) => {
    
    this.setState({
      SearchDepartureTime: this.state.DepartureTime,
      SearchDepartureStation: this.state.DepartureStation,
      SearchArrivalStation: this.state.ArrivalStation,
    },
    () => {
      this.saveSearchList();
      this.useDijkstra();
    })
    if (this.state.SearchResult === false) {
      this.setState({
        SearchResult: true,
      });
    }
  };
  

  setActiveShare = () => {
    if (this.state.Share === false) {
      this.setState({
        Share: true,
        SearchResult: false,
      });
    }
  };

  saveSearchList = () => {
    const value = this.state.SearchDepartureTime + " " + this.state.SearchDepartureStation + "→" + this.state.SearchArrivalStation
    this.setState(
      state => ({ SearchList: [...state.SearchList, value]}),
      () => localStorage.setItem("SearchList", JSON.stringify(this.state.SearchList))
    );
  }

  deleteSearchList = index => {
    if (window.confirm("목록에서 지우시겠습니까?")) {
      this.setState(
        state => ({
          SearchList: [
            ...state.SearchList.slice(0, index),
            ...state.SearchList.slice(index + 1)
          ]
        }),
        () =>
          localStorage.setItem("SearchList", JSON.stringify(this.state.SearchList))
      );
    }
  }

  updateSearchInput = index => {
    this.setState({
      DepartureTime: this.state.SearchList[index].slice(0, 5),
      DepartureStation: this.state.SearchList[index].slice(6, 9),
      ArrivalStation: this.state.SearchList[index].slice(10, 13),
    })
  }

  useDijkstra = () => {
    var d = new Dijkstras();
    var dDistance = new Dijkstras();
    var dMoney = new Dijkstras();
    var map = [
      ['101', [['102', 200], ['123', 480], ['201', 1000]]],
      ['102', [['101', 200], ['103', 300]]],
      ['103', [['102', 300], ['104', 1000]]],
      ['104', [['103', 1000], ['105', 500], ['401',1000]]],
      ['105', [['104', 500], ['106', 150]]],
      ['106', [['105', 150], ['107', 320]]],
      ['107', [['106', 320], ['108', 400], ['308',400]]],
      ['108', [['107', 400], ['109', 800]]],
      ['109', [['108', 800], ['110', 900], ['507',1000]]],
      ['110', [['109', 900], ['111', 500]]],
      ['111', [['110', 500], ['112', 1000]]],
      ['112', [['111', 1000], ['113', 2000], ['901',600]]],
      ['113', [['112', 2000], ['114', 500], ['801',600]]],
      ['114', [['113', 500], ['115', 220]]],
      ['115', [['114', 220], ['116', 230], ['407',320], ['408',480]]],
      ['116', [['115', 230], ['117', 300], ['606',320], ['607',250]]],
      ['117', [['116', 300], ['118', 500]]],
      ['118', [['117', 500], ['119', 480]]],
      ['119', [['118', 480], ['120', 500], ['902',430], [903,1000]]],
      ['120', [['119', 500], ['121', 400]]],
      ['121', [['120', 400], ['122', 900], ['602',700], ['603',500]]],
      ['122', [['121', 900], ['123', 300], ['504',320], ['505',480]]],
      ['123', [['101', 480], ['122', 300], ['304',250], ['305',300]]],

      ['201', [['101', 1000], ['202', 250]]],
      ['202', [['201', 250], ['203', 480], ['303',1000]]],
      ['203', [['202', 480], ['204', 400]]],
      ['204', [['203', 400], ['205', 250]]],
      ['205', [['204', 250], ['206', 500]]],
      ['206', [['205', 500], ['207', 320]]],
      ['207', [['206', 320], ['208', 250], ['301',300]]],
      ['208', [['207', 250], ['209', 300]]],
      ['209', [['208', 300], ['210', 150], ['501',320]]],
      ['210', [['209', 150], ['211', 900]]],
      ['211', [['210', 900], ['212', 320], ['621',300]]],
      ['212', [['211', 320], ['213', 150]]],
      ['213', [['212', 150], ['214', 500]]],
      ['214', [['213', 500], ['215', 210], ['618',700]]],
      ['215', [['214', 210], ['216', 150]]],
      ['216', [['215', 150], ['217', 500], ['417',900]]],
      ['217', [['216', 500]]],

      ['301', [['207', 300], ['302', 300]]],
      ['302', [['301', 300], ['303', 480]]],
      ['303', [['202', 1000], ['302', 480], ['304', 400], ['503', 700]]],
      ['304', [['303', 400], ['123', 250]]],
      ['305', [['123', 300], ['306', 250]]],
      ['306', [['305', 250], ['307', 900]]],
      ['307', [['306', 900], ['308', 480], ['401',150], ['402', 300]]],
      ['308', [['107', 400], ['307', 480]]],
      
      ['401', [['104', 1000], ['307', 150]]],
      ['402', [['307', 300], ['403', 210]]],
      ['403', [['402', 210], ['404', 320], ['506', 320], ['507', 300]]],
      ['404', [['403', 320], ['405', 210]]],
      ['405', [['404', 210], ['406', 500]]],
      ['406', [['405', 500], ['407', 300], ['605', 210], ['901', 300]]],
      ['407', [['406', 300], ['115', 320]]],
      ['408', [['115', 480], ['409', 300]]],
      ['409', [['408', 300], ['410', 480], ['608', 500], ['803', 600]]],
      ['410', [['409', 480], ['411', 300]]],
      ['411', [['410', 300], ['412', 900]]],
      ['412', [['411', 900], ['413', 400], ['609', 320], ['610', 1000]]],
      ['413', [['412', 400], ['414', 430]]],
      ['414', [['413', 430], ['415', 150]]],
      ['415', [['414', 150], ['416', 1000]]],
      ['416', [['415', 1000], ['417', 500], ['706', 300], ['707', 430]]],
      ['417', [['216', 900], ['416', 500], ['616', 480], ['617', 320]]],

      ['501', [['209', 320], ['502', 320]]],
      ['502', [['501', 320], ['503', 460]]],
      ['503', [['303', 700], ['502', 430], ['601', 500], ['504', 210]]],
      ['504', [['503', 210], ['122', 320]]],
      ['505', [['122', 480], ['506', 300]]],
      ['506', [['403', 320], ['505', 300]]],
      ['507', [['403', 300], ['109', 1000]]],

      ['601', [['503', 500], ['602', 150], ['701', 430], ['622', 150]]],
      ['602', [['601', 150], ['121', 700]]],
      ['603', [['604', 300], ['121', 500]]],
      ['604', [['603', 300], ['605', 430]]],
      ['605', [['604', 430], ['606', 480], ['406', 210], ['902', 480]]],
      ['606', [['605', 480], ['116', 320]]],
      ['607', [['608', 500], ['116', 250]]],
      ['608', [['409', 500], ['607', 500], ['609', 700], ['804', 700]]],
      ['609', [['608', 700], ['412', 320]]],
      ['610', [['412', 1000], ['611', 700]]],
      ['611', [['610', 700], ['612', 700]]],
      ['612', [['611', 700], ['613', 150]]],
      ['613', [['612', 150], ['614', 430]]],
      ['614', [['613', 430], ['615', 500], ['707', 480]]],
      ['615', [['614', 500], ['616', 700]]],
      ['616', [['615', 700], ['417', 480]]],
      ['617', [['417', 320], ['618', 300]]],
      ['618', [['617', 300], ['619', 250], ['214', 700], ['705', 250]]],
      ['619', [['618', 250], ['620', 700]]],
      ['620', [['619', 700], ['621', 320]]],
      ['621', [['620', 320], ['622', 480], ['211', 300], ['904', 250]]],
      ['622', [['621', 480], ['601', 150]]],

      ['701', [['601', 430], ['702', 150]]],
      ['702', [['701', 150], ['703', 600], ['904', 500], ['903', 150]]],
      ['703', [['702', 600], ['704', 700]]],
      ['704', [['703', 700], ['705', 250]]],
      ['705', [['704', 250], ['706', 600], ['618', 250], ['806', 600]]],
      ['706', [['705', 600], ['416', 300]]],
      ['707', [['416', 430], ['614', 480]]],

      ['801', [['802', 1000], ['113', 600]]],
      ['802', [['801', 1000], ['803', 700]]],
      ['803', [['802', 700], ['409', 600]]],
      ['804', [['608', 700], ['805', 150]]],
      ['805', [['804', 150], ['806', 210]]],
      ['806', [['805', 210], ['705', 600]]],

      ['901', [['406', 300], ['112', 600]]],
      ['902', [['119', 430], ['605', 480]]],
      ['903', [['702', 150], ['119', 1000]]],
      ['904', [['621', 250], ['702', 500]]]
    ];
    var mapDistance = [
      ['101', [['102', 500], ['123',400], ['201', 500]]],
      ['102', [['101',500], ['103',400]]],
      ['103', [['102',400], ['104', 600]]],
      ['104', [['103', 600], ['105', 200], ['401', 600]]],
      ['105', [['104',200], ['106', 600]]],
      ['106', [['105',600], ['107', 200]]],
      ['107', [['106', 200], ['108', 700], ['308', 400]]],
      ['108', [['107', 700], ['109', 350]]],
      ['109', [['108', 350], ['110', 250], ['507', 700]]],
      ['110', [['109', 250], ['111', 650]]],
      ['111', [['110', 650], ['112', 400]]],
      ['112', [['111', 400], ['113', 500], ['901', 300]]],
      ['113', [['112', 500], ['114', 500], ['801', 300]]],
      ['114', [['113', 500], ['115', 400]]],
      ['115', [['114', 400], ['116', 600], ['407', 400], ['408', 500]]],
      ['116', [['115', 600], ['117', 200], ['606', 400], ['607', 200]]],
      ['117', [['116', 200], ['118', 600]]],
      ['118', [['117', 600], ['119', 200]]],
      ['119', [['118', 200], ['120', 700], ['902', 200], ['903', 700]]],
      ['120', [['119', 700], ['121', 350]]],
      ['121', [['120', 350], ['122', 350], ['602', 250], ['603', 650]]],
      ['122', [['121', 250], ['123', 650], ['504', 400], ['505', 600]]],
      ['123', [['101', 400], ['122', 650], ['304', 250], ['305', 650]]],

      ['201', [['101', 500], ['202', 500]]],
      ['202', [['201', 500], ['203', 400], ['303', 200]]],
      ['203', [['202', 400], ['204', 600]]],
      ['204', [['203', 600], ['205', 200]]],
      ['205', [['204', 200], ['206', 600]]],
      ['206', [['205', 600], ['207', 200]]],
      ['207', [['206', 200], ['208', 700], ['301', 600]]],
      ['208', [['207', 700], ['209', 350]]],
      ['209', [['208', 350], ['210', 250], ['501', 650]]],
      ['210', [['209', 250], ['211', 650]]],
      ['211', [['210', 650], ['212', 400], ['621', 400]]],
      ['212', [['211', 400], ['213', 500]]],
      ['213', [['212', 500], ['214', 500]]],
      ['214', [['213', 500], ['215', 400], ['618',200]]],
      ['215', [['214', 400], ['216', 600]]],
      ['216', [['215', 600], ['217', 200], ['417',250]]],
      ['217', [['216', 200]]],

      ['301', [['207', 600], ['302', 200]]],
      ['302', [['301', 200], ['303', 700]]],
      ['303', [['202', 200], ['302', 700], ['304',350], ['503', 300]]],
      ['304', [['303', 350], ['123', 250]]],
      ['305', [['123', 650], ['306', 400]]],
      ['306', [['305', 400], ['307', 500]]],
      ['307', [['306', 500], ['308', 500], ['401', 200], ['402', 600]]],
      ['308', [['107', 400], ['307', 500]]],
      
      ['401', [['104', 600], ['307', 200]]],
      ['402', [['307', 600], ['403', 200]]],
      ['403', [['402', 200], ['404', 700], ['506', 600], ['507', 200]]],
      ['404', [['403', 700], ['405', 350]]],
      ['405', [['404', 350], ['406', 250]]],
      ['406', [['405', 250], ['407', 650], ['605', 200], ['901', 400]]],
      ['407', [['406', 650], ['115', 400]]],
      ['408', [['115', 500], ['409', 340]]],
      ['409', [['408', 340], ['410', 500], ['608', 200], ['803', 600]]],
      ['410', [['409', 500], ['411', 400]]],
      ['411', [['410', 400], ['412', 600]]],
      ['412', [['411', 600], ['413', 200], ['609', 700], ['610', 350]]],
      ['413', [['412', 200], ['414', 600]]],
      ['414', [['413', 600], ['415', 200]]],
      ['415', [['414', 200], ['416', 700]]],
      ['416', [['415', 700], ['417', 350], ['706', 650], ['707', 400]]],
      ['417', [['216', 250], ['416', 350], ['616', 200], ['617', 600]]],

      ['501', [['209', 650], ['502', 400]]],
      ['502', [['501', 400], ['503', 500]]],
      ['503', [['303', 300], ['502', 500], ['601', 400], ['504', 500]]],
      ['504', [['503', 500], ['122', 400]]],
      ['505', [['122', 600], ['506', 200]]],
      ['506', [['403', 600], ['505', 200]]],
      ['507', [['403', 200], ['109', 700]]],

      ['601', [['503', 400], ['602', 350], ['701', 200], ['622', 400]]],
      ['602', [['601', 350], ['121', 250]]],
      ['603', [['604', 400], ['121', 650]]],
      ['604', [['603', 400], ['605', 200]]],
      ['605', [['604', 200], ['606', 300], ['406', 200], ['902', 600]]],
      ['606', [['605', 300], ['116', 400]]],
      ['607', [['608', 600], ['116', 200]]],
      ['608', [['409', 200], ['607', 600], ['609', 200], ['804', 700]]],
      ['609', [['608', 200], ['412', 700]]],
      ['610', [['412', 350], ['611', 250]]],
      ['611', [['610', 250], ['612', 650]]],
      ['612', [['611', 650], ['613', 400]]],
      ['613', [['612', 400], ['614', 200]]],
      ['614', [['613', 200], ['615', 300], ['707', 200]]],
      ['615', [['614', 300], ['616', 400]]],
      ['616', [['615', 400], ['417', 200]]],
      ['617', [['417', 600], ['618', 200]]],
      ['618', [['617', 200], ['619', 700], ['214', 200], ['705', 400]]],
      ['619', [['618', 700], ['620', 350]]],
      ['620', [['619', 350], ['621', 250]]],
      ['621', [['620', 250], ['622', 650], ['211', 400], ['904', 650]]],
      ['622', [['621', 650], ['601', 400]]],

      ['701', [['601', 200], ['702', 600]]],
      ['702', [['701', 600], ['703', 200], ['904', 250], ['903', 350]]],
      ['703', [['702', 200], ['704', 700]]],
      ['704', [['703', 700], ['705', 350]]],
      ['705', [['704', 350], ['706', 250], ['618', 400], ['806', 650]]],
      ['706', [['705', 250], ['416', 650]]],
      ['707', [['416', 400], ['614', 200]]],

      ['801', [['802', 400], ['113', 300]]],
      ['802', [['801', 400], ['803', 200]]],
      ['803', [['802', 200], ['409', 600]]],
      ['804', [['608', 700], ['805', 350]]],
      ['805', [['804', 350], ['806', 250]]],
      ['806', [['805', 250], ['705', 650]]],

      ['901', [['406', 400], ['112', 300]]],
      ['902', [['119', 200], ['605', 600]]],
      ['903', [['702', 350], ['119',  700]]],
      ['904', [['621', 650], ['702', 250]]]
    ];
    var mapMoney = [
      ['101', [['102', 200], ['123', 200], ['201', 300]]],
      ['102', [['101', 200], ['103', 300]]],
      ['103', [['102', 300], ['104', 500]]],
      ['104', [['103', 500], ['105', 340], ['401', 650]]],
      ['105', [['104', 340], ['106', 450]]],
      ['106', [['105', 450], ['107', 120]]],
      ['107', [['106', 120], ['108', 650], ['308', 120]]],
      ['108', [['107', 650], ['109', 200]]],
      ['109', [['108', 200], ['110', 430], ['507', 540]]],
      ['110', [['109', 430], ['111', 120]]],
      ['111', [['110', 120], ['112', 890]]],
      ['112', [['111', 890], ['113', 800], ['901', 700]]],
      ['113', [['112', 800], ['114', 700], ['801', 430]]],
      ['114', [['113', 700], ['115', 540]]],
      ['115', [['114', 540], ['116', 330], ['407', 330], ['408', 280]]],
      ['116', [['115', 330], ['117', 280], ['606', 650], ['607', 440]]],
      ['117', [['116', 280], ['118', 800]]],
      ['118', [['117', 800], ['119', 1000]]],
      ['119', [['118', 1000], ['120', 2000], ['902', 800], ['903', 1000]]],
      ['120', [['119', 2000], ['121', 700]]],
      ['121', [['120', 700], ['122', 650], ['602', 280], ['603', 800]]],
      ['122', [['121', 650], ['123', 440], ['504', 430], ['505', 120]]],
      ['123', [['101', 200], ['122', 440], ['304', 200], ['305', 300]]],

      ['201', [['101', 300], ['202', 500]]],
      ['202', [['201', 500], ['203', 340], ['303', 2000]]],
      ['203', [['202', 340], ['204', 450]]],
      ['204', [['203', 450], ['205', 120]]],
      ['205', [['204', 120], ['206', 650]]],
      ['206', [['205', 650], ['207', 200]]],
      ['207', [['206', 200], ['208', 430], ['301', 2000]]],
      ['208', [['207', 430], ['209', 120]]],
      ['209', [['208', 120], ['210', 890], ['501', 450]]],
      ['210', [['209', 890], ['211', 800]]],
      ['211', [['210', 800], ['212', 700], ['621', 440]]],
      ['212', [['211', 700], ['213', 540]]],
      ['213', [['212', 540], ['214', 330]]],
      ['214', [['213', 330], ['215', 280], ['618', 2000]]],
      ['215', [['214', 280], ['216', 800]]],
      ['216', [['215', 800], ['217', 1000], ['417', 340]]],
      ['217', [['216', 1000]]],

      ['301', [['207', 2000], ['302', 700]]],
      ['302', [['301', 700], ['303', 650]]],
      ['303', [['202', 2000], ['302', 650], ['304', 440], ['503', 700]]],
      ['304', [['303', 440], ['123', 200]]],
      ['305', [['123', 300], ['306', 500]]],
      ['306', [['305', 500], ['307', 340]]],
      ['307', [['306', 340], ['308', 450], ['401', 200], ['402', 430]]],
      ['308', [['107', 120], ['307', 450]]],
      
      ['401', [['104', 650], ['307', 200]]],
      ['402', [['307', 430], ['403', 120]]],
      ['403', [['402', 120], ['404', 890], ['506', 800], ['507', 700]]],
      ['404', [['403', 890], ['405', 800]]],
      ['405', [['404', 800], ['406', 700]]],
      ['406', [['405', 700], ['407', 540], ['605', 440], ['901', 650]]],
      ['407', [['406', 540], ['115', 330]]],
      ['408', [['115', 280], ['409', 800]]],
      ['409', [['408', 800], ['410', 1000], ['608', 700], ['803', 800]]],
      ['410', [['409', 1000], ['411', 2000]]],
      ['411', [['410', 2000], ['412', 700]]],
      ['412', [['411', 700], ['413', 650], ['609', 500], ['610', 340]]],
      ['413', [['412', 650], ['414', 440]]],
      ['414', [['413', 440], ['415', 200]]],
      ['415', [['414', 200], ['416', 300]]],
      ['416', [['415', 300], ['417', 500], ['706', 120], ['707', 650]]],
      ['417', [['216', 340], ['416', 500], ['616', 890], ['617', 800]]],

      ['501', [['209', 450], ['502', 120]]],
      ['502', [['501', 120], ['503', 650]]],
      ['503', [['303', 700], ['502', 650], ['601', 650], ['504', 200]]],
      ['504', [['503', 200], ['122', 430]]],
      ['505', [['122', 120], ['506', 890]]],
      ['506', [['403', 800], ['505', 890]]],
      ['507', [['403', 700], ['109', 540]]],

      ['601', [['503', 650], ['602', 330], ['701', 440], ['622', 1000]]],
      ['602', [['601', 330], ['121', 280]]],
      ['603', [['604', 1000], ['121', 800]]],
      ['604', [['603', 1000], ['605', 2000]]],
      ['605', [['604', 2000], ['606', 700], ['406', 440], ['902', 280]]],
      ['606', [['605', 700], ['116', 650]]],
      ['607', [['608', 200], ['116', 440]]],
      ['608', [['409', 700], ['607', 200], ['609', 300], ['804', 540]]],
      ['609', [['608', 300], ['412', 500]]],
      ['610', [['412', 340], ['611', 450]]],
      ['611', [['610', 450], ['612', 120]]],
      ['612', [['611', 120], ['613', 650]]],
      ['613', [['612', 650], ['614', 200]]],
      ['614', [['613', 200], ['615', 430], ['707', 200]]],
      ['615', [['614', 430], ['616', 120]]],
      ['616', [['615', 120], ['417', 890]]],
      ['617', [['417', 800], ['618', 700]]],
      ['618', [['617', 700], ['619', 540], ['214', 2000], ['705', 1000]]],
      ['619', [['618', 540], ['620', 330]]],
      ['620', [['619', 330], ['621', 280]]],
      ['621', [['620', 280], ['622', 800], ['211', 440], ['904', 650]]],
      ['622', [['621', 800], ['601', 1000]]],

      ['701', [['601', 440], ['702', 200]]],
      ['702', [['701', 200], ['703', 300], ['904', 700], ['903', 2000]]],
      ['703', [['702', 300], ['704', 500]]],
      ['704', [['703', 500], ['705', 340]]],
      ['705', [['704', 340], ['706', 450], ['618', 1000], ['806', 800]]],
      ['706', [['705', 450], ['416', 120]]],
      ['707', [['416', 605], ['614', 200]]],

      ['801', [['802', 120], ['113', 430]]],
      ['802', [['801', 120], ['803', 890]]],
      ['803', [['802', 890], ['409', 800]]],
      ['804', [['608', 540], ['805', 330]]],
      ['805', [['804', 330], ['806', 280]]],
      ['806', [['805', 280], ['705', 800]]],

      ['901', [['406', 650], ['112', 700]]],
      ['902', [['119', 800], ['605', 280]]],
      ['903', [['702', 2000], ['119', 1000]]],
      ['904', [['621', 650], ['702', 700]]]
    ];
    d.setGraph(map);
    var path = d.getPath(String(this.state.SearchDepartureStation), String(this.state.SearchArrivalStation));
    dDistance.setGraph(mapDistance);
    var pathDistance = dDistance.getPath(String(this.state.SearchDepartureStation), String(this.state.SearchArrivalStation));
    dMoney.setGraph(mapMoney);
    var pathMoney = dMoney.getPath(String(this.state.SearchDepartureStation), String(this.state.SearchArrivalStation));

    var preStation = String(this.state.SearchDepartureStation);
    var preStationIndex = 0;
    var afterStation;
    var cost = 0;
    var DistanceCost = 0;
    var MoneyCost = 0;

    console.log(path);
    
    if( this.state.ActiveTab == '최소시간'){
      for(var route in path){
        afterStation = path[route];

        for(var i in map){
          if(map[i][0] == preStation){
            preStationIndex = i;
            break;
          }
        }

        for(var v in map[preStationIndex][1]){ //이차원배열까지 하면 B,20 C,20 을 저장하고 있겠지 array 두개를 가지고 있다고 하겠지.
          //console.log(mapp[preStationIndex][1][v][0]); // B, C 로 나옴
          if(map[preStationIndex][1][v][0] == afterStation){
            cost += map[preStationIndex][1][v][1];
            DistanceCost += mapDistance[preStationIndex][1][v][1];
            MoneyCost += mapMoney[preStationIndex][1][v][1];
            preStation = afterStation;
            break;
          }
        }
      }
      console.log(cost);
      console.log(DistanceCost);
      console.log(MoneyCost);
    } 
    else if(this.state.ActiveTab == '최단거리'){
      for(var routeDistance in pathDistance){
        afterStation = pathDistance[routeDistance];

        for(var j in mapDistance){
          if(mapDistance[j][0] == preStation){
            preStationIndex = j;
            break;
          }
        }

        for(var k in mapDistance[preStationIndex][1]){ //이차원배열까지 하면 B,20 C,20 을 저장하고 있겠지 array 두개를 가지고 있다고 하겠지.
          //console.log(mapp[preStationIndex][1][v][0]); // B, C 로 나옴
          if(mapDistance[preStationIndex][1][k][0] == afterStation){
            cost += map[preStationIndex][1][k][1];
            DistanceCost += mapDistance[preStationIndex][1][k][1];
            MoneyCost += mapMoney[preStationIndex][1][k][1];
            preStation = afterStation;
            break;
          }
        }
      }
      console.log(cost);
      console.log(DistanceCost);
      console.log(MoneyCost);
    } 
    else if(this.state.ActiveTab == '최소비용'){
      for(var routeMoney in pathMoney){
        afterStation = pathMoney[routeMoney];

        for(var t in mapMoney){
          if(mapMoney[t][0] == preStation){
            preStationIndex = t;
            break;
          }
        }

        for(var p in mapMoney[preStationIndex][1]){ //이차원배열까지 하면 B,20 C,20 을 저장하고 있겠지 array 두개를 가지고 있다고 하겠지.
          //console.log(mapp[preStationIndex][1][v][0]); // B, C 로 나옴
          if(mapMoney[preStationIndex][1][p][0] == afterStation){
            cost += map[preStationIndex][1][p][1];
            DistanceCost += mapDistance[preStationIndex][1][p][1];
            MoneyCost += mapMoney[preStationIndex][1][p][1];
            preStation = afterStation;
            break;
          }
        }
      }
      console.log(cost);
      console.log(DistanceCost);
      console.log(MoneyCost);
    }

    //여기서 DijkstrArrivalTime 에 들어갈 시간을 계산해야 한다.
    //SearchDepartureTime 이 "12:00" 형태. 앞의 두글자와 뒤의 두 글자를 떼서 int형으로 변환하다
    //DijkstraMinute만큼을 뒤의 두 글자에 더한다 . 60을 넘어가면 DijkstraMinute에서 60을 빼고 앞의 두글자를 1 올려준다
    //실제 DijkstraMinute를 사용하면 결과값이 변하므로 임시변수로 사용한다.
    var timeSplit = this.state.SearchDepartureTime.split(':');
    timeSplit[0] *= 1;
    timeSplit[1] *= 1;
    for(var q = 0; q < parseInt(cost/3600); q++){
      timeSplit[0] += 1;
    }
    timeSplit[1] += parseInt(cost/60) % 60; 

    timeSplit[0] += "";
    timeSplit[1] += "";

    this.setState({
      DijkstraStationNum: path.length,
      DijkstraMinute: String(parseInt(cost/60)),
      DijkstraSecond: String(cost % 60),
      DijkstraArrivalTime: timeSplit[0] + ":" + timeSplit[1],
      DijkstraDistance : DistanceCost,
      DijkstraMoney: MoneyCost,
    })
  }

  render() {
    return (
      <SearchPresenter
        ActiveTab={this.state.ActiveTab}
        DepartureTime={this.state.DepartureTime}
        DepartureStation={this.state.DepartureStation}
        ArrivalStation={this.state.ArrivalStation}
        SearchDepartureTime={this.state.SearchDepartureTime}
        SearchDepartureStation={this.state.SearchDepartureStation}
        SearchArrivalStation={this.state.SearchArrivalStation}
        SearchResult={this.state.SearchResult}
        Share={this.state.Share}
        SearchList={this.state.SearchList}
        DijkstraMinute={this.state.DijkstraMinute}
        DijkstraSecond={this.state.DijkstraSecond}
        DijkstraStationNum={this.state.DijkstraStationNum}
        DijkstraArrivalTime={this.state.DijkstraArrivalTime}
        DijkstraDistance={this.state.DijkstraDistance}
        DijkstraMoney={this.state.DijkstraMoney}
        setActiveTab={this.setActiveTab}
        setDepartureTime={this.setDepartureTime}
        setDepartureStation={this.setDepartureStation}
        setArrivalStation={this.setArrivalStation}
        setActiveSearchResult={this.setActiveSearchResult}
        setActiveShare={this.setActiveShare}
        saveSearchList={this.saveSearchList}
        deleteSearchList={this.deleteSearchList}
        updateSearchInput={this.updateSearchInput}
        useDijkstra={this.useDijkstra}
      />
    );
  }
}
