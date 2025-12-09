const timetable = {
  "08:40 – 09:30": {
    Monday: "🔬 Microwave Engineering",
    Tuesday: "🧠 MPMC",
    Wednesday: "🎯 PE-II",
    Thursday: "🎯 PE-II",
    Friday: "📜 Constitution"
  },

  "09:30 – 10:20": {
    Monday: "🌐 CCN",
    Tuesday: "🌐 CCN",
    Wednesday: "🔧 MPMC / MW Lab",
    Thursday: "🧠 MPMC",
    Friday: "🔬 Microwave"
  },

  "10:20 – 11:10": {
    Monday: "🎯 PE-II",
    Tuesday: "🔬 Microwave",
    Wednesday: "🔧 Lab Continued",
    Thursday: "🔬 Microwave",
    Friday: "🌐 CCN"
  },

  "11:10 – 12:00": {
    Monday: "🍴 LUNCH",
    Tuesday: "🍴 LUNCH",
    Wednesday: "🔧 Lab Continued",
    Thursday: "🍴 LUNCH",
    Friday: "🍴 LUNCH"
  },

  "12:00 – 12:50": {
    Monday: "🧠 MPMC",
    Tuesday: "🧪 CCN Lab",
    Wednesday: "🍴 LUNCH",
    Thursday: "🔧 MW / MPMC Lab",
    Friday: "🎤 Soft Skills Lab"
  },

  "12:50 – 01:40": {
    Monday: "📜 Constitution",
    Tuesday: "🔧 Lab Continued",
    Wednesday: "🌐 CCN",
    Thursday: "🔧 Lab Continued",
    Friday: "🔧 Lab Continued"
  },

  "01:40 – 02:30": {
    Monday: "📚 Library",
    Tuesday: "🔧 Lab Continued",
    Wednesday: "🧠 MPMC",
    Thursday: "📄 Open Elective-II",
    Friday: "📄 Open Elective-II"
  },

  "02:30 – 03:20": {
    Monday: "⚽ Sports",
    Tuesday: "🎯 PE-II",
    Wednesday: "📄 Open Elective-II",
    Thursday: "📄 Open Elective-II",
    Friday: "📄 Open Elective-II"
  },

  "03:20 – 04:10": {
    Monday: "🏆 Honors",
    Tuesday: "🏆 Honors",
    Wednesday: "🏆 Honors",
    Thursday: "🏆 Honors",
    Friday: "🎓 Honors (MOOCs)"
  }
};

const table = document.querySelector("table");

Object.keys(timetable).forEach(time => {
  const row = document.createElement("tr");

  const timeCell = document.createElement("td");
  timeCell.textContent = time;
  row.appendChild(timeCell);

  ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].forEach(day => {
    const cell = document.createElement("td");
    cell.innerHTML = timetable[time][day] || "-";
    row.appendChild(cell);
  });

  table.appendChild(row);
});

