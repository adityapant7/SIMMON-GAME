let gamesq=[];
let arr=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let button =["red","green","yellow","purple"];// this is to chose a random button no in function btnFlash sequence is according to html sequence
document.addEventListener("keypress",function(){ // coz document mai koi bhi key press ho tabhoi chlega
    if(started==false){ // coz game ek hi baar chlega uske badh to over hoke resent thi hoga
        started=true; // tali next time over tak loop na chale
        levelUp();//ki game start hogya level 0 se 1 kardo

    }
});
function btnFlah(btn){
    btn.classList.add("flash");
    setTimeout(function(){ // coz thori der mai white se normal color mai bhi change karna hai
        btn.classList.remove("flash");
    },250);


};
function levelUp(){
    arr=[]; // jesi level up hora user ho saare sahi se dalne padenge to hum esliye resent ardiyte vo array
    level++;

    h2.innerText=`Level ${level}`;
    let randomno=Math.floor(Math.random()*4);
    let randomc=button[randomno];
    let randon=document.querySelector(`.${randomc}`); //suppose randomc='red' by doing .randomc it becomes class .red
    gamesq.push(randomc);
    btnFlah(randon); //programming mai jo kam baar baar karna hai uske liye loop use karlete hai

};
function buttoncall(){
    let btn=this;
    btnFlah(btn); // jab hum bhi click kare toh white ho
    let c=btn.getAttribute("id");
    arr.push(c);
    checkAns(arr.length-1); // coz last element hi check karna hai coz use pahle wale sahi hai tabhi game chlra hai abhi tak

}
let allBtn=document.querySelectorAll(".btn");
for(btns of allBtn){
    btns.addEventListener("click",buttoncall);
}
function checkAns(item){
    if(arr[item]===gamesq[item]){
        if(arr.length==gamesq.length){ // if sab sahi hogya pura check hogya toh next level per jaenge 
            setTimeout(levelUp,1000);

        }

    }
    else{
        h2.innerHTML=`game over  <b> Your Score is ${level} </b> <br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },1000);
        reset();

    }
}
function reset(){
    started=false;
    gamesq=[];
    level=0;
    arr=[];
}
