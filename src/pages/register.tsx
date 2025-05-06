
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleRegister = async (data: any) => {
    setLoading(true);
    try {
      console.log('Register data:', data);
      // In a real implementation, this would connect to your auth backend
      // For now, we'll just simulate a successful registration
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success toast
      toast({
        title: "Account created successfully",
        description: "Welcome to PromptPath!",
      });
      
      // Navigate to the library page
      navigate('/library');
    } catch (error) {
      console.error('Registration error:', error);
      toast({
        title: "Registration failed",
        description: "Please check your information and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 px-4 md:px-6 hero-gradient">
        <div className="w-full max-w-md">
          <AuthForm 
            type="register" 
            onSubmit={handleRegister}
            loading={loading} 
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Register;
