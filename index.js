const DOMSelectors = {
  Form: document.getElementById("Form"),
  Create: document.getElementById("Create"),
  Image: document.getElementById("ImageInput"),
  Text: document.getElementById("TextInput"),
  Title: document.getElementById("TitleInput"),

  Output: document.getElementById("Output"),
};

document.body.style.backgroundColor = "lightgrey";
DOMSelectors.Output.style.backgroundColor = "lightblue";

function CreateObject(FirstInput, SecondInput, ThirdInput) {
  return `<div class="Box"> 
    <p class="Text">${FirstInput}</p>
    <img class="Image" height="80px" src ="${SecondInput}">
    <p class="Text">${ThirdInput}</p>
  </div>`;
}

function InsertObject(Area, Object) {
  Area.insertAdjacentHTML("beforeend", Object);
}

function Clear(Input1, Input2, Input3) {
  Input1.value = "";
  Input2.value = "";
  Input3.value = "";
}

function Remove() {
  let RemoveBox = document.getElementById("Remove");
  RemoveBox.addEventListener("click", function () {
    DOMSelectors.Output.innerHTML = "";
  });
}

DOMSelectors.Form.addEventListener("submit", (e) => {
  e.preventDefault();

  let url = DOMSelectors.Image.value;
  let text = DOMSelectors.Text.value;
  let title = DOMSelectors.Title.value;
  let boldtitle = title.bold();

  InsertObject(DOMSelectors.Output, CreateObject(boldtitle, url, text));
  Clear(DOMSelectors.Title, DOMSelectors.Image, DOMSelectors.Text);
  Remove();
});
