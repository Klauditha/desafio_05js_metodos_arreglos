const tareasJSON = [{
    id:"1",
    tarea:"estudiar",
    realizada:true
},{
    id:"2",
    tarea:"cantar",
    realizada:false
}];

const btnAgregar = document.getElementById("btnAgregar");
let inputTarea = document.getElementById("inputTarea").value;
let detalle_tareas = document.getElementById("detalle_tareas");

btnAgregar.addEventListener("click",function(){
    inputTarea = document.getElementById("inputTarea").value;
    console.log(inputTarea);
});

const DesplegarDetalleTareas = (JSON = tareasJSON) => {
    let template = "";
    //console.log("hola");
    JSON.forEach((tarea) => {
        console.log(tarea);
        template += `
            <div class="col-2">${tarea.id}</div>
            <div class="col-2">${tarea.tarea}</div>
            <div class="col-2">${tarea.realizada}</div>
            <div class="col-2"></div>
        `;
    });
    detalle_tareas.innerHTML = template;
}

DesplegarDetalleTareas();