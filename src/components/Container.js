import React, {Component} from 'react'
import  {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const Listing = ({ places }) => (
    <ul>{places && places.map(p => <li key={p.id}>{p.name}</li>)}</ul>
);

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        places: [],
        isOpen: false, 
        position: null
      };
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMouseOverMarker = this.onMouseOverMarker.bind(this);
  } 

  onMapReady = (mapProps, map) => this.searchNearby(map, map.center);
  searchNearby = (map, center) => {
    const { google } = this.props;

    const service = new google.maps.places.PlacesService(map);

    const request = {
      location: center,
      radius: '100',
      type: ['food']
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results });
    });
  };

  handleToggleOpen = () => {
    this.setState({
      isOpen: true, 
      position: null   
    });
  }

  handleToggleClose = () => {
    this.setState({
      isOpen: false
    });
  }

  onMouseOverMarker = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };


  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    const pos = {lat:34.0482009 , lng: -118.25895279999997}
    return (
      <div style={style}>
      <Map 
        google={this.props.google}
        onReady={this.onMapReady}
        clickableIcons={false}
        style={{width: '100%', height: '100%', position: 'relative'}}
        zoom={18}
        initialCenter={{
            lat: 34.0482009,
            lng: -118.25895279999997
          }}>
          
      <Marker
        title={'Here you are at Hautelook!'}
        onMouseover={this.onMouseoverMarker}
        clickableIcons={false}
        onClick={this.onMarkerClick}
        name={'Current Location'}
        position={pos}
        />

        {this.state.position && 
           <InfoWindow position={this.state.position}>
               <h1>{this.props.name}</h1>
           </InfoWindow>
         }

      <Marker
        onMouseover={this.onMouseoverMarker}
        onClick={this.onMarkerClick}
        title={'Chipotle'}
        name={'Chipotle'}  
        position={{lat: 34.0491605, lng: -118.2590557}} 
        />
      
      <Marker
        onMouseover={this.onMouseoverMarker}
        onClick={this.onMarkerClick}
        title={'The Counter'}
        name={'The Counter'} 
        position={{lat: 34.0482804, lng: -118.2611479}} 
        />
      
      <Marker
        onMouseover={this.onMouseoverMarker}
        onClick={this.onMarkerClick}
        clickableIcons={false}
        title={'Wokcano'}
        name={'Wokcano'}   
        position={{lat: 34.0486271, lng: -118.2577361}}  
        />
      
      <Marker/>
      <Listing places={this.state.places} />

      
      </Map>    
    </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyCutSZwfHTMo57rrmIEbZKdYm41W83rT98',
  libraries: ['places']
})(MapContainer)