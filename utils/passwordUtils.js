

import bcrypt from 'bcrypt';

// Fungsi untuk mengenkripsi kata sandi
export const hashPassword = async (password) => {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
};

// Fungsi untuk memverifikasi kata sandi
export const verifyPassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
