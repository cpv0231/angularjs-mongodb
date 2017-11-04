

var four0four = require('./utils/404')();
var data = require('./data');
var Products = require('./models/products');
var Users = require('./models/users');

var router = require('express').Router();
var multer = require('multer');
var upload = multer({dest:'src/client/uploads'});

router.post('/image', upload.single('photo'), function (req, res, err) {
  var product = new Products({
    productName: req.body.productName,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantityStock: req.body.quantityStock,
    photo:req.file.path,
  });
  product.save(function(err) {
    if(err) {
      return res.send(err);
    }
    res.send({message: true});
  });
});

router.post('/upload', function (req, res) {
    console.log(req.body);
    console.log(req.file);
    res.send({sucess:true,eto:req.body});

  });





router.get('/users', getUsers);
router.get('/products', getProduct);
router.get('/oneProduct/:id', getOneProduct);
router.post('/updateProduct/:id',upload.single('photo'),updateProduct);
router.put('/updateProductNoImg/:id',updateProductNoImg);
router.post('/postProducts', postProducts);
router.delete('/deleteProduct/:id', deleteProduct);


router.get('/*', four0four.notFoundMiddleware);
module.exports = router;

function getUsers(req, res) {
  Users.find({}, function(err, users) {
    if(err) {
      res.send(err);
      return;
    }
    res.json(users);x
  });
}
function getOneProduct(req, res) {
    Products.findOne({_id:req.params.id}, function(err, products){
      if(err) {
        res.send(err);
        return;
      }
      res.json(products);
    });
}
function getProduct(req, res) {
    Products.find({}, function(err, products) {
      if(err) {
        res.send(err);
        return;
      }
      res.json(products);
    });
}
function updateProduct(req, res) {
    var query = {
      productName: req.body.productName,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price,
      quantityStock: req.body.quantityStock,
      photo:req.file.path
    };
    Products.findOneAndUpdate({_id:req.params.id}, query,  function(err, products){
      if(err) {
        res.send(err);
        return;
      }
      console.log(products);
      res.json(products);
    });
}
function updateProductNoImg(req, res) {
  var query = {
    productName: req.body.productName,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantityStock: req.body.quantityStock,
    photo:req.body.photo
  };
  Products.findOneAndUpdate({_id:req.params.id}, query,  function(err, products){
    if(err) {
      res.send(err);
      return;
    }
    console.log(products);
    res.json(products);
  });
}




function postProducts(req, res ) {
  var product = new Products({
    productName: req.body.productName,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    quantityStock: req.body.quantityStock,
  });
  product.save(function(err) {
    if(err) {
      return res.send(err);
    }
    res.json({
      message: 'Product has been created!',
    });
  });
}


function deleteProduct(req,res ) {
  Products.findOneAndRemove({_id:req.params.id}, function(err){
    if(err) {
      return res.send(err);
    }
     res.json({
      message: 'Product has been deleted!',
    });
  });
}


