// document.newInaddEventListener("DOMContentLoaded", Saludar);

//Parte lista
let button = document.getElementById("newIng");

button.addEventListener("click", nuevoIngrediente);

let lista = document.getElementById("ingredient-temp-list");

function nuevoIngrediente() {
    document.getElementById("ingredient-temp-list").innerHTML += `<li class="[ bg-white color-gray ]">
Ingrediente 1
<button class="close" type="button" >X</button>
</li><br>
<li class="[ bg-white color-gray ]">
Ingrediente 2
<button class="close" type="button" >X</button>
</li><br>
<li class="[ bg-white color-gray ]">
Ingrediente 3
<button class="close" type="button" >X</button>
</li><br>`
}



//Parte formulario
const formReceta = document.getElementById("form-recipe");
const keyList = "[ card ]";

document.addEventListener("DOMContentLoaded", function(){
    //Agregar evento al formulario
    formReceta.addEventListener("submit", enviarReceta);

    muestraReceta();
});


function enviarReceta(){
    e.preventDefault();
    e.stopPropagation();

    let receta = {
        id: Date.now(),
        title: formReceta["title"].value,
        img_url: formReceta["img_url"].value,
        description: formReceta["description"].value
    };

    let list = getRecetas();

    list.push(receta);

    console.log(list);

    localStorage.setItem(keyList, JSON.stringify(list));
}

function getRecetas(){
    let list = JSON.parse(localStorage.getItem(keyList));

    if(list === null){
        return [];
    }
    else{
        return list;
    }
}

function muestraReceta(){
    let list = getRecetas();

    let html = '';
    for(var i = 0; i < list.length; i++){
        document.body.innerHTML += `<div class="[ row ] [ flex ]" data-state="wrap">
    <div class="[ col ]">
        <div class="[ card ] [ bg-secondary color-white ] [ radius shadow ]" card-id="${i.id}">
            <img src="${i.img_url}" alt="">
            <div class="[ flow ]">
                <h5>${i.title}</h5>
                <div class="[ flex ]" data-state="justify-between">
                    <button class="[ btn ]" data-state="white" onclick="getRecipe(${i.id})">Ver</button>
                    <button class="[ btn ]" data-state="warning" onclick="deleteRecipe(${i.id})">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</div>`;
    }
}


// function agregaReceta(){
//     document.body.innerHTML += `<div class="[ row ] [ flex ]" data-state="wrap">
//     <div class="[ col ]">
//         <div class="[ card ] [ bg-secondary color-white ] [ radius shadow ]" card-id="${i.id}">
//             <img src="${i.img_url}" alt="">
//             <div class="[ flow ]">
//                 <h5>${i.title}</h5>
//                 <div class="[ flex ]" data-state="justify-between">
//                     <button class="[ btn ]" data-state="white" onclick="getRecipe(${i.id})">Ver</button>
//                     <button class="[ btn ]" data-state="warning" onclick="deleteRecipe(${i.id})">Eliminar</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>`;
// }
