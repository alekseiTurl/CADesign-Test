const input = document.getElementById("file");
const btn = document.getElementById("file-btn");
const span = document.getElementById("file-span");

btn.addEventListener("click", () => {
  input.click();
});

input.addEventListener("change", () => {
  btn.innerText = "";
  span.innerText = input.value.match(/[\/\\]([\w\d\s\.\-(\)]+)$/)[1];
});
