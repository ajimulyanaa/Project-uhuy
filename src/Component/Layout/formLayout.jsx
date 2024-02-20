import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function FormLayout({ children, name, footer, handlerForm, typeButton, handler }) {
  return (
    <div className='w-full flex min-h-screen justify-center items-center'>
      <div className=' w-full max-w-xs border p-4 border-2 rounded-lg bg-blue-400 opacity-80'>
        <header className='mb-2'>
          <h1 className='font-bold text-3xl text-white'>{name}</h1>
          <h3 className='font-semibold font-slate-500 text-xl'>Please, enter your details</h3>
        </header>
        <form action='' onSubmit={handlerForm}>
          {children}
          <Button style='w-full bg-green-500 hover:bg-green-400 mt-4' type={typeButton} handler={handler}>
            {name}
          </Button>
        </form>
        <footer className='flex justify-center gap-2 mt-2'>
          <h3>{footer === 'Register' ? 'Dont have an account?' : 'Have an account?'}</h3>
          <Link to={`/${footer}`} className='font-bold hover:text-slate-50 hover:duration-500 hover:shadow-slate-50'>
            {footer}
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default FormLayout;
