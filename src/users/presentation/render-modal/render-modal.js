import "./render-modal.css";

import modalHtml from "./render-modal.html?raw";
let modal;

export const showModal = () => {
  modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
  modal?.classList.add("hide-modal");
};

/**
 * @param {HTMLDivElement} element
 */
export const renderModal = (element) => {
  if (modal) return;
  modal = document.createElement("div");
  modal.innerHTML = modalHtml;
  modal.className = "modal-container hide-modal";

  element.append(modal);
};
