const DOMSelectors = {
  Input: document.querySelector("Input"),
  Create: document.getElementById("Create"),
  Inject: document.getElementById("Inject"),
  Clear: document.getElementById("Clear"),
  Remove: document.getElementById("Remove"),

  Output_Box: document.getElementById("Output-Box"),
};

/* DOMSelectors.Button.addEventListener("click", function () {
  let input = DOMSelectors.Input.value;
  DOMSelectors.Box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  DOMSelectors.Input.value = "";
});
 */

/* DOMSelectors.Create.addEventListener("click", function () {});
 */
DOMSelectors.Inject.addEventListener("click", function () {
  let input = DOMSelectors.Input.value;
  DOMSelectors.Output_Box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
});

DOMSelectors.Clear.addEventListener("click", function () {
  DOMSelectors.Input.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {
  DOMSelectors.Input.remove();
});
