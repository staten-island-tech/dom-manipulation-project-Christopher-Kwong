/* const DOMSelectors = {
  Input: document.querySelector("Input"),
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),

  Output_Box: document.getElementById("Output-Box"),
};

DOMSelectors.Inject.addEventListener("click", function () {
  let Create = DOMSelectors.Input.value;
  DOMSelectors.Output_Box.insertAdjacentHTML("beforeend", `<p>${Create}</p>`);
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
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),

  Output_Box: document.getElementById("Output-Box"),
};

DOMSelectors.Inject.addEventListener("click", function () {
  let Create = DOMSelectors.Input.value;
  DOMSelectors.Output_Box.insertAdjacentHTML("beforeend", `<p>${Create}</p>`);
  DOMSelectors.Output_Box.insertAdjacentHTML(
    "beforeend",
    `<button type="button" id="Remove">Remove</button>`
  );
});

DOMSelectors.Clear.addEventListener("click", function () {
  DOMSelectors.Input.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {
  DOMSelectors.Output_Box.innerHTML = "";
});
