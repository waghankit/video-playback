import React from 'react';
import './App.css';
import SessionTimer from './SessionTimer'
import SetTimer from './SetTimer'


import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import ChangingProgressProvider from "./ChangingProgressProvider";

class App extends React.Component{

   state={
       videoSet:[101,102,103,201,202,203],
       sessionTimer: 0,
       setTimer:0,
       finalSetTimer: '',
       setCounter:0,
       startTimer:0,
       stopTimer:100,
       CurrentSet:'',
       videoSet2:[111,204,205,210,211,301],
       workoutNames:[
        "Bicep Curl DB",
        "Hammer Curl",
        "Concentration Curl",
        "Triceps Ext. DB ",
        "Triceps Ext.One Hand ",
        "Kickbacks",
       ],
       workoutNames2:[
        "Chin Ups",
        "Pushdown Rope",
	    "Skull Crusher",
	    "Close Grip Bench Press",
 	    "Push Down Cable",
	    "Arnold Press",
       ],
       json:{
           setNumber:['Set 1', 'Set 2','station-change', 'Set 3', 'Set 4'],// overall total number of sets
           TotalDuration: [75,40,40,40,40,40],//each station total duration
           setsDuration: [ 
               [10,20,'station-change' ,10,30], //rest 3 + active 7
               [10,10,'station-change', 10,10],
               [10,10,'station-change', 10,10],
               [10,10,'station-change', 10,10],
               [10,10,'station-change', 10,10],
               [10,10,'station-change', 10,10]
           ],
           hrZones: [
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
               ['Zone 1', 'Zone 1', 'station-change', 'Zone 1', 'Zone 1'],
           ],
           restDuration: [
               [3,3,'station-change', 3,3],
               [3,3,'station-change', 3,3],
               [3,3,'station-change', 3,3],
               [3,3,'station-change', 3,3],
               [3,3,'station-change', 3,3],
               [3,3,'station-change', 3,3]
           ],
           repDuration: [
               [7,7,'station-change', 7,7],
               [7,7,'station-change', 7,7],
               [7,7,'station-change', 7,7],
               [7,7,'station-change', 7,7],
               [7,7,'station-change', 7,7],
               [7,7,'station-change', 7,7],
           ],
           workout: [
               [//station 1
                {
                    workoutID: '101',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/101.m4v',
                    workoutName:'Bicep Curl DB'
                },
                {
                    workoutID: '102',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/102.m4v',
                    workoutName:'Hammer Curl'
                },
                'station-change',
                {
                    workoutID: '201',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/201.m4v',
                    workoutName:'Triceps Ext. DB'
                },
                {
                    workoutID: '202',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/202.m4v',
                    workoutName:'Triceps Ext.One Hand'
                },
               ],
                      [//station 2
                        {
                            workoutID: '103',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/103.m4v',
                            workoutName:'Concentration Curl'
                        },
                        {
                            workoutID: '108',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/108.m4v',
                            workoutName:'Reverse Curl'
                        },
                        'station-change',
                        {
                            workoutID: '110',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/110.m4v',
                            workoutName:'Alternate Curl'
                        },
                        {
                            workoutID: '111',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/111.m4v',
                            workoutName:'Chin Ups'
                        },
                       ],
                   [//station 3
                    {
                        workoutID: '203',
                        workoutURL: 'https://actofit-video.s3.amazonaws.com/203.m4v',
                        workoutName:'Kickbacks'
                    },
                    {
                        workoutID: '204',
                        workoutURL: 'https://actofit-video.s3.amazonaws.com/204.m4v',
                        workoutName:'Pushdown Rope'
                    },
                    'station-change',
                    {
                        workoutID: '205',
                        workoutURL: 'https://actofit-video.s3.amazonaws.com/205.m4v',
                        workoutName:'Skull Crusher'
                    },
                    {
                        workoutID: '210',
                        workoutURL: 'https://actofit-video.s3.amazonaws.com/210.m4v',
                        workoutName:'Close Grip Bench Press'
                    },
                   ],
                          [//station 4
                {
                    workoutID: '211',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/211.m4v',
                    workoutName:'Push Down Cable'
                },
                {
                    workoutID: '301',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/301.m4v',
                    workoutName:'Arnold Press'
                },
                'station-change',
                {
                    workoutID: '302',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/302.m4v',
                    workoutName:'Overhead Press'
                },
                {
                    workoutID: '303',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/303.m4v',
                    workoutName:'Front Raise'
                },
               ],
                      [//station 5
                        {
                            workoutID: '304',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/304.m4v',
                            workoutName:'Lateral Raises'
                        },
                        {
                            workoutID: '305',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/305.m4v',
                            workoutName:'Upright Row'
                        },
                        'station-change',
                        {
                            workoutID: '310',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/310.m4v',
                            workoutName:'Rear Delt Fly'
                        },
                        {
                            workoutID: '401',
                            workoutURL: 'https://actofit-video.s3.amazonaws.com/401.m4v',
                            workoutName:'Lat PullDown'
                        },
                       ],
                              [//station 6
                {
                    workoutID: '410',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/410.m4v',
                    workoutName:'Seated Row'
                },
                {
                    workoutID: '411',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/411.m4v',
                    workoutName:'One Arm Row'
                },
                'station-change',
                {
                    workoutID: '412',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/412.m4v',
                    workoutName:'Back Extension'
                },
                {
                    workoutID: '414',
                    workoutURL: 'https://actofit-video.s3.amazonaws.com/414.m4v',
                    workoutName:'Pullover'
                },
               ],
           ]
       },
       timerValues:[]
   }



   componentWillMount=()=>{
       this.state.sessionTimer = this.state.json.TotalDuration[0]
    this.setState({
        sessionTimer: this.state.sessionTimer
    })
    for(var k=0; k<=100; k++){
        this.state.timerValues.push(k)
    }

 
    console.log('session timer', this.state.sessionTimer)
    // for (var i = 0; i <this.state.json.workout[0].length; i++) {
        // if(this.state.json.workout[0][i]==='station-change'){
        //     continue;
        // }
        // (()=> {

        //     var index =i;

        //     setTimeout(()=>{
               
            //    this.state.videoSet[0] = this.state.json.workout[0][index].workoutID;
            //    this.state.videoSet[1] = this.state.json.workout[1][index].workoutID;
            //    this.state.videoSet[2] = this.state.json.workout[2][index].workoutID;
            //    this.state.videoSet[3] = this.state.json.workout[3][index].workoutID;
            //    this.state.videoSet[4] = this.state.json.workout[4][index].workoutID;
            //    this.state.videoSet[5] = this.state.json.workout[5][index].workoutID;


            //    this.state.workoutNames[0] = this.state.json.workout[0][index].workoutName;
            //    this.state.workoutNames[1] = this.state.json.workout[1][index].workoutName;
            //    this.state.workoutNames[2] = this.state.json.workout[2][index].workoutName;
            //    this.state.workoutNames[3] = this.state.json.workout[3][index].workoutName;
            //    this.state.workoutNames[4] = this.state.json.workout[4][index].workoutName;
            //    this.state.workoutNames[5] = this.state.json.workout[5][index].workoutName;

            //    this.state.setTimer = this.state.json.setsDuration[0][index];
            //    this.state.CurrentSet = this.state.json.setNumber[index];
            //    this.setState({
            //        videoSet: [...this.state.videoSet],
            //        workoutNames: [...this.state.workoutNames],
            //        setTimer: this.state.setTimer,
            //        CurrentSet: this.state.CurrentSet,
            //        startTimer:0,
            //        stopTimer:100
            //    })
        //        console.log('set timer', this.state.setTimer);
        //        console.log('sets duration', this.state.json.setsDuration[0][index])
        
        //          }, index * this.state.json.setsDuration[0][index] * 1000, index);
        // })();
        // setTimeout((index) => {    
            
        //     this.state.videoSet[0] = this.state.json.workout[0][index].workoutID;
            // this.state.videoSet[1] = this.state.json.workout[1][index].workoutID;
            // this.state.videoSet[2] = this.state.json.workout[2][index].workoutID;
            // this.state.videoSet[3] = this.state.json.workout[3][index].workoutID;
            // this.state.videoSet[4] = this.state.json.workout[4][index].workoutID;
            // this.state.videoSet[5] = this.state.json.workout[5][index].workoutID;


        //     this.state.workoutNames[0] = this.state.json.workout[0][index].workoutName;
            // this.state.workoutNames[1] = this.state.json.workout[1][index].workoutName;
            // this.state.workoutNames[2] = this.state.json.workout[2][index].workoutName;
            // this.state.workoutNames[3] = this.state.json.workout[3][index].workoutName;
            // this.state.workoutNames[4] = this.state.json.workout[4][index].workoutName;
            // this.state.workoutNames[5] = this.state.json.workout[5][index].workoutName;

            // this.state.setTimer = this.state.json.setsDuration[0][index];
            // this.state.CurrentSet = this.state.json.setNumber[index];
        //     this.setState({
        //         videoSet: [...this.state.videoSet],
        //         workoutNames: [...this.state.workoutNames],
        //         setTimer: this.state.setTimer,
        //         CurrentSet: this.state.CurrentSet,
        //         startTimer:0,
        //         stopTimer:100
        //     })
        //   }, i * 10000, i); // we're passing x
        //   console.log(i * 10000)
        // }
   

//    }
var cnt = 0;

this.run=()=> {
 setTimeout(()=> {

    cnt++;
    console.log('cnt', cnt)
    if (cnt < this.state.json.setsDuration[0].length) this.run();
  }, this.state.json.setsDuration[0][cnt]!=='station-change' ? this.state.json.setsDuration[0][cnt] * 1000 : 5000)

  console.log('sets duration',this.state.json.setsDuration[0][cnt] * 1000 )
  this.state.videoSet[0] = this.state.json.workout[0][cnt] !=='station-change' ? this.state.json.workout[0][cnt].workoutID : '';
  this.state.videoSet[1] = this.state.json.workout[1][cnt] !=='station-change' ? this.state.json.workout[1][cnt].workoutID : '';
  this.state.videoSet[2] = this.state.json.workout[2][cnt] !=='station-change' ? this.state.json.workout[2][cnt].workoutID : '';
  this.state.videoSet[3] = this.state.json.workout[3][cnt] !=='station-change' ? this.state.json.workout[3][cnt].workoutID : '';
  this.state.videoSet[4] = this.state.json.workout[4][cnt] !=='station-change' ? this.state.json.workout[4][cnt].workoutID : '';
  this.state.videoSet[5] = this.state.json.workout[5][cnt] !=='station-change' ? this.state.json.workout[5][cnt].workoutID : '';

  this.state.workoutNames[0] = this.state.json.workout[0][cnt] !=='station-change' ? this.state.json.workout[0][cnt].workoutName : '';
  this.state.workoutNames[1] = this.state.json.workout[1][cnt] !=='station-change' ? this.state.json.workout[1][cnt].workoutName : '';
  this.state.workoutNames[2] = this.state.json.workout[2][cnt] !=='station-change' ? this.state.json.workout[2][cnt].workoutName : '';
  this.state.workoutNames[3] = this.state.json.workout[3][cnt] !=='station-change' ? this.state.json.workout[3][cnt].workoutName : '';
  this.state.workoutNames[4] = this.state.json.workout[4][cnt] !=='station-change' ? this.state.json.workout[4][cnt].workoutName : '';
  this.state.workoutNames[5] = this.state.json.workout[5][cnt] !=='station-change' ? this.state.json.workout[5][cnt].workoutName : '';

  
  this.state.setTimer =this.state.json.setsDuration[0][cnt]!=='station-change' ?  this.state.json.setsDuration[0][cnt]: 5;
  this.state.CurrentSet = this.state.json.setNumber[cnt]!=='station-change' ? this.state.json.setNumber[cnt] : 'Change';

  this.setState({
      videoSet: [...this.state.videoSet],
      workoutNames: [...this.state.workoutNames],
      setTimer: this.state.setTimer,
      CurrentSet: this.state.CurrentSet,

  })
  console.log('set timer', this.state.setTimer)

}

this.run()

}


    render(){
        // const percentage = 66;

        return(
            <div className='hiit-body'>
            <div className='video-item'>
       
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[0]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/' + this.state.videoSet[0] + '.m4v'} className='hiit-video'/>
                       </div>
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[1]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/' + this.state.videoSet[1]  +'.m4v'} className='hiit-video'/>
                       </div>
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[2]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/'+ this.state.videoSet[2] +'.m4v'} className='hiit-video'/>
                       </div>
                
                       <div className='video-grid-blank' style={{ padding: "40px 40px 40px 40px" }}>
                           <div className='progress-bar'>
                        
                        <div>
                        <ChangingProgressProvider
                                values={this.state.timerValues} 
                                easingFunction={easeQuadInOut}

                                // valueStart={0}
                                // valueEnd={100}
                         >
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
                        </div>
     
    
                           <div className='workout-zone'>
                                    <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={100}
                                            duration={this.state.sessionTimer}
                                            easingFunction={easeQuadInOut}
                                            
                                            className='animated-progressbar'
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            // console.log(value)
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                duration={this.state.sessionTimer}

                                                text={'Warm up'}
                                                    /* This is important to include, because if you're fully managing the
                                                animation yourself, you'll want to disable the CSS animation. */
                                                styles={buildStyles({
                                                     pathTransition: "none",
                                                     pathColor: 'white',
                                                     textColor: 'white',
                                                     backgroundColor: 'black',
                                                     trailColor: 'black',
                                                     textSize:'20px'
                                                    })}
                                                
                                                />
                                            );
                                            }}
                                    </AnimatedProgressProvider>
                                </div>
                               <div className='workout-timer'>
                                    <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={100}
                                            duration={this.state.sessionTimer}
                                            easingFunction={easeQuadInOut}
                                            
                                            className='animated-progressbar'
                                        >
                                            {value => {
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={'Session'}
                                                /* This is important to include, because if you're fully managing the
                                            animation yourself, you'll want to disable the CSS animation. */
                                                styles={buildStyles({
                                                     pathTransition: "none",
                                                     pathColor: 'white',
                                                     textColor: 'white',
                                                     trailColor: 'black'
                                                    })}
                                                >
                                                </CircularProgressbar>
                                            );
                                            }}
                                    </AnimatedProgressProvider>
                                   <div className='total-duration-timer'><SessionTimer time={this.state.sessionTimer} /></div>                                                                            
                                </div>
                                <div className='workout-set'>
                                    <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={100}
                                            duration={this.state.setTimer}
                                            easingFunction={easeQuadInOut}
                                            className='animated-progressbar'
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                value={value}
                                                text={this.state.CurrentSet}
                                                
                                                styles={buildStyles({
                                                     pathTransition: "none",
                                                     pathColor: 'white',
                                                     textColor: 'white',
                                                     trailColor: 'black'
                                                    })}
                                                />
                                            );
                                            }}
                                    </AnimatedProgressProvider>
                                </div>
                                <div className='workout-set-timer'>
                                    <AnimatedProgressProvider
                                            valueStart={0}
                                            valueEnd={100}
                                            duration={this.state.setTimer}
                                            easingFunction={easeQuadInOut}
                                            
                                            className='animated-progressbar'
                                        >
                                            {value => {
                                            const roundedValue = Math.round(value);
                                            return (
                                                <CircularProgressbar
                                                    value={value}
                                                    text={`Set timer`}
                                                                            
                                                    styles={buildStyles({
                                                        pathTransition: "none",
                                                        pathColor: 'white',
                                                        textColor: 'white',
                                                        trailColor: 'black'
                                                        })}
                                                />
                                            );
                                            }}
                                    </AnimatedProgressProvider>
                                        <div className='set-timer'> <SetTimer time={this.state.setTimer} /></div>
                                </div>
                                
                                {/* <button className='btn btn-primary' onClick={this.test}>Test</button> */}
                           </div>
                       </div>
                    
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[3]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/'+ this.state.videoSet[3] +'.m4v'} className='hiit-video'/>
                       </div>
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[4]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/'+ this.state.videoSet[4] +'.m4v'} className='hiit-video'/>
                       </div>
                       <div className='video-grid'>
                           <h4 className='hiit-exercise-name'>{this.state.workoutNames[5]}</h4>

                           <video autoPlay loop src={'https://actofit-video.s3.amazonaws.com/'+ this.state.videoSet[5] +'.m4v'} className='hiit-video'/>
                       </div>

           </div>
        </div>
        )
    }
}

export default App;