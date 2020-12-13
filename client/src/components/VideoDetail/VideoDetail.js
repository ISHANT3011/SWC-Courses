import React, { Component } from "react";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class VideoDetail extends Component {
  state = {
      vid: null
    }
    componentDidMount(){
      let vid = this.props.match.params.post_vid;
      this.setState({
        vid:vid
      })
    }
    const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [{
    src: 'https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd',
    type: 'application/dash+xml'
  }]
}

  render() {
    return (

    );
  }
}

export default VideoDetail;
