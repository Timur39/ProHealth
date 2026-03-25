import RegisterForm from "@/components/ui/RegisterForm";
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

function RegisterPage() {
  return (
    <>
      <Header />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}

export default RegisterPage;