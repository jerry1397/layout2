let target = document.querySelector(".target");
let box = document.querySelector(".box2");
console.log(box);

for(i=1 ; i<4 ; i++)
{
    target.innerHTML +=`<div class="box2">
    <img src="image2.png" alt="" class="img">
    <h3>Feature Label</h3>
    <p class="para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, aliquid.</p>
    <div class="button">
    <button class="btn1 btn3">Buy Now</button>
    <button class="btn2 btn3">More Info</button>
</div>
</div>`;
}

let btn = document.querySelector(".click")
let list = document.querySelector("ul")
console.log(list);

btn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(btn.classList.toggle("hide"))
    {
        list.style.display = "grid";
        list.style.top = "70px";
    }
    else{
        list.style.display = "block";
        list.style.top = "-200px";
    }
    
})