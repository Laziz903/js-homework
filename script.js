//1
let arr = [
    [1, 2, 34],
    [1, 2, 3],
    [1, 3, 4]
]

let arr2 = arr.map((item) => {
    let sum = 0;

    item.forEach((elem) => {
        sum = sum + elem;
    });
    
    return sum;
});

console.log(arr2);

//2
let prices = [15000, 3200, 10200, 455000, 123000, 7000]
let max = [-Infinity];
let min = [Infinity];

prices.forEach(item => {
    if (item < min)
        min = item
    
    if (item > max)
        max = item
})

console.log(min);
console.log(max);

// 3 
let nums = [12, 3, 57, 34, 90, 1, 10, 9]
let odd = []
let even = []

nums.map((item) => {
    if (item % 2 === 0) {
        even.push(item)
    } else {
        odd.push(item)
    }
})

console.log(even);
console.log(odd);   