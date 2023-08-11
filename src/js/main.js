const tareasJSON = [{
    id:1,
    descripcion:"estudiar ingles",
    completado:true
},{
    id:2,
    descripcion:"cantar",
    completado:false
},
{
    id:3,
    descripcion:"lavar losa",
    completado:false
}
];

const btnAgregar = document.getElementById("btnAgregar");
let inputTarea = document.getElementById("inputTarea").value;
let detalle_tareas = document.getElementById("detalle_tareas");

const ObtenerMaximoId = () => {
    let id=0;
    tareasJSON.forEach((tarea)=>{
        if(id<tarea.id);
        id=tarea.id;
    });
    return id;
}

btnAgregar.addEventListener("click",function(){
    inputTarea = document.getElementById("inputTarea").value;
    const nuevaTarea = {
        id : ObtenerMaximoId()+1,
        descripcion : inputTarea,
        completado : false
    };
    tareasJSON.push(nuevaTarea);
    document.getElementById("inputTarea").value = "";
    DesplegarDetalleTareas();
});

const EliminarTarea = (idTarea) => {
    const index = tareasJSON.findIndex((tarea)=> tarea.id == idTarea);
    tareasJSON.splice(index,1);
    DesplegarDetalleTareas();
}

const DesplegarDetalleTareas = (JSON = tareasJSON) => {
    let template = "";
    //console.log("hola");
    JSON.forEach((tarea) => {
        //console.log(tarea);
        template += `
            <div class="row m-1">
                <div class="col-1">${tarea.id}</div>
                <div class="col-3">${tarea.descripcion}</div>
                <div class="col-2">${tarea.completado}</div>
                <div class="col-2"><button class="btn-danger" onclick="EliminarTarea(${tarea.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></button></div>
            </div>
        `;
    });
    detalle_tareas.innerHTML = template;
}

DesplegarDetalleTareas();