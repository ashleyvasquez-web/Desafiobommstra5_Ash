const btnLista = document.getElementById("btnLista");
const btnCalendario = document.getElementById("btnCalendario");
const vistaLista = document.getElementById("vistaLista");
const vistaCalendario = document.getElementById("vistaCalendario");
const tabla = document.getElementById("tablaCalendario");

btnLista.addEventListener("click", () => {
  vistaLista.classList.remove("d-none");
  vistaCalendario.classList.add("d-none");

  btnLista.classList.replace("btn-outline-secondary", "btn-primary");
  btnCalendario.classList.replace("btn-primary", "btn-outline-secondary");
});

btnCalendario.addEventListener("click", () => {
  vistaLista.classList.add("d-none");
  vistaCalendario.classList.remove("d-none");

  btnCalendario.classList.replace("btn-outline-secondary", "btn-primary");
  btnLista.classList.replace("btn-primary", "btn-outline-secondary");
});

const dias = ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

let thead = "<thead class='table-secondary'><tr>";
dias.forEach(dia => thead += `<th>${dia}</th>`);
thead += "</tr></thead>";

let tbody = "<tbody>";

for (let hora = 8; hora <= 14; hora++) {
  tbody += `<tr>`;
  tbody += `<td>${hora}:00</td>`;

  for (let d = 1; d < dias.length; d++) {
    tbody += `<td></td>`; // celda vacía OBLIGATORIA
  }

  tbody += `</tr>`;
}

tbody += "</tbody>";

tabla.innerHTML = thead + tbody;