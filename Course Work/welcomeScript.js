function dealy() {
  document.getElementById("loading").remove();
  setTimeout(function(){window.location.href = "Main.html";} , 10000);
}

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.body;
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.03}% ${50 - (_mouseY - _h) * 0.03}%`;
        let x = `${_depth2}, ${_depth1}`;
        // console.log(x);
        document.body.style.backgroundPosition = x;
    }
})();