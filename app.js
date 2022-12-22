let inputBasePX = document.getElementById("inputBase");
let inputPX = document.getElementById("inputPX");
let inputEM = document.getElementById("inputREM");




// Function to Convert Pixels to EM
let pxToEm = () => {
  let baseValue = inputBasePX.value;
  let pxValue = inputPX.value;

  // Checking if input field is not empty
  // If not empty then calculator the EM value
  if(pxValue.length != 0) {
    inputEM.value = pxValue / baseValue;
  } else{ // If empty clear EM field
    inputEM.value = "";
  }
}



// Function to Convert em to px
let emToPx = () => {
  let baseValue = inputBasePX.value;
  let emValue = inputEM.value;

  // Checking if input field is not empty
  // If not empty then calculator the PX value
  if(emValue.length != 0) {
    inputPX.value = emValue * baseValue;
  } else { // If empty clear PX field
    inputPX.value = "";
  }

}



// Function to Calculator EM and PX When Base Font Size is Changed
let calcEmPx = () => {
  // Checking if input field is not empty
  // If not empty then run emToPx() / pxToEm()

  if(inputBasePX.value.length != 0) {
    emToPx();
  } else{ // If empty clear PX and EM field
    inputPX.value = "";
    inputEM.value = "";
  }

}



// Adding oninput event to each input field
inputPX.oninput = pxToEm;
inputEM.oninput = emToPx;
inputBasePX.oninput = calcEmPx;