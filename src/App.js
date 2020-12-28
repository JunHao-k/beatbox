import React from 'react';
import "./App.css";
import BoxCom from "./Box.js";
import {Box , Beats , Bbox} from './Parts.js'

class App extends React.Component{




  state = {

   
    entireBeatbox: new Bbox([
       new Box("0" , "A" , "turquoise" , new Beats('assets/Piano Chord 208.mp3') , 'aqua' , require("./background.jpeg")),
       new Box("1" , "B" , "turquoise" , new Beats('assets/Piano Chord 209.mp3') , 'aqua' , require("./background.jpeg")),
       new Box("2" , "C" , "turquoise" , new Beats("assets/Piano Chord 331.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "D" , "pink" , new Beats("assets/Drum Sticks Hit 3.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "E" , "pink" , new Beats("assets/Drum Snare Roll.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "F" , "pink" , new Beats("assets/PREL Musical 57.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "G" , "#F6E7D2" , new Beats("assets/Cymbal Suspended 2.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "H" , "#F6E7D2" , new Beats("assets/Musical Compos 33.mp3") , 'aqua' , require("./background.jpeg")),
       new Box("2" , "I" , "#F6E7D2" , new Beats("assets/Musical Orches 4.mp3") , 'aqua' , require("./background.jpeg")),
    ]),

    musicPlayer: new Bbox([
      new Box("0" , "J" , "turquoise" , new Beats('assets/Homura.mp3') , 'aqua' , require("./rengoku.png") ),
      new Box("1" , "B" , "turquoise" , new Beats('assets/Piano Chord 209.mp3') , 'aqua' , require("./background.jpeg")),
      new Box("2" , "C" , "turquoise" , new Beats("assets/Piano Chord 331.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "D" , "pink" , new Beats("assets/Drum Sticks Hit 3.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "E" , "pink" , new Beats("assets/Drum Snare Roll.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "F" , "pink" , new Beats("assets/PREL Musical 57.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "G" , "#F6E7D2" , new Beats("assets/Cymbal Suspended 2.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "H" , "#F6E7D2" , new Beats("assets/Musical Compos 33.mp3") , 'aqua' , require("./background.jpeg")),
      new Box("2" , "I" , "#F6E7D2" , new Beats("assets/Musical Orches 4.mp3") , 'aqua' , require("./background.jpeg")),
   ]),

   active: new Bbox([]),

   currentActive: 0, 

   currentlyPlaying: null,
  };

  

  componentDidMount() {
    document.getElementById("App").focus();
    this.setState({
      active: this.state.entireBeatbox,
      currentActive: 1,
    })

  }

  switchUse = () => {
    if(this.state.currentActive === 1){
      this.setState({
        currentActive: 2,
        active: this.state.musicPlayer,
      })
    }
    else{
      this.setState({
        currentActive: 1,
        active: this.state.entireBeatbox,
      })
    }
  }
 
  switchMusic = (newMusic) => {
    if(this.state.currentlyPlaying === null){
      newMusic.playThis()
      this.setState({
        currentlyPlaying: newMusic
      })
    }
    else{
      this.state.currentlyPlaying.stopMusic()
      let c = this.state.currentlyPlaying;
      c.currentTime = 0;
      
      newMusic.playThis()
      this.setState({
        currentlyPlaying: newMusic

      })
    }

  }

  //So function getColour returns the activeColour and passed this colour into the props bgColour
  //Props is an object containing bgColour, fontColour etc etc , bgColour is like an key in the props object thats 
  //holds a value. bgColour is a key holding the activeColour as value
  displayBoxes() {
    let allBoxes = []
    if((this.state.currentActive === 1) || (this.state.currentActive === 0)){
      for(let b of this.state.entireBeatbox.getBoxes()){
        allBoxes.push(
          <div id = "App">
              <BoxCom 
                boxOrmusic = {true}
                bgColour = {b.getColour()} 
                boColour = {b.getBorderColour()} 
                letterDisplayed = {b.getKeyCode()} 
                playMusic = {b.getBeat()}
              />
          </div>
          
        )
      }  
    }
    else{
      for(let b of this.state.musicPlayer.getBoxes()){
        allBoxes.push(
          <div id = "App">
              <BoxCom 
                boxOrmusic = {false}
                bgColour = {b.getColour()} 
                boColour = {b.getBorderColour()} 
                letterDisplayed = {b.getKeyCode()} 
                playMusic = {b.getBeat()}
                switchMusic = {()=>{this.switchMusic(b.getAudio())}}
                bgPict = {b.getPict()}
              />
          </div>
          
        )
      }
  
    }
    return allBoxes;
  }

  render() {
    return (
      
      <div id = "bigBox">

        <button onClick = {this.switchUse}> Listen to Jun Hao's 2020 Hits </button>

        <div class = 'entireBox' >
          {this.displayBoxes()}
          
        </div>
      </div>
    );
  }

}

export default App;

 