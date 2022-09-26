function verPeso(){
    let sexo = document.querySelector ("#sexo").value;
    let peso = document.querySelector("#peso").value;

        console.log(peso);
    if  ((sexo == "femenino") && (peso >= 55)) {
        alert("Estas en tu peso ideal.");
    }
    else if ((sexo == "masculino") && (peso >= 75)) {
        alert("Estas en tu peso ideal.");
    } else {
        alert("No estas en tu peso ideal");
    } 
    console.log(verPeso);
          }
        

let btn = document.querySelector("#btn");
btn.addEventListener("click", verPeso);



