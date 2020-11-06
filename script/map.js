//confondre menu.html et  map.html

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("root").innerHTML=`
    <button id="ct">
        <p>CT Side</p>
    </button>
    <button id="t">
        <p>T Side</p>
    </button>`
    
    let ct=document.getElementById("ct");
    ct.addEventListener("click", function(){
        onButtonClick("ct");
    });

    let t=document.getElementById("t");
    t.addEventListener("click", function(){
        onButtonClick("t");
    });

    function onButtonClick(choice) {
        console.log("clique sur: "+choice);
        document.getElementById("ct").style = "display: none";
        document.getElementById("t").style = "display: none";
        displayStrana(choice);
    }

    function displayStrana(choice){
        let left=document.getElementById("left");
        left.className=choice;
        left.innerHTML+=`
        <h2>Stratégies</h2>
        <p>strat1 TEST</p>
        <p>strat2 TEST</p>
        <p>strat3 TEST</p>
        <p>strat4 TEST</p>
        <p>strat5 TEST</p>
        `
        left.addEventListener("mouseover", function(e){
            //if(e.target==)
        });        
        left.addEventListener("click", function(e){
            //if(e.target==)
        });

        let right=document.getElementById("right")
        right.innerHTML+=`
        <h2>Stuff</h2>
        <p>stuff1 TEST</p>
        <p>stuff2 TEST</p>
        <p>stuff3 TEST</p>
        <p>stuff4 TEST</p>
        <p>stuff5 TEST</p>`


    }
});

