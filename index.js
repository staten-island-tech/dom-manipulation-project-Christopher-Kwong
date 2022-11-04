const DOMSelectors = {
  Box: document.getElementById("Box"),
  Text: document.querySelector("Box-Text"),
  Button: document.querySelector("Button"),
};

DOMSelectors.Button.addEventListener("click", function () {
  let Input = DOMSelectors.Text.value;
  DOMSelectors.Box.insertAdjacentHTML("beforeend", `<p>${Input}</p>`);
});
