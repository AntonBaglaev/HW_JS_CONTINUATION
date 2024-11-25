function addProductsToList(products) {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        
        const listItem = document.createElement('li');
        listItem.className = 'product-item';
        стили
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        img.width = 150;
        img.height = 150;
        const title = document.createElement('h2');
        title.textContent = product.title;
        const description = document.createElement('p');
        description.textContent = product.description;
        const price = document.createElement('p');
        price.textContent = `Price: $${product.price.toFixed(2)}`;
        const button = document.createElement('button');
        button.className = 'add-to-cart';
        button.setAttribute('data-id', product.id);
        button.textContent = 'Add to Cart';
        
        listItem.append(img, title, description, price, button);
        
        productList.append(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    addProductsToList(data);
});