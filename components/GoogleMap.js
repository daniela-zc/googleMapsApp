import React from "react";
var load = require('load-script');

require("../style/gmaps.css");
const URL = "https://maps.googleapis.com/maps/api/js?key=AIzaSyATH-QvkGjzyp42mHksB8qzo_AQw87Er1k&callback=initMap";

export default React.createClass({
  getInitialState: function() {
    return {scriptLoaded: false, map: {}};
  },


  // Load google map script 
  loadResource: function(){
    load(URL, function (err, script) {
      if (err) {
        console.log(err);
      } else {
        this.setState({scriptLoaded: true});
      }
    }.bind(this)) 
  },
  componentDidMount: function() {
    this.loadResource();
  },
  render: function() {
    var output = (<p> Loading ... </p>);
    if(this.state.scriptLoaded){
       var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(9.7489, 83.7534), 
          zoom: 10
        });
       console.log(map);
      output = (<p> map !!! </p>);
    }
    console.log(this.state.scriptLoaded);
    return (
      <div id="map" className="wrap">
      {output}
      </div>
      );
  }
});
