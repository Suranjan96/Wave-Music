var maxSize=0;

var price=0;
var quantity=0;
var flag = true;
var cartSize =0;

function addToCart(from) {
    var currentFont = document.getElementById("cost");
    var myFontSize = window.getComputedStyle(currentFont).getPropertyValue('font-size');
    if(flag) {
        document.getElementById("removeMe").style.display="none";
        flag=false;
    }
    quantity=0;
    var newElem = document.createElement("DIV");
    newElem.setAttribute("class","purchase")
    var image = document.createElement("IMG");
    var para = document.createElement("P");
    para.setAttribute("id","text")
    var temp = document.getElementById(from);
    quantity = temp.options[temp.selectedIndex].value;
    if (cartSize<5){
        if (from=="zedd"){
            newElem.setAttribute("id","zedditem")
            price=price+650*quantity;
            image.src = "img/zedd.jpg";
            para.innerText=" The Middle by Zedd x"+quantity;
        }else if (from=="malone"){
            newElem.setAttribute("id","maloneitem")
            price=price+1850*quantity;
            image.src = "img/bnb.jpg";
            para.innerText=" b&B album by Post Malone x"+quantity;
        }else if (from=="drake"){
            newElem.setAttribute("id","drakeitem")
            price=price+4200*quantity;
            image.src = "img/drake.jpg";
            para.innerText="OVOXO hoodie by Drake x"+quantity;
        }else if (from=="galantis"){
            newElem.setAttribute("id","galantisitem")
            price=price+550*quantity;
            image.src = "img/galantis.jpg";
            para.innerText=" Smile by Galantis x"+quantity;
        }else if (from=="headphone"){
            newElem.setAttribute("id","headphoneitem")
            price=price+6500*quantity;
            image.src = "img/headphones.jpg";
            para.innerText=" Headphones x"+quantity;
        }else if (from=="player"){
            newElem.setAttribute("id","playeritem")
            price=price+8500*quantity;
            image.src = "img/player.jpg";
            para.innerText=" Portable Music Player x"+quantity;
        }
        cartSize++;
        image.style.height="70px";
        image.style.width="70px";
        image.style.borderRadius="45px";
        image.style.marginTop="7.5px"
        image.style.marginLeft="7.5px"
        image.style.float="left";
        image.style.marginRight="10px";
        para.style.fontSize=myFontSize;
        para.style.marginRight="10px";
        newElem.appendChild(image);
        newElem.appendChild(para);
        document.getElementById("cart").appendChild(newElem);
        document.getElementById("cost").innerHTML="Total Cost - "+price;
        document.getElementById("checkout").style.display="initial";
    }else{
        window.alert("Only 5 purchases are allowed at once");
    }
}
function checkout(){
    var currentFont = document.getElementById("cost");
    var myFontSize = window.getComputedStyle(currentFont).getPropertyValue('font-size');
    var cartSummary = document.createElement("DIV");
    var tempSum = document.getElementById("cart").cloneNode(true);
    var tempPurchase = tempSum.getElementsByClassName("purchase");
    for (i = 0; i < tempPurchase.length; i++) {
        tempPurchase[i].style.width="100%-100px";
        tempPurchase[i].style.marginRight="50px";
        tempPurchase[i].style.marginLeft="50px";
        tempPurchase[i].style.borderRadius="37.5px 37.5px 37.5px 37.5px"
    }
    cartSummary.appendChild(tempSum);
    document.getElementById("cartSumItems").append(cartSummary);
    document.getElementById("cartSummaryHolder").style.display="initial";
    var para = document.createElement("P");
    para.innerText="\n\nYour Total cost is - "+price;
    para.style.fontSize=myFontSize;
    cartSummary.appendChild(para);
    
}

function emptyCart(){
    var emptyCartText = document.createElement("P");
    emptyCartText.setAttribute("id","removeMe")
    emptyCartText.innerText="your cart is empty";
    document.getElementById("cart").innerHTML="";
    document.getElementById("cart").appendChild(emptyCartText);
    document.getElementById("checkout").style.display="none";
    price=0;
    cartSize=0;
    flag=true;
}
function hideCartSum(){
    document.getElementById("cartSummaryHolder").style.display="none";
    document.getElementById("cartSumItems").innerHTML="";
}
function finalize(){
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    if (name =="") { window.alert("Name Field Cannot be empty")}
    else if (address =="") { window.alert("Address Field Cannot be empty")}
    else{
        var currentFont = document.getElementById("cost");
        var myFontSize = window.getComputedStyle(currentFont).getPropertyValue('font-size');
        var recipt = document.createElement("DIV");
        var tempSum = document.getElementById("cart").cloneNode(true);
        document.getElementById("cartSummary").innerHTML="";
        document.getElementById("cartSummary").style.display="grid";
        document.getElementById("cartSummary").style.alignContent="center";
        var reciptHead = document.createElement("h1");
        reciptHead.innerText=" Welcome "+name+"\nThis is yor Recipt\n\n";
        recipt.append(reciptHead);
        var reciptItems = tempSum.getElementsByClassName("purchase");
        for (i = 0; i < reciptItems.length; i++) {
            var reciptText = reciptItems[i].textContent;
            var reciptPara = document.createElement("P");
            reciptPara.innerText=reciptText+"\n";
            recipt.append(reciptPara);
        }
        var reciptFoot = document.createElement("P");
        reciptFoot.innerText="\n Payment received - "+price+"\n\nThank You\n\n";
        recipt.append(reciptFoot);
        var reciptBtn = document.createElement("BUTTON");
        reciptBtn.innerText="Done";
        reciptBtn.addEventListener("click", function(){window.location.href="Main.html";})
        reciptBtn.style.fontSize=myFontSize;
        recipt.append(reciptBtn);
        recipt.style.fontSize=myFontSize;
        document.getElementById("cartSummary").appendChild(recipt);
        document.getElementById("cartSummary").style.width="50%";
        document.getElementById("cartSummary").style.margin= "5% auto 5% 25%";
        document.getElementById("cartSummary").style.transitionDuration="1.5s";
        document.getElementById("hideCartSum").style.display="none";
    }
}
function fUp() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2");
	var i;
	maxSize++;
	if (maxSize>2){
		alert("Maximum Size Reached");
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize + 3) + 'px';
		}
	}
}function fDown() {
	var x = document.querySelectorAll("p,h1,a,label,button,select,h2");
	var i;
	maxSize--;
	if (maxSize<-2){
		alert("Minimum Size Reached");
	}else{
		for (i = 0; i < x.length; i++) {
			var style = window.getComputedStyle(x[i], null).getPropertyValue('font-size');
			var fontSize = parseFloat(style);
			x[i].style.fontSize = (fontSize - 3) + 'px';
		} 
	}
}