const elements = {
  steps: document.querySelectorAll(".first-content, .second-content, .third-content"),
  inputs: {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
  },
  listItems: document.querySelectorAll(".list li"),
  spanValues: {
    name: document.querySelector("[data-value-name]"),
    email: document.querySelector("[data-value-email]"),
  },
  dataInfo: document.querySelectorAll("[data-information]"),
  buttons: document.querySelectorAll(".btn"),
  submitButton: document.getElementById("last-button-submit"),
};

//events
const events = ["click", "touchstart"];
let currentStep = 0;

function updateStep() {
  elements.steps.forEach((step, index) => {
    step.style.display = index === currentStep ? "block" : "none";
  });
}

function nextStep(event) {
  if (event) event.preventDefault();
  if (!elements.inputs.name.checkValidity() || !elements.inputs.email.checkValidity()) {
    alert("Please fill in all fields correctly.");
    return;
  }

  if (currentStep === 1) {
    const topicsNotSelected = updateSelectedTopics();
    if (topicsNotSelected.length === 0) {
      alert("Please select at least one item from the list!");
      return;
    }
  }

  if (currentStep < elements.steps.length - 1) currentStep++;

  updateStep();
  checkValue();
}


function checkValue() {
  const { value: nameValue } = elements.inputs.name;
  const { value: emailValue } = elements.inputs.email;

  elements.spanValues.name.innerText = nameValue;
  elements.spanValues.email.innerText = emailValue;

  return;
}

function toggleCheckbox(element) {
  const checkbox = element.querySelector("input[type='checkbox']");
  checkbox.checked = !checkbox.checked;
}

function updateSelectedTopics() {
  const selectedTopics = [...elements.listItems]
    .filter((li) => li.querySelector("input[type='checkbox']").checked)
    .map((li) => li.querySelector("label").innerText);

  updateUI(selectedTopics);

  return selectedTopics;
}

function updateUI(selectedTopics) {
  const topicsListContainer = document.querySelector(".list-topics");
  const topicsList = topicsListContainer.querySelector("ul");
  if (!topicsList) return;

  topicsList.innerHTML = selectedTopics.map(topic => `<li>${topic}</li>`).join("");

  topicsListContainer.classList.toggle("ativo", selectedTopics.length > 0);

  elements.dataInfo.forEach((element, index) => {
    element.innerText = selectedTopics[index] || "";
  });
}

function setupListItems() {
  elements.listItems.forEach((element) => {
    element.addEventListener("click", () => {
      toggleCheckbox(element);
      updateSelectedTopics();
    });
  });
}
setupListItems();

function stepSucess() {
  alert("Sucess");
  location.reload();
}

if (Array.isArray(events) && events.length > 0) {
  events.forEach(eventType => {
    elements.buttons.forEach((button) => button.addEventListener(eventType, nextStep));
    elements.submitButton.addEventListener(eventType, stepSucess);
  });
} else {
  console.error("Error: The 'events' array is either empty or not defined.");
}
