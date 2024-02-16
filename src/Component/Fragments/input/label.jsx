function Label(props) {
  // eslint-disable-next-line react/prop-types
  const { type, children } = props;
  return (
    <label htmlFor={type} className='text-md font-medium text-black'>
      {children}
    </label>
  );
}

export default Label;
