const students = [
  { name: "Ali", grade: 75 },
  { name: "Sara", grade: 92 },
  { name: "Mona", grade: 88 },
];

let studentsGradeGreaterThan80 = students.filter(
  (student) => student.grade > 80,
);

// ----------------------------------------------------------

const users = [
  { name: "Malak", role: "Student" },
  { name: "Omar", role: "Mentor" },
];

let usersInformat = users.map((user) => `${user.name} - ${user.role}`);

// ----------------------------------------------------------

const products = [
  { id: 1, name: "Mouse" },
  { id: 2, name: "Keyboard" },
  { id: 3, name: "Screen" },
];

let productWhoseIdis3 = products.find((product) => product.id == 3);

// ----------------------------------------------------------

const person = { name: "Laila", age: 21, city: "Cairo" };

let { name, age } = person;

// ----------------------------------------------------------

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArr = [...arr1, ...arr2];

// ----------------------------------------------------------

const student = { name: "Ali", grade: 75 };
const student2 = { ...student, grade: 10 };

// ----------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];
const numbersDoubled = numbers.map((num) => num * 2);
const evenNumbers = numbers.forEach((num) => {
  if (num % 2 == 0) return num;
});

// ----------------------------------------------------------

const employees = [
  { name: "Nour", department: "HR" },
  { name: "Youssef", department: "IT" },
];

const ITemployee = employees.find((emp) => emp.department == "IT");



console.log({
  studentsGradeGreaterThan80,
  usersInformat,
  productWhoseIdis3,
  person: { name, age },
  mergedArr,
  student2,
  numbersDoubled,
  evenNumbers,
  ITemployee,
});
