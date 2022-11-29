/*Retorna o primeiro elemento dentro do documento*/
const sign_in_btn = document.querySelector("#sign-in-btn"); /*a contante sign_in_btn recebe o valor do documento com o id sign-in-btn */
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener("click", () => { /*Ao clicar no botão cadastrar, a class container vai ser mudada pra sign-up-mode*/
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => { /*ao clicar no botão login vai remover a classe sign-up-mode*/
  container.classList.remove("sign-up-mode");
});


function logo(){
	var logo = document.querySelector("#logo");
	document.getElementById("logo").classList.toggle("changeLogo");
	logo.classList.remove("changeLogoLogin");
	
}
function logoLogin(){
	var logo = document.querySelector("#logo");
	document.getElementById("logo").classList.toggle("changeLogoLogin");
	logo.classList.remove("changeLogo");
}

function validar(form){
    if(typeof(Storage) !== 'undefined'){
        if(form["email"].value != ""){
            sessionStorage.setItem('emailc', form["email"].value);
            return true;
        } else {
            alert('Preencha o campo');
        }
    } else {
        alert('O navegador nao suporta storage');
    }
    return false;
}