const btnLista = document.getElementById("btnLista");
const btnCalendario = document.getElementById("btnCalendario");
const vistaLista = document.getElementById("vistaLista");
const vistaCalendario = document.getElementById("vistaCalendario");

btnLista.addEventListener("click", function() {
  vistaLista.classList.remove("d-none");
  vistaCalendario.classList.add("d-none");
});

btnCalendario.addEventListener("click", function() {
  vistaCalendario.classList.remove("d-none");
  vistaLista.classList.add("d-none");
}); 
