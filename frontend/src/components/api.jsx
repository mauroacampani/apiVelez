export async function getTabla() {
  console.log("entro");
  const res = await fetch("http://localhost:8000/futbol/tabla");
  const data = await res.json();
  return data;
}

// export async function getResultados() {
//   const res = await fetch("http://localhost:8000/futbol/resultados");
//   const data = await res.json();
//   return data;
// }
