import React, {Component} from 'react'
import { Map, GoogleApiWrapper} from 'google-maps-react';
import InfoWindow from './InfoWindow'
//import Map from './Map'
import Marker from './Marker'

class Container extends React.Component {
   getInitialState = () => {
    return {
      showingInfoWindow: true,
      activeMarker: null,
      selectedPlace: {}
    }
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  // onMapClick = (props) => {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     })
  //   }
  // };

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const pos = ({lat: 34.0482009, lng: -118.25895279999997})
    return (
      <div style={style}>
      <Map 
        google={this.props.google}
        style={style}
        initialCenter={{
            lat: 34.1814886,
            lng: -118.8955505
          }}
        onClick={this.onMapClick}>

      <Marker
        onClick={this.onMarkerClick}
        name={'Sushi Restaurant'}
        position={pos} />

      <Marker position={pos} />
      <InfoWindow>
      </InfoWindow>
      </Map>
    </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCutSZwfHTMo57rrmIEbZKdYm41W83rT98',
  libraries: ['places']
})(Container)