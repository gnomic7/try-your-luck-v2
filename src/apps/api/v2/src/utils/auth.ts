import jwt from 'jsonwebtoken';
import crypto from 'crypto';
const baseSalt = 'try-your-luck-is-cool';
const secret =
  process.env.SECRET ||
  'I am very secret and going to be even more secret soon';
const generateAccessToken = (user: { userName?: string; id: string }) =>
  jwt.sign(user, secret, { expiresIn: '1h' });

const verifyToken = (token: string) => jwt.verify(token, secret);
const decodeToken = (token: string) => jwt.decode(token, { complete: true });
const createPasswordHash = (password: string) =>
  crypto.createHmac('sha256', password).update(baseSalt, 'utf8').digest('hex');
export { generateAccessToken, decodeToken, verifyToken, createPasswordHash };
