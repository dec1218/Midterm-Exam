const products = [
    {"id": 1, "name": "Laptop", "price": 1500, "stock": 5},
    {"id": 2, "name": "Headphones", "price": 100, "stock": 10},
    {"id": 3, "name": "Keyboard", "price": 50, "stock": 20}
  ];

  function alertProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      alert(Product: ${product.name}\nPrice: $${product.price}\nIn Stock: ${product.stock});
    }
}