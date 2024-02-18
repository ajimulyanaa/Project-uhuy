import Button from '../../Elements/Button';

// eslint-disable-next-line react/prop-types
const CardProduct = ({ children }) => {
  return <div className='w-full max-w-xs border-2 border-slate-700 p-5 bg-slate-600 rounded-lg'>{children}</div>;
};

// eslint-disable-next-line react/prop-types
const Header = ({ image, desc }) => {
  return (
    <a href=''>
      <img src={image} alt={desc} />
    </a>
  );
};

// eslint-disable-next-line react/prop-types
const Body = ({ title, children }) => {
  return (
    <div className='py-4'>
      <h4 className='font-bold text-2xl'>{title}</h4>
      <p>{children}</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const Footer = ({ children }) => {
  return (
    <div className='flex justify-between items-center'>
      <h5 className='font-semibold text-xl'>Rp {children}</h5>
      <Button style='bg-orange-500 px-5'>Add To Cart</Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
