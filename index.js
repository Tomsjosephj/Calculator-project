function display(num){

   result.value+= num

}

function equal(){

   answer=eval(result.value)

   result.value=answer

}

function clearall(){
   result.value=""
}

function back(){

   result.value=result.value.slice(0,-1)
}