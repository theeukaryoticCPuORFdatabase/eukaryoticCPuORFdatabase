// app.js
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('arabidopsis-tbody');

    fetch('fly2.json')
      .then(response => response.json())
      .then(data => {
          tableBody.innerHTML = ''; // Clear previous content

          // Replace 'null' values with an empty string in each item
          data.forEach(item => {
              for (let key in item) {
                  if (item[key] === null) {
                      item[key] = ''; // Replacing null with an empty string
                  }
              }
              // Create a row for each item
              const row = document.createElement('tr');
              row.innerHTML = `
                  <td>${item["Gene ID"]}</td>
                  <td>${item["Homology Group"]}</td>
                  <td>${item.mORF}</td>
                  <td>${item["CPuORF Class"]}</td>
                  <td>${item["CPuORF length (aa)"]}</td>
                  <td>${item["AUG start codon?"]}</td>
                  <td>${item["Intercistronic distance (nt)"]}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error loading the CPuORF data:', error);
          tableBody.innerHTML = `<p>Error loading data.</p>`;
      });
});
