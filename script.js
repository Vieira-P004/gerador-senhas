const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click",() => {
    createPassword()
})

copyIconEl.addEventListener("click", ()=>{
    copyPassword()

    if(inputEl.value){
        alertContainerEl.classList.remove("active")
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 2000)
    }

    
})

function createPassword(){
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    const passwordTam = 10;
    let password = "";

    for (let index = 0; index < passwordTam; index++) {
        const numAleatorio = Math.floor(Math.random() * caracteres.length )
        password += caracteres.substring(numAleatorio, numAleatorio + 1);
        
    }

    inputEl.value = password;
    alertContainerEl.innerText = password + " copiado";
}

function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputEl.value);
    
}
