//confondre menu.html et  map.html

document.addEventListener("DOMContentLoaded", function(e) {

    // recuperer param dans URL
    switch (window.location.href.substr(window.location.href.indexOf('?'))) {
        case 'nuke':
                //
                break;
        case 'overpass':
                //
                break;
        case 'dust2':
                //
                break;
        case 'mirage':
                //
                break;
        case 'inferno':
                //
                break;
        case 'vertigo':
                //
                break;
        case 'cache':
                //
                break;
        case 'train':
                //
                break;
        default:
                //Error
    }

    // récupère l'element main

    // rempli le main avec le contenu que tu veux

})

function createPage(){
    document.getElementById("root").innerHTML=`
    <button id="ct" class="ct_side" onclick='onButtonClick("ct")'>
        <p>CT Side</p>
    </button>
    <button id="t" class="t_side" onclick='onButtonClick("t")'>
        <p>T Side</p>
    </button>`
}

function displayStrana(){ //test
    document.getElementByID("root").innerHTML=`
    <aside id="left">
        <select name="strat">
            <option value="test1">TEST strat1</option>
            <option value="test2">TEST strat2</option>
            <option value="test3">TEST strat3</option>
            <option value="test4">TEST strat4</option>
            <option value="test5">TEST strat5</option>
        </select>
    </aside>

    <aside id="right">
        <select name="stuff">
            <option value="test1">TEST stuff1</option>
            <option value="test2">TEST stuff2</option>
            <option value="test3">TEST stuff3</option>
            <option value="test4">TEST stuff4</option>
            <option value="test5">TEST stuff5</option>
        </select>
    </aside>`
}

function onButtonClick(choice) {
    console.log("You just clicked: " + choice);
    document.getElementById("ct").style = "display: none";
    document.getElementById("t").style = "display: none";
    displayStrana();
}

document.addEventListener('DOMContentLoaded', function() {createPage();}, false);
