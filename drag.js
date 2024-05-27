const draggables = document.querySelectorAll(".tarea");
const droppables = document.querySelectorAll(".columna");

draggables.forEach((tarea)=> {
    tarea.addEventListener("dragstart", ()=>{
        tarea.classList.add("is-dragging");
    });
    tarea.addEventListener("dragend", ()=>{
        tarea.classList.remove("is-dragging");
    });
});

droppables.forEach((zone) => {
    zone.addEventListener("dragover", (e) =>{
        e.preventDefault();
        const bottomTask = insertAboveTask(zone, e.clientY);
        const curTask = document.querySelector(".is-dragging");
        
        if (!bottomTask) {
            zone.appendChild(curTask);
        } else{
            zone.insertBefore(curTask, bottomTask);
        }
    })
});

const insertAboveTask = (zone, mouseY) =>{
    const els = zone.querySelectorAll(".tarea:not(.is-dragging)")

    let closestTask = null;
    let closestOffset = Number.NEGATIVE_INFINITY

    els.forEach((tarea) => {
        const { top } = tarea.getBoundingClientRect();
        const offset = mouseY - top;
        if (offset<0 && offset>closestOffset) {
            closestOffset = offset;
            closestTask = tarea;
        }
    });

    return closestTask;
};