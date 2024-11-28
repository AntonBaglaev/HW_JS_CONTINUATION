let products_add = [];

async function fetchData() {
   try {
      const response = await fetch("db/catalog.json");
      if (!response.ok) {
         throw new Error('Не удолось получить данные с catalog JSON');
      }
      const data = await response.json();
      const productBox = document.querySelector('.product__box');
      data.products.forEach(({ productImage, productTitle, productDescription, productPrice }) => {
         const productCart = `
      <div class="product">
      <a class="product__image-hover">
         <div class="add-cart">
            <img src="./image/shop.svg" alt="">
            <p class="text-add-cart">Add to Cart</p>
         </div>
         <img class="product__img" src="./image/products/${productImage}" alt="${productImage}">
      </a>
      <div class="product__content">
         <a href="./pages/product.html" class="product__name">${productTitle}</a>
         <p class="product__text">${productDescription}</p>
         <div class="product__price">$${productPrice}</div>
      </div>
   </div>`;
         productBox.insertAdjacentHTML('beforeend', productCart);
      })
      const btn = document.querySelectorAll('.add-cart');
      btn.forEach(el => {
         el.addEventListener('click', () => {
            const btnAddCart = el.closest('.product');
            const product = {
               productImage: btnAddCart.children[0].children[1].alt,
               productPrice: btnAddCart.children[1].children[2].innerHTML.slice(1),
               productTitle: btnAddCart.children[1].children[0].innerHTML,
            }
            if (products_add.length === 0) {
               createWrap();
            }
            products_add.push(product);
            add();
         })
      })
   } catch (error) {
      console.error(error);
   }
}
fetchData();