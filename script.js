//chunk_array:method

function chunk_array(arr, value) {

    var finalarr = [];

    for (let i = 0; i < arr.length; i = i + value) {

        finalarr.push(arr.slice(i, value + i));
    }


    console.log(finalarr);

}
chunk_array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3);


//filter Method
const items = [
    { name: 'bike', price: 65000 },
    { name: 'TV', price: 15000 },
    { name: 'Album', price: 1000 },
    { name: 'Book', price: 1500 },
    { name: 'Phone', price: 600 },
    { name: 'computer', price: 1800 },
    { name: 'Keyboard', price: 900 },
    { name: 'laptop', price: 26000 }
]

const filtereditems = items.filter((item) => {
        return item.price <= 15000
    })
    //console.log(items);
console.log(filtereditems);

//map method:
const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames);

//find method:
const founditems = items.find((item) => {
    return item.name === "Album"
})
console.log(founditems);

//foreach:
items.forEach((item) => {
    console.log(item.name)
})

//some:
const hasinexpansiveitems = items.some((item) => {
    return item.price <= 1000
})
console.log(hasinexpansiveitems);

//every:
const allitems = items.every((item) => {
    return item.price <= 65000
})
console.log(allitems);

//reduce:
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total);

//includes:
const items1 = [1, 2, 3, 4, 5]
const includestwo = items1.includes(2)
console.log(includestwo)

//concat:
const a = [1, 2, 3];
const b = [4, 5, 6];
const d = [7, 8, 9, 10];
const c = a.concat(b, d);
console.log(c);
