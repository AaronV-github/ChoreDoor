let doorImage1=document.getElementById('door1');
let doorImage2=document.getElementById('door2');
let doorImage3=document.getElementById('door3');

const botDoorPath="https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath="https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath="https://content.codecademy.com/projects/chore-door/images/space.svg";

let numClosedDoors=3

let openDoor1,openDoor2,openDoor3;

let closedDoorPath="https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let startButton=document.getElementById('start');

let currentPlaying=true;

function isBot(door){
  if (door.src===botDoorPath)
    return true;
  else
    return false;
}

function isClicked(door){
  if (door.src===closedDoorPath)
    return false;
  else
    return true;

}

function playDoor(door){
  numClosedDoors--;
    if (numClosedDoors===0)
      gameOver('win');
    else if(isBot(door)===true)
     gameOver();
}

function randomChoreDoorGenerator(){
  let choreDoor=Math.floor(Math.random()*numClosedDoors)

  if (choreDoor===0){
    openDoor1=botDoorPath
    openDoor2=beachDoorPath
    openDoor3=spaceDoorPath
  }

  else if (choreDoor===1){
    openDoor2=botDoorPath
    openDoor1=beachDoorPath
    openDoor3=spaceDoorPath
  }

  else if (choreDoor===2){
    openDoor3=botDoorPath
    openDoor1=spaceDoorPath
    openDoor2=beachDoorPath
  }
}


doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentPlaying){
    doorImage1.src=openDoor1;
     playDoor(doorImage1);
  }
  
}

doorImage2.onclick=()=>{
  if (!isClicked(doorImage2) && currentPlaying){
  doorImage2.src=openDoor2;
  playDoor(doorImage2);
  }
}

doorImage3.onclick=()=>{
  if (!isClicked(doorImage3) && currentPlaying){
  doorImage3.src=openDoor3;
  playDoor(doorImage3);
  }
}

startButton.onclick=()=>{
 if (!currentPlaying)
  startRound();
}

function startRound(){
  numClosedDoors=3;
  doorImage1.src=closedDoorPath;
  doorImage2.src=closedDoorPath;
  doorImage3.src=closedDoorPath;
  startButton.innerHTML='Good Luck!';
  currentPlaying=true;

  randomChoreDoorGenerator();
}

function gameOver(status){
  if (status==='win')
    startButton.innerHTML='You win! Play again?';
  else
    startButton.innerHTML='Game Over! Play again?';

  currentPlaying=false;
}


startRound();