document.addEventListener("DOMContentLoaded", () => {
  const totalDisplay = document.querySelector(".total");
  
  const products = document.querySelectorAll(".list-products > .card-body");

  function calculateTotal() {
    let sum = 0;
    const currentCards = document.querySelectorAll(".card");
    
    currentCards.forEach((card) => {
      const priceText = card.querySelector(".unit-price").innerText;
      const price = parseInt(priceText.replace("$", ""));
      const qty = parseInt(card.querySelector(".quantity").innerText);
      sum += price * qty;
    });

    totalDisplay.innerText = `${sum} $`;
  }

  products.forEach((product) => {
    const plusBtn = product.querySelector(".fa-plus-circle");
    const minusBtn = product.querySelector(".fa-minus-circle");
    const trashBtn = product.querySelector(".fa-trash-alt");
    const heartBtn = product.querySelector(".fa-heart");
    const quantitySpan = product.querySelector(".quantity");

    plusBtn.onclick = () => { 
      let count = parseInt(quantitySpan.innerText);
      count++;
      quantitySpan.innerText = count;
      calculateTotal();
    };

    minusBtn.onclick = () => {
      let count = parseInt(quantitySpan.innerText);
      if (count > 0) {
        count--;
        quantitySpan.innerText = count;
        calculateTotal();
      }
    };

    trashBtn.onclick = () => {
      product.remove();
      calculateTotal();
    };

    heartBtn.onclick = () => {
      heartBtn.style.color = heartBtn.style.color === "red" ? "black" : "red";
    };
  });
});