import Button from '../../Elements/Button';

// eslint-disable-next-line react/prop-types
const CardProduct = ({ children }) => {
  return <div className='w-full max-w-sm shadow border border-gray-600  bg-slate-700 p-4 mx-5 rounded-lg flex flex-col justify-between mx-2'>{children}</div>;
};

// eslint-disable-next-line react/prop-types
const Header = ({ image, desc }) => {
  return (
    <a href='' className=''>
      <img src={image} alt={desc} />
    </a>
  );
};

// eslint-disable-next-line react/prop-types
const Body = ({ title, children }) => {
  return (
    <div className=''>
      <h4 className='font-bold text-2xl'>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Footer = ({ children, handler }) => {
  return (
    <div className='flex justify-between items-center'>
      <h5 className='font-semibold text-xl'>Rp {children}</h5>
      <Button style='bg-orange-500 px-5' handler={handler}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
