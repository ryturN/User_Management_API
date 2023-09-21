import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';
import { hashPassword,verifyPassword } from '../utils/passwordUtils.js';

const signJwt = promisify(jwt.sign);

export const register = async (request, h) => {
  try {
    const { username, password } = request.payload;
    const hashedPassword = await hashPassword(password);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    return { message: 'User registered successfully' };
  } catch (error) {
    return h.response({ error }).code(500);
  }
};

export const login = async (request, h) => {
  try {
    const { username, password } = request.payload;
    const user = await User.findOne({ username });

    if (!user) {
      return { message: 'Invalid credentials' };
    }

    const validPassword = await verifyPassword(password, user.password);

    if (!validPassword) {
      return { message: 'Invalid credentials' };
    }

    const token = await signJwt({ username: user.username }, 'your-secret-key', {
      expiresIn: '1h',
    });

    return { token };
  } catch (error) {
    return h.response({ error }).code(500);
  }
};
