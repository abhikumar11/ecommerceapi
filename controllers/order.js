const jwt = require("jsonwebtoken");
const prisma = require("../DbConnection");

module.exports.createOrder = async (req, res) => {
     const { user_id, orderid, productid, quantity } = req.body;
     try {
          const data = await prisma.order.create({
             data:{
               user_id: user_id,
               orderid: orderid,
               quantity: quantity,
               product_id: productid
             },include:{product:true}
          });
          return res.status(200).json({"message":"Order placed successfully",Order:data});
     } catch (err) {
          return res.status(404).json({ message:"Something went wrong",err:err });
     }
};
module.exports.orderDetail = async (req, res) => {
  const orderid=parseInt(req.params.orderid);
  try {
     const data=await prisma.order.findMany({
          include:{product:true},
          where:{orderid:orderid}
     });
     return res.status(200).json(data);
  } catch (err) {
     return res.status(404).json({ message:"Something went wrong",err:err.message });
  }
}
module.exports.orderHistory = async (req, res) => {
     const user_id=req.body
     console.log(req.body)
     try {
        const data=await prisma.order.findMany ({});
        return res.status(200).json(data);
     } catch (err) {
        return res.status(404).json({ message:"Something went wrong",err:err });
     }
}
