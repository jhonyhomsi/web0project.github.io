const selectElement = document.getElementById('spec');

// Fetching the list of doctors from the API
fetch('https://doctors-database.onrender.com')
  .then(response => response.json())
  .then(data => {
    // Using map to extract names from the array of doctors
    const specializations = data.map(doctor => doctor.specialization);

    // Adding options to the select element
    specializations.forEach(specialization => {
      const optionElement = document.createElement('option');
      optionElement.value = specialization;
      optionElement.textContent = specialization;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => console.error(error));