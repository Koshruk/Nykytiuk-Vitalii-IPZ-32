
(() => {
    
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", openModal);
    refs.closeModalBtn.addEventListener("click", closeModal);
  
    function openModal() {
      refs.modal.classList.remove("is-hidden");
      refs.modal.classList.add("is-visible");
    }

    function closeModal(){
      refs.modal.classList.add("is-hidden");
      refs.modal.classList.remove("is-visible");
    }
  })();
