const ingredientsList = document.getElementById('ingredients');

const ingredientsArray = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const listItems = [];

ingredientsArray.forEach((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  listItems.push(listItem);
});

ingredientsList.append(...listItems);