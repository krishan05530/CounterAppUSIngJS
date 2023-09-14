const countvalue=document.querySelector('#counter');  // we can do getitembyid also

function increament()
//   const increament=()=>
  {
  
    // get the value from ui
    let value =parseInt(countvalue.innerText); // to convert it into number use parseint method, as countvalu.innertext gives string in o/p

 // update the value 
    value=value+1; 

    // set the value onto ui
 countvalue.innerText=value;

};


 function decreament(){

    let value =parseInt(countvalue.innerText);// converting into  integer
 // update the value 
    value=value-1;

    // set the value onto ui
 countvalue.innerText=value;

};