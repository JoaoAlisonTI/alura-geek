// CREATE PRODUCT

import { connectApi } from "./connectApi.js";

const form = document.querySelector("[data-form]");

async function criarProduto(event) {
    event.preventDefault();

    const name = document.querySelector("[data-form-name]").value;
    const price = document.querySelector("[data-form-price]").value;
    const image = document.querySelector("[data-form-image]").value;

    try {
        await connectApi.criarProduto(name, price, image);
    } catch (error) {
        console.error("Erro ao criar produto:", error);
    }

    window.location.reload(true);
}

form.addEventListener("submit", event => criarProduto(event));