var address1 = document.getElementById("add").Value;
document.getElementById("submit").addEventListener("click", alertsystem);

function alertsystem(){
    if(address1==""){
        alert("Please fill all your details");
    }
    var msg="Order placed successfully";

    alert(msg);

    let alert1=newPromise(function(resolve, reject){

        setInterval(function(){
            resolve("Your order is accepted");
        },3000);
    }
}