import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import CreateUserModel from '../model/CreateUser.js';

// Register a new user
export const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const registerdUser = { username, email, password: hashedPassword };
    const user = new CreateUserModel(registerdUser);
    const result = await user.save();
    res.status(201).json({ 
        success: true,
        message: 'Registration successful',
        data: result,
        error: null
    });
  } catch (error) {
    console.log("Something went wrong");
    res.status(500).json({ 
        success: true,
        message: 'Registration unsuccessful',
        data: null,
        error: error
    });
    next(error);
  }
};

// Login with an existing user
export const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await CreateUserModel.findOne({ username });
    if (!user) {
        return res.status(404).json({ 
            success: false,
            message: 'User not found', 
            data: null,
            error: error
        });
    }

    const passwordMatch = await user.comparePassword(password);
    // const passwordMatch = user.username === username && user.password === password;
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
      expiresIn: '1 hour'
    });
    res.status(201).json({ 
        success: true,
        message: 'Token generated', 
        data: null,
        token: token
    });
  } catch (error) {
    console.log("Something went wrong ", error);
    res.status(500).json({ 
        success: false,
        message: 'Something went wrong, user not logged in', 
        data: null,
        token: null,
        error: error
    });
    next(error);
  }
};