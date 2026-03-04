document.addEventListener("DOMContentLoaded", function () {

  const btnLista = document.getElementById("btnLista");
  const btnCalendario = document.getElementById("btnCalendario");
  const vistaLista = document.getElementById("vistaLista");
  const vistaCalendario = document.getElementById("vistaCalendario");
  const tabla = document.getElementById("tablaCalendario");

  // ===== CAMBIO DE VISTA =====
  btnLista.addEventListener("click", function () {
    vistaLista.classList.remove("d-none");
    vistaCalendario.classList.add("d-none");
  });

  btnCalendario.addEventListener("click", function () {
    vistaLista.classList.add("d-none");
    vistaCalendario.classList.remove("d-none");
  });

  // ===== CLASES =====
  const clases = [
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Martes", hora: 10 },
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Jueves", hora: 15 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Lunes", hora: 8 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Miércoles", hora: 8 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Lunes", hora: 10 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Jueves", hora: 8 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Lunes", hora: 15 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Jueves", hora: 13 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Martes", hora: 15 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Miércoles", hora: 13 },

    // ===== ALMUERZO =====
    { materia: "ALMUERZO", grupo: "", dia: "Lunes", hora: 12 },
    { materia: "ALMUERZO", grupo: "", dia: "Martes", hora: 12 },
    { materia: "ALMUERZO", grupo: "", dia: "Miércoles", hora: 12 },
    { materia: "ALMUERZO", grupo: "", dia: "Jueves", hora: 12 },
    { materia: "ALMUERZO", grupo: "", dia: "Viernes", hora: 12 }
  ];

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  // Horas reales del horario
  const horas = [8, 10, 12, 13, 15];

  // ===== GENERAR TABLA =====
  let thead = "<thead class='table-secondary'><tr><th>Hora</th>";
  dias.forEach(d => thead += `<th>${d}</th>`);
  thead += "</tr></thead>";

  let tbody = "<tbody>";

  horas.forEach(hora => {

    let horaFormateada = hora.toString().padStart(2, "0") + ":00";
    tbody += `<tr><td>${horaFormateada}</td>`;

    dias.forEach(dia => {

      let contenido = "";

      clases.forEach(clase => {
        if (clase.dia === dia && clase.hora === hora) {

          let color = clase.materia === "ALMUERZO"
            ? "bg-success"
            : "bg-primary";

          contenido += `
            <div class="badge ${color} d-block mb-1">
              ${clase.materia}
              ${clase.grupo ? "<br>" + clase.grupo : ""}
            </div>
          `;
        }
      });

      tbody += `<td>${contenido}</td>`;
    });

    tbody += "</tr>";
  });

  tbody += "</tbody>";

  tabla.innerHTML = thead + tbody;

});