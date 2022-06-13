const arr = [
    {place: "here",  name: "x", other: "other stuff1" },
    {place: "there", name: "x", other: "other stuff2" },
    {place: "here",  name: "y", other: "other stuff4" },
    {place: "here",  name: "z", other: "other stuff5" }
]

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

const arr1 = getUniqueListBy(arr, 'place')

console.log("Unique by place")
console.log(JSON.stringify(arr1))

console.log("\nUnique by name")
const arr2 = getUniqueListBy(arr, 'name')

console.log(JSON.stringify(arr2))