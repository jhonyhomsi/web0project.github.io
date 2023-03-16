const selectElements = document.getElementById('doctor');

// Fetching the list of doctors from the API
fetch('https://doctors-database.onrender.com')
  .then(response => response.json())
  .then(data => {
    // Using map to extract names from the array of doctors
    const names = data.map(doctor => doctor.name);

    // Adding options to the select element
    names.forEach(name => {
      const optionElement = document.createElement('option');
      optionElement.value = name;
      optionElement.textContent = name;
      selectElements.appendChild(optionElement);
    });
  })
  .catch(error => console.error(error));