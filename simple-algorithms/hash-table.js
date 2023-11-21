// Native hash table javascript
let map = new Map();
map.set('augusto', '11912345678');
map.set('jessica', '11998765432');

console.log(map.get('augusto'));


// Implementation hash table
class HashTable {
    constructor() {
        this.table = [];
        this.count = 0;
    }

    #hash(value) {
        let hashKey = 0;
        for(let i=0; i < value.length; i++) {
            hashKey += value.charCodeAt(i);
        }
        return hashKey;
    }

    set(key, value) {
        const index = this.#hash(key);
        this.table[index] = [key, value];
        this.count++;
    }
    
    get(key) {
        const index = this.#hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.#hash(key);
        this.table.splice(index);
        this.count--;
    }
}

const hashTable = new HashTable();
hashTable.set('guto', '1199999-9999');
hashTable.set('jessica', '1198888-9999');
hashTable.set('chris', '1197777-9999');

console.log(hashTable.get('guto'));
console.log(hashTable.count);




