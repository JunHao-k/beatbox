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
      new Box("0" , "J" , "turquoise" , new Beats('assets/Homura.mp3') , 'aqua' , require("./rengoku.png").default),
      new Box("1" , "B" , "turquoise" , new Beats('assets/ONE OK ROCK - Mighty Long Fall.mp3') , 'aqua' , require("./OOR.png").default),
      new Box("2" , "C" , "turquoise" , new Beats("assets/Uru-あなたがいることで因為有你.mp3") , 'aqua' , require("./Uru.jpg").default),
      new Box("2" , "D" , "pink" , new Beats("assets/Arcade Fire - Wake Up.mp3") , 'aqua' , require("./arcadefire.jpg").default),
      new Box("2" , "E" , "pink" , new Beats("assets/The Band Perry - If I Die Young.mp3") , 'aqua' , require("./bandperry.jpg").default),
      new Box("2" , "F" , "pink" , new Beats("assets/Green Day -Boulevard of Broken Dreams.mp3") , 'aqua' , require("./green_day.jpg").default),
      new Box("2" , "G" , "#F6E7D2" , new Beats("assets/盧廣仲-刻在我心底的名字.mp3") , 'aqua' , require("./刻在我心底的名.png").default),
      new Box("2" , "H" , "#F6E7D2" , new Beats("assets/周杰倫 一路向北.mp3") , 'aqua' , require("./jay.jpg").default),
      new Box("2" , "I" , "#F6E7D2" , new Beats("assets/八三夭 831想見你想見你想見你.mp3") , 'aqua' , require("./831.jpg").default),
   ]),

   active: new Bbox([]),

   currentActive: 0, 

   currentlyPlaying: null,

   currentPict: require("./background.jpeg").default,

   
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
        currentPict: require("./background.jpeg").default,
      })
    }

    if(this.state.currentlyPlaying != null){
      this.state.currentlyPlaying.stopMusic()
      let c = this.state.currentlyPlaying;
      c.currentTime = 0;
    }
  }
 
  recordBboxbeat = (beatPlayed) => {
    this.setState({
      currentlyPlaying: beatPlayed,
    })
  }
      
  switchPict = (newPict) => {
    this.setState({
      currentPict: newPict,
    })

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
          
              <BoxCom 
                boxOrmusic = {true}
                key = {b.getKeyCode()}
                bgColour = {b.getColour()} 
                boColour = {b.getBorderColour()} 
                letterDisplayed = {b.getKeyCode()} 
                playMusic = {b.getBeat()}
                recordAudio = {()=>{this.recordBboxbeat(b.getAudio())}}
              />
          
    
        )
      }  
    }
    else{
      for(let b of this.state.musicPlayer.getBoxes()){
        allBoxes.push(
          
              <BoxCom 
                boxOrmusic = {false}
                key = {b.getKeyCode() + 'M'}
                bgColour = {b.getColour()} 
                boColour = {b.getBorderColour()} 
                letterDisplayed = {b.getKeyCode()} 
                playMusic = {b.getBeat()}
                switchMusicplay = {()=>{this.switchMusic(b.getAudio())}}
                bgPict = {b.getPict()}
                switchPict = {this.switchPict}
              />
          
          
        )
      }
  
    }
    return allBoxes;
  }

  render() {
    return (
      <div id = 'App'>

      
      <div id = "bigBox"  style={{
        backgroundImage: `url(${this.state.currentPict})`,
        backgroundSize: 'cover',
        
      }}>

        <button id = 'changeUse' onClick = {this.switchUse}> Click for more surprises </button>

        <div class = 'entireBox' >
          {this.displayBoxes()}
          
        </div>
      </div>
      </div>
    );
  }

}

export default App;

 