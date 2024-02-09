const progressBar = document.querySelector(".progress-bar");
const listItens = document.querySelectorAll(".progress-bar-list__item");
const btnNextButton = document.querySelector(".btn-next-button");
let currentState = progressBar.getAttribute('current-state');

btnNextButton.addEventListener('click', manageSteps);

function manageSteps() {
    switch (currentState) {
        case "step-1":
            listItens[1].classList.add("item-checked");
            currentState = "step-2";
            console.log(currentState);
            break;
        case "step-2":
            listItens[2].classList.add("item-checked");
            currentState = "step-3";
            break;
        case "step-3":
            listItens[3].classList.add("item-checked");
            currentState = "step-4";
            break;
        case "step-4":
            listItens[4].classList.add("item-checked");
            currentState = "step-5";
            break;
        case "step-5":
            for (let i = 0; i < listItens.length; i++) {
                listItens[i].style.backgroundColor = "var(--third-color)";
            }
            btnNextButton.classList.add("button-checked");
            btnNextButton.textContent = "FINISH";
            currentState = "finished";
            break;
    }
}