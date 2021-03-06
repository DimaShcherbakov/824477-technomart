var popup = document.querySelector(".modal-login");
var catalogPopup = document.querySelector(".modal-message");
if(popup){
	var link = document.querySelector(".address"); 
	var close = popup.querySelector(".modal-close");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name=login]");
	var mail = popup.querySelector("[name=mail]");
	var isStorageSupport = true;
	var storage = "";
	try {
		storage = localStorage.getItem("login");
	} catch (err) {
		isStorageSupport = false;
	}
	link.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.add("modal-show");
		if (storage) {
			login.value = storage;
			mail.focus();
		} else {
			login.focus();
		}
	});
	close.addEventListener("click", function (evt) {
		evt.preventDefault();
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
	});
	form.addEventListener("submit", function (evt) {
		if (!login.value || !mail.value) {
			evt.preventDefault();
			popup.classList.remove("modal-error");
			popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
		} else {
			if (isStorageSupport) {
				localStorage.setItem("login",login.value);
			}
		}
	});
	window.addEventListener("keydown", function (evt) {
		if (evt.keyCode === 27) {
			evt.preventDefault();
			if (popup.classList.contains("modal-show")) {
				popup.classList.remove("modal-show");
				popup.classList.remove("modal-error");
			}
		}
	});
}
if(catalogPopup){
	var catalogLink = document.querySelector(".buy"); 
	var closeCatalog = catalogPopup.querySelector(".modal-close");
	catalogLink.addEventListener("click", function (fact) {
		fact.preventDefault();
		catalogPopup.classList.add("modal-show");
	});
	closeCatalog.addEventListener("click", function (fact) {
		fact.preventDefault();
		catalogPopup.classList.remove("modal-show");
	});
}

	   