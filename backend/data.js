import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Munah',
      email: 'admin@example.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: true,
    },
    {
      name: 'Chisom',
      email: 'user@example.com',
      password: bcrypt.hashSync('12345678'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'One',
      slug: 'one',
      category: 'residential',
      images: '/images/one.jpg',
      price: 120,
      countInStock: 10,
      brand: 'lux',
      rating: 4.5,
      numReviews: 20,
      description: 'high quality one',
    },
    {
      // _id: '2',
      name: 'Two',
      slug: 'two',
      category: 'commercial',
      images: '/images/two.jpg',
      price: 140,
      countInStock: 0,
      brand: 'posh',
      rating: 3.0,
      numReviews: 30,
      description: 'high quality two',
    },
    {
      // _id: '3',
      name: 'Three',
      slug: 'three',
      category: 'church',
      images: '/images/three.jpg',
      price: 100,
      countInStock: 40,
      brand: 'magnificent',
      rating: 3.5,
      numReviews: 40,
      description: 'high quality three',
    },
    {
      // _id: '4',
      name: 'Four',
      slug: 'four',
      category: 'factory',
      images: '/images/four.jpg',
      price: 110,
      countInStock: 50,
      brand: 'structural',
      rating: 2.5,
      numReviews: 50,
      description: 'high quality four',
    },
  ],
};

export default data;
