let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let header_date = document.querySelector("#full-date-display");
let calendar_dates = document.querySelector(".calendar-dates");
const Icons = document.querySelectorAll(".calendar-navigation span");

const months = [
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

function display_calendar() {
  let firstday = new Date(year, month, 1);
  let lastday = new Date(year, month + 1, 0);
  let firstdayIndex = firstday.getDay();
  let lastdayIndex = lastday.getDay();
  let numofdays = lastday.getDate();
  let list = "";

  header_date.textContent = `${months[month]} ${year}`;

  for (let i = firstdayIndex; i > 0; i--) {
    list += `<li class="inactive">${numofdays - i + 1}</li>`;
  }

  for (let i = 1; i <= numofdays; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    list += `<li class="${isToday}">${i}</li>`;
  }

  for (let i = lastdayIndex; i < 6; i++) {
    list += `<li class="inactive">${i - lastdayIndex + 1}</li>`;
  }
  calendar_dates.innerHTML = list;
}

display_calendar();

Icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    month = icon.id === "prev" ? month - 1 : month + 1;

    if (month < 0 || month > 11) {
      date = new Date(year, month, new Date().getDate());
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    display_calendar();
  });
});
