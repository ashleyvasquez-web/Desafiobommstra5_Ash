const btnLista = document.getElementById("btnLista");
const btnCalendario = document.getElementById("btnCalendario");
const vistaLista = document.getElementById("vistaLista");
const vistaCalendario = document.getElementById("vistaCalendario");
const tabla = document.getElementById("tablaCalendario");

btnLista.addEventListener("click", () => {
  vistaLista.classList.remove("d-none");
  vistaCalendario.classList.add("d-none");

  btnLista.classList.add("btn-primary");
  btnLista.classList.remove("btn-outline-secondary");

  btnCalendario.classList.remove("btn-primary");
  btnCalendario.classList.add("btn-outline-secondary");
});

btnCalendario.addEventListener("click", () => {
  vistaLista.classList.add("d-none");
  vistaCalendario.classList.remove("d-none");

  btnCalendario.classList.add("btn-primary");
  btnCalendario.classList.remove("btn-outline-secondary");

  btnLista.classList.remove("btn-primary");
  btnLista.classList.add("btn-outline-secondary");
});

/* ===== DATOS DE CLASES ===== */

const clases = [
  { dia: "Martes", hora: 10, nombre: "Programación Web", grupo: "Gpo 1" },
  { dia: "Jueves", hora: 15, nombre: "Programación Web", grupo: "Gpo 1" },
  { dia: "Lunes", hora: 8, nombre: "Intro. Ingeniería", grupo: "Gpo 3" },
  { dia: "Miércoles", hora: 8, nombre: "Intro. Ingeniería", grupo: "Gpo 3" },
  { dia: "Lunes", hora: 10, nombre: "Intro. Ingeniería", grupo: "Gpo 4" },
  { dia: "Jueves", hora: 8, nombre: "Intro. Ingeniería", grupo: "Gpo 4" }
];

const dias = ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

let thead = "<thead class='table-secondary'><tr>";
dias.forEach(dia => thead += `<th>${dia}</th>`);
thead += "</tr></thead>";

let tbody = "<tbody>";

for (let hora = 8; hora <= 16; hora++) {

  tbody += `<tr>`;
  tbody += `<td class="fw-bold">${hora}:00</td>`;

  for (let d = 1; d < dias.length; d++) {

    const clase = clases.find(c => c.dia === dias[d] && c.hora === hora);

    if (clase) {
      tbody += `
        <td>
          <div class="bg-primary text-white rounded p-2 small">
            ${clase.nombre}<br>
            ${clase.grupo}
          </div>
        </td>
      `;
    } else {
      tbody += `<td></td>`; // CELDA VACÍA OBLIGATORIA
    }

  }

  tbody += `</tr>`;
}

tbody += "</tbody>";

tabla.innerHTML = thead + tbody;