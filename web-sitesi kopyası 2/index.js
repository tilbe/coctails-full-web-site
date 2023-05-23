const OurCoctailsBtn = document.querySelector("#OurCoctails")
const OurCoctailsPage = document.querySelector(".OurCoctailsPage")
const firstPage = document.querySelector(".first-page")
const orderOnline = document.querySelector("#onlineOrder")
const orderBtn = document.querySelector("#order")

const Shoppingnumber = document.querySelector(".number");
const AboutBtn = document.querySelector("#about");
const AboutPage = document.querySelector(".about");
const AboutOrderBtn = document.querySelector(".about-order");
const ContactBtn = document.querySelector("#contact");
const contanetPage = document.querySelector(".contanet-page");
const metin = document.querySelector(".metin");
const description = document.querySelector(".description");
const OurCoctailsBaslik = document.querySelector(".baslik");
const onlineShopingCard = document.querySelector(".col-md-6  drinks");
const ShopingCardBtn = document.querySelector(".shop");
const ShopingCard = document.querySelector(".bag");
const closeBtn = document.querySelector(".close");
const payment = document.querySelector(".payment");
const addBag = document.querySelectorAll(".plasBtn")
const paymentpage = document.querySelector(".paymentpage");
const orderList = document.querySelector(".orderList")
const button1 = document.querySelector(".continue1")
const button2 = document.querySelector(".continue2")
const button3 = document.querySelector(".continue3")
const addresInfo = document.querySelector(".addres")
const acontactInfo = document.querySelector(".contact-info")
const cartInfo = document.querySelector(".cart-info")
const backBtn = document.querySelector(".back")


let product = [

  {
    "id": 1,
    "name": "Magic Hour",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 10,
    "inCart": 0,
  },
  {
    "id": 2,
    "name": "Bloody Cherry",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 20,
    "inCart": 0,
  },
  {
    "id": 3,
    "name": "Americana",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 15,
    "inCart": 0,
  },
  {
    "id": 4,
    "name": "Tiki Taka",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 12,
    "inCart": 1,
  },

  {
    "id": 5,
    "name": "Pomelo Yuzu",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 13,
    "inCart": 1,
  },
  {
    "id": 6,
    "name": "Lime Supreme",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 10,
    "inCart": 1,
  },
  {
    "id": 7,
    "name": "Ginger White",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 20,
    "inCart": 1,
  },
  {
    "id": 8,
    "name": "Citrus Blend",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 15,
    "inCart": 1,
  },
  ,
  {
    "id": 9,
    "name": "Jasmin Edge",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 15,
    "inCart": 1,
  },
  {
    "id": 10,
    "name": "Spicy Blossom",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 10,
    "inCart": 1,
  },
  {
    "id": 11,
    "name": "Lilly Rose",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 10,
    "inCart": 1,
  },
  {
    "id": 12,
    "name": "Lavender Dew",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 10,
    "inCart": 1,
  },
  {
    "id": 13,
    "name": "Triple Ace",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 13,
    "inCart": 1,
  },
  {
    "id": 14,
    "name": "Sunset Kit",
    "description": "I’m an item description. Click 'Edit Menu' to open the Restaurant Menu editor and change my text.",
    "price": 14,
    "inCart": 1,
  }
]







//sayfa acilma kodlar-

backBtn.addEventListener("click", () => {
  addresInfo.style.display = "none"
  acontactInfo.style.display = "block"
  cartInfo.style.display = "none"
})
backBtn.addEventListener("dblclick", () => {
  addresInfo.style.display = "block"
  acontactInfo.style.display = "none"
  cartInfo.style.display = "none"
})

button1.addEventListener("click", () => {
  addresInfo.style.display = "none"
  acontactInfo.style.display = "block"
  cartInfo.style.display = "none"
})
button2.addEventListener("click", () => {
  addresInfo.style.display = "none"
  acontactInfo.style.display = "none"
  cartInfo.style.display = "block"
})

closeBtn.addEventListener("click", () => {
  prodactContainer.style.display = "none";
  document.body.style.overflow = "auto";
  orderOnline.style.opacity = "100%";
});

ShopingCardBtn.addEventListener("click", () => {
  ShopingCard.style.display = "block";
  document.body.style.overflow = "hidden";
  orderOnline.style.opacity = "50%"

});


OurCoctailsBtn.addEventListener("click", () => {
  OurCoctailsPage.style.display = 'block',
    firstPage.style.display = 'none',
    orderOnline.style.display = 'none',
    AboutPage.style.display = 'none';
  contanetPage.style.display = 'none';
  paymentpage.style.display = 'none';




})



orderBtn.addEventListener("click", () => {
  orderOnline.style.display = 'block',
    firstPage.style.display = 'none',
    OurCoctailsPage.style.display = 'none',
    contanetPage.style.display = 'none',
    AboutPage.style.display = 'none';
  paymentpage.style.display = 'none';


});

AboutBtn.addEventListener("click", () => {
  AboutPage.style.display = 'block',
    orderOnline.style.display = 'none',
    firstPage.style.display = 'none',
    OurCoctailsPage.style.display = 'none',
    contanetPage.style.display = 'none';
  paymentpage.style.display = 'none';


})

ContactBtn.addEventListener("click", () => {
  contanetPage.style.display = 'block'
  AboutPage.style.display = 'none',
    orderOnline.style.display = 'none',
    firstPage.style.display = 'none',
    OurCoctailsPage.style.display = 'none';
  paymentpage.style.display = 'none';


})



AboutOrderBtn.addEventListener('click', () => {
  AboutPage.style.display = 'none',
    orderOnline.style.display = 'block';
  firstPage.style.display = 'none';
  OurCoctailsPage.style.display = 'none';
  paymentpage.style.display = 'none';

})


// sayfa acma kodlari bitis



// Sepete ürün eklemek için tıklama olayını dinle
for (let i = 0; i < addBag.length; i++) {
  addBag[i].addEventListener("click", () => {
    cartNumber(product[i]);
    totalCost(product[i]);
  });
}

// Sayfa yüklendiğinde sepet numarasını kontrol et
function onLoadCartNumber() {
  let productNumber = localStorage.getItem('cartNumber');
  if (productNumber) {
    document.querySelector(".number").textContent = productNumber;
  }
}

// Sepet numarasını güncelle
function cartNumber(product) {

  let productNumber = localStorage.getItem("cartNumber");
  productNumber = parseInt(productNumber) || 0;

  localStorage.setItem('cartNumber', productNumber + 1);
  document.querySelector(".number").textContent = productNumber + 1;

  setItems(product);
}

// Ürünleri sepete ekle
function setItems(product) {
  let cartItems = localStorage.getItem('prodactsInCart');
  cartItems = JSON.parse(cartItems) || {};

  if (!cartItems[product.name]) {
    cartItems[product.name] = {
      ...product,
      inCart: 0
    };
  }

  cartItems[product.name].inCart += 1;

  localStorage.setItem('prodactsInCart', JSON.stringify(cartItems));

  // Burada shopingOpenBox() fonksiyonunu çağırarak sepeti güncelleyebilirsiniz
  shopingOpenBox();
  myOrder()
}

// Toplam maliyeti güncelle
function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');
  cartCost = parseInt(cartCost) || 0;

  localStorage.setItem("totalCost", cartCost + product.price);
};

// shopping cartan cop kutusu buttonu
function removCart() {
  let btnRemove = document.querySelectorAll(".trash");
  btnRemove.forEach((trashButton) => {
    trashButton.addEventListener("click", function () {
      // Ürün fiyatını alma
      var productName = this.parentElement.querySelector(".bagName").textContent;
      var productPrice = parseFloat(this.parentElement.querySelector(".bagPrice").textContent);



      // Sepetteki ürünleri yerel depolamadan alın
      let cartItems = localStorage.getItem("prodactsInCart");
      cartItems = JSON.parse(cartItems);

      // Güncellenmiş ürün listesini tekrar yerel depolamaya kaydedin
      localStorage.setItem("prodactsInCart", JSON.stringify(cartItems));


      // Sepetteki ürün sayısını güncelle
      let productNumber = localStorage.getItem("cartNumber");
      productNumber = parseInt(productNumber) || 0;

      if (productNumber > 0) {
        localStorage.setItem("cartNumber", productNumber - 1);
        document.querySelector(".number").textContent = productNumber - 1;
      }

      // Sepet toplam maliyetini güncelle

      let cartCost = localStorage.getItem("totalCost")
      cartCost = JSON.parse(cartCost) || 0;

      //urun fiyat alma 
      var productName = this.parentElement.querySelector(".bagName").textContent;
      var productPrice = parseFloat(this.parentElement.querySelector(".bagPrice").textContent)

      // sepet urunlerin yerel depolamadan alin

      cartItems = localStorage.getItem("prodactsInCart")
      cartItems = JSON.parse(cartItems)

      if (cartItems[productName]) {
        cartCost -= cartItems[productName].price;
        delete cartItems[productName]
      }

      localStorage.setItem("totalCost", cartCost);
      localStorage.setItem("prodactsInCart", JSON.stringify(cartItems));

      //arayuzden sil
      this.parentElement.parentElement.remove();

      myOrder()

    });

  });
}







// Alışveriş sepetini aç
function shopingOpenBox() {


  let cartItem = localStorage.getItem("prodactsInCart");
  cartItem = JSON.parse(cartItem);
  let prodactContainer = document.querySelector(".bag");



  if (cartItem && prodactContainer) {
    prodactContainer.innerHTML = "";

    const closeBtn = document.createElement("a");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    prodactContainer.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
      prodactContainer.style.display = "none";
      document.body.style.overflow = "auto";
      orderOnline.style.opacity = "100%";
    });

    let totalCost = 0;

    Object.values(cartItem).map((item) => {
      const listitem = document.createElement("div");

      listitem.innerHTML = `
        <div class="urun">
          <div class="Inbag">
            <p class="bagName">${item.name}</p>
            <p class="bagPrice">${item.inCart}</p>  
            <p class="bagPrice">${item.inCart * item.price} £</p>  
          </div>
          <a class="trash" data-name="${item.name}">remove</a>
          <hr>
        </div>
      `;

      prodactContainer.appendChild(listitem);

      totalCost += item.inCart * item.price;
    });

    const total = document.createElement("div");
    total.classList.add("total");
    total.innerHTML = `
      <p class="pricetitle">TOTAL PRICE</p>
      <p class="priceinfo">${totalCost}£</p>
    `;
    prodactContainer.appendChild(total);

    const payButton = document.createElement("button");
    payButton.classList.add("payButoon");
    payButton.textContent = "Pay to my order";
    prodactContainer.appendChild(payButton);

    const removeButton = document.querySelectorAll(".trash");
    removeButton.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productName = e.target.dataset.name;
        const removItem = cartItem[productName];
        const removItemCost = removItem.inCart * removItem.price;

        delete cartItem[productName];

        localStorage.setItem("prodactsInCart", JSON.stringify(cartItem));

        totalCost -= removItemCost;
        document.querySelector(".priceinfo").textContent = `${totalCost} £`;
        localStorage.setItem("totalCost", totalCost);

      });

      payButton.addEventListener("click", () => {
        AboutPage.style.display = 'none';
        orderOnline.style.display = 'none';
        firstPage.style.display = 'none';
        OurCoctailsPage.style.display = 'none';
        paymentpage.style.display = 'block';
        orderOnline.style.opacity = "1"
        prodactContainer.style.display = 'none';
        document.body.style.overflow = 'auto';

        addToMyOrder()
      });
    });

    removCart();
  }
}

function myOrder() {

  let cartItems = localStorage.getItem("prodactsInCart")
  cartItems = JSON.parse(cartItems);
  if (cartItems) {

    orderList.innerHTML = "";


    const myordertitle = document.createElement("div")
    myordertitle.classList.add("myordertitle")
    myordertitle.innerHTML = `
    <h4 class="myordertitle">My Order</h4>

    `
    orderList.appendChild(myordertitle);
    Object.values(cartItems).forEach((item) => {
      const payorder = document.createElement("div");
      payorder.classList.add("payorder");
      payorder.innerHTML = `
        <p class="bagName">${item.name}</p>
        <p class="bagPrice">${item.inCart}</p>  
        <p class="bagPrice">${item.inCart * item.price} £</p> 
      `;
      orderList.appendChild(payorder);
    })
  }
}

window.onload = function () {
  myOrder()
}



// Fonksiyonları çağır
shopingOpenBox();
onLoadCartNumber();
myOrder()



