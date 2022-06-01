let names = ["alpha", "beta", "gamma", "delta"];
let [firstName, secondName] = names;

console.log(firstName);//"alpha"
console.log(secondName);//"beta"

let [name1, ...other] = names;
console.log(name1);
console.log(other);

let names_ = () => ["alpha", "beta", "gamma", "delta"];
let [name2, name3] = names_();
console.log(name2)
console.log(name3);

let marks = {
    name: 'tuan',
    age: 22,
    sex: 'man'
}
let { name, age, sex } = marks;
console.log(name);
console.log(age);
console.log(sex);

// let numbers = {x: 21, y: -34, z: 47 };

// const { m, n, p } = numbers;

// console.log(x);
// console.log(y);
// console.log(z);


const mark = {
    section1: { alpha: 15, beta: 16},
    section2: { alpha: -31, beta: 19 }
};
const { section1 : { alpha: alpha1, beta: beta1 }} = mark;
console.log(alpha1, beta1)