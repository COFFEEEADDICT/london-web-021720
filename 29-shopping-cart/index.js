const PRODUCTS_URL = "http://localhost:3000/products";
const ORDERS_URL = "http://localhost:3000/orders";

// other stuff
let currentOrder = {
  items: [],
};
let allProducts = [];

// DOM elements

const productsEl = document.querySelector("#products");
const previousEl = document.querySelector("#previous-orders");
const totalSpan = document.querySelector("#total > span");
const placeOrderButton = document.querySelector("button");

// API functions

const getProducts = () => fetch(PRODUCTS_URL).then((res) => res.json());
const getOrders = () => fetch(ORDERS_URL).then((res) => res.json());
const postOrder = () =>
  fetch(ORDERS_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(currentOrder),
  }).then((res) => res.json());

// Render functions

const renderProducts = (products) => {
  products.forEach((product) => {
    renderProduct(product);
  });
};

const renderProduct = (product) => {
  const div = document.createElement("div");

  // <img src="https://i5.walmartimages.com/asr/f1728857-3120-4a4e-b474-d66f8ad1bc77_1.7e41f79bcada186bbbc136d1094be906.jpeg?odnWidth=450&amp;odnHeight=450&amp;odnBg=ffffff" />
  // <h3>Hand sanitiser</h3>
  // <p>£12.99</p>
  // <select>
  //     <option>0</option>
  //     <option>1</option>
  //     <option>2</option>
  // </select>

  const img = document.createElement("img");

  img.src = product.img;
  const h3 = document.createElement("h3");

  h3.innerText = product.name;
  const p = document.createElement("p");

  p.innerText = `£${product.price}`;
  const select = document.createElement("select");

  for (let quantity = 0; quantity <= product.max_quantity; quantity++) {
    const quantityOption = document.createElement("option");

    quantityOption.value = quantity;
    quantityOption.innerText = quantity;

    select.append(quantityOption);
  }

  select.addEventListener("input", (event) => {
    updateOrder(product, parseInt(event.target.value));
  });

  div.append(img, h3, p, select);

  productsEl.append(div);
};

const renderTotal = () => {
  totalSpan.innerText = `£${calculateTotal(currentOrder.items)}`;
};

const updateOrder = (product, quantity) => {
  const newItem = { productId: product.id, quantity };

  currentOrder.items = currentOrder.items.filter(
    (item) => item.productId !== newItem.productId
  );

  if (newItem.quantity > 0) currentOrder.items.push(newItem);

  renderTotal();
};

const calculateTotal = (items) => {
  let total = 0;

  items.forEach((item) => {
    const product = allProducts.find((p) => p.id === item.productId);
    total += product.price * item.quantity;
  });

  return total.toFixed(2);
};

const renderOrder = (order) => {
  // <div>2 Hand sanitisers, 2 Pastas<span>£35.96</span></div>
  const div = document.createElement("div");

  const productPhrases = order.items.map((item) => {
    const product = allProducts.find(
      (product) => item.productId === product.id
    );

    return `${item.quantity} ${product.name}s`;
  });

  div.innerText = productPhrases.join(", ");

  const span = document.createElement("span");

  span.innerText = `£${calculateTotal(order.items)}`;

  div.append(span);

  previousEl.append(div);
};

placeOrderButton.addEventListener("click", () => {
  postOrder().then((order) => renderOrder(order));
});

// getProducts().then((products) => {
//   allProducts = products;
//   renderProducts(products);

//   getOrders().then((orders) => {
//     orders.forEach((order) => renderOrder(order));
//   });
// });

Promise.all([getProducts(), getOrders()]).then(([products, orders]) => {
  allProducts = products;
  renderProducts(products);
  orders.forEach((order) => renderOrder(order));
});

const urls = [];

Promise.all(
  urls.map((url) => fetch(url).then((res) => res.json()))
).then((characters) => {});
