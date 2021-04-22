var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('fenetre_popup');

btnPopup.addEventListener('click',openMoadl);
	
overlay.addEventListener('click',closeModal);

function openMoadl() {
overlay.style.display='flex';
}

function closeModal() {
overlay.style.display='none';
}


