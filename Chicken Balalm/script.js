const meals = [

  {
    id: "meal-balalm",

    category: "meals",

    name: "وجبة بالالم",

    price: 255,

    image:
      "assets/meal-balalm.jpg",

    description:
      "نصف فرخة بروستد + بطاطس + 1 خبز + ثومية + كول سلو + كاتشب."
  },

  {
    id: "meal-strips-3",

    category: "meals",

    name: "وجبة ستربس - 3 قطع",

    price: 160,

    image:
      "assets/meal-strips.jpg",

    description:
      "3 قطع ستربس + بطاطس + خبز + ثومية + كاتشب + كول سلو."
  },

  {
    id: "meal-strips-5",

    category: "meals",

    name: "وجبة ستربس - 5 قطع",

    price: 215,

    image:
      "assets/meal-strips.jpg",

    description:
      "5 قطع ستربس + بطاطس + خبز + ثومية + كاتشب + كول سلو."
  }

];


const crumbs = [

  {
    id: "crumb-smoky",

    category: "crumbs",

    name: "فتة سموكي",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج بصوص سموكي وبطاطس."
  },

  {
    id: "crumb-sriracha",

    category: "crumbs",

    name: "فتة شيراشا",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج بصوص شيراشا الحار."
  },

  {
    id: "crumb-sweet",

    category: "crumbs",

    name: "فتة سويت شيلي",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج بصوص السويت شيلي."
  },

  {
    id: "crumb-bbq",

    category: "crumbs",

    name: "فتة باربكيو",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج بصوص الباربكيو."
  },

  {
    id: "crumb-ranch",

    category: "crumbs",

    name: "فتة رانش",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج بصوص الرانش."
  },

  {
    id: "crumb-cheesy-sweet",

    category: "crumbs",

    name: "فتة شيدر سويت شيلي",

    price: 170,

    image:
      "assets/crumbs-products.jpg",

    description:
      "فتة دجاج مع الشيدر والسويت شيلي."
  }

];


const cheesy = [

  {
    id: "cheesy-bbq",

    category: "cheesy",

    name: "تشيزي باربكيو",

    price: 170,

    image:
      "assets/cheesy-products.jpg",

    description:
      "تشيزي بطاطس ودجاج مع صوص الباربكيو."
  },

  {
    id: "cheesy-ranch",

    category: "cheesy",

    name: "تشيزي رانش",

    price: 170,

    image:
      "assets/cheesy-products.jpg",

    description:
      "تشيزي بطاطس ودجاج مع صوص الرانش."
  },

  {
    id: "cheesy-smoky",

    category: "cheesy",

    name: "تشيزي سموكي",

    price: 170,

    image:
      "assets/cheesy-products.jpg",

    description:
      "تشيزي بطاطس ودجاج مع نكهة سموكي."
  },

  {
    id: "cheesy-sweet",

    category: "cheesy",

    name: "تشيزي سويت شيلي",

    price: 170,

    image:
      "assets/cheesy-products.jpg",

    description:
      "تشيزي بطاطس ودجاج مع السويت شيلي."
  },

  {
    id: "cheesy-sriracha",

    category: "cheesy",

    name: "تشيزي شيراشا",

    price: 170,

    image:
      "assets/cheesy-products.jpg",

    description:
      "تشيزي بطاطس ودجاج مع صوص شيراشا."
  }

];


const addons = [

  {
    id: "addon-basmati",
    category: "addons",
    name: "أرز بسمتي",
    price: 35
  },

  {
    id: "addon-fries",
    category: "addons",
    name: "باكيت بطاطس",
    price: 35
  },

  {
    id: "addon-cheese-jar",
    category: "addons",
    name: "جار جبنة",
    price: 50
  },

  {
    id: "addon-garlic",
    category: "addons",
    name: "ثومية",
    price: 20
  },

  {
    id: "addon-kaiser",
    category: "addons",
    name: "عيش كيزر",
    price: 10
  },

  {
    id: "addon-coleslaw",
    category: "addons",
    name: "كول سلو",
    price: 20
  },

  {
    id: "addon-bbq",
    category: "addons",
    name: "صوص باربكيو",
    price: 25
  },

  {
    id: "addon-cheddar",
    category: "addons",
    name: "صوص شيدر - برطمان",
    price: 50
  },

  {
    id: "addon-sweet",
    category: "addons",
    name: "صوص سويت شيلي",
    price: 25
  },

  {
    id: "addon-ranch",
    category: "addons",
    name: "صوص رانش",
    price: 25
  },

  {
    id: "addon-cheesy-fries",
    category: "addons",
    name: "تشيزي فرايز",
    price: 50
  },

  {
    id: "addon-drink",
    category: "addons",
    name: "مشروب",
    price: 25
  },

  {
    id: "addon-water",
    category: "addons",
    name: "مياه",
    price: 15
  },

  {
    id: "addon-combo",
    category: "addons",
    name: "كومبو",
    price: 50
  },

  {
    id: "addon-icecream",
    category: "addons",
    name: "آيس كريم فانيليا",
    price: 50
  }

];


const allProducts = [
  ...meals,
  ...crumbs,
  ...cheesy,
  ...addons
];


let cart =
  JSON.parse(
    localStorage.getItem(
      "balalm_cart"
    ) || "[]"
  );


let activeCategory = "all";


let customer =
  JSON.parse(
    localStorage.getItem(
      "balalm_customer"
    ) || "null"
  );


const els = {

  mealsGrid:
    document.getElementById(
      "mealsGrid"
    ),

  crumbsGrid:
    document.getElementById(
      "crumbsGrid"
    ),

  cheesyGrid:
    document.getElementById(
      "cheesyGrid"
    ),

  addonsGrid:
    document.getElementById(
      "addonsGrid"
    ),

  searchInput:
    document.getElementById(
      "searchInput"
    ),

  clearSearch:
    document.getElementById(
      "clearSearch"
    ),

  searchHint:
    document.getElementById(
      "searchHint"
    ),

  cartCount:
    document.getElementById(
      "cartCount"
    ),

  cartDrawer:
    document.getElementById(
      "cartDrawer"
    ),

  drawerOverlay:
    document.getElementById(
      "drawerOverlay"
    ),

  cartItems:
    document.getElementById(
      "cartItems"
    ),

  cartQuantity:
    document.getElementById(
      "cartQuantity"
    ),

  cartTotal:
    document.getElementById(
      "cartTotal"
    ),

  customerModal:
    document.getElementById(
      "customerModal"
    ),

  orderModal:
    document.getElementById(
      "orderModal"
    ),

  toast:
    document.getElementById(
      "toast"
    ),

  toastTitle:
    document.getElementById(
      "toastTitle"
    ),

  toastText:
    document.getElementById(
      "toastText"
    ),

  toastIcon:
    document.getElementById(
      "toastIcon"
    ),

  checkoutPreview:
    document.getElementById(
      "checkoutPreview"
    )

};


function money(value) {

  return `${value} جنيه`;

}


function productCard(p) {

  return `

    <article class="product-card reveal">

      <div class="product-media">

        <img
          src="${p.image || "assets/hero.jpg"}"
          alt="${p.name}"
          loading="lazy"
        >

        <span class="product-tag">

          ${
            p.category === "addons"
              ? "إضافة"
              : "مميز"
          }

        </span>

      </div>


      <div class="product-body">

        <h3>
          ${p.name}
        </h3>


        <p>
          ${
            p.description ||
            "اختيار إضافي لطعمك المفضل."
          }
        </p>


        <div class="product-bottom">

          <span class="price">
            ${money(p.price)}
          </span>


          <button
            class="add-btn"
            onclick="addToCart('${p.id}')"
          >
            + أضف
          </button>

        </div>

      </div>

    </article>

  `;

}


function addonCard(p) {

  return `

    <article class="addon-card reveal">

      <span>
        ${p.name}
      </span>


      <strong>
        ${money(p.price)}
      </strong>


      <button
        class="add-btn"
        onclick="addToCart('${p.id}')"
      >
        +
      </button>

    </article>

  `;

}


function getFiltered() {

  const q =
    els.searchInput
      .value
      .trim()
      .toLowerCase();


  return allProducts.filter(

    p => {

      const categoryOk =
        activeCategory === "all" ||
        p.category ===
        activeCategory;


      const text =
        `${p.name} ${p.description || ""}`
          .toLowerCase();


      return (
        categoryOk &&
        (!q || text.includes(q))
      );

    }

  );

}


function render() {

  const filtered =
    getFiltered();


  const groups = {

    meals: [],

    crumbs: [],

    cheesy: [],

    addons: []

  };


  filtered.forEach(
    p => groups[p.category].push(p)
  );


  els.mealsGrid.innerHTML =
    groups.meals.length

      ? groups.meals
          .map(productCard)
          .join("")

      : `
        <div class="no-results">
          مفيش منتجات مطابقة في القسم ده.
        </div>
      `;


  els.crumbsGrid.innerHTML =
    groups.crumbs.length

      ? groups.crumbs
          .map(productCard)
          .join("")

      : `
        <div class="no-results">
          مفيش منتجات مطابقة في القسم ده.
        </div>
      `;


  els.cheesyGrid.innerHTML =
    groups.cheesy.length

      ? groups.cheesy
          .map(productCard)
          .join("")

      : `
        <div class="no-results">
          مفيش منتجات مطابقة في القسم ده.
        </div>
      `;


  els.addonsGrid.innerHTML =
    groups.addons.length

      ? groups.addons
          .map(addonCard)
          .join("")

      : `
        <div class="no-results">
          مفيش إضافات مطابقة.
        </div>
      `;


  els.searchHint.textContent =

    els.searchInput.value.trim()

      ? `نتيجة البحث: ${filtered.length} منتج`

      : `القسم الحالي: ${
          activeCategory === "all"
            ? "الكل"
            : getCategoryLabel(
                activeCategory
              )
        }`;


  observeReveals();


  updateCartUI();

}


function getCategoryLabel(cat) {

  return {

    meals:
      "الوجبات",

    crumbs:
      "الفتات",

    cheesy:
      "التشيزي",

    addons:
      "الإضافات"

  }[cat] || "الكل";

}


function addToCart(id) {

  const p =
    allProducts.find(
      x => x.id === id
    );


  if (!p) return;


  const found =
    cart.find(
      x => x.id === id
    );


  if (found) {

    found.qty += 1;

  }

  else {

    cart.push({

      id: p.id,

      name: p.name,

      price: p.price,

      image:
        p.image ||
        "assets/hero.jpg",

      qty: 1

    });

  }


  saveCart();


  showToast(
    "تمت الإضافة",
    "اتضاف المنتج للسلة بنجاح."
  );

}


function saveCart() {

  localStorage.setItem(

    "balalm_cart",

    JSON.stringify(cart)

  );


  updateCartUI();

}


function updateCartUI() {

  const qty =
    cart.reduce(
      (s,x) => s + x.qty,
      0
    );


  const total =
    cart.reduce(
      (s,x) =>
        s + x.price * x.qty,
      0
    );


  els.cartCount.textContent =
    qty;


  els.cartQuantity.textContent =
    qty;


  els.cartTotal.textContent =
    money(total);


  if (!cart.length) {

    els.cartItems.innerHTML = `

      <div class="no-results">

        🛒

        <br><br>

        السلة فاضية.

        <br>

        اختار وجبتك الأول.

      </div>

    `;

    return;

  }


  els.cartItems.innerHTML =
    cart.map(
      item => `

        <div class="cart-row">

          <img
            src="${item.image}"
            alt="${item.name}"
          >

          <div>

            <h4>
              ${item.name}
            </h4>


            <small>
              ${money(item.price)} للقطعة
            </small>


            <div class="qty-box">

              <button
                onclick="changeQty('${item.id}',1)"
              >
                +
              </button>


              <strong>
                ${item.qty}
              </strong>


              <button
                onclick="changeQty('${item.id}',-1)"
              >
                −
              </button>


              <button
                class="remove-item"
                onclick="removeItem('${item.id}')"
              >
                ×
              </button>

            </div>

          </div>


          <strong>
            ${money(
              item.price *
              item.qty
            )}
          </strong>

        </div>

      `
    ).join("");

}


function changeQty(
  id,
  delta
) {

  const item =
    cart.find(
      x => x.id === id
    );


  if (!item) return;


  item.qty += delta;


  if (item.qty <= 0) {

    cart =
      cart.filter(
        x => x.id !== id
      );

  }


  saveCart();

}


function removeItem(id) {

  cart =
    cart.filter(
      x => x.id !== id
    );


  saveCart();


  showToast(
    "تم الحذف",
    "اتحذف المنتج من السلة."
  );

}


function openCart() {

  els.cartDrawer
    .classList
    .add("open");


  els.drawerOverlay
    .classList
    .add("open");


  els.cartDrawer
    .setAttribute(
      "aria-hidden",
      "false"
    );

}


function closeCart() {

  els.cartDrawer
    .classList
    .remove("open");


  els.drawerOverlay
    .classList
    .remove("open");


  els.cartDrawer
    .setAttribute(
      "aria-hidden",
      "true"
    );

}


function openModal(id) {

  const el =
    document.getElementById(id);


  el.classList.add("open");


  el.setAttribute(
    "aria-hidden",
    "false"
  );

}


function closeModal(id) {

  const el =
    document.getElementById(id);


  el.classList.remove("open");


  el.setAttribute(
    "aria-hidden",
    "true"
  );

}


function fillCustomerForm(
  prefix
) {

  document.getElementById(
    prefix + "Name"
  ).value =
    customer?.name || "";


  document.getElementById(
    prefix + "Phone"
  ).value =
    customer?.phone || "";


  document.getElementById(
    prefix + "Address"
  ).value =
    customer?.address || "";

}


function saveCustomerData(
  data
) {

  customer = {
    ...data
  };


  localStorage.setItem(

    "balalm_customer",

    JSON.stringify(customer)

  );

}


function openCustomerModal() {

  fillCustomerForm(
    "customer"
  );


  document.getElementById(
    "customerTitle"
  ).textContent =

    customer
      ? "تعديل بياناتي"
      : "بيانات العميل";


  openModal(
    "customerModal"
  );

}


function checkout() {

  if (!cart.length) {

    showToast(
      "السلة فاضية",
      "أضف منتج أو إضافة الأول.",
      "!"
    );

    return;

  }


  closeCart();


  fillCustomerForm(
    "order"
  );


  renderCheckoutPreview();


  openModal(
    "orderModal"
  );

}


function renderCheckoutPreview() {

  const total =
    cart.reduce(
      (s,x) =>
        s + x.price * x.qty,
      0
    );


  els.checkoutPreview.innerHTML = `

    ${
      cart
        .map(
          x => `

            <div class="preview-line">

              <span>
                ${x.name}
                ×
                ${x.qty}
              </span>

              <strong>
                ${money(
                  x.price *
                  x.qty
                )}
              </strong>

            </div>

          `
        )
        .join("")
    }


    <div class="preview-line preview-total">

      <span>
        الإجمالي
      </span>

      <strong>
        ${money(total)}
      </strong>

    </div>

  `;

}


function completeOrder(e) {

  e.preventDefault();


  const data = {

    name:
      document.getElementById(
        "orderName"
      ).value.trim(),

    phone:
      document.getElementById(
        "orderPhone"
      ).value.trim(),

    address:
      document.getElementById(
        "orderAddress"
      ).value.trim()

  };


  saveCustomerData(
    data
  );


  const orders =
    JSON.parse(

      localStorage.getItem(
        "balalm_orders"
      ) || "[]"

    );


  orders.push({

    id: Date.now(),

    createdAt:
      new Date()
        .toLocaleString(
          "ar-EG"
        ),

    customer:
      data,

    items:
      [...cart],

    total:
      cart.reduce(
        (s,x) =>
          s + x.price * x.qty,
        0
      )

  });


  localStorage.setItem(

    "balalm_orders",

    JSON.stringify(
      orders
    )

  );


  cart = [];


  saveCart();


  closeModal(
    "orderModal"
  );


  showToast(
    "تم تسجيل الطلب",
    "بياناتك والطلب اتحفظوا بنجاح."
  );

}


function showToast(
  title,
  text,
  icon = "✓"
) {

  els.toastTitle.textContent =
    title;

  els.toastText.textContent =
    text;

  els.toastIcon.textContent =
    icon;


  els.toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(
      () =>
        els.toast.classList.remove(
          "show"
        ),
      2600
    );

}


function observeReveals() {

  const items =
    document.querySelectorAll(
      ".reveal:not(.visible)"
    );


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add("visible");


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: .12
      }

    );


  items.forEach(
    x =>
      observer.observe(x)
  );

}


/* CATEGORY BUTTONS */

document
  .querySelectorAll(
    ".category-tab"
  )
  .forEach(

    btn => {

      btn.addEventListener(

        "click",

        () => {

          document
            .querySelectorAll(
              ".category-tab"
            )
            .forEach(
              x =>
                x.classList
                  .remove(
                    "active"
                  )
            );


          btn.classList.add(
            "active"
          );


          activeCategory =
            btn.dataset.category;


          render();


          document
            .getElementById(
              "menu"
            )
            .scrollIntoView({

              behavior:
                "smooth",

              block:
                "start"

            });

        }

      );

    }

  );


/* SEARCH */

els.searchInput
  .addEventListener(
    "input",
    render
  );


els.clearSearch
  .addEventListener(
    "click",

    () => {

      els.searchInput.value =
        "";


      activeCategory =
        "all";


      document
        .querySelectorAll(
          ".category-tab"
        )
        .forEach(
          x =>
            x.classList.toggle(
              "active",
              x.dataset.category ===
                "all"
            )
        );


      render();

    }

  );


/* CART BUTTONS */

document
  .getElementById(
    "cartBtn"
  )
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById(
    "heroCartBtn"
  )
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById(
    "footerCartBtn"
  )
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById(
    "closeCart"
  )
  .addEventListener(
    "click",
    closeCart
  );


els.drawerOverlay
  .addEventListener(
    "click",
    closeCart
  );


/* PROFILE */

document
  .getElementById(
    "profileBtn"
  )
  .addEventListener(
    "click",
    openCustomerModal
  );


/* CHECKOUT */

document
  .getElementById(
    "checkoutBtn"
  )
  .addEventListener(
    "click",
    checkout
  );


/* MODAL CLOSE */

document
  .querySelectorAll(
    "[data-close]"
  )
  .forEach(

    btn => {

      btn.addEventListener(

        "click",

        () =>
          closeModal(
            btn.dataset.close
          )

      );

    }

  );


/* CLICK OUTSIDE MODAL */

document
  .querySelectorAll(
    ".modal"
  )
  .forEach(

    modal => {

      modal.addEventListener(

        "click",

        e => {

          if (
            e.target ===
            modal
          ) {

            closeModal(
              modal.id
            );

          }

        }

      );

    }

  );


/* CUSTOMER FORM */

document
  .getElementById(
    "customerForm"
  )
  .addEventListener(

    "submit",

    e => {

      e.preventDefault();


      saveCustomerData({

        name:
          document.getElementById(
            "customerName"
          ).value.trim(),

        phone:
          document.getElementById(
            "customerPhone"
          ).value.trim(),

        address:
          document.getElementById(
            "customerAddress"
          ).value.trim()

      });


      closeModal(
        "customerModal"
      );


      showToast(
        "تم الحفظ",
        "بياناتك اتحدثت، وتقدر تعدلها في أي وقت."
      );

    }

  );


/* ORDER FORM */

document
  .getElementById(
    "orderForm"
  )
  .addEventListener(
    "submit",
    completeOrder
  );


/* HEADER SCROLL */

window.addEventListener(

  "scroll",

  () => {

    document
      .getElementById(
        "siteHeader"
      )
      .classList.toggle(
        "scrolled",
        window.scrollY > 30
      );

  }

);


/* START */

window.addEventListener(

  "load",

  () => {

    setTimeout(

      () =>
        document
          .getElementById(
            "pageLoader"
          )
          .classList.add(
            "hide"
          ),

      600

    );


    render();

  }

);