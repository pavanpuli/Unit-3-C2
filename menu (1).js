let url = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
var data;
async function getData(){
    try{
        let res = await fetch(url);
        data = await res.json();
        displayDish(data)
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
getData();
var arr = JSON.parse(localStorage.getItem("arr"))||[];
localStorage.setItem("array",arr);
var maindiv = document.querySelector("#menu1");
var count = document.querySelector("#count1");
function displayDish(food){
    for(i=0;i<13;i++){
        var div = document.createElement("div");
        var img = document.createElement("img");
        img.src = food.meals[i].strMealThumb;
        var div1 = document.createElement("div");
        div1.append(img);
        div1.setAttribute("id","div1");
        var price = document.createElement("p");
        var btn = document.createElement("button");
        price.textContent = `Price - ${Math.ceil(Math.random()*(500-100)+100)}`;
        btn.textContent = "Add to Cart";
        btn.addEventListener("click", function(){
            count.textContent++;
            arr.push(count.textContent,Math.ceil(Math.random()*(500-100)+100));
            localStorage.setItem("array",arr);
        })
        div.append(div1,price,btn);
        maindiv.append(div)
        
    }
}

