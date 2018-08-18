import React from "react";
import InfoWindow from './InfoWindow';
import Marker from './Marker';
import {Map, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    if (!this.props.loaded) return <div>Loading...</div>;
    
    return (
      <div style={style}>
      <Map 
        className="map"
        google={this.props.google}
        onClick={this.onMapClicked}
        style={{ height: '100%', position: 'relative', width: '100%' }}
        zoom={14}>     

        <Marker
          onClick={this.onMarkerClick}
          name={'Sushi Restaurant'}
          position={ {lat: 34.0482009, lng: -118.25895279999997}} 
        />

        <Marker
          onClick={this.onMarkerClick}
          name={'Italian Restaurant'}
          position={ {lat: 36.0482009, lng: -124.25895279999997}} 
        />


        <InfoWindow
          marker={this.state.activeMarker}
          onClose={this.onInfoWindowClose}
          visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        <InfoWindow position={{ lat: 37.765703, lng: -122.42564 }} visible>
          <small>
            Click on any of the markers to display an additional info.
          </small>
        </InfoWindow>

        
        </Map>
        </div>
      );
    }
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCutSZwfHTMo57rrmIEbZKdYm41W83rT98')
})(MapContainer)