// eslint-disable-next-line no-unused-vars
import { Children } from 'react';

// eslint-disable-next-line react/prop-types
function Button({ children, style, type, handler }) {
  return (
    <>
      <button className={`${style ? style : 'bg-slate-200 text-black'} text-base font-bold p-2 rounded-lg shadow-md hover:text-white hover:duration-300`} type={type ? type : 'button'} onClick={handler ? handler : () => {}}>
        {children}
      </button>
    </>
  );
}

export default Button;
