const tbody = document.getElementById("tbody");
const popup = document.querySelector(".popup");
const form = document.querySelector(".popup-body");
const arr = [
  {
    name: "amit",
    role: "SDE",
    salary: 3432324,
    phoneNumber: 5484848664,
    companyName: "google",
  },
];

let employeeId = 1000;
function addEmployee(employeeObj) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.innerText = employeeId++;

  tr.append(td);

  for (let key in employeeObj) {
    const dataCell = document.createElement("td");
    dataCell.innerText = employeeObj[key];
    tr.append(dataCell);
  }

  const actionCell = document.createElement("td");
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  const editBtn = document.createElement("button");
  editBtn.innerText = "Edit";

  deleteBtn.addEventListener('click',deleteEmployeeData)
  actionCell.append(deleteBtn, editBtn);
  tr.append(actionCell);

  tbody.append(tr);
}

arr.forEach((item) => {
  addEmployee(item);
});

function deleteEmployeeData(e){
    e.target.parentNode.parentNode.remove();
}
function togglerBtn() {
  if (popup.style.display === "flex") {
    popup.style.display = "none";
  } else popup.style.display = "flex";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const employeeObj = {
    name: e.target.name.value,
    role: e.target.role.value,
    salary: e.target.salary.value,
    phoneNumber: e.target.phone.value,
    companyName: e.target.company.value,
  };
  addEmployee(employeeObj);
  form.reset();
  togglerBtn();
});
