function deepEqual(obj1, obj2) {
    // Check if the objects are of the same type
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }

    // Get the keys of the objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and values are the same
    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Compare the objects
if (deepEqual(obj1, obj2)) {
    console.log("The objects have the same properties in the same order.");
} else {
    console.log("The objects do not have the same properties in the same order.");
}
