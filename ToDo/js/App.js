// Input
const inputTODO = document.getElementById("inputTODO");
// Boton
const btnTODO = document.getElementById("boton");

// Hacer funcion que al precionar el boton agregue una tarea
btnTODO.addEventListener("click", () => {
  // Comprobar si el input esta vacio y si si no agregar una tarea
  if (inputTODO.value === "") {
    alert("No puedes agregar una tarea vacia");
    return;
  } else {
    // Crear una nueva tarea
    const task = document.createElement("li");
    // Agregar un texto a la tarea
    task.innerText = inputTODO.value;

    // Crear botones
    const btnDelete = document.createElement("button");
    const btnEdit = document.createElement("button");
    // Agregar texto a los botones
    btnDelete.innerText = "Eliminar";
    // Agregar atributo a los botones
    btnDelete.setAttribute("class", "btnDelete");
    btnEdit.innerText = "Editar";
    btnEdit.setAttribute("class", "btnEdit");
    // Agregar los botones a la tarea
    task.appendChild(btnDelete);
    task.appendChild(btnEdit);

    document.getElementById("listaTareas").appendChild(task);
    // Limpiar el input
    inputTODO.value = "";
  }
});
// Eliminar tarea
document.addEventListener("click", (e) => {
  if (e.target.className === "btnDelete") {
    e.target.parentElement.remove();
  }
});
// Editar tarea
document.addEventListener("click", (e) => {
  if (e.target.className === "btnEdit") {
    const task = e.target.parentElement;
    const inputEdit = document.createElement("input");
    inputEdit.setAttribute("type", "text");
    inputEdit.setAttribute("class", "inputEdit");
    task.innerText = "";
    task.appendChild(inputEdit);
    // Boton de guardar
    const btnSave = document.createElement("button");
    btnSave.innerText = "Guardar";
    btnSave.setAttribute("class", "btnSave");
    task.appendChild(btnSave);
  }
});
// Guardar tarea
document.addEventListener("click", (e) => {
  if (e.target.className === "btnSave") {
    // Validar si el capo esta vacio
    if (e.target.previousElementSibling.value === "") {
      alert("No puedes guardar una tarea vacia");
      return;
    } else {
      const task = e.target.parentElement;
      task.textContent = task.querySelector(".inputEdit").value;
      // agregar botones
      const btnDelete = document.createElement("button");
      const btnEdit = document.createElement("button");
      btnDelete.textContent = "Eliminar";
      btnDelete.setAttribute("class", "btnDelete");
      btnEdit.textContent = "Editar";
      btnEdit.setAttribute("class", "btnEdit");
      task.appendChild(btnDelete);
      task.appendChild(btnEdit);
    }
  }
});
