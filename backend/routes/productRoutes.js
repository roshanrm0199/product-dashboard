const router = require("express").Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");


router.post("/", upload.single("image"), async (req,res)=>{

 try {

  if(!req.body.name || !req.body.price){
    return res.status(400).json({
      message: "Product name and price are required"
    });
  }

  const product = await Product.create({
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    image: req.file ? req.file.path : null
  });

  res.json(product);

 } catch(err){
  res.status(500).json({message:"Server error"});
 }
});



router.get("/", async (req, res) => {

  const {
    search = "",
    sort = "createdAt",
    page = 1,
    limit = 3
  } = req.query;

  const query = {
    name: { $regex: search, $options: "i" }
  };

  const products = await Product.find(query)
    .sort(sort === "price" ? { price: 1 } : { createdAt: -1 })
    .skip((page - 1) * limit)
    .limit(parseInt(limit));

  res.json(products);
});


router.put("/:id", async(req,res)=>{
 res.json(await Product.findByIdAndUpdate(req.params.id,req.body,{new:true}));
});

router.delete("/:id", async(req,res)=>{
 await Product.findByIdAndDelete(req.params.id);
 res.json("deleted");
});

module.exports = router;
