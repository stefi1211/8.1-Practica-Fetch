const DATA_URL = "json/data.json"; // URL que contiene los datos que queremos mostrar
const container = document.getElementById("container"); // Traemos el div de id "container" para colocar la información en él

/**
 * Función que recibe por parámetro un array con los datos que se mostrarán en el DOM
 * Los datos se mostrarán dentro del div de id "container" y por cada ítem se está creando un nuevo ítem de lista
 * con las clases de CSS personalizadas
 */
function showData(dataArray) {
  // Limpiamos el contenedor antes de agregar nuevos datos
  container.innerHTML = '';

  // El for itera sobre los elementos del array
  for (const item of dataArray) {
    container.innerHTML += `
      <div class="list-item">
        <h5>${item.name} ${item.lastname}</h5>
        <p>Edad: ${item.age}</p>
      </div>`;
  }
}

// Fetch para obtener los datos del archivo JSON
fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); 
  })
  .then(data => {
    const students = data.students;
    showData(students); 
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

