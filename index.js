/* const DOMSelectors = {
  Input: document.querySelector("Input"),
  Create: document.getElementById("Create"),
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),

  Output_Box: document.getElementById("Output-Box"),
};

let CreatedObject = "";

DOMSelectors.Create.addEventListener("click", function () {
  CreatedObject = DOMSelectors.Input.value;
});

DOMSelectors.Inject.addEventListener("click", function () {
  DOMSelectors.Output_Box.insertAdjacentHTML(
    "beforeend",
    `<p>${CreatedObject}</p>`
  );
});

DOMSelectors.Clear.addEventListener("click", function () {
  DOMSelectors.Input.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {
  DOMSelectors.Output_Box.innerHTML = "";
});

 */

const DOMSelectors = {
  Input: document.querySelector("Input"),
  Create: document.getElementById("Create"),
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),

  Output_Box: document.getElementById("Output-Box"),
};

let Input = "";

DOMSelectors.Create.addEventListener("click", function () {
  Input = DOMSelectors.Input.value;
  DOMSelectors.Output_Box.insertAdjacentHTML("beforeend", `<p>${Input}</p>`);
});

DOMSelectors.Clear.addEventListener("click", function () {
  DOMSelectors.Input.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {
  Input.innerHTML = "";
});
