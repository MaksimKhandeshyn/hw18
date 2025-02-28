//--1--
const categories = document.querySelectorAll("ul#categories");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const itemsCount = category.querySelectorAll("li.item").length;
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${itemsCount}`);
});

//--2--
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const list = document.querySelector("#ingredients");

const reduceArr = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  return newLi;
});

list.append(...reduceArr);

document.body.append(list);

//--3--
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imagesEl = document.querySelector("#gallery");
// Тут не знаю почему выводится просто адресс ссылки на картинку, хотя по логике должна быть картинка

const createTag = images.map((image) => {
  const liElement = document.createElement("li");
  const imgElement = document.createElement("img");

  imgElement.innerText = image.url;
  liElement.innerHTML = imgElement;
  console.log(liElement);
  console.log(imgElement);
  return liElement;
});

imagesEl.append(...createTag);

//--4--
const valueElement = document.querySelector("#value");
let counterValue = 0;
document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", () => {
    counterValue--;
    valueElement.textContent = counterValue;
  });
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", () => {
    counterValue++;
    valueElement.textContent = counterValue;
  });
