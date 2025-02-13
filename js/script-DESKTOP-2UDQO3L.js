//Sections
const stepContainers = document.querySelector(".first-content, .second-content, .third-content");

//Input's
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const listLI = document.querySelectorAll(".list li");
const checkbox = document.querySelectorAll("input[type='checkbox']");

//Third-content elements
const spanValueName = document.querySelector("[data-value-name]");
const spanValueEmail = document.querySelector("[data-value-email]");
const dataInformation = document.querySelectorAll("[data-information]");

//Button
const btns = document.querySelectorAll(".btns");
// const buttonStepOne = document.querySelector(".btnOne");
// const buttonStepTwo = document.querySelector(".btnTwo");
const btnSubmit = document.getElementById("last-button-submit");

//events
const events = ["click", "touchstart"];
let currentStep = 0;
// const activeClass = "ativo";

// const arraySections = [stepOne, stepTwo];

function updateStep() {
  stepContainers.forEach((steps, index) => {
    steps.style.display = currentStep === index ? "block" : "none";
  });
}

function nextStep(event) {
  if (event) event.preventDefault();
  if (currentStep < stepContainers.length - 1) {
    currentStep++;
    updateStep();
  }
}

// function handleClickTwo(event) {
//   if (event) event.preventDefault();
//   arraySections[1].classList.remove(activeClass);
//   stepThree.style.display = "block";
// }

function stepSucess() {
  alert("Sucess");
}

function verificationValue() {
  const valueName = inputName.value;
  const valueEmail = inputEmail.value;

  spanValueName.innerText = valueName;
  spanValueEmail.innerText = valueEmail;
}

// function listLIchecked() {
//   listLI.addEventListener("click", () => {

//   });
// }

if (Array.isArray(events) && events.length > 0) {
  events.forEach((eventType) => {
    btns.forEach(buttons => {
      buttons.addEventListener(eventType, nextStep);
    });
    // buttonStepOne.addEventListener(eventType, handleClick);
    // buttonStepTwo.addEventListener(eventType, handleClickTwo);
    if (eventType === "submit") {
      btnSubmit.addEventListener("submit", (event) => {
        stepSucess();
      });
    } else {
      btnSubmit.addEventListener(eventType, stepSucess);
    }
  });
} else {
  console.error("Error: The 'events' array is either empty or not defined.");
}
