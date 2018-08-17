import React from "react";
import {GoogleMaps, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMaps = (props) => {
  render() {
    return (
      <div google={this.props.google} zoom={14}>

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </div>
    );
  };
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyCutSZwfHTMo57rrmIEbZKdYm41W83rT98')
})(GoogleMaps)