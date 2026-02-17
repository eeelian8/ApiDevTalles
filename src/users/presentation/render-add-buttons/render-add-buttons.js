import "./render-add-buttons.css";
import { showModal } from "../render-modal/render-modal.js";

/**
 *
 * @param {HTMLDivElement} element
 * @param {()=>void} callback
 */
export const renderAddButtons = (element, callback) => {
  const fabButton = document.createElement("button");
  fabButton.innerText = "+";
  fabButton.classList.add("fab-button");

  element.append(fabButton);

  fabButton.addEventListener("click", () => {
    showModal();
  });
};
