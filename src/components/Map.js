import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';
import {GoogleApiWrapper} from 'google-maps-react';

export class Map extends React.Component {
  
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state ={
      currentLocation: ({
        lat: lat,
        lng: lng
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap() 
    }
  }

  componentDidMount() {
    this.loadMap();
  }
  
  loadMap() { 
      if (this.props && this.props.google) {
      // let {initialCenter, zoom} = this.props;
      const {google} = this.props;
      const maps = google.maps;
    
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      //const {lat, lng} = this.state.currentLocation; 

      let zoom = 14;
      let lat = 34.1814886;
      let lng = -118.8955505;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.maps = new maps.Map(node, mapConfig);
    }
  }

  handleEvent(evtName) {
    let timeout;
    const handlerName = evtName;

    return (e) => {
      if (timeout) clearTimeout(timeout), timeout = null;
  
      timeout = setTimeout(() => {
        if (this.props[handlerName]) {
          this.props[handlerName](this.props, this.maps, e);
        }
      }, 0);
    }
  }

  renderChildren() {
      const {children} = this.props;

      if (!children) return;

      return React.Children.map(children, c => {
        return React.cloneElement(c, {
          maps: this.maps,
          google: this.props.google,
          mapCenter: this.state.currentLocation
        });
      })
    }
  // {this.renderChildren()}

  render() {
    return (
      <div ref='maps'>
        Loading map...
        {this.renderChildren()}    
      </div>
    )
  }

}


export default Map;

