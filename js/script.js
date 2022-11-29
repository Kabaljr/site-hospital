function menuOnClick(){
	document.getElementById("menu-bar").classList.toggle("change");
	document.getElementById("lista2").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
function abrirMenuu(il){
	var menu = document.getElementById(il).style.display = 'none';

	if( menu == 'block'){
	document.getElementById(il).style.display = 'none';

}
	else
	document.getElementById("fecharMenu").style.display = 'block';
}

function fecharMenuu(ol){
	var menu2 = document.getElementById(ol).style.display = 'none';

	if( menu2 == 'block'){
	document.getElementById(il).style.display = 'none';

}
	else
	document.getElementById("menuIcone").style.display = 'block';
}