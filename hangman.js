const dictionary = ["version","consequence","news","judgment","development","atmosphere","permission","examination","computer","generation"]
console.log(dictionary)
const word=dictionary[Math.floor(Math.random() * 10)]
console.log(word)
let letters= word.split("")
console.log(letters)
const length = letters.length
console.log(length)
let hint=document.getElementsByTagName("h1")[1]
console.log(hint)
hint.innerHTML=`Hint:The length of this word is ${length}`
let lives = 6
console.log(lives)
for (lives;lives>0;lives--){
    console.log(lives)
    let letter=prompt("enter a letter")
    for(let i=0;i<length;i++){
    if (letter == letters[i]){
    lives++
    break}}
}

