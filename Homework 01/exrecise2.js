// 2. Create a reminder app
// * There should be:
//     * An input for entering the title
//     * An input for entering priority
//     * An input for color
//     * A textarea for adding a description
//     * A button for adding the reminder
//     * A button for showing all reminders
// * When the button for adding is clicked an object needs to be created with the properties from the inputs ( title,
//   priority, color, and description )
// * The object should then be added to an array of reminders
// * When the button for showing all reminders is clicked it should show a table with title, priority, and description
//   columns
// * The title should be the color of the "color" property

let reminders = [];
function Reminder(title, priority, color, description) {
  this.title = title;
  this.priority = priority;
  this.color = color;
  this.description = description;
}

function showReminders(remindersArray, element) {
  element.innerHTML = "";
  for (let reminder of remindersArray) {
    element.innerHTML += `<tr><th style="color: ${color.value}"> Title:</th> <th> Priority:</th> <th> Description:</th></tr>
    <tr><td style="color: ${color.value}" >${title.value}</td> <td>${priority.value}</td><td>${description.value}</td></tr>`;
  }
}

let result = document.querySelector("#table");
let reminderButton = document.querySelector("#addReminder");
let showAllReminders = document.getElementById("button2");

reminderButton.addEventListener("click", function () {
  let title = document.getElementById("title").value;
  let priority = document.getElementById("priority").value;
  let color = document.getElementById("color").value;
  let description = document.getElementById("description").value;

  let newReminder = new Reminder(title, priority, color, description);
  reminders.push(newReminder);
  console.log(reminders);
});

showAllReminders.addEventListener("click", function () {
  showReminders(reminders, result);
  title.value = "";
  priority.value = "";
  description.value = "";
});
