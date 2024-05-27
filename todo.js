const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const input2 = document.getElementById("todo-input2");
const input3 = document.getElementById("todo-input3");
const columnaTarea = document.getElementById("columna-tarea");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    // nueva tarea
    const value = input.value;
    if(!value) return;

    const nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tarea");
    nuevaTarea.setAttribute("draggable", "true");
    nuevaTarea.innerText = value;

    nuevaTarea.addEventListener("dragstart", ()=>{
        nuevaTarea.classList.add("is-dragging");
    });

    nuevaTarea.addEventListener("dragend", ()=>{
        nuevaTarea.classList.remove("is-dragging");
    });

    columnaTarea.appendChild(nuevaTarea);

    input.value = "";

    // descrip
    const value2 = input2.value;
    if(!value2) return;

    const descripcion = document.createElement("p");
    descripcion.classList.add("tarea-txt");
    descripcion.innerText = value2;


    nuevaTarea.appendChild(descripcion);

    input2.value = "";

    // nuevo responsable
    const value3 = input3.value;
    if(!value3) return;

    const nuevoRes = document.createElement("p");
    nuevoRes.classList.add("tarea-res");
    nuevoRes.innerText = "Responsable: " + value3;

    nuevaTarea.appendChild(nuevoRes);

    input3.value = "";

    const borrar = document.createElement("input");
    borrar.classList.add("borrar");
    borrar.setAttribute("type", "submit");
    borrar.value = "Borrar";
    borrar.onclick = function(){
        nuevaTarea.remove();
    }

    nuevaTarea.appendChild(borrar);

});