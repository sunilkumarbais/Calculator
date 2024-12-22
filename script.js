let inp = document.querySelector("input");

function appendNumber(number){
  inp.value += number;
};

function appendOperator(operator){
  inp.value += operator;
};

function clearInp(){
  inp.value = '';
};

function finalResult(){
  try{
    inp.value = eval(inp.value);
  } catch(e){
    inp.value = 'error';
  }

};

function backSpace(){
  inp.value = inp.value.slice( 0 , -1 );
};