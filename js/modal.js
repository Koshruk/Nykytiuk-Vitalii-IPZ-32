
(() => {
    
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      modalContent: document.querySelector("[data-modal-content]"),
    };
  
    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
  
    function openModal() {
      refs.modal.classList.remove("is-hidden");
      refs.modal.classList.add("is-visible");
    }

    function closeModal(){
      refs.modal.classList.add("close");
      refs.modalContent.classList.add("close-content");
      setTimeout(() => {
        refs.modal.classList.remove("is-visible");
        refs.modal.classList.remove("close");
        refs.modal.classList.add("is-hidden");
      }, 190);
    }
  })();
