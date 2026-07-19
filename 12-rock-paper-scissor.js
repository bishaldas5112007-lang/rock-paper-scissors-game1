let score = JSON.parse(localStorage.getItem('score'))
    || {
        wins:0,
        lose:0,
        tie:0
      }

      scoreonpage();
     /*if(!score){
      score={
        wins:0,
        lose:0,
        ties:0
      }
     }
      */

     let isAutoplaying= false;
     let intervalId;
     function autoPlay(){
      if(!isAutoplaying){
       intervalId= setInterval(() =>{
        const playerMove= pickComputerMove();
       playgame(playerMove);
       
      },1000);
      isAutoplaying= true;
      }
      else {
        clearInterval(intervalId);
        isAutoplaying=false;
      }
      
     }
    
     
document.querySelector('.js-rock-move')
.addEventListener('click' , ()=>{
   playgame('rock');
})

document.querySelector('.js-paper-move')
.addEventListener('click' , ()=>{
   playgame('paper');
})

document.querySelector('.js-scissor-move')
.addEventListener('click' , ()=>{
   playgame('scissors');
})


document.body.addEventListener('keydown', (event)=>{
  if(event.key==='r'){
    playgame('rock');
  }
  else if(event.key==='p'){
    playgame('paper');
  }
  else if(event.key==='s'){
    playgame('scissors');
  }
  else if(event.key==='a'){
    autoPlay();
  }
})
      
      function playgame(playerMove){
       const computerMove = pickComputerMove();

    result='';  
    if(playerMove==='scissors'){
        if (computerMove==='scissors'){
      result='tie';
     }
     else if(computerMove==='rock'){
      result='you lose';
     }
     else if(computerMove==='paper'){
      result='you win';
     }
    
    }

    else if(playerMove==='paper'){
      if (computerMove==='paper'){
      result='tie';
     }
     else if(computerMove==='scissors'){
      result='you lose';
     }
     else if(computerMove==='rock'){
      result='you win';
     }
      }
    
      
    else if(playerMove==='rock'){
         if (computerMove==='rock'){
      result='tie';
     }
     else if(computerMove==='paper'){
      result='you lose';
     }
     else if(computerMove==='scissors'){
      result='you win';
     }
   }
    

     if(result === 'you win' ){
      score.wins += 1;
     }
     else if(result === 'you lose'){
      score.lose += 1;
     }
     else if(result === 'tie'){
      score.tie += 1; 
     }

      document.querySelector('.js-player')
     .innerHTML = result;

     document.querySelector('.js-computer')
      .innerHTML= `You picked <img src="${playerMove}-emoji.png" class="icon-image" >. Computer picked <img src="${computerMove}-emoji.png" class="icon-image"> `;

     localStorage.setItem('score', JSON.stringify(score))

     scoreonpage();
    }
      
   
    function scoreonpage(){
        document.querySelector('.js-score')
       .innerHTML =`Wins: ${score.wins}, Lose: ${score.lose}, Tie: ${score.tie}` ;
      }

     function pickComputerMove(){
       let computerMove='';
        const randomNumber = Math.random();
      
     if(randomNumber<=1/3&&randomNumber>=0){
      computerMove='rock';
     }
     else if (randomNumber>=1/3&&randomNumber<2/3){
      computerMove='paper';
     }
     else if (randomNumber>2/3&&randomNumber<=1){
      computerMove='scissors';
     }  
     return computerMove;
     

    
     }