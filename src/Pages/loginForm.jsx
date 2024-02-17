import FormLayout from '../Component/Layout/formLayout';
import InputForm from '../Component/Fragments/input';

function LoginForm() {
  return (
    <FormLayout name='Login' footer='Register'>
      <InputForm name='email' placeholder='example@gmail.com' type='email'>
        Email
      </InputForm>
      <InputForm name='password' placeholder='*******' type='password'>
        Password
      </InputForm>
    </FormLayout>
  );
}

export default LoginForm;
