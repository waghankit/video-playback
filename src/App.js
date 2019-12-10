import React from 'react';
import './App.css';
import SessionTimer from './SessionTimer'
import SetTimer from './SetTimer'




class App extends React.Component{

   state={
       videoSet:[101,102,103,201,202,203],
       repeatAnimation: false,
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
       stationChange: [30,0],
       stationChangeDuration:0,
       json:{
           setNumber:['Set 1', 'Set 2','station-change', 'Set 3', 'Set 4'],// overall total number of sets
           TotalDuration: [75,40,40,40,40,40],//each station total duration
           setsDuration: [ 
               [10,20,'station-change', 30,10], //rest 3 + active 7
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

// componentDidMount =()=>{
//     function funcitonOne(time) {
//         alert(time)
//     }
//     function funcitonTwo(time) {
//         alert(time)
//     }
//     var funArr = [funcitonOne, funcitonTwo];
//     for (var i = 0; i < funArr.length; i++) {
//         var interval = 500 * (i + 1);
        
//         (function (i,interval) {
//             setInterval(function(){
//                 funArr[i].call(this, interval);
//             }, interval);
//         }(i,interval));
//     }
// }

componentWillMount=()=>{
    var stationChangeCounter = 0

       this.state.sessionTimer = this.state.json.TotalDuration[0]
       this.state.setTimer = this.state.json.setsDuration[0][0]
    this.setState({
        sessionTimer: this.state.sessionTimer,
        setTimer: this.state.setTimer
    })
    this.state.stationChangeDuration= this.state.stationChange[stationChangeCounter] ;
    this.setState({
        stationChangeDuration: this.state.stationChangeDuration
    })
    console.log('set timer', this.state.setTimer)
    console.log('station-change-duration', this.state.stationChangeDuration)
    for(var k=0; k<=100; k++){
        this.state.timerValues.push(k)
    }

    console.log('session timer', this.state.sessionTimer)
    
var cnt = 0;
this.run=()=> {
 setTimeout(()=> {
    cnt++; 
    this.setState({
        repeatAnimation: true
    })
 
    if (cnt < this.state.json.setsDuration[0].length){
         console.log('cnt', cnt);
          this.run();
         }
    if(this.state.json.setsDuration[0][cnt]==='station-change'){
        stationChangeCounter++

     this.state.stationChangeDuration= this.state.stationChange[stationChangeCounter] ;
     this.setState({
         stationChangeDuration: this.state.stationChangeDuration
     })
     console.log('station-change-duration', this.state.stationChangeDuration)
    }
  }, this.state.json.setsDuration[0][cnt]!=='station-change' ?
     this.state.json.setsDuration[0][cnt] * 1000 : 5000
  )

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
      repeatAnimation: false

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
                        
                   
                            <div className='workout-zone'>
                                    <svg id="zone-animated" viewbox="0 0 200 200" perserveAspectRatio="xMinYMid">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#00bc9b" />
                                            <stop offset="100%" stop-color="#5eaefd" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="120" cy="110" r="110" fill="black"/>
                                        <path fill="none" stroke-linecap="round" stroke-width="12" stroke="url(#gradient)"
                                                stroke-dasharray="690.8,0"
                                                d="M120 10
                                                a 100 100 0 0 1 0 200
                                                a 100 100 0 0 1 0 -200">
                                        <animate attributeName="stroke-dasharray" from="0,690.8" to="690.8,0" dur={this.state.sessionTimer} />             
                                        </path>
                                        
                                        <text x="50%" y="50%" text-anchor="middle" stroke='white' fill='white' font-size='35px'>Warm Up</text>
                                </svg>
                            </div>


                            <div className='workout-timer'>
                                    <svg id="workout-timer-animated" viewbox="0 0 200 200" perserveAspectRatio="xMinYMid">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#00bc9b" />
                                            <stop offset="100%" stop-color="#5eaefd" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="120" cy="110" r="110" fill="black"/>
                                        <path fill="none" stroke-linecap="round" stroke-width="12" stroke="url(#gradient)"
                                                stroke-dasharray="502.4,0"
                                                d="M120 10
                                                a 100 100 0 0 1 0 200
                                                a 100 100 0 0 1 0 -200">
                                            <animate attributeName="stroke-dasharray" from="0,690.8" to="690.8,0" dur={this.state.sessionTimer} />           
                                        </path>
                                        <text x="50%" y="50%" text-anchor="middle" stroke='white' fill='white' font-size='35px'>Session</text>

                                </svg>
                                <div className='total-duration-timer'><SessionTimer time={this.state.sessionTimer} /></div>
                              </div>

                            <div className='station-change-timer'>
                                    <svg id="station-change-animated" viewbox="0 0 200 200" perserveAspectRatio="xMinYMid">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stop-color="#00bc9b" />
                                            <stop offset="100%" stop-color="#5eaefd" />
                                            </linearGradient>
                                        </defs>
                                        <circle cx="120" cy="110" r="110" fill="black"/>
                                        <path fill="none" stroke-linecap="round" stroke-width="12" stroke="url(#gradient)"
                                                stroke-dasharray="690.8,0"
                                                d="M120 10
                                                a 100 100 0 0 1 0 200
                                                a 100 100 0 0 1 0 -200">
                                            <animate attributeName="stroke-dasharray" from="0,690.8" to="690.8,0" dur={this.state.stationChangeDuration} />           
                                        </path>
                                        <text x="50%" y="35%" text-anchor="middle" stroke='white' fill='white' font-size='35px'>Station</text>
                                        <text x="50%" y="48%" text-anchor="middle" stroke='white' fill='white' font-size='35px'>change</text>
                                        <text x="50%" y="62%" text-anchor="middle" stroke='white' fill='white' font-size='35px'>in</text>

                       
                                </svg>
                                <div className='station-timer'><SessionTimer time={this.state.stationChangeDuration} /></div>
                              </div> 
            
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