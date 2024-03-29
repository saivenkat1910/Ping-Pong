const p1Button= document.querySelector('#p1Button');
const p2Button= document.querySelector('#p2Button')
let p1Score=0;
let p2Score=0;
let winningScore=3;
const p2Display=document.querySelector('#p2Display');
const p1Display=document.querySelector('#p1Display');
const resetButton=document.querySelector('#reset');
const winningScoreSelect=document.querySelector('#playto');
p1Button.addEventListener('click',function()
{
    
    if(p1Score<winningScore&p2Score<winningScore)
    {
        p1Score+=1;
        if(p1Score===winningScore)
        {
            p1Button.disabled=true;
            p2Button.disabled=true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
        }
        p1Display.textContent=p1Score;
    }
  
    
})

p2Button.addEventListener('click',function()
{
    if(p1Score<winningScore&p2Score<winningScore)
    {
        p2Score+=1;
        if(p2Score===winningScore)
        {
            p1Display.classList.add('has-text-danger');
            p1Button.disabled=true;
            p2Button.disabled=true;
            p2Display.classList.add('has-text-success');
        }
        p2Display.textContent=p2Score;
    }
    
   
})
winningScoreSelect.addEventListener('change',function()
{
    winningScore =parseInt(this.value);
    reset();
   
})
resetButton.addEventListener('click',reset)
function reset()
{
    p1Button.disabled=false;
    p2Button.disabled=false;
    p1Score=0;
    p2Score=0;
    p1Display.textContent=p1Score;
    p2Display.textContent=p2Score;
    p1Display.classList.remove('has-text-danger','has-text-success');
  p2Display.classList.remove('has-text-success' ,'has-text-danger');
}