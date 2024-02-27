// app.js
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('arabidopsis-tbody');

    fetch('Arabidopsis.json')
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
                  <td>${item.CPuORF}</td>
                  <td>${item["Homology group\n"]}</td>
                  <td>${item.AGI}</td>
                  <td>${item.mORF}</td>
                  <td>${item.rCUTS}</td>
                  <td>${item.aCUTS}</td>
                  <td>${item["CPuORF class\n"]}</td>
                  <td>${item["CPuORF length (aa)\n"]}</td>
                  <td>${item["uAUG start?"]}</td>
                  <td>${item["intercistronic distance (nt)"]}</td>
                  <td class="length-col">${item["AA Sequence"]}</td>
                  <td>${item["Notes\n"]}</td>
                  <td>${item.References}</td>
              `;
              tableBody.appendChild(row);
          });
      })
      .catch(error => {
          console.error('Error loading the CPuORF data:', error);
          tableBody.innerHTML = `<p>Error loading data.</p>`;
      });
});
