//==============================================================================
// External dependencies
//==============================================================================
import React from 'react/addons';
import Reflux from 'reflux';
import logger from 'bragi-browser';
import { RouteHandler, Link, Navigation } from 'react-router';
import Immutable from 'immutable';
//==============================================================================
// Internal dependencies
//==============================================================================
import ActionCreators from '../actions/ActionCreator.js';
import RoomsStore from '../stores/RoomsStore.js';
import MembersList from './MembersList.jsx';
import ChatWindow from './ChatWindow.jsx';
//==============================================================================
// Module definition
//==============================================================================
let RoomDetail = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },
  mixins: [Navigation, Reflux.connectFilter(RoomsStore, "room", function(rooms) {
    logger.log("RoomDetail:connectFilter", "callled...props", this.props.params.roomSlug);
    var roomId = Object.keys(rooms.toObject()).filter(function(roomId) {
      return String(rooms.get(roomId).get("id")) === String(this.props.params.roomSlug);
    }.bind(this))[0];
    return rooms.get(roomId);
  })],
  render() {
    logger.log("RoomDetail:render", "state. roomId:", this.state);
    var self = this;
    var view;
      if(this.state.room){
          logger.log("RoomDetail:render", "Found a room");
          view = <div>
                <ChatWindow><div>Openend room: {this.state.room.get("id")}</div></ChatWindow>         
                <MembersList roomId={this.state.room.get("id")}/>
          </div>;
            
      }else{
        logger.log("RoomDetail:render", "Not found the room");
        view="room not found"
        this.transitionTo('/list/popular');

      }
    return  (<div className="active-rooms">      
        {view}      
      </div>);
    }
});


export default RoomDetail;
