document.getElementById('romfile').onchange = function() {
    document.querySelector("desmond-player").loadURL(URL.createObjectURL(document.querySelector("input").files[0]))
}
window.onload = function() {
    setTimeout(function() {
        document.querySelector("desmond-player").loadURL("firmware.nds")
        document.querySelector("desmond-player").shadowRoot.querySelector("#top").style = "position: fixed;transform: translate(-50%, -50%);width: 40%;left: 50%;top: 30%;height: 40%;";
        document.querySelector("desmond-player").shadowRoot.querySelector("#bottom").style = "position: fixed;transform: translate(-50%, -50%);width: 40%;left: 50%;top: 70%;height: 40%;";
    }, 1000)
}
