const DOMSelectors = {
  Input: document.querySelector("Input"),
  Create: document.getElementById("Create"),
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),
  Clean: document.getElementById("Clean"),

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
  CreatedObject = "";
});

DOMSelectors.Clean.addEventListener("click", function () {
  DOMSelectors.Output_Box.innerHTML = "";
});
