import React from "react";

import MicRecorder from 'mic-recorder-to-mp3';
import { render } from "@testing-library/react";

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Mic extends React.Component{
  constructor(props){
    super(props);
    this.state={
    isRecording: false,
    blobURL: '',
    isBlocked: false,
    };
  }

  start=()=>{
    if (this.state.isBlocked) {
      console.log('Permission Denied');
      } else {
        Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
          }).catch((e) => console.error(e));
      }
  };

  stop = () => {
    Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      const blobURL = URL.createObjectURL(blob)
      this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
    () => {
      console.log('Permission Granted');
      this.setState({ isBlocked: false });
    },
    () => {
      console.log('Permission Denied');
      this.setState({ isBlocked: true })
      },
    );
  }

  render(){
    return (
      <div className="col-lg-6">
        <button className="mic" onClick={this.start} disabled={this.state.isRecording}>Commencer</button>
        <button className="mic" onClick={this.stop} disabled={!this.state.isRecording}>Arrêter</button>
      </div>
        );
      }
    }

export default Mic;
