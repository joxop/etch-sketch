
// const container = document.querySelector('#grid-container');
const container = document.querySelector('.container');


function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c=0; c<(rows * cols); c++){
        let cell = document.createElement("div");
        // cell.className="boxes"
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function(){
            // const clr = "white";
             cell.style.backgroundColor = "white";

        });
    };
};
    
    makeRows(16,16);

    const btn = document.querySelector('.butn');
    
    btn.addEventListener('click',()=>{
       let newVal = prompt("how many squares would you like to add (please keep under 100)")
        container.innerHTML = "";
        if (newVal > 0 & newVal <= 100){
        makeRows(newVal, newVal);
    }   else{
        alert("Please enter a number between 1 and 100s")
        makeRows(16,16)
    }
    })
   