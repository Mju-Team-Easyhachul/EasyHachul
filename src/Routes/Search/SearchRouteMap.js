import React, { Component } from 'react';
import { Graph } from 'react-d3-graph';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

let tempData = {
  nodes: [
    //1호선 노드
    { id: '101', name: '101', x: 90, y: 600, labelPosition: 'left' },
    { id: '102', name: '102', x: 90, y: 670, labelPosition: 'left' },
    { id: '103', name: '103', x: 90, y: 740, labelPosition: 'left' },
    { id: '104', name: '104', x: 90, y: 840, labelPosition: 'left' },
    { id: '105', name: '105', x: 100, y: 890, labelPosition: 'left' },
    { id: '106', name: '106', x: 150, y: 950, labelPosition: 'left' },
    { id: '107', name: '107', x: 240, y: 950, labelPosition: 'bottom' },
    { id: '108', name: '108', x: 330, y: 950, labelPosition: 'bottom' },
    { id: '109', name: '109', x: 420, y: 950, labelPosition: 'bottom' },
    { id: '110', name: '110', x: 510, y: 950, labelPosition: 'bottom' },
    { id: '111', name: '111', x: 600, y: 950, labelPosition: 'bottom' },
    { id: '112', name: '112', x: 690, y: 950, labelPosition: 'bottom' },
    { id: '113', name: '113', x: 750, y: 950, labelPosition: 'bottom' },
    { id: '114', name: '114', x: 800, y: 890 },
    { id: '115', name: '115', x: 810, y: 840 },
    { id: '116', name: '116', x: 810, y: 710 },
    { id: '117', name: '117', x: 810, y: 630 },
    { id: '118', name: '118', x: 750, y: 550 },
    { id: '119', name: '119', x: 690, y: 550, labelPosition: 'top' },
    { id: '120', name: '120', x: 600, y: 550, labelPosition: 'top' },
    { id: '121', name: '121', x: 510, y: 550, labelPosition: 'top' },
    { id: '122', name: '122', x: 420, y: 550, labelPosition: 'top' },
    { id: '123', name: '123', x: 240, y: 550, labelPosition: 'top' },

    // //2호선 노드
    { id: '201', name: '201', x: 90, y: 400, labelPosition: 'left' },
    { id: '202', name: '202', x: 90, y: 330, labelPosition: 'left' },
    { id: '203', name: '203', x: 90, y: 260, labelPosition: 'left' },
    { id: '204', name: '204', x: 90, y: 180, labelPosition: 'left' },
    { id: '205', name: '205', x: 90, y: 100, labelPosition: 'left' },
    { id: '206', name: '206', x: 170, y: 100, labelPosition: 'top' },
    { id: '207', name: '207', x: 240, y: 100, labelPosition: 'top' },
    { id: '208', name: '208', x: 340, y: 100, labelPosition: 'top' },
    { id: '209', name: '209', x: 420, y: 100, labelPosition: 'top' },
    { id: '210', name: '210', x: 510, y: 100, labelPosition: 'top' },
    { id: '211', name: '211', x: 690, y: 100, labelPosition: 'top' },
    { id: '212', name: '212', x: 820, y: 100, labelPosition: 'top' },
    { id: '213', name: '213', x: 920, y: 100, labelPosition: 'top' },
    { id: '214', name: '214', x: 1020, y: 100, labelPosition: 'top' },
    { id: '215', name: '215', x: 1140, y: 100, labelPosition: 'top' },
    { id: '216', name: '216', x: 1260, y: 100, labelPosition: 'top' },
    { id: '217', name: '217', x: 1460, y: 100, labelPosition: 'top' },

    //3호선 노드
    { id: '301', name: '301', x: 240, y: 180 },
    { id: '302', name: '302', x: 240, y: 260 },
    { id: '303', name: '303', x: 240, y: 330 },
    { id: '304', name: '304', x: 240, y: 400 },
    { id: '305', name: '305', x: 240, y: 650 },
    { id: '306', name: '306', x: 240, y: 740 },
    { id: '307', name: '307', x: 240, y: 840 },
    { id: '308', name: '308', x: 240, y: 890 },

    //4호선 노드
    { id: '401', name: '401', x: 150, y: 840, labelPosition: 'top' },
    { id: '402', name: '402', x: 330, y: 840, labelPosition: 'top' },
    { id: '403', name: '403', x: 420, y: 840, labelPosition: 'top' },
    { id: '404', name: '404', x: 510, y: 840, labelPosition: 'top' },
    { id: '405', name: '405', x: 600, y: 840, labelPosition: 'top' },
    { id: '406', name: '406', x: 690, y: 840, labelPosition: 'top' },
    { id: '407', name: '407', x: 750, y: 840, labelPosition: 'top' },
    { id: '408', name: '408', x: 920, y: 840, labelPosition: 'top' },
    { id: '409', name: '409', x: 1020, y: 840, labelPosition: 'top' },
    { id: '410', name: '410', x: 1140, y: 840, labelPosition: 'top' },
    { id: '411', name: '411', x: 1260, y: 840 },
    { id: '412', name: '412', x: 1260, y: 710 },
    { id: '413', name: '413', x: 1260, y: 650 },
    { id: '414', name: '414', x: 1260, y: 560 },
    { id: '415', name: '415', x: 1260, y: 400 },
    { id: '416', name: '416', x: 1260, y: 330 },
    { id: '417', name: '417', x: 1260, y: 180 },

    //5호선 노드
    { id: '501', name: '501', x: 420, y: 180 },
    { id: '502', name: '502', x: 420, y: 260 },
    { id: '503', name: '503', x: 420, y: 330 },
    { id: '504', name: '504', x: 420, y: 400 },
    { id: '505', name: '505', x: 420, y: 650 },
    { id: '506', name: '506', x: 420, y: 740 },
    { id: '507', name: '507', x: 420, y: 890 },

    //6호선 노드
    { id: '601', name: '601', x: 510, y: 330, labelPosition: 'top' },
    { id: '602', name: '602', x: 510, y: 400, labelPosition: 'top' },
    { id: '603', name: '603', x: 510, y: 650, labelPosition: 'top' },
    { id: '604', name: '604', x: 600, y: 710, labelPosition: 'bottom' },
    { id: '605', name: '605', x: 690, y: 710, labelPosition: 'bottom' },
    { id: '606', name: '606', x: 750, y: 710, labelPosition: 'bottom' },
    { id: '607', name: '607', x: 920, y: 710, labelPosition: 'bottom' },
    { id: '608', name: '608', x: 1020, y: 710, labelPosition: 'bottom' },
    { id: '609', name: '609', x: 1140, y: 710, labelPosition: 'bottom' },
    { id: '610', name: '610', x: 1350, y: 710 },
    { id: '611', name: '611', x: 1460, y: 650 },
    { id: '612', name: '612', x: 1460, y: 560 },
    { id: '613', name: '613', x: 1460, y: 400 },
    { id: '614', name: '614', x: 1460, y: 330 },
    { id: '615', name: '615', x: 1460, y: 260 },
    { id: '616', name: '616', x: 1350, y: 180 },
    { id: '617', name: '617', x: 1140, y: 180, labelPosition: 'top' },
    { id: '618', name: '618', x: 1020, y: 180, labelPosition: 'top' },
    { id: '619', name: '619', x: 920, y: 180, labelPosition: 'top' },
    { id: '620', name: '620', x: 750, y: 180, labelPosition: 'top' },
    { id: '621', name: '621', x: 690, y: 180, labelPosition: 'top' },
    { id: '622', name: '622', x: 600, y: 180, labelPosition: 'top' },

    //7호선 노드
    { id: '701', name: '701', x: 600, y: 330, labelPosition: 'top' },
    { id: '702', name: '702', x: 690, y: 330, labelPosition: 'top' },
    { id: '703', name: '703', x: 750, y: 330, labelPosition: 'top' },
    { id: '704', name: '704', x: 920, y: 330, labelPosition: 'top' },
    { id: '705', name: '705', x: 1020, y: 330, labelPosition: 'top' },
    { id: '706', name: '706', x: 1140, y: 330, labelPosition: 'top' },
    { id: '707', name: '707', x: 1350, y: 330, labelPosition: 'top' },

    //8호선 노드
    { id: '801', name: '801', x: 920, y: 950 },
    { id: '802', name: '802', x: 1020, y: 950 },
    { id: '803', name: '803', x: 1020, y: 890 },
    { id: '804', name: '804', x: 1020, y: 650 },
    { id: '805', name: '805', x: 1020, y: 560 },
    { id: '806', name: '806', x: 1020, y: 400 },

    //9호선 노드
    { id: '901', name: '901', x: 690, y: 890 },
    { id: '902', name: '902', x: 690, y: 650 },
    { id: '903', name: '903', x: 690, y: 400 },
    { id: '904', name: '904', x: 690, y: 260 },
  ],
  links: [
    //1호선 라인
    { color: '#091DA1', type: 'STRAIGHT', source: '201', target: '101' },
    { color: '#091DA1', type: 'STRAIGHT', source: '101', target: '201' },
    { color: '#18A51D', type: 'STRAIGHT', source: '101', target: '102' },
    { color: '#18A51D', type: 'STRAIGHT', source: '102', target: '101' },
    { color: '#18A51D', type: 'STRAIGHT', source: '102', target: '103' },
    { color: '#18A51D', type: 'STRAIGHT', source: '103', target: '102' },
    { color: '#18A51D', type: 'STRAIGHT', source: '103', target: '104' },
    { color: '#18A51D', type: 'STRAIGHT', source: '104', target: '103' },
    { color: '#18A51D', type: 'STRAIGHT', source: '104', target: '105' },
    { color: '#18A51D', type: 'STRAIGHT', source: '105', target: '104' },
    { color: '#18A51D', type: 'STRAIGHT', source: '105', target: '106' },
    { color: '#18A51D', type: 'STRAIGHT', source: '106', target: '105' },
    { color: '#18A51D', type: 'STRAIGHT', source: '106', target: '107' },
    { color: '#18A51D', type: 'STRAIGHT', source: '107', target: '106' },
    { color: '#18A51D', type: 'STRAIGHT', source: '107', target: '108' },
    { color: '#18A51D', type: 'STRAIGHT', source: '108', target: '107' },
    { color: '#18A51D', type: 'STRAIGHT', source: '108', target: '109' },
    { color: '#18A51D', type: 'STRAIGHT', source: '109', target: '108' },
    { color: '#18A51D', type: 'STRAIGHT', source: '109', target: '110' },
    { color: '#18A51D', type: 'STRAIGHT', source: '110', target: '109' },
    { color: '#18A51D', type: 'STRAIGHT', source: '110', target: '111' },
    { color: '#18A51D', type: 'STRAIGHT', source: '111', target: '110' },
    { color: '#18A51D', type: 'STRAIGHT', source: '111', target: '112' },
    { color: '#18A51D', type: 'STRAIGHT', source: '112', target: '111' },
    { color: '#18A51D', type: 'STRAIGHT', source: '112', target: '113' },
    { color: '#18A51D', type: 'STRAIGHT', source: '113', target: '112' },
    { color: '#18A51D', type: 'STRAIGHT', source: '113', target: '114' },
    { color: '#18A51D', type: 'STRAIGHT', source: '114', target: '113' },
    { color: '#18A51D', type: 'STRAIGHT', source: '114', target: '115' },
    { color: '#18A51D', type: 'STRAIGHT', source: '115', target: '114' },
    { color: '#18A51D', type: 'STRAIGHT', source: '115', target: '116' },
    { color: '#18A51D', type: 'STRAIGHT', source: '116', target: '115' },
    { color: '#18A51D', type: 'STRAIGHT', source: '116', target: '117' },
    { color: '#18A51D', type: 'STRAIGHT', source: '117', target: '116' },
    { color: '#18A51D', type: 'STRAIGHT', source: '117', target: '118' },
    { color: '#18A51D', type: 'STRAIGHT', source: '118', target: '117' },
    { color: '#18A51D', type: 'STRAIGHT', source: '118', target: '119' },
    { color: '#18A51D', type: 'STRAIGHT', source: '119', target: '118' },
    { color: '#18A51D', type: 'STRAIGHT', source: '119', target: '120' },
    { color: '#18A51D', type: 'STRAIGHT', source: '120', target: '119' },
    { color: '#18A51D', type: 'STRAIGHT', source: '120', target: '121' },
    { color: '#18A51D', type: 'STRAIGHT', source: '121', target: '120' },
    { color: '#18A51D', type: 'STRAIGHT', source: '121', target: '122' },
    { color: '#18A51D', type: 'STRAIGHT', source: '122', target: '121' },
    { color: '#18A51D', type: 'STRAIGHT', source: '122', target: '123' },
    { color: '#18A51D', type: 'STRAIGHT', source: '123', target: '122' },
    { color: '#18A51D', type: 'STRAIGHT', source: '123', target: '101' },

    // 2호선 라인
    { color: '#091DA1', type: 'STRAIGHT', source: '201', target: '202' },
    { color: '#091DA1', type: 'STRAIGHT', source: '202', target: '203' },
    { color: '#091DA1', type: 'STRAIGHT', source: '203', target: '204' },
    { color: '#091DA1', type: 'STRAIGHT', source: '204', target: '205' },
    { color: '#091DA1', type: 'STRAIGHT', source: '205', target: '206' },
    { color: '#091DA1', type: 'STRAIGHT', source: '206', target: '207' },
    { color: '#091DA1', type: 'STRAIGHT', source: '207', target: '208' },
    { color: '#091DA1', type: 'STRAIGHT', source: '208', target: '209' },
    { color: '#091DA1', type: 'STRAIGHT', source: '209', target: '210' },
    { color: '#091DA1', type: 'STRAIGHT', source: '210', target: '211' },
    { color: '#091DA1', type: 'STRAIGHT', source: '211', target: '212' },
    { color: '#091DA1', type: 'STRAIGHT', source: '212', target: '213' },
    { color: '#091DA1', type: 'STRAIGHT', source: '213', target: '214' },
    { color: '#091DA1', type: 'STRAIGHT', source: '214', target: '215' },
    { color: '#091DA1', type: 'STRAIGHT', source: '215', target: '216' },
    { color: '#091DA1', type: 'STRAIGHT', source: '216', target: '217' },

    { color: '#091DA1', type: 'STRAIGHT', source: '202', target: '201' },
    { color: '#091DA1', type: 'STRAIGHT', source: '203', target: '202' },
    { color: '#091DA1', type: 'STRAIGHT', source: '204', target: '203' },
    { color: '#091DA1', type: 'STRAIGHT', source: '205', target: '204' },
    { color: '#091DA1', type: 'STRAIGHT', source: '206', target: '205' },
    { color: '#091DA1', type: 'STRAIGHT', source: '207', target: '206' },
    { color: '#091DA1', type: 'STRAIGHT', source: '208', target: '207' },
    { color: '#091DA1', type: 'STRAIGHT', source: '209', target: '208' },
    { color: '#091DA1', type: 'STRAIGHT', source: '210', target: '209' },
    { color: '#091DA1', type: 'STRAIGHT', source: '211', target: '210' },
    { color: '#091DA1', type: 'STRAIGHT', source: '212', target: '211' },
    { color: '#091DA1', type: 'STRAIGHT', source: '213', target: '212' },
    { color: '#091DA1', type: 'STRAIGHT', source: '214', target: '213' },
    { color: '#091DA1', type: 'STRAIGHT', source: '215', target: '214' },
    { color: '#091DA1', type: 'STRAIGHT', source: '216', target: '215' },
    { color: '#091DA1', type: 'STRAIGHT', source: '217', target: '216' },

    //3호선 라인
    { color: '#8B1C1C', type: 'STRAIGHT', source: '207', target: '301' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '301', target: '302' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '302', target: '303' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '303', target: '304' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '304', target: '123' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '123', target: '305' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '305', target: '306' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '306', target: '307' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '307', target: '308' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '308', target: '107' },

    { color: '#8B1C1C', type: 'STRAIGHT', source: '301', target: '207' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '302', target: '301' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '303', target: '302' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '304', target: '303' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '123', target: '304' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '305', target: '123' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '306', target: '305' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '307', target: '306' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '308', target: '307' },
    { color: '#8B1C1C', type: 'STRAIGHT', source: '107', target: '308' },

    //4호선 라인
    { color: '#FF0707', type: 'STRAIGHT', source: '104', target: '401' },
    { color: '#FF0707', type: 'STRAIGHT', source: '401', target: '307' },
    { color: '#FF0707', type: 'STRAIGHT', source: '307', target: '402' },
    { color: '#FF0707', type: 'STRAIGHT', source: '402', target: '403' },
    { color: '#FF0707', type: 'STRAIGHT', source: '403', target: '404' },
    { color: '#FF0707', type: 'STRAIGHT', source: '404', target: '405' },
    { color: '#FF0707', type: 'STRAIGHT', source: '405', target: '406' },
    { color: '#FF0707', type: 'STRAIGHT', source: '406', target: '407' },
    { color: '#FF0707', type: 'STRAIGHT', source: '407', target: '115' },
    { color: '#FF0707', type: 'STRAIGHT', source: '115', target: '408' },
    { color: '#FF0707', type: 'STRAIGHT', source: '408', target: '409' },
    { color: '#FF0707', type: 'STRAIGHT', source: '409', target: '410' },
    { color: '#FF0707', type: 'STRAIGHT', source: '410', target: '411' },
    { color: '#FF0707', type: 'STRAIGHT', source: '411', target: '412' },
    { color: '#FF0707', type: 'STRAIGHT', source: '412', target: '413' },
    { color: '#FF0707', type: 'STRAIGHT', source: '413', target: '414' },
    { color: '#FF0707', type: 'STRAIGHT', source: '414', target: '415' },
    { color: '#FF0707', type: 'STRAIGHT', source: '415', target: '416' },
    { color: '#FF0707', type: 'STRAIGHT', source: '416', target: '417' },
    { color: '#FF0707', type: 'STRAIGHT', source: '417', target: '216' },

    { color: '#FF0707', type: 'STRAIGHT', source: '401', target: '104' },
    { color: '#FF0707', type: 'STRAIGHT', source: '307', target: '401' },
    { color: '#FF0707', type: 'STRAIGHT', source: '402', target: '307' },
    { color: '#FF0707', type: 'STRAIGHT', source: '403', target: '402' },
    { color: '#FF0707', type: 'STRAIGHT', source: '404', target: '403' },
    { color: '#FF0707', type: 'STRAIGHT', source: '405', target: '404' },
    { color: '#FF0707', type: 'STRAIGHT', source: '406', target: '405' },
    { color: '#FF0707', type: 'STRAIGHT', source: '407', target: '406' },
    { color: '#FF0707', type: 'STRAIGHT', source: '115', target: '407' },
    { color: '#FF0707', type: 'STRAIGHT', source: '408', target: '115' },
    { color: '#FF0707', type: 'STRAIGHT', source: '409', target: '408' },
    { color: '#FF0707', type: 'STRAIGHT', source: '410', target: '409' },
    { color: '#FF0707', type: 'STRAIGHT', source: '411', target: '410' },
    { color: '#FF0707', type: 'STRAIGHT', source: '412', target: '411' },
    { color: '#FF0707', type: 'STRAIGHT', source: '413', target: '412' },
    { color: '#FF0707', type: 'STRAIGHT', source: '414', target: '413' },
    { color: '#FF0707', type: 'STRAIGHT', source: '415', target: '414' },
    { color: '#FF0707', type: 'STRAIGHT', source: '416', target: '415' },
    { color: '#FF0707', type: 'STRAIGHT', source: '417', target: '416' },
    { color: '#FF0707', type: 'STRAIGHT', source: '216', target: '417' },

    //5호선 라인
    { color: '#2A83D1', type: 'STRAIGHT', source: '209', target: '501' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '501', target: '502' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '502', target: '503' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '503', target: '504' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '504', target: '122' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '122', target: '505' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '505', target: '506' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '506', target: '403' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '403', target: '507' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '507', target: '109' },

    { color: '#2A83D1', type: 'STRAIGHT', source: '501', target: '209' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '502', target: '501' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '503', target: '502' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '504', target: '503' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '122', target: '504' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '505', target: '122' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '506', target: '505' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '403', target: '506' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '507', target: '403' },
    { color: '#2A83D1', type: 'STRAIGHT', source: '109', target: '507' },

    //6호선 라인
    { color: '#E9D83E', type: 'STRAIGHT', source: '601', target: '602' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '602', target: '121' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '121', target: '603' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '603', target: '604' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '604', target: '605' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '605', target: '606' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '606', target: '116' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '116', target: '607' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '607', target: '608' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '608', target: '609' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '609', target: '412' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '412', target: '610' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '610', target: '611' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '611', target: '612' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '612', target: '613' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '613', target: '614' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '614', target: '615' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '615', target: '616' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '616', target: '417' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '417', target: '617' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '617', target: '618' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '618', target: '619' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '619', target: '620' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '620', target: '621' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '621', target: '622' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '622', target: '601' },

    { color: '#E9D83E', type: 'STRAIGHT', source: '602', target: '601' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '121', target: '602' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '603', target: '121' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '604', target: '603' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '605', target: '604' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '606', target: '605' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '116', target: '606' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '607', target: '116' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '608', target: '607' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '609', target: '608' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '412', target: '609' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '610', target: '412' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '611', target: '610' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '612', target: '611' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '613', target: '612' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '614', target: '613' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '615', target: '614' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '616', target: '615' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '417', target: '616' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '617', target: '417' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '618', target: '617' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '619', target: '618' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '620', target: '619' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '621', target: '620' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '622', target: '621' },
    { color: '#E9D83E', type: 'STRAIGHT', source: '601', target: '622' },

    //7호선 라인
    { color: '#9DF39A', type: 'STRAIGHT', source: '202', target: '303' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '303', target: '503' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '503', target: '601' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '601', target: '701' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '701', target: '702' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '702', target: '703' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '703', target: '704' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '704', target: '705' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '705', target: '706' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '706', target: '416' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '416', target: '707' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '707', target: '614' },

    { color: '#9DF39A', type: 'STRAIGHT', source: '303', target: '202' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '503', target: '303' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '601', target: '503' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '701', target: '601' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '702', target: '701' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '703', target: '702' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '704', target: '703' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '705', target: '704' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '706', target: '705' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '416', target: '706' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '707', target: '416' },
    { color: '#9DF39A', type: 'STRAIGHT', source: '614', target: '707' },

    //8호선 라인
    { color: '#07CCFF', type: 'STRAIGHT', source: '113', target: '801' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '801', target: '802' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '802', target: '803' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '803', target: '409' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '409', target: '608' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '608', target: '804' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '804', target: '805' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '805', target: '806' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '806', target: '705' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '705', target: '618' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '618', target: '214' },

    { color: '#07CCFF', type: 'STRAIGHT', source: '801', target: '113' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '802', target: '801' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '803', target: '802' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '409', target: '803' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '608', target: '409' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '804', target: '608' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '805', target: '804' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '806', target: '805' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '705', target: '806' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '618', target: '705' },
    { color: '#07CCFF', type: 'STRAIGHT', source: '214', target: '618' },

    //9호선 라인
    { color: '#471098', type: 'STRAIGHT', source: '112', target: '901' },
    { color: '#471098', type: 'STRAIGHT', source: '901', target: '406' },
    { color: '#471098', type: 'STRAIGHT', source: '406', target: '605' },
    { color: '#471098', type: 'STRAIGHT', source: '605', target: '902' },
    { color: '#471098', type: 'STRAIGHT', source: '902', target: '119' },
    { color: '#471098', type: 'STRAIGHT', source: '119', target: '903' },
    { color: '#471098', type: 'STRAIGHT', source: '903', target: '702' },
    { color: '#471098', type: 'STRAIGHT', source: '702', target: '904' },
    { color: '#471098', type: 'STRAIGHT', source: '904', target: '621' },
    { color: '#471098', type: 'STRAIGHT', source: '621', target: '211' },

    { color: '#471098', type: 'STRAIGHT', source: '901', target: '112' },
    { color: '#471098', type: 'STRAIGHT', source: '406', target: '901' },
    { color: '#471098', type: 'STRAIGHT', source: '605', target: '406' },
    { color: '#471098', type: 'STRAIGHT', source: '902', target: '605' },
    { color: '#471098', type: 'STRAIGHT', source: '119', target: '902' },
    { color: '#471098', type: 'STRAIGHT', source: '903', target: '119' },
    { color: '#471098', type: 'STRAIGHT', source: '702', target: '903' },
    { color: '#471098', type: 'STRAIGHT', source: '904', target: '702' },
    { color: '#471098', type: 'STRAIGHT', source: '621', target: '904' },
    { color: '#471098', type: 'STRAIGHT', source: '211', target: '621' },
  ],
  focusedNodeId: 'nodeIdToTriggerZoomAnimation',
};

// Graph에 들어갈 data
let data = {
  nodes: [],
  links: [],
};

// search data 받을 array
//prettier-ignore
let searchLine = ['107', '308', '307', '402', '403', '404','405','406','407','115','408','409','410','411','412','413','414','415','416','417','216'];

// 노선도 node 삽입
for (var i in searchLine) {
  data.nodes.push(tempData.nodes.find(x => x.id === searchLine[i]));
}

// 노선도 link 삽입
for (var j = 0; j < searchLine.length; j++) {
  if (j !== searchLine.length - 1) {
    //prettier-ignore
    data.links.push(tempData.links.find(x => (x.source === searchLine[j] && x.target === searchLine[j + 1])));
  }
}

const myConfig = {
  height: 1200,
  width: 2000,
  nodeHighlightBehavior: true,
  linkHighlightBehavior: true,
  staticGraph: true,
  automaticRearrangeAfterDropNode: false,
  node: {
    fontSize: 20,
    highlightFontSize: 22,
    highlightFontWeight: 'bold',
    highlightStrokeColor: '#091DA1',
    labelProperty: 'name',
    size: 500,
    strokeWidth: 4,
  },
  link: {
    highlightColor: '#091DA1',
    renderLabel: true,
    highlightFontWeight: 'bold',
    semanticStrokeWidth: true,
    height: 50,
    fontSize: 25,
  },
  //   d3: {
  //     gravity: -400,
  //     linkLength: 100,
  //   },
};

class SearchRouteMap extends Component {
  onClickNode = nodeId => {
    window.alert(`${nodeId} 역 정보로 이동합니다!`);
    this.props.history.push('/Detail:' + `${nodeId}`);
  };
  render() {
    return (
      <MapContainer>
        <Graph
          id="graph-id" // id is mandatory, if no id is defined rd3g will throw an error
          data={data}
          config={myConfig}
          onClickNode={this.onClickNode}
        />
      </MapContainer>
    );
  }
}

SearchRouteMap.propTypes = {
  history: PropTypes.any.isRequired,
};

const MapContainer = styled.div`
  width: 79%;
  height: 60%;
  margin-top: 3%;
  margin-left: 10.5%;
`;

export default withRouter(SearchRouteMap);
