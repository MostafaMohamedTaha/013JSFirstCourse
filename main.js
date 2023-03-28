// let countEl=document.getElementById('increase')
// let pEl=document.getElementById('p-el')
// let count=0
// let increase=()=>{
//     count +=1;
//     countEl.innerHTML=count;
// }
// let save=()=>{
//     let countStr=count+ ' - '
//     pEl.innerHTML +=countStr
// }
// let reset=()=>{
//     count=0;
//     pEl.innerText="Previous Count = " + count + ' - ';
//     countEl.innerHTML=count;
// }

// let num1=8,num2=0
// let c1=document.getElementById('num1-el')
// let c2=document.getElementById('num2-el')
// let sum=document.getElementById('sum-el')
// c1.textContent=num1
// c2.textContent=num2
// let add=()=>{sum.textContent=num1+num2}
// let subtract=()=>sum.textContent=num1-num2
// let divide=()=> num2==0 ? sum.textContent='cannot div at zero':sum.textContent=num1/num2
// let multiply=()=>sum.textContent=num1*num2

// let firstCard = 9,
//     secCard = 13,
//     sum = firstCard + secCard
// let show = document.getElementById('bj')
// sum === 21 ?show.textContent=('You Got Blackjack')
// : sum > 21 ?show.textContent=('You Are Out Of The Game')
// : show.textContent=('Do You Want A New Card')
// let letter1=['Hello','I Am','Here','ya','walla']
// let sheer=document.getElementById('letter')
// for (let index = 0; index < letter1.length; index++) {
//     sheer.textContent += letter1[index] + ' ';
    
    
// }
// console.log(Math.floor(Math.random()*6)+1);
// let a=()=>{
    
//     console.log('Go To Hello World Now: ');
// }
// console.log(a());
// console.log('hello world');
let ltr=document.getElementById('letter')
document.body.style.width='4000px'
document.body.style.height='4000px'
ltr.style.position='fixed'
ltr.onclick=()=>{
    // window.open('http://www.google.com','_blank','width=400,height=400,top=400,status=true',true);
    setTimeout(()=>{console.log('hi');},2000)
    // setInterval(()=>{console.log('hi');},2000)
    window.scrollBy(0,100)
    window.console.log('scroll y is :' + window.scrollY);
    clearInterval()
    // window.open('http://www.google.com','_blank','width=400,height=400,top=400,status=true',true);
    // window.focus()
    console.log(window.screen);
    addEventListener('click',()=>{
        ltr.classList.add('p-4')
    })
}
