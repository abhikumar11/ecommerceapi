const prisma = require("../DbConnection");

module.exports.getProductById = async (req, res) => {
     try {
        const proid=parseInt(req.params.proid);
        console.log(proid);
          const data =await prisma.product.findUnique({where: {productid: proid},include:{category: true}});
         
          if (data) {
               return res.status(200).json({ product: data });
          }
          else{
            return res.status(200).json({ message:"No product available" });
          }
     } catch (err) {
        return res.status(404).json({ error: "something went wrong",err});
     }
};
module.exports.getProductByCatId = async (req, res) => {
    try {
        const catid=parseInt(req.params.catid);
        console.log(catid);
          const data =await prisma.product.findMany({where: {category_id: catid},include:{category: true}});
         
          if (data) {
               return res.status(200).json({ product: data });
          }
          else{
            return res.status(200).json({ message:"No product available" });
          }
     } catch (err) { 
        return res.status(404).json({ error: "something went wrong",err});
     }
};