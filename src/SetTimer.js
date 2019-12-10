import React from 'react'
import './App.css'
import { clearTimeout } from 'timers';

class Clock extends React.Component {
    format(settimer) {
      // console.log('timer from clock class of set timer', settimer)
      let seconds = settimer % 60;
      let minutes = Math.floor(settimer / 60);
      minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
      seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
      return minutes + ':' + seconds;
    }
    render () {
      const {settimer} = this.props;
      return (
        <div className="displayedTime">
          <h1 className='set-timer-text-h1'>{this.format(settimer)}</h1>
        </div>
      )
    }
  }
  
  class SetTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        running: false,
      }
    }
    
    componentWillReceiveProps= ({ time })=> {
      // console.log('time prop from set timer', time)
       setTimeout(() => {
        this.setState({
            count: time ? time : localStorage.getItem('station1-setDuration'),
            running: true
            })
       }, 1000);
       
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                {count: newCount >= 0 ? newCount : 0}
            );
          
            }, 1000);

        if(this.state.count===1){
            this.setState({
              count: 0
            })
            clearInterval(this.timer);
        }
         
      }

   
    
    render() {
      const {count} = this.state;
      return (
        <div className="container">
          <Clock settimer={count}/>

        </div>
      )
    }
  }
  
  export default SetTimer;