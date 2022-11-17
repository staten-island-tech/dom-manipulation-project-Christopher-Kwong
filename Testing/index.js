/* const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

function CreateObject(inputString) {
  return `<div class = Box>
      <img width="200px" src ="${inputString}">
      <br>
      <button type ="click" id = "Remove" onClick="RemoveObject();">Remove</button>
    </div>`;
}

function InsertObject(newObject, atHere) {
  atHere.insertAdjacentHTML("beforeend", newObject);
}

function Clear(inputField) {
  inputField.value = "";
}

function RemoveObject() {
  DOMSelectors.Output.innerHTML = "";
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
  let url = DOMSelectors.Image.value;
  InsertObject(CreateObject(url), DOMSelectors.Output);
  Clear(DOMSelectors.Image);
});
 */

const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("Input"),

  Output: document.getElementById("Output"),
};

let createObjectCounter = 1; // keep track how many new objects have been created and use its value to form a unique element id for the new object.

function CreateObject(inputString, objectID, buttonID) {
  // return '<div id="ImgBox-1"><img width="100px" src="https://www.massmutual.com/global/media/shared/img/people-on-steps.jpg"><br><button type="click" id="ImgButton-1">Remove</button></div>';
  let str1 = '<div id="' + objectID;
  let str2 = str1 + '"><img width="100px" src="' + inputString;
  let str3 =
    // str2 + '"><br><button type="click" id="ImgButton-0">Remove</button></div>';
    str2 +
    '"><br><button type="click" id="' +
    buttonID +
    '">Remove</button></div>';
  // let str3 = str2 + '"><br><button type="click" id="' + buttonID;
  // let str4 = str3 + '">Remove</button></div>';
  return str3;
  // return (
  //   '<div id="' +
  //   objectID +
  //   '"><img width="100px" src="' +
  //   inputString +
  //   '"><br><button type="click" id="' +
  //   buttonID +
  //   '">Remove</button></div>'
  // );
}

function InsertObject(atHere, newObject) {
  console.log("InsertObject: \n" + newObject);
  // DOMSelectors.Output.insertAdjacentHTML("beforeend", newObject);
  // atHere.insertAdjacentHTML(
  DOMSelectors.Output.insertAdjacentHTML("beforeend", "" + newObject);
  //   `<div id = "ImgBox0">
  //       <img width="500px" src ="https://th.bing.com/th/id/OIP.aa4s3_RarNq7iKSI084hswHaJ4?w=146&h=194&c=7&r=0&o=5&pid=1.7">
  //       <br>
  //       <button type ="click" id = "ImgButton0">Remove</button>
  //     </div>`
  // );
}

function RemoveObject(event) {
  console.log("-------------------- Remove Object id:");
  // document.getElementById(objectID).innerHTML = "<p></p>";
  event.currentTarget.parentElement.innerHTML = "";
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
  e.stopPropagation();

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
  console.log("=========================");
  window.alert("going to add listener");
  newButton.addEventListener("click", RemoveObject(e));

  Clear(DOMSelectors.Image);
});

/* let i = 0;
let Text = "";

for (; i < 10; i++) {
  Text += `<button id = "Remove${i}">Remove${i}</button>`;
}

document.getElementById("demo").innerHTML = Text;

function Repeat() {
  let body = document.getElementById("Body");
  Remove1.addEventListener("click", function () {
    body.innerHTML = "<p></p>";
  });
}

Repeat(); */

// let counter = 0;
// let Text = "";

// for (; counter <= 10; counter++) {
//   Text += `<div id=Body>
//     <button onClick="removeElement">Remove${counter}</button>
//   </div>`;
// }

// document.getElementById("demo").innerHTML = Text;

// function removeElement(Id) {
//   let Body = `Body + ${Id}`;
//   let Remove = `Remove + ${Id}`;
//   Remove.addEventListener("click", function () {
//     Body.innerHTML = "<p></p>";
//   });
// }

// removeElement(counter);
