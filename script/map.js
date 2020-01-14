
function createPage(){
    document.getElementById("root").innerHTML=`
    <button id="ct" class="ct_side" onclick='onButtonClick("ct")'>
        <p>CT Side</p>
    </button>
    <button id="t" class="t_side" onclick='onButtonClick("t")'>
        <p>T Side</p>
    </button>`
}

function onButtonClick(choice) {
    console.log("You just clicked: " + choice);
    document.getElementById("ct").style = "display: none";
    document.getElementById("t").style = "display: none";
}

document.addEventListener('DOMContentLoaded', function() {
    createPage();
 }, false);
