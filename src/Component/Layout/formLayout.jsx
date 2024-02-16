import Button from '../Elements/Button';

// eslint-disable-next-line react/prop-types
function FormLayout({ children, name }) {
  return (
    <div className=' w-full max-w-xs border p-4 border-2 rounded-lg bg-blue-400 opacity-80'>
      <header className='mb-2'>
        <h1 className='font-bold text-3xl text-white'>{name}</h1>
        <h3 className='font-semibold font-slate-500 text-xl'>Please, enter your details</h3>
      </header>
      <form action=''>{children}</form>
      <Button style='w-full bg-green-500 hover:bg-green-400 mt-4'>Login</Button>
    </div>
  );
}

export default FormLayout;
