//LIMPAR FORMULÁRIO

const clearBtn = document.querySelector("[data-form-clear]");

clearBtn.addEventListener("click", () => {
    const name = document.querySelector("[data-form-name]");
    const price = document.querySelector("[data-form-price]");
    const image = document.querySelector("[data-form-image]");
    const saveButton = document.querySelector(".submit__btn");
    let message = document.querySelector(".message");

    name.value = "";
    price.value = "";
    image.value = "";
    saveButton.disabled = true;
    message.textContent = "";
});


//VALIDAR FORMULÁRIO

const form = document.querySelector("[data-form]");
const saveButton = document.querySelector(".submit__btn");
let message = document.querySelector(".message");

function checkFormValidity() {
    const name = document.querySelector("[data-form-name]").value.trim();
    const price = document.querySelector("[data-form-price]").value.trim();
    const image = document.querySelector("[data-form-image]").value.trim();
    return name !== "" && price !== "" && image !== "";
}

function toggleSaveButton() {
    if (checkFormValidity()) {
        saveButton.disabled = false;
        message.textContent = "";
    } else {
        saveButton.disabled = true;
        message.textContent = "Preencha todos os campos para continuar...";
    }
}

form.addEventListener("input", toggleSaveButton);
