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
  Card: document.querySelector("Card"),

  Output_Box: document.getElementById("Output-Box"),
};

DOMSelectors.Inject.addEventListener("click", function () {
  let Create = DOMSelectors.Input.value;
  DOMSelectors.Output_Box.insertAdjacentHTML(
    "beforeend",
    `<div class="Card"><p>${Create}</p><button type="button" id="Remove">Remove</button></div>`
  );
});

DOMSelectors.Clear.addEventListener("click", function () {
  DOMSelectors.Input.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {
  DOMSelectors.Output_Box.remove();
});
