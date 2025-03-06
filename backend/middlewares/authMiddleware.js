import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
    token = req.headers.authorization.split(" ")[1];
    console.log("Token retrieved from Authorization header:", token);
  } 

  else if (req.headers.cookie) {
    token = req.headers.cookie.split("=")[1];
    console.log("Token retrieved from cookie:", token);
  } 
  else {
    console.error("No token provided in headers.");
    return res.status(401).json({ message: "Unauthorized - token not provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    // console.log( req.user);
    
    next();
  } catch (error) {
    console.error("Token verification failed:", error);
    return res.status(403).json({ message: "Forbidden - Invalid token" });
  }
};

export default authMiddleware;
