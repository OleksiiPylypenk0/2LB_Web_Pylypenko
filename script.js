 let intervalId;

    function startGenerating() {
      const interval = document.getElementById("interval").value;
      intervalId = setInterval(generateRow, interval);
    }

    function stopGenerating() {
      clearInterval(intervalId);
    }

    function generateRow() {
      const table = document.getElementById("dataTable");
      const tbody = table.querySelector("tbody");
      const newRow = document.createElement("tr");

      for (let i = 0; i < 3; i++) {
        const randomData = Math.floor(Math.random() * 1000);
        const newCell = document.createElement("td");
        newCell.textContent = randomData;
        newRow.appendChild(newCell);
      }

      const rowCount = tbody.childElementCount;
      if (rowCount % 2 === 0) {
        newRow.classList.add("evenRow");
      } else {
        newRow.classList.add("oddRow");
      }

      tbody.appendChild(newRow);
    }