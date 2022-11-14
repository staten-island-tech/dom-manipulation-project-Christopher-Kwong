/* const DOMSelectors = {
  Form: document.getElementById("Form"),
  Input: document.getElementById("Input"),
  Create: document.getElementById("Create"),
  Remove: document.getElementById("Remove"),

  Output: document.getElementById("Output"),
};

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
});

DOMSelectors.Create.addEventListener("click", function () {
  let Created = DOMSelectors.Input.value;
  DOMSelectors.Output.insertAdjacentHTML(
    "beforeend",
    `<div class = Box><p>${Created}</p><button type="button" id="Remove">Remove</button></div>`
  );
}); */

const DOMSelectors = {
  Form: document.getElementById("Form"),
  Input: document.getElementById("Input"),
  Create: document.getElementById("Create"),
  img: document.createElement("img"),
};

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();
  img.src = `${DOMSelectors.Input}`;
  document.body.appendChild(img);
});

const img = document.createElement("img");
img.src = `${Input}`;
document.body.appendChild(img);

/* "https://softauthor.com/wp-content/uploads/2020/02/softauthor-logo.png" */
