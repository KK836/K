function dosomething(a, ...others) {
  // ... other = [2, 3, 4, 5, 6, 7];
  console.log(a, others, others[others.length - 1]);
  // 1 [2, 3, 4, 5, 6, 7]
}

dosomething(1, 2, 3, 4, 5, 6, 7);
