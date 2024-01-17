
function reverseString(value) {

    if(!value || value.length < 2 || typeof value !== 'string') {
        return 'It is not a string =/';
    }

    let arrayString = value.split('');
    let newString = '';
    let countArray = arrayString.length;

    for(i = 0; i < countArray; i++) {
        newString += arrayString[(countArray - 1) - i]; 
    }

    return newString;
}


console.log(reverseString('Augusto Campos'));



