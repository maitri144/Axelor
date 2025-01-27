let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth();
let Today = date.getDate();

const CurrentDate = document.querySelector("#full-date-display");
const CalendarDates = document.querySelector(".calendar-dates");
const Icons = document.querySelectorAll(".calendar-navigation span");

const MonthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];


function DisplayCalendar() {
  let FirstDay = new Date(Year, Month, 1);
  let LastDay = new Date(Year, Month + 1, 0);
  let FirstDayIndex = FirstDay.getDay();
  let LastDayIndex = LastDay.getDay();
  let NumOfDays = LastDay.getDate();
  let List = "";

  CurrentDate.textContent = `${MonthsList[Month]} ${Year}`;

  for (let i = FirstDayIndex; i > 0; i--) {
    List += `<li class="inactive">${NumOfDays - i + 1}</li>`;
  }

  for (let i = 1; i <= NumOfDays; i++) {
    let isToday =
      i === date.getDate() &&
      Month === new Date().getMonth() &&
      Year === new Date().getFullYear()
        ? "active"
        : "";

    let isHighlighted = i === Today ? "highlight" : "";
    List += `<li class="${isToday} ${isHighlighted}">${i}</li>`;
  }

  for (let i = LastDayIndex; i < 6; i++) {
    List += `<li class="inactive">${i - LastDayIndex + 1}</li>`;
  }
  CalendarDates.innerHTML = List;
}

DisplayCalendar();

Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    Month = icon.id === "prev" ? Month - 1 : Month + 1;

    if (Month < 0 || Month > 11) {
      date = new Date(Year, Month, new Date().getDate());
      Year = date.getFullYear();
      Month = date.getMonth();
    } else {
      date = new Date();
    }
    DisplayCalendar();
  });
});
