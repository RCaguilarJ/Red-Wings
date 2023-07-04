const navEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");
const imagen = document.querySelector("#infoImages");
const priceProduct = document.querySelector("#price");

//const mediaQuery = window.matchMedia("(max-width: 640px)");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive");
  const isproductDetailContainer =
    productDetailContainer.classList.contains("inactive");

  desktopMenu.classList.toggle("inactive");

  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }

  if (!isproductDetailContainer) {
    productDetailContainer.classList.add("inactive");
  }
  // //     // if(!desktopMenu.classList.toggle("inactive")){
  // //     //     desktopMenu.classList.remove("inactive");
  // //     //  }else{
  // //     //     desktopMenu.classList.add("inactive");
  // //     //  }
}

function toggleMobileMenu() {
  const isAsideClose = shoppingCartContainer.classList.contains("inactive");

  mobileMenu.classList.toggle("inactive"); //Si esta lo elimina, si no esta lo activa
  if (!isAsideClose) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();
}

function toggleCarritoAside() {
  const isMobileMenuClose = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); // El elemento contiene la clase inactive = true (cerrado)
  // El elemento no contiene la clase inactive = falso (abierto)
  const isProductDetailClose =
    productDetailContainer.classList.contains("inactive");

  shoppingCartContainer.classList.toggle("inactive");
  if (!isMobileMenuClose) {
    // si esta abierto
    mobileMenu.classList.add("inactive");
  }

  if (!isDesktopMenuClose) {
    desktopMenu.classList.add("inactive");
  }

  if (!isProductDetailClose) {
    productDetailContainer.classList.add("inactive");
  }
}

function openProductDetailAside(event, product) {
  // let productDetailContainer = docment.querySelector(`#productDetail`);
  console.log(event.target.src);
  document
    .querySelector("#productDetail-image")
    .setAttribute("src", event.target.src);
  document.querySelector("#productDetail-name").innerHTML = product.name;

  document.querySelector("#productDetail-price").innerHTML = product.price;

  document.querySelector("#productDetail-description").innerHTML =
    product.description;

  shoppingCartContainer.classList.add("inactive");
  mobileMenu.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
  desktopMenu.classList.add("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

function toggleMenus() {
  if (mediaQuery.matches) {
    mobileMenu.classList.toggle("inactive");
  } else {
    desktopMenu.classList.toggle("inactive");
  }
}

const productList = [];

productList.push({
  name: " ¡MEGA COMBO!",
  price: 230,
  image: "logos/promoLunes(1).jpg",
  description:
    "14 piezas con dos salsas, orden de patatas, odern de salchipulpos y orden de popis!",
});

productList.push({
  name: "Alitas",
  price: 95,
  image: "logos/alitas(1).jpg",
  description:
    "delciosas piezas de alitas sabores búfalo, mango habanero, bbq y lemon pepper ",
});
productList.push({
  name: "Boneless",
  price: 95,
  image: "logos/boneless(1).jpg",
  description:
    "delciosas piezas de boneless sabores búfalo, mango habanero, bbq y lemon pepper ",
});

productList.push({
  name: "Papas fritas",
  price: 30,
  image: "logos/papas2(1).jpg",
  description: "delciosas papas fritas en aceite aderezadas con sal  ",
});

productList.push({
  name: "COMBO FAMILIAR!",
  price: 490,
  image: "logos/comboFamiliar(1).jpg",
  description:
    "-12 piezas de litas -12 piezas de boneless -1 orden de aros de cebolla  -1 orden de dedos de queso  -1 orden de jalapeños poppers -1 orden de papas a la fancesa",
});
productList.push({
  name: "PROMO LUNES!",
  price: 170,
  image: "logos/LunesDePromo(1).jpg",
  description: "Dos ordenes de boneleess + 1 coca de 1.25ml",
});
productList.push({
  name: "PATATAS",
  price: 30,
  image: "logos/patatas(1).jpg",
  description: "Crujiente y deliciosa orden de patatas",
});
productList.push({
  name: "PAQUETE INDIVIDUAL!",
  price: 30,
  image: "logos/paqueteIndividual(1).jpg",
  description: "Alitas o boneless + papas a la francesa",
});

const openProductInfo = (product) => {
  //muestra el aside con la info del producto seleccionado
  const aside = document.querySelector(".product-detail-main");
  const productImg = document.querySelector(".product-detail-main-img");
  const productPrice = document.querySelector(".product-info .product-price");
  const productName = document.querySelector(".product-info .product-name");
  aside.classList.remove("inactive");
  productImg.setAttribute("src", product.img);
  productPrice.textContent = product.price;
  productName.textContent = product.name;
};

function renderProducts(arr) {
  for (let index = 0; index < arr.length; index++) {
    let product = arr[index];

    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    //product = {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.setAttribute("id", "imagen");
    productImg.addEventListener("click", (e) => {
      openProductDetailAside(e, product);
    });

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productInfoPrice = document.createElement("p");
    productInfoPrice.innerText = "$ " + product.price;

    const productInfoName = document.createElement("p");
    productInfoName.innerText = product.name;

    productInfoDiv.appendChild(productInfoPrice);
    productInfoDiv.appendChild(productInfoName);

    const productInfofigure = document.createElement("figure");

    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfofigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfofigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}
renderProducts(productList);
