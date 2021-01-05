// ARRAY & LOOPS

// const names = ['anna', 'susy', 'bob', 'john', 'susan'];
// const lastName = 'shakeit';
// const newArray = [];


// for (let i = 0; i < names.length; i++) {
//     const fullName = `${names[i]} ${lastName}`;
//     newArray.push(fullName)
// }
// console.log(fullName);




const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 300, 2, 5, 8]);

console.log({
    gas: gasTotal,
    food: foodTotal,
    random: randomTotal,
});