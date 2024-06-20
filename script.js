const input = document.getElementById("qrtext")
const btn = document.getElementById("btn")
const img = document.querySelector("img")
const qrcon = document.getElementById("qr-container")
const enterinput = document.querySelector(".enter-input")

btn.addEventListener("click", ()=>{
    if (input.value) {
       
        img.setAttribute(
          "src",
          `https://api.qrserver.com/v1/create-qr-code/?size=300x150&data=${input.value}`
        );
        input.value = ""
      
        qrcon.style.display = "flex";
        enterinput.style.display ="none";
      } else {
        enterinput.style.display ="flex";
        qrcon.style.display = "none";
      }
    
})