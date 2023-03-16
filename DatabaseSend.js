document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-group');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
    
      const spec = document.getElementById('spec').value;
      const DocName = document.getElementById('DocName').value;
      const Date = document.getElementById('Date').value;
      const apptime = document.getElementById('apptime').value;
    
    
      const data = { spec, DocName, Date, apptime };
    
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      };
    
      try {
        const response = await fetch('https://database-enter.onrender.com/api/data', options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    });
  });  