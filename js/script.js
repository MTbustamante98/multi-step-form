//steps
const stepContainers = document.querySelectorAll(
  ".first-content, .second-content, .third-content"
);

//Input's
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const listLI = document.querySelectorAll(".list li");

//Third-content elements
const spanValueName = document.querySelector("[data-value-name]");
const spanValueEmail = document.querySelector("[data-value-email]");
const dataInformation = document.querySelectorAll("[data-information]");

//Button
const btns = document.querySelectorAll(".btn");
const btnSubmit = document.getElementById("last-button-submit");

//events
const events = ["click", "touchstart"];
let currentStep = 0;

function updateStep() {
  stepContainers.forEach((steps, index) => {
    steps.style.display = index === currentStep ? "block" : "none";
  });
}

function nextStep(event) {
  if (event) event.preventDefault();
  // if (!inputName.checkValidity() || !inputEmail.checkValidity()) {
  //   alert("Please fill in all fields correctly.");
  //   return;
  // }

  if (currentStep === 1) {
    const selectedTopics = getSelectedTopics();
    if (selectedTopics.length === 0) {
      alert("Please select at least one item from the list!");
      return;
    }
  }
  if (currentStep < stepContainers.length - 1) currentStep++;
  updateStep();
  // checkValue();
}

// function checkValue() {
//   const valueName = inputName.value;
//   const valueEmail = inputEmail.value;

//   spanValueName.innerText = valueName;
//   spanValueEmail.innerText = valueEmail;
// }

function listLIchecked() {
  let listLIarray = [...listLI];
  let arrayInformation = [...dataInformation];
  let selectedTopics = [];
  listLIarray.forEach((element) => {
    element.addEventListener("click", () => {
      const checkbox = element.querySelector("input[type='checkbox']");
      checkbox.checked = !checkbox.checked;

      selectedTopics = listLIarray
        .filter((li) => li.querySelector("input[type='checkbox']").checked)
        .map((li) => li.querySelector("label").innerText);

      arrayInformation.forEach((element, index) => {
        const topicsListContainer = document.querySelector(".list-topics");
        const topicsList = topicsListContainer.querySelector("ul");
        if (!topicsList) return;

        topicsList.innerHTML = "";

        selectedTopics.forEach((topic) => {
          const li = document.createElement("li");
          li.innerText = topic;
          topicsList.appendChild(li);
          topicsListContainer.classList.add("ativo");
        });

        if (selectedTopics.length === 1) {
          if (topicsListContainer.length > 1) topicsListContainer[1].style.visibility = "hidden";
          if (topicsListContainer.length > 2) topicsListContainer[2].style.visibility = "hidden";
          element.innerText = selectedTopics[index];
        } else if (selectedTopics.length === 2) {
          if (topicsListContainer.length > 1) topicsListContainer[1].style.visibility = "visible";
          if (topicsListContainer.length > 2) topicsListContainer[2].style.visibility = "hidden";
          element.innerText = selectedTopics[index];
        } else {
          if (topicsListContainer.length > 1) topicsListContainer[1].style.visibility = "visible";
          if (topicsListContainer.length > 2) topicsListContainer[2].style.visibility = "visible";
          element.innerText = selectedTopics[index];
        }
      });
    });
  });
}
listLIchecked();

function getSelectedTopics() {
  return [
    ...document.querySelectorAll(".list li input[type='checkbox']:checked"),
  ].map((checkbox) => checkbox.closest("li").querySelector("label").innerText);
}

function stepSucess() {
  alert("Sucess");
}

if (Array.isArray(events) && events.length > 0) {
  events.forEach((eventType) => {
    btns.forEach((buttons) => {
      buttons.addEventListener(eventType, nextStep);
    });
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
