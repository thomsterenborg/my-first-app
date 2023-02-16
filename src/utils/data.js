const coffee = {
  id: self.crypto.randomUUID(),
  name: "Coffee",
  imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
  alt: "Cup of coffee",
};

const tea = {
  id: self.crypto.randomUUID(),
  name: "Tea",
  imgUrl: "https://media.wincacademy.nl/tea.jpeg",
  alt: "Cup of tea",
};

const kombucha = {
  id: self.crypto.randomUUID(),
  name: "Kombucha",
  imgUrl: "https://media.wincacademy.nl/kombucha.jpg",
  alt: "Glass of Kombucha",
};

const orange = {
  id: self.crypto.randomUUID(),
  name: "Orange Juice",
  imgUrl: "https://media.wincacademy.nl/orange.png",
  alt: "Glass of orange juice",
};

const water = {
  id: self.crypto.randomUUID(),
  name: "Water",
  imgUrl: "https://media.wincacademy.nl/water.png",
  alt: "Glass of water",
};

const cola = {
  id: self.crypto.randomUUID(),
  name: "Cola",
  imgUrl: "https://media.wincacademy.nl/cola.png",
  alt: "A can of cola",
};

export const availableDrinks = [coffee, tea, kombucha, orange, water, cola];
