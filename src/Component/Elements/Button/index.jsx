// eslint-disable-next-line no-unused-vars
import { Children } from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children, style }) {
  return (
    <>
      <button className={`${style} text-base font-bold p-2 rounded-lg shadow-md hover:text-white hover:duration-300`}>{children}</button>
    </>
  );
}

export default Button;
