// eslint-disable-next-line react/prop-types
function Input({ name, placeholder, type }) {
  return <input type={type} id={name} placeholder={placeholder} className='w-full rounded-md p-2 my-2'></input>;
}

export default Input;
