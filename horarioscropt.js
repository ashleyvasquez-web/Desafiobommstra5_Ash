document.addEventListener("DOMContentLoaded", function () {

  const btnLista = document.getElementById("btnLista");
  const btnCalendario = document.getElementById("btnCalendario");
  const vistaLista = document.getElementById("vistaLista");
  const vistaCalendario = document.getElementById("vistaCalendario");
  const tabla = document.getElementById("tablaCalendario");

  // ================= CAMBIO DE VISTAS =================
  btnLista.addEventListener("click", function () {
    vistaLista.classList.remove("d-none");
    vistaCalendario.classList.add("d-none");
  });

  btnCalendario.addEventListener("click", function () {
    vistaLista.classList.add("d-none");
    vistaCalendario.classList.remove("d-none");
  });

  // ================= CLASES REALES =================
  const clases = [
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Martes", hora: 10 },
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Jueves", hora: 15 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Lunes", hora: 8 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Miércoles", hora: 8 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Lunes", hora: 10 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Jueves", hora: 8 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Lunes", hora: 3 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Jueves", hora: 1 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Martes", hora: 3 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Miércoles", hora: 1 }
  ];

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  // Horas reales que existen en tu tabla
  const horas = [1,2,3,8,9,10,11,15,16];

  // ================= GENERAR TABLA =================
  let thead = "<thead class='table-secondary'><tr><th>Hora</th>";
  dias.forEach(d => thead += `<th>${d}</th>`);
  thead += "</tr></thead>";

  let tbody = "<tbody>";

  horas.forEach(hora => {

    tbody += `<tr><td>${hora}:00</td>`;

    dias.forEach(dia => {

      let contenido = "";

      clases.forEach(clase => {
        if (clase.dia === dia && clase.hora === hora) {
          contenido += `
            <div class="badge bg-primary d-block mb-1">
              ${clase.materia}<br>${clase.grupo}
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