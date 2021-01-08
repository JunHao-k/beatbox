import "./App.css";

class Beats{
    constructor(audioSrc){
        this.audio = new Audio(audioSrc)
        
        //console.log(this.audio)
    }   
    playThis = () => {
        this.audio.currentTime = 0;
        this.audio.play()
    }
    stopMusic = () => {
        this.audio.pause();
        this.audio.currentTime = 0;
    }

}


class Box{
    keycode = '';
    activeColour = '';
    borderColour = '';
    individualBeats = null;
    backgroundPict = ''

    constructor(id , keycode , activeColour, individualBeats , borderColour , backgroundPict ){
        this.id = id
        this.keycode = keycode
        this.activeColour = activeColour
        this.individualBeats = individualBeats
        this.borderColour = borderColour
        this.backgroundPict = backgroundPict
        
    }

    getColour = () => {
        return this.activeColour;
    }

    getBorderColour = () => {
        return this.borderColour;
    }

    getKeyCode = () => {
        return this.keycode;
    }
    getId = () => {
        return this.id;
    }
    getBeat = () => {
        return this.individualBeats.playThis;
    }
    getAudio = () => {
        return this.individualBeats;
    }
    stopBeat = () => {
        return this.individualBeats.stopMusic;
    }
    getPict = () => {
        return this.backgroundPict;
    }


}


class Bbox{
    boxes = [];
    constructor(allboxes){
        this.boxes = allboxes;
    }
    getBoxes(){
        return this.boxes
    }

}


export{ Box , Beats , Bbox}