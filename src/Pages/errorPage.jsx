import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='font-bold text-3xl'>Opps!</h1>
      <h2 className='font-bold text-xl'>Error, an unpected of ocured</h2>
      <p className='font-semibold text-lg text-red-800'>{error.status || error.message}</p>
    </div>
  );
};

export default ErrorPage;
