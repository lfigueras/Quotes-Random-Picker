let qoutes = ['The Way Get Started Is To Quit Talking And Begin Doing', 'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty', 'Don’t Let Yesterday Take Up Too Much Of Today.'];
let refresh = document.getElementById('btn-refresh');



    setInterval(function (){
       
            document.getElementById('qoutes').innerHTML = qoutes[Math.floor(Math.random()* qoutes.length)];
      
        },6000);
     

     
refresh.addEventListener('click', e =>{
    document.getElementById('qoutes').innerHTML = qoutes[Math.floor(Math.random()* qoutes.length)];
})




