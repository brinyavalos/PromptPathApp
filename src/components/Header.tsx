
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  // This would come from auth context in a real implementation
  const isLoggedIn = false;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="PromptPath" className="w-8 h-8" />
            <span className="font-bold text-xl">PromptPath</span>
          </Link>
          
          {isLoggedIn && (
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/library" className="text-muted-foreground hover:text-foreground transition-colors">
                Library
              </Link>
              <Link to="/editor" className="text-muted-foreground hover:text-foreground transition-colors">
                Editor
              </Link>
            </nav>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/profile">Profile</Link>
              </Button>
              <Button variant="default" className="bg-prompt-purple hover:bg-prompt-purple/90">
                New Prompt
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="default" className="bg-prompt-purple hover:bg-prompt-purple/90" asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
