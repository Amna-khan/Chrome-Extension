
let myLeads = ["www.awesomelead.com", "www.abc.com"]
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() { //push URL to the array
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++){ //logs out array
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}