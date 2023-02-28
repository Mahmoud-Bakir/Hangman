window.onload=function(){
const dictionary = ["version","consequence","news","judgment","development","atmosphere","permission","examination","computer","generation"]
console.log(dictionary)
let word=dictionary[Math.floor(Math.random() * 10)]
console.log(word)
let letters= word.split("")
console.log(letters)
const length = letters.length
console.log(length)
let hint=document.getElementsByTagName("h1")[1]
console.log(hint)
hint.innerHTML=`Hint:The length of this word is ${length}`
title = document.getElementsByTagName("h1")[0]

let lives = 6
let temp=[]
for(let j=0;j<length;j++){
    temp[j]="_,"
}
let ans =temp.toString()
console.log(ans)
let repeat=0
function none(){}
setTimeout(none(),2000)
for (lives;lives>0;lives--){
    if(temp==word) break
    console.log(lives)
    let letter=window.prompt("enter a letter")
      for(let i=0;i<length;i++){
      if (letter == letters[i] && repeat==0){
      lives++
      temp[i]=letter
      console.log(temp)
      repeat =1}
    else{ title.innerHTML=`You still have ${lives}`}

    if (letter == letters[i] && repeat==1){
        temp[i]=letter
        console.log(temp)}}
    repeat=0
   
}

}