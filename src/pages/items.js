function uniqueID(n) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = [];
  while (arr.length < n) {
    arr.push(alpha[Math.floor(Math.random() * alpha.length)]);
  }
  return arr.join("");
}

const items = {};

[
  {
    name: "Alley House",
    price: 1000,
    src: "images/alley-gf43a0e48d_1280.jpg",
    description: "none",
  },
  {
    name: "Barn House",
    price: 1000,
    src: "images/barn-g831bace64_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/house-g81243becb_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/house-gd581af691_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/house-gef02a836b_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/house-gf09f9e5f2_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/lake-g1db1e76a8_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/mountains-g3d72add6b_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/sydney-opera-house-g2d6dab75c_1280.jpg",
    description: "none",
  },
  {
    name: "item1",
    price: 1000,
    src: "images/villa-g1a20a9a65_1280.jpg",
    description: "none",
  },
].forEach((item) => {
  items[uniqueID(8)] = item;
});

export default items;
