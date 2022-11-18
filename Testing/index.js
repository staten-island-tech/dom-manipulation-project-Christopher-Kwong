const DOMSelectors = {
  Form: document.getElementById("MyForm"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

let createObjectCounter = 1; // keep track how many new objects have been created and use its value to form a unique element id for the new object.

function CreateObject(inputString, objectID, buttonID) {
  // https://www.javascripttutorial.net/dom/manipulating/create-a-dom-element/
  //https://www.w3schools.com/js/js_htmldom.asp

  return (
    '<div id="' +
    objectID +
    '"><img width="100px" src="' +
    inputString +
    '"><br><button type="button" id="' +
    buttonID +
    '" onclick=RemoveObject("' +
    objectID +
    '")>Remove</button></div>'
  );
}

function InsertObject(atHere, newObject) {
  console.log("InsertObject: \n" + newObject);
  // DOMSelectors.Output.insertAdjacentHTML("beforeend", "" + newObject);
  atHere.insertAdjacentHTML("beforeend", "" + newObject);
}

function RemoveObject(objectID) {
  console.log("-------------------- objectId:" + objectID);
  console.log(
    "-------------------- to be Removed Object id:" +
      document.getElementById(objectID).id
  );
  document.getElementById(objectID).innerHTML = "<p></p>";
  // event.currentTarget.parentElement.innerHTML = "";
}

function Clear(inputField) {
  inputField.value = "";
}

// function Repeat() {
//   let Remove = document.getElementById("Remove");
//   Remove.addEventListener("click", function () {
//     DOMSelectors.Output.innerHTML = "<p></p>";
//   });
// }

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
  // e.stopPropagation();

  let url = DOMSelectors.Image.value;
  let newObjectID = "ImgBox-" + createObjectCounter;
  let newButtonID = "ImgButton-" + createObjectCounter;
  console.log("submit been clicked\n " + url + "\n" + newObjectID);
  createObjectCounter++;
  InsertObject(
    DOMSelectors.Output,
    CreateObject(url, newObjectID, newButtonID)
  );
  let newButton = document.getElementById(newButtonID);
  console.log("=========================" + newButton.id);
  // newButton.onclick = RemoveObject(newObjectID);

  Clear(DOMSelectors.Image);
});
