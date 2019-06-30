console.log("HEREEE");

let btnCount = 20

let mainDiv = document.getElementById("main")

for (let i = 0; i< btnCount; i++){
    let btnNum = document.createElement("BUTTON")
    btnNum.id = i+1
    btnNum.innerHTML = `Btn: ${i+1}`
    document.body.appendChild(btnNum)
    mainDiv.appendChild(btnNum)

}

mainDiv.addEventListener("click", function(e){
  let btnNum = e.target.id
  alert(`Button ${btnNum} was clicked!`)
})
