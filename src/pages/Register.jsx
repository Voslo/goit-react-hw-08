import { Helmet } from 'react-helmet-async';
import { RegisterForm } from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>
            Registration
        </title>
      </Helmet>
      <RegisterForm />
    </div>
  );
}
