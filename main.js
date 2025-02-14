/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */



function isPalindrom (){
    const userWord = prompt('scrivi la tua parola')
    const reversedList = []
    const listOfCharacter = userWord.split('')
    
    for (let i = 0; i < listOfCharacter.length; i++){
       const thisCharacter = listOfCharacter[i]
       reversedList.unshift(thisCharacter)
    }
    const reversedWord = reversedList.join('')
    if (reversedWord === userWord){
        console.log('è palindroma');
        
    } else {
        console.log('non è palindroma');
        
    }
    
}
 isPalindrom()

 
 


/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */
function evenOdd (){
    const userChoice = prompt('scegli pari o dispari')
    const userNumb = Number(prompt('scegli un numero da 1 a 5'))
    const computerNumb = Math.floor(Math.random()* 5 + 1)
    const result = userNumb + computerNumb;
    console.log(`il tuo numero è ${userNumb}, il numero del computer è ${computerNumb}`);
    
    if ((result % 2 === 0 && userChoice === 'pari') || result % 2 !== 0 && userChoice ==='dispari'){
        console.log('hai vinto');
        
    } else {
        console.log('hai perso');
        
    }
}
evenOdd()

