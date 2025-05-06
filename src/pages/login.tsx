
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '@/components/AuthForm';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  
  const handleLogin = async (data: any) => {
    setLoading(true);
    try {
      console.log('Login data:', data);
      // In a real implementation, this would connect to your auth backend
      // For now, we'll just simulate a successful login
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Show success toast
      toast({
        title: "Logged in successfully",
        description: "Welcome back to PromptPath!",
      });
      
      // Navigate to the library page
      navigate('/library');
    } catch (error) {
      console.error('Login error:', error);
      toast({
        title: "Login failed",
        description: "Please check your credentials and try again.",
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
            type="login" 
            onSubmit={handleLogin}
            loading={loading}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
