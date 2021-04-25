
function run(){
    var x = document.getElementById("name").value;
    var y = document.getElementById("comment").value;
	var selected = document.forms.rating.rate.value;
	var mail = document.getElementById("email");
	var emailRegex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+).([a-z]{2,8})(.[a-z]{2,8}?$)/;
    if (x == "" || y == "") {
        alert("Name and Comments must be filled out");
        return false;
    }

    if (selected == "") {
        alert("Please Rate our website");
        return false;
	}
	if(!emailRegex.test(mail.value) || mail ==""){
		alert("Please check your email.");
		return false;
	}

    alert("Hi " +x+ " You rated our website as " +selected+ " and your comment is " +y);
}

var maxSize=0;
function fUp() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2,text");
	var i;
	maxSize++;
	if (maxSize>2){
		alert("Maximum Size Reached")
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize + 1) + 'px';
		} 
	}
}function fDown() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2,text");
	var i;
	maxSize--;
	if (maxSize<-2){
		alert("Minimum Size Reached")
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize - 1) + 'px';
		} 
	}
}
