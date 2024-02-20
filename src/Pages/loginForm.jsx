import FormLayout from '../Component/Layout/formLayout';
import InputForm from '../Component/Fragments/input';

function LoginForm() {
  // event handler
  const formLogin = (event) => {
    // agar halam tidak refresh ketika login
    event.preventDefault();
    // memasukan data pada local storage
    // mengirimkan isi email ke local storage
    // localStorage.setItem('Nama di local storgae', event.target.namediinput.value);
    localStorage.setItem('Email', event.target.email.value);
    localStorage.setItem('Password', event.target.password.value);
    // tujuan setelah form di klick
    window.location.href = '/Product';
  };
  return (
    <FormLayout name='Login' footer='Register' handlerForm={formLogin} typeButton='submit'>
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
