//==============================================================================
// External dependencies
//==============================================================================
import React from 'react/addons';
import { RouteHandler, Link } from 'react-router';
import logger from 'bragi-browser';

//==============================================================================
// Module definition
//==============================================================================
let AppHandler = React.createClass({
  componentDidMount(){
    logger.log("AppHandler:componentDidMount", "called", this.props);
  },
  render() {
    return (  
        <div>
          <header className="top-header">
            <h1 className="u-inline">Chat app</h1>  
            <Link to="home" className="link">Home</Link>
            <Link to="listViewRooms" params={{type: "poplular"}} className="link">Popular Rooms</Link>
          </header>
          <div className="page">
            <RouteHandler {...this.props}/>
          </div>
        </div>
    );
  },

});

export default AppHandler;
