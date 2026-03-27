import LoginForm from "../components/ui/LoginForm";
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
function LoginPage() {

  return (
    <>
      <Header />
      <main>
        <LoginForm />
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;