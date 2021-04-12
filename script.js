//Selectors
const neww = document.querySelector('.neww');
const women = document.querySelector('.women');
const men = document.querySelector('.men');
const kids = document.querySelector('.kids');
const departments = document.querySelector('.departments');
const brands = document.querySelector('.brands');
const sale = document.querySelector('.sale');


//Event Listeners//
neww.addEventListener('click', unhide1);
women.addEventListener('click', unhide2);
men.addEventListener('click', unhide3);
kids.addEventListener('click', unhide4);
departments.addEventListener('click', unhide5);
brands.addEventListener('click', unhide6);
sale.addEventListener('click', unhide7);


//functions
function unhide1(){
    document.querySelector('.drop1').style.visibility= 'visible';   

    if(document.querySelector('.drop1').style.visibility= 'visible'){
        neww.addEventListener('click', hide1);

        function hide1(){
            document.querySelector('.drop1').style.visibility= 'hidden'; 
        }
        
 }
 }

 function unhide2(){
    document.querySelector('.drop2').style.visibility= 'visible';   

    if(document.querySelector('.drop2').style.visibility= 'visible'){
        women.addEventListener('click', hide2);

        function hide2(){
            document.querySelector('.drop2').style.visibility= 'hidden'; 
        }
        
 }
 }

 function unhide3(){
    document.querySelector('.drop3').style.visibility= 'visible';   

    if(document.querySelector('.drop3').style.visibility= 'visible'){
        men.addEventListener('click', hide3);

        function hide3(){
            document.querySelector('.drop3').style.visibility= 'hidden'; 
        }
        
 }
 }


 function unhide4(){
  document.querySelector('.drop4').style.visibility= 'visible';   

 if(document.querySelector('.drop4').style.visibility= 'visible'){
    kids.addEventListener('click', hide4);

    function hide4(){
        document.querySelector('.drop4').style.visibility= 'hidden'; 
    }
    
 }
 }



 function unhide5(){
    document.querySelector('.drop5').style.visibility= 'visible';   
  
   if(document.querySelector('.drop5').style.visibility= 'visible'){
      departments.addEventListener('click', hide5);
  
      function hide5(){
          document.querySelector('.drop5').style.visibility= 'hidden'; 
      }
      
   }
   }


   function unhide6(){
    document.querySelector('.drop6').style.visibility= 'visible';   
  
   if(document.querySelector('.drop6').style.visibility= 'visible'){
      brands.addEventListener('click', hide6);
  
      function hide6(){
          document.querySelector('.drop6').style.visibility= 'hidden'; 
      }
      
   }
   }

   function unhide7(){
    document.querySelector('.drop7').style.visibility= 'visible';   
  
    if(document.querySelector('.drop7').style.visibility= 'visible'){
       sale.addEventListener('click', hide7);
   
       function hide7(){
           document.querySelector('.drop7').style.visibility= 'hidden'; 
       }
       
    }
   }



  