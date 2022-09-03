function registerBtn(){
    document.getElementById("signup").style.display = "block";
    document.getElementById("login").style.display = "none";
}
function backToLogin(){
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

fetch("https://opentdb.com/api.php?amount=10")
.then((Response)=>{
    return Response.json();
})
.then((Data)=>{
    console.log(Data);
})