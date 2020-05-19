let downButton = null;
let rightButton = null;
let leftButton = null;
let takeOffButton = null;
let landButton= null;
let abortButton= null;
let spaceShuttleHeight= 0;

 window.addEventListener('load', function(){

 
   
  shuttleBackground = document.getElementById('shuttleBackground');
  flightStatus =document.getElementById("flightStatus");
  aChat = document.getElementById("astronautChat");
  upButton = document.getElementById("upbutton");
  downButton = document.getElementById('downbutton');
  rightButton = document.getElementById("rightbutton");
  leftButton = document.getElementById("leftbutton");
  takeOffButton = document.getElementById("takeoff");
  landButton= document.getElementById("landing");
  abortButton= document.getElementById("missionAbort");
  rocket= document.getElementById("rocket");
  spaceShuttleHeight = document.getElementById('spaceShuttleHeight');
  rocket.style.position= 'absolute';
  rocket.style.left = '0px';
  rocket.style.bottom= '0px';
  


  takeOffButton.addEventListener('click', function(event){
    let result = confirm("Confirm that the shuttle is ready for takeoff.");
    if (result=== true) {
      let x =rocket.offsetTop
      x-= 10
     document.getElementById("rocket").style.top =x + 'px'
     spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
     flightStatus.innerHTML = "Shuttle in Flight.";
      shuttleBackground.style.backgroundColor ="blue";
      
    } 
    })

  landButton.addEventListener('click', function(event){
    window.alert('The shuttle is landing. Landing gear engaged.')
    flightStatus.innerHTML = "The Shuttle has landed.";
    shuttleBackground.style.backgroundColor ="green";
    spaceShuttleHeight.innerHTML = 0;
    rocket.style.top = (shuttleBackground.clientHeight - rocket.clientHeight) + 'px'
    rocket.style.left = '0px';
     })
 
  abortButton.addEventListener('click', function(event){
    let results = confirm('Confirm that you want to abort the mission.');
    if (results ===true) {
      flightStatus.innerHTML = 'Mission aborted.';
      shuttleBackground.style.backgroundColor = 'green';
      spaceShuttleHeight.innerHTML = 0;
      rocket.style.left = '0px';
      rocket.style.top = (shuttleBackground.clientHeight - rocket.clientHeight) + 'px'

    }
  })
 
  upButton.addEventListener('click', function(event){
    let x =rocket.offsetTop
    //console.log(x)
    x-= 10
    if (x>0){
    document.getElementById("rocket").style.top =x + 'px'
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) + 10000;
    }
  })

  downButton.addEventListener('click', function(event){

    let x =rocket.offsetTop
    console.log(x)
    x+= 10
    if (x<245) {
    document.getElementById("rocket").style.top =x + 'px'
    if (Number(spaceShuttleHeight.innerHTML) >0){
    spaceShuttleHeight.innerHTML = Number(spaceShuttleHeight.innerHTML) - 10000;
    }
    }
  })

  rightButton.addEventListener('click', function(event){
    let x =rocket.offsetLeft
    console.log(x)
    x+= 10
    if (x<230){
    document.getElementById("rocket").style.left =x + 'px'    
    }
    })

  leftButton.addEventListener('click', function(event){
    let x =rocket.offsetLeft    
    x-= 10
    if (x>0){
    document.getElementById("rocket").style.left =x + 'px';
    }
  })

 })

 
  


