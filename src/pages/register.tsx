
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Register = () => {
  const navigate = useNavigate();
  
  const handleRegister = async (data: any) => {
    console.log('Register data:', data);
    // In a real implementation, this would connect to your auth backend
    // For now, we'll just simulate a successful registration
    navigate('/library');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4 md:px-6 hero-gradient">
        <div className="w-full max-w-md">
          <AuthForm type="register" onSubmit={handleRegister} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
