module.exports = {
  products: getProduct(),
  user:getUser()
};


function getUser() {

}

function getProduct() {
  return [

    { id: 1, productName: 'John', description: 'Papa', price: 25, quantityStock: 50 },
    { id: 2, productName: 'Ward', description: 'Bell', price: 31, quantityStock: 50 },
    { id: 3, productName: 'Colleen', description: 'Jones', price: 21, quantityStock: 50 },
    { id: 4, productName: 'Madelyn', description: 'Green', price: 18, quantityStock:50 },
    { id: 5, productName: 'Ella', description: 'Jobs', price: 18, quantityStock: 50 },
    { id: 6, productName: 'Landon', description: 'Gates', price: 11, quantityStock: 50 },
    { id: 7, productName: 'Haley', description: 'Guthrie', price: 35, quantityStock:50 },
    { id: 8, productName: 'Aaron', description: 'Jinglehiemer', price: 22, quantityStock:50 }
  ];
}
