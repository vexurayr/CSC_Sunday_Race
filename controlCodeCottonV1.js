function mtrAFwd() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrAFwd");
}

function mtrAStp() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrAStp");
}

function mtrARev() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrARev");
}

function mtrBFwd() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBFwd");
}

function mtrBStp() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBStp");
}

function mtrBRev() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://api.particle.io/v1/devices/37001f000447363339343638/cartKommand?access_token=08a20094e2e89dd3869aecbe927a0e639e6b25b8", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("value=mtrBRev");
}

function goForwd() {
  mtrAFwd();
  mtrBFwd();
}

function allStop() {
  mtrAStp();
  mtrBStp();
}

function allRev() {
  mtrARev();
  mtrBRev();
}

//Start Here

function driveForwardXSec() {
  mtrAFwd();
  mtrBFwd();
  setTimeout(function () {
    allStop();
  }, 250);
}

function limitedRightTurn() {
  mtrAFwd();
  setTimeout(function () {
    allStop();
  }, 200);
}

function limitedLeftTurn() {
  mtrBFwd();
  setTimeout(function () {
    allStop();
  }, 200);
}

function driveReverseXSec() {
  mtrARev();
  mtrBRev();
  setTimeout(function () {
    allStop();
  }, 250);
}

function leftTurnReverse() {
  mtrBRev();
  setTimeout(function () {
    allStop();
  }, 250);
}

function rightTurnReverse() {
  mtrARev();
  setTimeout(function () {
    allStop();
  }, 250);
}