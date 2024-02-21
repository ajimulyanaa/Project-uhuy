import Button from '../Component/Elements/Button';
import CardProduct from '../Component/Fragments/cardProduct';
import { useState } from 'react';

// rendenring list

const products = [
  {
    image: '/productImages/9899431.jpg',
    name: 'Sepatu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem id sint eveniet quae alias ad fugiat sit repellendus odio!',
    price: '200000',
  },
  {
    image: '/productImages/9899431.jpg',
    name: 'Sepatu nike',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,',
    price: '200000',
  },
  {
    image: '/productImages/9899431.jpg',
    name: 'Sepatu adidas',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,aslfkksdmfkdfjdkfml,.;dslfpdf',
    price: '200000',
  },
];

// memanggil data local storage
const email = localStorage.getItem('Email');

// eslint-disable-next-line react/prop-types
// ============================
const ProductsList = () => {
  // handler quit
  const quit = () => {
    // menghapus data pada local storage
    localStorage.removeItem('Email'), localStorage.removeItem('Password');
    // direct halaman
    window.location.href = '/Login';
  };
  // use state
  const [cart, setCart] = useState([
    {
      name: 'sandal',
      qty: 1,
    },
  ]);
  // handler state
  const handlerCart = (product) => {
    setCart([
      ...cart,
      {
        name: product,
        qty: 1,
      },
    ]);
  };
  return (
    <div className=''>
      <header className='bg-blue-200 p-4 font-semibold flex justify-between items-center'>
        <h3>{email}</h3>
        <Button style='bg-red-400 text-white' handler={quit}>
          Quit
        </Button>
      </header>
      <div className='bg-blue-400'>
        <h1>Cart</h1>
        {cart.map((products) => (
          <p key={products.name}>{products.name}</p>
        ))}
      </div>
      <div className='flex justify-center'>
        {products.map((product) => (
          <CardProduct key={product.name}>
            <CardProduct.Header image={product.image} desc={product.name}></CardProduct.Header>
            <CardProduct.Body title={product.name}>{product.desc}</CardProduct.Body>
            <CardProduct.Footer handler={() => handlerCart(product.name)}>{product.price}</CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
    </div>
  );
};
export default ProductsList;
