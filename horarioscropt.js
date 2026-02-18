document.addEventListener("DOMContentLoaded", function () {

  const btnLista = document.getElementById("btnLista");
  const btnCalendario = document.getElementById("btnCalendario");
  const vistaLista = document.getElementById("vistaLista");
  const vistaCalendario = document.getElementById("vistaCalendario");
  const tabla = document.getElementById("tablaCalendario");

  // ===== CAMBIO DE VISTAS =====
  btnLista.addEventListener("click", function () {
    vistaLista.classList.remove("d-none");
    vistaCalendario.classList.add("d-none");
    btnLista.classList.remove("btn-outline-secondary");
    btnLista.classList.add("btn-primary");
    btnCalendario.classList.remove("btn-primary");
    btnCalendario.classList.add("btn-outline-secondary");
  });

  btnCalendario.addEventListener("click", function () {
    vistaLista.classList.add("d-none");
    vistaCalendario.classList.remove("d-none");
    btnCalendario.classList.remove("btn-outline-secondary");
    btnCalendario.classList.add("btn-primary");
    btnLista.classList.remove("btn-primary");
    btnLista.classList.add("btn-outline-secondary");
  });

  // ===== CLASES REALES (las de tu tabla lista) =====

  const clases = [
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Martes", inicio: 10, fin: 11 },
    { materia: "PROGRAMACIÓN WEB", grupo: "Gpo 1", dia: "Jueves", inicio: 15, fin: 16 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Lunes", inicio: 8, fin: 9 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 3", dia: "Miércoles", inicio: 8, fin: 9 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Lunes", inicio: 10, fin: 11 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 4", dia: "Jueves", inicio: 8, fin: 9 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Lunes", inicio: 3, fin: 4 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 7", dia: "Jueves", inicio: 1, fin: 2 },

    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Martes", inicio: 3, fin: 4 },
    { materia: "INTRO. INGENIERÍA", grupo: "Gpo 8", dia: "Miércoles", inicio: 1, fin: 2 }
  ];

  const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

  // ===== GENERAR ENCABEZADO =====
  let thead = "<thead class='table-secondary'><tr><th>Hora</th>";
  dias.forEach(d => thead += `<th>${d}</th>`);
  thead += "</tr></thead>";

  // ===== GENERAR CUERPO =====
  let tbody = "<tbody>";

  for (let hora = 1; hora <= 16; hora++) {
    tbody += `<tr><td>${hora}:00</td>`;

    dias.forEach(dia => {

      let contenido = "";

      clases.forEach(clase => {
        if (clase.dia === dia && hora >= clase.inicio && hora < clase.fin) {
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
  }

  tbody += "</tbody>";

  tabla.innerHTML = thead + tbody;

});