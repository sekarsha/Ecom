const ordermodal=require("../module/order_module")
const product_model=require("../module/product_module")

exports.getorder=async (req,res,next)=>{
   
   const cart=req.body;
   const amount=Number(cart.reduce((acc,item)=>(acc + item.product_id.price*item.qty),0)).toFixed(2);
   const status="pending"
    
  const order= await ordermodal.create({cart,amount,status})

  ////////////////Updating product stock/////

  cart.forEach(async(item) => {
    
  const product= await product_model.findById(item.product_id._id)
  product.stock=product.stock-item.qty;
  await product.save()

  });

   res.json({
    success:true,
    order
   })

}