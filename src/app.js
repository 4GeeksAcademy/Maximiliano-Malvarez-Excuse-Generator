//Function 
function generateExcuse() {
    let who = [ 'The dog', 'My grandma', 'The mailman', 'My bird', 'My neighbor', 'A clown', 'My teacher', 'An alien', 'The cat' ];
    let action = [ 'ate', 'peed on', 'crushed', 'broke', 'stole', 'deleted', 'hid', 'burned', 'spilled coffee on' ];
    let what = [ 'my homework', 'my phone', 'the car', 'my sandwich', 'my computer', 'my shoes', 'my wallet', 'my project', 'my bike' ];
    let when = [ 'before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying', 'at the bus stop', 'during the exam', 'while I was gaming', 'at the party' ];

  //Excuse forming logic
    let excuse = `${who[Math.floor(Math.random()*who.length)]} 
                  ${action[Math.floor(Math.random()*action.length)]} 
                  ${what[Math.floor(Math.random()*what.length)]} 
                  ${when[Math.floor(Math.random()*when.length)]}`;  
  
    document.getElementById("excuse").innerHTML = excuse; /*Substitutes HTML excuse with generated excuse*/
  }
  //Generate excuse on load
  window.onload = generateExcuse;
