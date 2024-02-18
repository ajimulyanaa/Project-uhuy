import CardProduct from '../Component/Fragments/cardProduct';

// eslint-disable-next-line react/prop-types
const ProductsList = () => {
  return (
    <div className='flex justify-center w-full '>
      <CardProduct>
        <CardProduct.Header image='/productImages/9899431.jpg' desc='sepatu'></CardProduct.Header>
        <CardProduct.Body title='Sepatu dewasa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatem id sint eveniet quae alias ad fugiat sit repellendus odio! </CardProduct.Body>
        <CardProduct.Footer>200000</CardProduct.Footer>
      </CardProduct>
    </div>
  );
};
export default ProductsList;
