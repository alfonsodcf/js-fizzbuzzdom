const app = document.getElementById("app");
const row = document.createElement("div");
row.setAttribute("class", "row");

let ripetizioni = 100;

for (let i = 1; i <=100; i++){
// creamo colonna con classi
    const col = document.createElement("div")
    col.setAttribute("class", "col-12 col-sm-6 col-md-4 col-lg-2");
// creo box con classi   
    const box = document.createElement("div");
    box.setAttribute("class", "box")

    if ((i % 3 == 0) && (i % 5 == 0)){
        console.log("fizzbuzz");
        box.innerHTML = "fizzbuzz";
        box.classList.add("fizzbuzz")
    
    
    } else if (i % 3 == 0){
        console.log("fizz");
        box.innerHTML = "fizz";
        box.classList.add("fizz")
    
    
    } else if (i % 5 == 0){
        console.log("buzz");
        box.innerHTML = "buzz";
        box.classList.add("buzz")
    
    
        } else {
        console.log (i);
        box.innerHTML = i;
    }

    col.append(box);
    row.append(col);
}

app.append(row);