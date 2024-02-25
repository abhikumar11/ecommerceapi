const prisma  = require("../DbConnection");
const jwt=require("jsonwebtoken");
const bcrypt = require('bcrypt');

module.exports.registerUser = async (req, res) => {
     const { email, password } = req.body;

     const exist = await prisma.user.findUnique({
          where: {
               email: email,
          },
     });
     if (exist) {
          return res.status(200).json({ message: "User already exists" });
     }
     const hashPassword = await bcrypt.hash(password,12);
     const newUser = await prisma.user.create({
          data: { email: email, password: hashPassword }
     });
     return res.status(200).json({ message:"User created successfully" });
};
module.exports.login=async(req,res)=>{
  try {
     const{email,password} = req.body;
     console.log(req.body);
     const oldUser = await prisma.user.findUnique({where: {email: email}});
     if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
     const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email}, "secretToken", { expiresIn: "1h" });

    res.status(200).json({ userId: oldUser.email, token });
  } catch (err) {
     res.status(500).json({ message: "Something went wrong",err });
  }
}