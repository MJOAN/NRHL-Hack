import React from "react";
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
// import Marker from './Marker'

export class MapContainer extends React.Component {
  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const pos = {lat: 34.0482009, lng: -118.25895279999997}
    return (
      <div style={style}>
      <Map google={this.props.google}>
        <Marker />
        <Marker position={pos} />
      </Map>
    </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCutSZwfHTMo57rrmIEbZKdYm41W83rT98')
})(MapContainer)