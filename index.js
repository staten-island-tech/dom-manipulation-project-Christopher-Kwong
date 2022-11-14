const DOMSelectors = {
  Form: document.getElementById("Form"),
  Input: document.getElementById("Input"),
  Create: document.getElementById("Create"),

  Output: document.getElementById("Output"),
};

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
});

DOMSelectors.Create.addEventListener("click", function () {
  let Created = DOMSelectors.Input.value;
  DOMSelectors.Output.insertAdjacentHTML(
    "beforeend",
    `<div class = Box><p>${Created}</p></div>`
  );
});
