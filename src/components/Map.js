import React from "react";
import ReactDOM from 'react-dom'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

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

      const markers = props.lunch.map( lunch => <Marker
        key={lunch.uid}
        lunch={lunch}
        location={{lat: lunch.lat, lng: lunch.lon}}/>
        );
      }

      renderChildren() {
        const {children} = this.props;
        if (!children) return;

          return React.Children.map(children, c => {
          return React.cloneElement(c, {
            map: this.map,
            google: this.props.google,
            mapCenter: this.state.currentLocation
          });
        })
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
      
      render() {
        return (
          <div ref='map'>
            Loading map...
            {this.loadMap()}
            {this.renderChildren()}
          </div>
        )
      }

  }
