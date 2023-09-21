// Import modul yang diperlukan
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import User from '../models/User.js';
import { hashPassword, verifyPassword } from '../utils/passwordUtils.js';

// Simpan JWT secret key di dalam environment variable
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

// Fungsi untuk menghasilkan token JWT
const signJwt = promisify(jwt.sign);

// Handler untuk registrasi pengguna
export const register = async (request, h) => {
  try {
    const { username, password } = request.payload;

    // Hash password sebelum menyimpannya
    const hashedPassword = await hashPassword(password);

    // Buat objek pengguna baru dan simpan ke dalam database
    const user = new User({ username, password: hashedPassword });
    await user.save();

    return { message: 'User registered successfully' };
  } catch (error) {
    // Tangani kesalahan dengan mengembalikan pesan umum
    return h.response({ message: 'An error occurred' }).code(500);
  }
};

// Handler untuk login pengguna
export const login = async (request, h) => {
  try {
    const { username, password } = request.payload;

    // Temukan pengguna berdasarkan username
    const user = await User.findOne({ username });

    if (!user) {
      return { message: 'Invalid credentials' };
    }

    // Verifikasi password yang diinputkan dengan password di database
    const validPassword = await verifyPassword(password, user.password);

    if (!validPassword) {
      return { message: 'Invalid credentials' };
    }

    // Buat token JWT dengan informasi pengguna
    const token = await signJwt({ username: user.username }, JWT_SECRET_KEY, {
      expiresIn: '1h',
    });

    return { token };
  } catch (error) {
    // Tangani kesalahan dengan mengembalikan pesan umum
    return h.response({ message: 'An error occurred' }).code(500);
  }
};