var array = [1,5,89,6,4,7,2];
var array2 = [];

function substituiPares(list) {
    if(!list || list.length === 0) return -1;

    for(let i = 0; i<list.length; i++) {
        list[i] = (list[i]%2===0) ? 0 : list[i];
    }

    return list;
}

console.log(substituiPares(array));