import "./render-table.css";
import usersStore from "../../store/users-store";

let table;
const createTable = () => {
  const table = document.createElement("table");
  const tableHeaders = document.createElement("thead");
  tableHeaders.innerHTML = `
    <tr>
        <th>#ID</th>
        <th>Balance</th>
        <th>FristName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    </tr>
    `;

  const tableBody = document.createElement("tbody");
  table.append(tableHeaders, tableBody);
  return table;
};

export const renderTable = (element) => {
  const users = usersStore.getUsers();
  if (!table) {
    table = createTable();
    element.append(table);
  }
};
