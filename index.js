
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function() { //push URL to the array
    myLeads.push(inputEl.value)

    inputEl.value = ""

    renderLeads()
})


function renderLeads() {
let listItems = ""
for (let i = 0; i < myLeads.length; i++){ //logs out array
    listItems += "<li>" + myLeads[i] + "</li> "
}
ulEl.innerHTML = listItems
}