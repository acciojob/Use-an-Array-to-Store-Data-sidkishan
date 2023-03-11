let yourArray = ["Siddharth", 7, true, false, 1];
let li = document.getElementById("myList");
yourArray.forEach((item)=>{
  let list = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});