import React from "react";
import { Component } from "react";


class Location extends Component {

    state = {
        longitude: 0,
        latitude: 0,
        hata: ""
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            },
            (err) => {
                this.setState({
                    hata: err.message
                })
            }
        );
        return (
            <div>Merhaba
                <p>Longitude:{this.state.longitude}</p>
                <p>Latitude:{this.state.latitude}</p>
                <br /><br />
                <p>Error: {this.state.hata} </p>

            </div>
        )
    }

}


export default Location;