//Selectors
const neww = document.querySelector('.neww');
const women = document.querySelector('.women');
const men = document.querySelector('.men');
const kids = document.querySelector('.kids');
const departments = document.querySelector('.departments');
const brands = document.querySelector('.brands');
const sale = document.querySelector('.sale');
const menuItemArray = ['drop1','drop2','drop3','drop4','drop5','drop6','drop7']
const menuSpans = ['neww','women','men','kids','departments','brands','sale']


//Event Listeners//
neww.addEventListener('click', unhide);
women.addEventListener('click', unhide);
men.addEventListener('click', unhide);
kids.addEventListener('click', unhide);
departments.addEventListener('click', unhide);
brands.addEventListener('click', unhide);
sale.addEventListener('click', unhide);
window.addEventListener('click', main);


//functions


function unhide(event){
   
    if(event.target = neww){
      document.getElementById(menuItemArray[0]).style.visibility= 'visible';
    }
    if(event.target = women){
      document.getElementById(menuItemArray[1]).style.visibility= 'visible';
   }
   if(event.target = men){
      document.getElementById(menuItemArray[2]).style.visibility= 'visible';
   }
   if(event.target = kids){
      document.getElementById(menuItemArray[3]).style.visibility= 'visible';
   }
   if(event.target = departments){
      document.getElementById(menuItemArray[4]).style.visibility= 'visible';
   }
   if(event.target = brands){
      document.getElementById(menuItemArray[5]).style.visibility= 'visible';
   }
   if(event.target = sale){
      document.getElementById(menuItemArray[6]).style.visibility= 'visible';
   }
}



function main(){
   document.getElementsByClassName('drop').style.visibility= 'hidden';
}
  
  


