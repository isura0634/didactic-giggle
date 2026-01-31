const cart = JSON.parse(localStorage.getItem("cart")) || [];
const div = document.getElementById("cart-items");
let total = 0;
cart.forEach(p=>{
  total += p.price;
  div.innerHTML += `
    <div class="cart-item">
      <img src="${p.img}" width="80">
      <span>${p.name.ar}</span>
      <strong>${p.price} جنيه</strong>
    </div>
  `;
});
div.innerHTML += `<h3>الإجمالي: ${total} جنيه</h3>`;