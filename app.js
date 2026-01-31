let cart = JSON.parse(localStorage.getItem("cart")) || [];
const productsDiv = document.getElementById("products");
const cartCount = document.getElementById("cart-count");
cartCount.innerText = cart.length;
function renderProducts(list){
  productsDiv.innerHTML = "";
  list.forEach(p=>{
    productsDiv.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name[currentLang]}</h3>
        <p>${p.desc[currentLang]}</p>
        <strong>${p.price} جنيه</strong>
        <button onclick="addToCart(${p.id})">
          ${currentLang === "ar" ? "أضف للسلة" : "Add to Cart"}
        </button>
      </div>
    `;
  });
}
renderProducts(products);
function addToCart(id){
  const product = products.find(p=>p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  cartCount.innerText = cart.length;
}
document.getElementById("search").addEventListener("input", e=>{
  const v = e.target.value.toLowerCase();
  renderProducts(products.filter(p =>
    p.name[currentLang].toLowerCase().includes(v)
  ));
});
function toggleLang(){
  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  renderProducts(products);
}