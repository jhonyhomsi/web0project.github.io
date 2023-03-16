// Display the data in the HTML table
function displayDataInTable(data) {
    const tableBody = document.querySelector('#appointment tbody');
  
    // Clear any existing rows from the table
    tableBody.innerHTML = '';
  
    // Loop through the data and add each row to the table
    data.forEach(row => {
      const newRow = tableBody.insertRow();
  
      // Add the row data to the table cells
      Object.values(row).forEach(value => {
        const newCell = newRow.insertCell();
        const newText = document.createTextNode(value);
        newCell.appendChild(newText);
      });
    });
  }