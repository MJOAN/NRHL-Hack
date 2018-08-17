import React from "react";
import ReactDOM from 'react-dom'

export default class Map extends React.Component {
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
  
  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = initialCenter;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
    Map.propTypes = {
      google: React.PropTypes.object,
      zoom: React.PropTypes.number,
      initialCenter: React.PropTypes.object
    }
    Map.defaultProps = {
      zoom: 13,
      // Attempt set marker at Nordstrom: 700 S Flower St, Los Angeles, CA 90017, USA
      initialCenter: {
        lat: 34.0482009,
        lng: -118.25895279999997
      }
  }
}
}
