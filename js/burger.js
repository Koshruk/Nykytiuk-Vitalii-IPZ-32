(() => {
    
    const refs = {
      openBurgerBtn: document.querySelector("[burger-open]"),
      burger: document.querySelector("[burger]"),
      closeBurgerBtn: document.querySelector("[burger-close]"),
    };
  
    refs.openBurgerBtn.addEventListener("click", openBurger);
    refs.closeBurgerBtn.addEventListener("click", closeBurger);
  
    function openBurger() {
      refs.burger.classList.remove("is-hidden");
      refs.burger.classList.add("is-visible-burger");
    }

    function closeBurger(){
      refs.burger.classList.add("close-burger");
      setTimeout(() => {
        refs.burger.classList.remove("close-burger");
        refs.burger.classList.add("is-hidden");
        refs.burger.classList.remove("is-visible-burger");
      }, 190);
    }
  })();