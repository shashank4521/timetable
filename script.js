const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const today = days[new Date().getDay()];

const headers = document.querySelectorAll("th");

headers.forEach(th => {
  if (th.innerText === today) {
    const colIndex = th.cellIndex;
    const rows = document.querySelectorAll("tr");

    rows.forEach(row => {
      if (row.cells[colIndex]) {
        row.cells[colIndex].classList.add("today");
      }
    });
  }
});
