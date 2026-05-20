

console.log("Hola mundo!");

const btn = document.getElementById("btnCleanIt");
const inClean = document.getElementById("inSomething");

btn.addEventListener("click", () => {
  inClean.value = "";
  console.log("Limpiado el input");
})