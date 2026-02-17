import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButtons } from "./presentation/render-add-buttons/render-add-buttons";
import { renderModal } from "./presentation/render-modal/render-modal";

export const UsersApp = async (element) => {
  element.innerHTML = "Loading...";
  await usersStore.loadNextPage();
  element.innerHTML = "";

  renderTable(element);
  renderButtons(element);
  renderAddButtons(element, () => {
    console.log("Fab button clicked");
  });
  renderModal(element);
};
