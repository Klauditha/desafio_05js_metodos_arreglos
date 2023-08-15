const tareasJSON = [
    {
        id:1,
        descripcion:"Estudiar ingles",
        completado:false
    },{
        id:2,
        descripcion:"Preparar Desafio",
        completado:false
    },
    {
        id:3,
        descripcion:"Entregar desafio",
        completado:true
    },
];

const btnAgregar = document.getElementById("btnAgregar");
let inputTarea = document.getElementById("inputTarea").value;
let detalle_tareas = document.getElementById("detalle_tareas");
let cant_total = document.getElementById("cant_total");
let cant_realizadas = document.getElementById("cant_realizadas");

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
    if(inputTarea.trim()!=""){
        const nuevaTarea = {
        id : ObtenerMaximoId()+1,
        descripcion : inputTarea,
        completado : false
       };
        tareasJSON.push(nuevaTarea);
        document.getElementById("inputTarea").value = "";
        DesplegarDetalleTareas();
    }
    else{
        $('#modal').modal('show');
    }
});

const EliminarTarea = (idTarea) => {
    const index = tareasJSON.findIndex((tarea)=> tarea.id == idTarea);
    tareasJSON.splice(index,1);
    DesplegarDetalleTareas();
}

const ModificarEstado = (idTarea) => {
    const index = tareasJSON.findIndex((tarea)=> tarea.id == idTarea);
    tareasJSON[index].completado = !tareasJSON[index].completado;
    DesplegarDetalleTareas();
}

const DesplegarDetalleTareas = (JSON = tareasJSON) => {
    let template = "";
    JSON.forEach((tarea) => {
        template += `
            <div class="row mt-2">
                <div class="col-md-2 text-right">${tarea.id}</div>
                <div class="col-md-8">${tarea.descripcion}</div>
                <div class="col-md-1"><input class="form-check-input" type="checkbox" id="check${tarea.id}" onclick="ModificarEstado(${tarea.id})" `; 
        if(tarea.completado) 
            template +=  ` checked `;
        template += `></input></div>
                <div class="col-md-1"><button class="btn-danger" onclick="EliminarTarea(${tarea.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
              </svg></button></div>
            </div>`;
    });
    detalle_tareas.innerHTML = template;
    cant_total.innerHTML = tareasJSON.length;
    cant_realizadas.innerHTML = tareasJSON.filter(tarea => tarea.completado==true).length;
}

DesplegarDetalleTareas();
