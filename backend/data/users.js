import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Anggiat',
    email: 'anggiat@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Benget',
    email: 'benget@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users