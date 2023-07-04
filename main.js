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
  name: "Aros de cebolla",
  price: 56,
  image: "logos/aros.jpeg",
  description: "Crujientes aros de cebolla",
});

// productList.push({
//   name: "Dedos de queso ",
//   price: 56,
//   image: "logos/dedos.jpeg",
//   description: "Crujientes dedos de queso",
// });

productList.push({
  name: "Papas a la francesa",
  price: 56,
  image: "logos/papas.jpeg",
  description: "Crujientes papasa la francesa",
});
productList.push({
  name: "Alitas",
  price: 110,
  image: "logos/alitas.jpeg",
  description:
    "Sabores Mango habanero, búfalo, lemon pepper, dinamita, bbq, chipotle, parmesano, y cajún",
});

productList.push({
  name: "Baggle Mar y Tierra",
  price: 120,
  image: "logos/bagleMuestra.jpeg",
  description:
    "Pan denso y crujiente con unacubierta de queso gratinado carne arrachera y camarones, por dentro pulpa de aguacate, queso momozarella y queso crema",
});

productList.push({
  name: "Hamburguesa Ranchera",
  price: 130,
  image: "logos/ranchera.jpeg",
  description:
    "Jugosa carne de arrachera, chorizo, tocino, queso gouda, guacamole, cebolla caramelizada y jalapecho",
});
productList.push({
  name: "Hamburguesa Doble Carne",
  price: 159,
  image: "logos/hamDoblecarne.jpeg",
  description:
    "Doble carne molida de res, queso americano doble, tocino, jitomate, cebolla, lechua, pepinillos y jalapeños ",
});
productList.push({
  name: "Ensalada de camarón ",
  price: 135,
  image: "logos/ensaladaCAM.jpeg",
  description:
    "Mix de lechuga, camarones salteados, aguacate, cherrys, pepino, zanahoria, frituras de maíz y aderezo ",
});
productList.push({
  name: "Ensalada Pollo Crujiente ",
  price: 115,
  image: "logos/ensalada.jpeg",
  description:
    "Mix de lechugas, crujiente pechuga de polo con salsa búfalo, tocino, zanahoriarallada, cherrys, pepino y aderezo",
});
productList.push({
  name: "Lasaña",
  price: 139,
  image: "logos/lasaña.jpeg",
  description:
    "Deliciosas laminas de pasta horneada, intercaladas con carne de res, salsa boloñesa, crema bechamel y queso gratinado ",
});

productList.push({
  name: "Piña Mar",
  price: 189,
  image: "logos/piñaMar.jpeg",
  description:
    "Piña asadare llena de pulpa, camarones y surimi, queso gratinado, salsa diabla, acompañado de arroz y ensalada  ",
});

productList.push({
  name: "Corte T-bone",
  price: 187,
  image: "logos/cortes-para-asar-t-bone.jpg",
  description: "Corte T-BONE de 250gr  al termino de su elección ",
});
productList.push({
  name: "Corte New York",
  price: 187,
  image: "logos/NewYork.jpeg",
  description: "Corte New York  de 250gr  al termino de su elección ",
});
productList.push({
  name: "Corte Rib Eye",
  price: 187,
  image: "logos/corteRibEye.jpeg",
  description: "Corte Rib Eye  de 250gr  al termino de su elección ",
});

productList.push({
  name: "Corte Arrachera",
  price: 195,
  image: "logos/arrachera.jpeg",
  description: "Corte arrachera de 250gr  al termino de su elección ",
});
productList.push({
  name: "?",
  price: 195,
  image: "logos/crokemadam.jpeg",
  description: "?",
});
productList.push({
  name: "??",
  price: 195,
  image: "logos/huevos.jpeg",
  description: "??",
});
productList.push({
  name: "???",
  price: 195,
  image: "logos/sabe1.jpeg",
  description: "???",
});
productList.push({
  name: "????",
  price: 195,
  image: "logos/sabe2.jpeg",
  description: "????",
});
productList.push({
  name: "?????",
  price: 195,
  image: "logos/sabe3.jpeg",
  description: "?????",
});
productList.push({
  name: "?????",
  price: 195,
  image: "logos/sabe4.jpeg",
  description: "?????",
});
productList.push({
  name: "?????",
  price: 195,
  image: "logos/sabe5.jpeg",
  description: "?????",
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
