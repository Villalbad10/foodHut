import { getdata } from "../helpers/getData.js"
import { verProductos } from "../modules/verProductos.js";
const comidas = document.querySelector('.comidas');
const todo = document.querySelector('.todo');
const desayuno = document.querySelector('.desayuno');
const almuerzo = document.querySelector('.almuerzo');
const cena = document.querySelector('.cena');
const drinks = document.querySelector('.drinks');

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getdata();
    verProductos(data, comidas)
})

todo.addEventListener('click', async () => {
    const data = await getdata();

    todo.setAttribute('class', 'todo active')
    desayuno.setAttribute('class', 'desayuno');
    almuerzo.setAttribute('class', 'almuerzo');
    cena.setAttribute('class', 'cena');
    drinks.setAttribute('class', 'drinks');

    verProductos(data, comidas)
})

desayuno.addEventListener('click', async () => {
    const data = await getdata();

    desayuno.setAttribute('class', 'desayuno active');
    todo.removeAttribute('class', 'todo');
    almuerzo.setAttribute('class', 'almuerzo');
    cena.setAttribute('class', 'cena');
    drinks.setAttribute('class', 'drinks');

    const catDesayuno = data.filter(categoria => categoria.caregory === "breackfast");
    verProductos(catDesayuno, comidas)
})

almuerzo.addEventListener('click', async () => {
    const data = await getdata();

    desayuno.setAttribute('class', 'desayuno');
    todo.removeAttribute('class', 'todo');
    almuerzo.setAttribute('class', 'almuerzo active');
    cena.setAttribute('class', 'cena');
    drinks.setAttribute('class', 'drinks');

    const catLunch = data.filter(categoria => categoria.caregory === "lunch");
    verProductos(catLunch, comidas)
})

cena.addEventListener('click', async () => {
    const data = await getdata();

    desayuno.setAttribute('class', 'desayuno');
    todo.removeAttribute('class', 'todo');
    almuerzo.setAttribute('class', 'almuerzo ');
    cena.setAttribute('class', 'cena active');
    drinks.setAttribute('class', 'drinks');

    const catDinner = data.filter(categoria => categoria.caregory === "dinner");
    verProductos(catDinner, comidas)
})

drinks.addEventListener('click', async () => {
    const data = await getdata();

    desayuno.setAttribute('class', 'desayuno');
    todo.removeAttribute('class', 'todo');
    almuerzo.setAttribute('class', 'almuerzo ');
    cena.setAttribute('class', 'cena');
    drinks.setAttribute('class', 'drinks active');

    const catDrinks = data.filter(categoria => categoria.caregory === "drinks");
    verProductos(catDrinks, comidas)
})

