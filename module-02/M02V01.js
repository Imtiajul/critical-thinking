const obj = {};

const course1 = { name: "Programming Hero" };
const course2 = { name: "Next Level Web Development" };


obj[course2] = { courseId: "level2" };
obj[course1] = { courseId: "level1" };

console.log('obj: ',obj);

const courses = [
  [course1, "Level1"],
  [course2, "Level2"],
];

console.log(courses);

const map = new Map(courses);

map.set(course1, { courseId: "level1" });
map.set(course2, { courseId: "level2" });

map.forEach((value, key) => {
    console.log('v:', value, ' k ',key);
  return key.name = "Shohoz Shorol Simple " + key.name}
);

for (let key of map.keys()) {
  key.name = "Shohoz Shorol Simple " + key.name;
}

console.log(map);
