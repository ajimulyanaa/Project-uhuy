import Input from './input';
import Label from './label';

// eslint-disable-next-line react/prop-types
function InputForm({ name, placeholder, children, type }) {
  return (
    <>
      <Label type={name}>{children}</Label>
      <Input name={name} placeholder={placeholder} type={type}></Input>
    </>
  );
}
export default InputForm;
