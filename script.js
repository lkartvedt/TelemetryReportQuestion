document.addEventListener('DOMContentLoaded', function() {
    populateLaunchDates();

    const runReportButton = document.getElementById('runReportButton');
    if (runReportButton) {
        runReportButton.addEventListener('click', runReport);
    }
    if (clearReportButton) {
        clearReportButton.addEventListener('click', clearReport);
    }
  });


let selectedLaunchId = null; // To store the ID of the selected launch date

function populateLaunchDates() {
  const launchDatesList = document.getElementById('launchDates').querySelector('ul');
  const launchDates = [
      { id: '0003', date: '2023-12-31T12:39:30-08:00' },
      { id: '0002', date: '2024-02-02T11:41:15-08:00' },
      { id: '0001', date: '2024-03-11T17:24:00-08:00' },
      { id: '0004', date: '2023-10-18T06:07:20-08:00' },
      { id: '0005', date: '2023-09-03T13:12:59-08:00' }
  ];

  // Sort the launchDates array by date in descending order (most recent first)
  launchDates.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Clear existing list items
  launchDatesList.innerHTML = '';

  launchDates.forEach(launchDate => {
    let li = document.createElement('li');
    let formattedDate = formatDate(launchDate.date);
    li.textContent = formattedDate;
    li.onclick = function() {
        selectedLaunchId = launchDate.id; // Update the selected ID
        document.querySelectorAll('#launchDates li').forEach(item => item.classList.remove('selected'));
        li.classList.add('selected'); // Highlight the selected date
    };
    launchDatesList.appendChild(li);
  });
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    let formattedDate = date.toLocaleString('en-US', options);

    // Remove ", at " from the formatted date string
    formattedDate = formattedDate.replace(' at ', ' ');

    const day = date.getDate();
    let ordinalIndicator;

    if (day > 3 && day < 21) ordinalIndicator = 'th';
    else {
        switch (day % 10) {
            case 1:  ordinalIndicator = 'st'; break;
            case 2:  ordinalIndicator = 'nd'; break;
            case 3:  ordinalIndicator = 'rd'; break;
            default: ordinalIndicator = 'th';
        }
    }

    const parts = formattedDate.split(' ');
    parts[1] = `${day}${ordinalIndicator},`;
    return parts.join(' ');
}


function runReport() {
  if (!selectedLaunchId) {
    alert('Please select a launch date first.');
    return;
  }

  fetch(`http://localhost:3000/getReport?id=${selectedLaunchId}`)
    .then(response => response.json())
    .then(data => {
      updateTable(data); // Directly pass the data without wrapping it in an array
    })
    .catch(error => console.error('Error:', error));
}

function clearReport() {
  const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear the table content
}

function updateTable(satellites) {
  const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear existing rows

  satellites.forEach(sat => {
    let row = tableBody.insertRow();
    let cellId = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellStatus = row.insertCell(2);

    cellId.textContent = sat.id;
    cellName.textContent = sat.name;
    cellStatus.textContent = sat.status;
  });
}

