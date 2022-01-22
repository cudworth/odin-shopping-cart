function uniqueID(n) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const arr = [];
  while (arr.length < n) {
    arr.push(alpha[Math.floor(Math.random() * alpha.length)]);
  }
  return arr.join("");
}

function randomVal() {
  const maxPrice = 2200;
  return Math.floor(Math.random() * maxPrice) * 1000;
}

function lorem() {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
}

const items = {};

[
  {
    name: "Alley House",
    price: randomVal(),
    src: "images/alley-gf43a0e48d_1280.jpg",
    description: lorem(),
  },
  {
    name: "Ramshackle",
    price: randomVal(),
    src: "images/barn-g831bace64_1280.jpg",
    description: lorem(),
  },
  {
    name: "Earthen Home",
    price: randomVal(),
    src: "images/house-g81243becb_1280.jpg",
    description: lorem(),
  },
  {
    name: "Roblox",
    price: randomVal(),
    src: "images/house-gd581af691_1280.jpg",
    description: lorem(),
  },
  {
    name: "Beach View Villa",
    price: randomVal(),
    src: "images/house-gef02a836b_1280.jpg",
    description: lorem(),
  },
  {
    name: "Boat House",
    price: randomVal(),
    src: "images/lake-g1db1e76a8_1280.jpg",
    description: lorem(),
  },
  {
    name: "Lake House",
    price: randomVal(),
    src: "images/mountains-g3d72add6b_1280.jpg",
    description: lorem(),
  },
  {
    name: "Opera House",
    price: randomVal(),
    src: "images/sydney-opera-house-g2d6dab75c_1280.jpg",
    description: lorem(),
  },
  {
    name: "Haunted House",
    price: randomVal(),
    src: "images/villa-g1a20a9a65_1280.jpg",
    description: lorem(),
  },
].forEach((item) => {
  items[uniqueID(8)] = item;
});

export default items;
