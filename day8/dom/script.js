let greeting =document.getElementById("f1");
function greet(){
    if(greeting.value == ""){
        alert("Enter a name")
    }else{
        alert("welcome " +  greeting.value)
    }
}