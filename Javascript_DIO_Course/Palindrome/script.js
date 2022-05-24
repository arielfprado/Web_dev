//Solução 1

//function verificaPalindromo(string) {
//    if(!string) return;
//
//    return string.split('').reverse().join('') === string;
//}

//console.log(verificaPalindromo('ama'));

//Solução 2

function verificaPalindromo2(string) {
    if(!string) return "String inexistente";
    let reverseString = [];

    for(var i = string.length;i >=0; i--) {
        reverseString.push(string[i]);
    }
    return (reverseString.join('') === string);
}

console.log(verificaPalindromo2(''));