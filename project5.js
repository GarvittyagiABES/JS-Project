//  generate random colors
const rancol=function()
{
    const hex="0123456789ABCDEF";
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];

    }
    return color;
}
let intervalID;
const startchangingcolor=function()
{ if(!intervalID)
{
    intervalID=setInterval(changecolor,1000);
}
 
 function changecolor()
 {
    document.body.style.backgroundColor=rancol();
 }
}
const stopchangingcolor=function()
{
   clearInterval(intervalID); 
   intervalID=null;

}
document.querySelector('#start').addEventListener('click',startchangingcolor);
document.querySelector('#stop').addEventListener('click',stopchangingcolor);