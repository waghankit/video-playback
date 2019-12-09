import React from 'react'
import './App.css'

class Clock extends React.Component {
    format(timer) {
      let seconds = timer % 60;
      let minutes = Math.floor(timer / 60);
      minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
      seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;
      return minutes + ':' + seconds;
    }
    render () {
      const {timer} = this.props;
      return (
        <div className="displayedTime">
          <h1 className='session-timer-text-h1'>{this.format(timer)}</h1>
        </div>
      )
    }
  }

  
  class SessionTimer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
        running: false,
      }
    }
    
    componentWillMount=()=> {
       const {  time  } = this.props;
       console.log('time from timer', time)
         this.setState({
            count: time,
            running: true
            })
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            this.setState(
                {count: newCount >= 0 ? newCount : 0}
            );
            }, 1000);
      }
    
    render() {
      const {count} = this.state;
      return (
        <div className="container">
          <Clock timer={count}/>

        </div>
      )
    }
  }
  
  export default SessionTimer;