//* Generate a lookup table

//? Input
const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];

const lookupObj = postsArray.reduce((table, item) => {
  table[item.id] = item;

  return table;
}, {})

console.log(lookupObj);


for(let item in lookupObj) {
  console.log(lookupObj[item]);
}

// const lookupObj = postsArray.reduce((table, post) => {
//   table[post.id] = post;

//   return table;
// }, {})

// console.log(lookupObj['p-103']);

// for(let post in lookupObj) {
//   console.log(lookupObj[post]);
// }

//? Output
// {
//   "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//   "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//   "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//   "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }
