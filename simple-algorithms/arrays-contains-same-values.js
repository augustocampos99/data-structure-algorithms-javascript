let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['d', 'e', 'f'];

// Approach 1
function containSameValue1(arr1, arr2) {
    for(i = 0; i < array1.length; i++) {
        for(j = 0; j < array2.length; j++) {
            if(arr1[i] === arr2[j]) {
                return true;
            }
        }
    }

    return false;
}
console.log(containSameValue1(array1, array2));

// Approach 2 
function containSameValue2(arr1, arr2) {
    let test = false;
    let map = {};
    for(i = 0; i < array1.length; i++) {
        if(!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }

    for(i = 0; i < array2.length; i++) {
        if(map[arr2[j]]) {
            return true;
        }
    }
    
    return false;
}
console.log(containSameValue2(array1, array2));

