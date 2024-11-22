import dotenv from "dotenv";
dotenv.config();

export default async function Auth(req, res, next) {
    try {
      // Access the authorization header
      const authHeader = req.headers.authorization;
  
      // Check if the token exists
      if (!authHeader) {
        return res.status(401).json({ error: "Authorization header missing" });
      }
  
      // Extract token from header
      const token = authHeader.split(" ")[1];
  
      if (!token) {
        return res.status(401).json({ error: "Token missing" });
      }
  
      // Verify token
      const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodeToken; // Attach the decoded user data to the request
  
      next();
    } catch (error) {
      console.error("Authentication error:", error);
      return res.status(401).json({ error: "Authentication failed" });
    }
  }
  