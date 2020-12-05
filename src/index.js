import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import ChannelService from './Components/ChannelService';

ReactDOM.render(<App />, document.getElementById('root'));

// Boot Channel IO plugin
ChannelService.boot({
  pluginKey: process.env.REACT_APP_CHANNELIO_PLUGIN_KEY, // Channel IO plugin key
});
