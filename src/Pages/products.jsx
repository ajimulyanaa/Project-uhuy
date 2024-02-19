import CardProduct from '../Component/Fragments/cardProduct';

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
    name: 'Sepatu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,',
    price: '200000',
  },
  {
    image: '/productImages/9899431.jpg',
    name: 'Sepatu',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,aslfkksdmfkdfjdkfml,.;dslfpdf',
    price: '200000',
  },
];

// eslint-disable-next-line react/prop-types
const ProductsList = () => {
  return (
    <div className='flex justify-center py- h-full'>
      {products.map((product) => (
        <CardProduct key={product.name}>
          <CardProduct.Header image={product.image} desc={product.name}></CardProduct.Header>
          <CardProduct.Body title={product.name}>{product.desc}</CardProduct.Body>
          <CardProduct.Footer>{product.price}</CardProduct.Footer>
        </CardProduct>
      ))}
    </div>
  );
};
export default ProductsList;
