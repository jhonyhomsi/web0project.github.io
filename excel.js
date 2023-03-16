// Load the Excel file and display the data in the HTML table
async function loadExcelFile() {
    const response = await fetch('apmnt1.xlsx');
    const buffer = await response.arrayBuffer();
    const wb = XLSX.read(buffer, {type:'buffer'});
    
    // Get the first sheet
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    
    // Convert the sheet data to an array of objects
    const data = XLSX.utils.sheet_to_json(ws);
    
    // Display the data in the HTML table
    displayDataInTable(data);
  }
    
  // Call the loadExcelFile function when the page loads
  window.onload = loadExcelFile;  