<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `ReferenceError: greetign is not defined`


<i> `greetign` is assigned an empty object, but the variable name should be `greeting`. As a result, when you log `greetign`</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `NaN`

<i> In this case, adding a number (1) to a string ("2") results in a non-numeric string. When you attempt to add them, JavaScript returns NaN (Not-a-Number) because it cannot perform a valid numeric addition with a non-numeric string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Creating an object `info` with a property `favoriteFood` that is initially set to the first item in the `food` array, which is "🍕". Later, we change the value of `info.favoriteFood` to "🍝", but this doesn't affect the original `food` array. Therefore, when we log `food`, it remains the same as `['🍕', '🍫', '🥑', '🍔']`.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>In the `sayHi` function, it expects an argument `name`, but when you call `sayHi()` without providing any argument, `name` inside the function becomes `undefined`. Therefore, the returned string is "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3

<i>In this code, the `forEach` method iterates through the `nums` array, and for each element `num`, it checks if `num` evaluates to `true`. Since `0` evaluates to `false` in JavaScript, it only increments `count` for non-zero values. As a result, `count` will be incremented three times (for `1`, `2`, and `3`), resulting in a final value of `3`.</i>

</p>
</details>
