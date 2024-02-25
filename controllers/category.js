const prisma = require("../DbConnection");

module.exports.getCategory = async (req, res) => {
     try {
          const data =await prisma.category.findMany({orderBy:{categoryid:"asc"}});
          console.log(data);
          if (data) {
               return res.status(200).json({ categories: data });
          }
          else{
            return res.status(200).json({ message:"No category available" });
          }
     } catch (err) {
        return res.status(404).json({ error: "something went wrong",err});
     }
};
