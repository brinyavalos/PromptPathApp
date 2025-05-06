
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface AuthFormProps {
  type: 'login' | 'register';
  onSubmit: (data: any) => void;
}

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const data = type === 'login' 
        ? { email, password } 
        : { name, email, password };
      
      await onSubmit(data);
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md border-prompt-purple/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>
          {type === 'login' ? 'Sign In' : 'Create Account'}
        </CardTitle>
        <CardDescription>
          {type === 'login' 
            ? 'Enter your credentials to access your account' 
            : 'Fill in the details below to create your account'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {type === 'register' && (
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Your name"
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="you@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {type === 'login' && (
                <Link to="/forgot-password" className="text-xs text-prompt-purple hover:underline">
                  Forgot password?
                </Link>
              )}
            </div>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••"
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-prompt-purple hover:bg-prompt-purple/90" 
            disabled={loading}
          >
            {loading ? 'Processing...' : type === 'login' ? 'Sign In' : 'Create Account'}
          </Button>
          
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" type="button" className="border-border">
              Google
            </Button>
            <Button variant="outline" type="button" className="border-border">
              GitHub
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-center text-sm text-muted-foreground">
          {type === 'login' ? "Don't have an account? " : "Already have an account? "}
          <Link to={type === 'login' ? '/register' : '/login'} className="text-prompt-purple hover:underline">
            {type === 'login' ? 'Sign up' : 'Sign in'}
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
