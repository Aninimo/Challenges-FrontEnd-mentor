/*=~=~=~=~=~ theme-toggle =~=~=~=~=~ */
const inputs = document.querySelectorAll(".header__theme__theme");
const labels = document.querySelectorAll(".header__theme__label");
const doc = document.documentElement;

const check = (counter) => {
  labels[counter].classList.add("header__theme__label--checked");
  const radio = document.querySelector(`#theme${counter}`);
  radio.checked = true;
};
check(0);

const checkReset = () => {
  labels.forEach((label) => {
    label.classList.remove("header__theme__label--checked");
  });
};

const setTheme = (counter) => {
  doc.setAttribute("data-theme", `theme-${counter}`);
};
setTheme(0);

inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    checkReset();
    check(index);
    setTheme(index);
  });
});

/* calculator */
function insert(num){
  let insert = document.form.input.value
  document.form.input.value = insert + num
}

function result(){
  let result = document.form.input.value
  
  if(result){
    document.form.input.value = eval(result)
  }
}

function delet(){
  let input = document.getElementById("screen")
  var inputText = input.value
  input.value = inputText.substring(0,inputText.length-1)
}
