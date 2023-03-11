let yourArray = ["Siddharth", 7, true, false, 1];
let li = document.getElementById("myList");
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})