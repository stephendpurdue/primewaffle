
var CurrentTheme = "dark";

var TogleImg = document.getElementById('styletoggle');
TogleImg.addEventListener('click', function(ele) {
	let a = document.getElementsByClassName(CurrentTheme);
	for (let f of a) {
		f.classList.toggle('dark');
		f.classList.toggle('light');
	}
	CurrentTheme = (CurrentTheme == "dark") ? "light" : "dark";
	TogleImg.src = (CurrentTheme == "dark") ? "./Images/dark_mode_icon.svg" : "./Images/light_mode_icon.svg";
})