import FormLayout from '../Component/Layout/formLayout';
import InputForm from '../Component/Fragments/input';

function RegisterForm() {
  return (
    <FormLayout name='Register'>
      <InputForm name='name' placeholder='input your name is here...' type='full-name'>
        Username
      </InputForm>
      <InputForm name='email' placeholder='example@gmail.com' type='email'>
        Email
      </InputForm>
      <InputForm name='password' placeholder='*******' type='password'>
        Password
      </InputForm>
      <InputForm name='password' placeholder='*******' type='password'>
        Confirm Password
      </InputForm>
    </FormLayout>
  );
}

export default RegisterForm;
