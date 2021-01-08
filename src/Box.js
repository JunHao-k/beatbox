import React from 'react'

//React.Component means that the component class is from react 
export default class Boxclass extends React.Component{
    /* 
        I only use this constructor if I need to do extra work in the constructor beside the two lines there 
    */
    constructor(props){
        super(props)
        //this.props = props;      
        this.state = {
            bgColor: "",
            boxShadow: '',
        }
    }

    triggerColour = () => {
        this.setState({
            bgColor: this.props.bgColour,
            boxShadow: `0px 0px 17px 0px ${this.props.bgColour}`,
        })
        setTimeout(() => {
            this.setState({
                bgColor: '#3333336c',
                boxShadow: '',
            })
        } , 250);
    }



    render(){
        return(
            <div>
                <div class = 'container' 
                style = {{backgroundColor: this.state.bgColor,  
                    borderColor: this.props.boColour, 
                    boxShadow: this.state.boxShadow,
                }}
                onClick = {()=>{
                        if(this.props.boxOrmusic === true){
                            this.props.playMusic()
                            this.props.recordAudio()
                        }
                        else{
                            this.props.switchMusicplay();
                            this.props.switchPict(this.props.bgPict);
                        }
                        this.triggerColour()
                    }}
                >
                    {this.state.count}
                    {this.props.letterDisplayed}

                </div>
            </div>
        )
    }
}