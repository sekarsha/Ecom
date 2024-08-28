const product_model=require("../module/product_module")

exports.getproduct= async (req,res,next)=>{

  const query= req.query.keyword?{name:{
        
      $regex:req.query.keyword,
      $options:"i"

   }}:{}

  const products= await product_model.find(query)

    res.json(
        {
            success:true,
            products
        }
    )

}

exports.getsingle_product=async (req,res,next)=>{
 
     try {
         
        const id=req.params.id
        const single_product=await product_model.findById(id)
        res.json({
    
            success:true,
            single_product
        })


     } catch (error) {
        
        res.json({
            success:false,
            message:"product not found"
           })
     }

   
}