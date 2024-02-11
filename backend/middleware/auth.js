import jwt from 'jsonwebtoken';
import CreateUserModel from '../model/CreateUser.js';

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
        success: false,
        message: 'Authentication required', 
        data: null,
        error: error
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    const user = await CreateUserModel.findById(decodedToken.userId);
    if (!user) {
        return res.status(404).json({ 
            success: false,
            message: 'User not found', 
            data: null,
            error: error
        });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ 
        success: false,
        message: 'Invalid token',
        error: error
    });
  }
};

export default authenticate;