var arr = [];

for (let i = 0; i < 10; i++) {
  arr.push(i + 1)
}

// for (let i = 0;i<=arr.length;i++) {
//   if (i % 2 == 0 && i != 0) {
//     arr[i -1] = 12
//   }
// }
//
// console.log(arr)

arr.map(function (replace) {
  if (replace % 2 == 0 && replace != 0) {
    arr[replace -1] = 12
  }
})

console.log(arr)



