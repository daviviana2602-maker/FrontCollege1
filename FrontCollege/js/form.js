import { saveVolunteer, getVolunteers } from "./storage.js";

export function setupFormValidation() {
    const form = document.querySelector("#form-cadastro");

    if (!form) {
        return;
    }

    const fields = form.querySelectorAll("input, select");

    fields.forEach(field => {
        field.addEventListener("input", () => {
            validateField(field);
        });

        field.addEventListener("change", () => {
            validateField(field);
        });
    });

    form.addEventListener("submit", event => {
        event.preventDefault();

        let formValid = true;

        fields.forEach(field => {
            if (!validateField(field)) {
                formValid = false;
            }
        });

        if (formValid) {
            const formData = new FormData(form);

            const volunteer = {
                nome: formData.get("nome"),
                email: formData.get("email"),
                nascimento: formData.get("nascimento"),
                cpf: formData.get("cpf"),
                endereco: formData.get("endereco"),
                cidade: formData.get("cidade"),
                estado: formData.get("estado"),
                cep: formData.get("cep"),
                telefone: formData.get("telefone")
            };

            saveVolunteer(volunteer);

            form.reset();

            Swal.fire({
                title: "Cadastro realizado!",
                text: "O voluntário foi cadastrado com sucesso.",
                icon: "success",
                confirmButtonText: "OK"
            });

            restoreVolunteers();
        }
    });
}

function validateField(field) {
    const existingMessage = field.parentElement.querySelector(".field-error");

    if (existingMessage) {
        existingMessage.remove();
    }

    field.style.borderColor = "";

    if (!field.checkValidity()) {
        field.style.borderColor = "var(--color-primary)";

        const message = document.createElement("small");

        message.className = "field-error";
        message.textContent = getValidationMessage(field);

        field.parentElement.appendChild(message);

        return false;
    }

    field.style.borderColor = "var(--color-secondary)";

    return true;
}

function getValidationMessage(field) {
    if (field.validity.valueMissing) {
        return "Este campo é obrigatório.";
    }

    if (field.validity.typeMismatch) {
        return "Informe um valor em formato válido.";
    }

    if (field.validity.patternMismatch) {
        return "Informe o valor no formato solicitado.";
    }

    return "Valor inválido.";
}

export function restoreVolunteers() {
    const volunteers = getVolunteers();

    if (volunteers.length === 0) {
        return;
    }

    const existingFeedback = document.querySelector("#stored-feedback");

    if (existingFeedback) {
        existingFeedback.remove();
    }

    const feedback = document.createElement("div");

    feedback.id = "stored-feedback";
    feedback.className = "alert alert-success";
    feedback.textContent = `${volunteers.length} cadastro(s) armazenado(s) neste navegador.`;

    const form = document.querySelector("#form-cadastro");

    if (form) {
        form.prepend(feedback);
    }
}