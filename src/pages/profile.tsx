
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock user data
const mockUser = {
  name: 'Alex Johnson',
  email: 'alex.johnson@example.com',
  bio: 'Prompt engineer and AI enthusiast. Creating efficient prompts for various AI models.',
  avatar: '', // URL would go here
  location: 'San Francisco, CA',
  memberSince: 'November 2023',
  stats: {
    promptsCreated: 24,
    promptsShared: 8,
    promptsUsed: 187,
  },
};

const Profile = () => {
  const [userData, setUserData] = useState(mockUser);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSaveProfile = () => {
    console.log('Saving profile:', userData);
    // In a real implementation, this would save to your backend
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8 mb-8">
            <Avatar className="w-24 h-24 md:w-32 md:h-32">
              <AvatarImage src={userData.avatar} alt={userData.name} />
              <AvatarFallback className="text-2xl bg-prompt-purple text-white">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold">{userData.name}</h1>
              <p className="text-muted-foreground mb-4">{userData.location} • Member since {userData.memberSince}</p>
              
              <p className="mb-4">{userData.bio}</p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-card rounded-lg p-3">
                  <div className="text-2xl font-bold text-prompt-purple">{userData.stats.promptsCreated}</div>
                  <div className="text-xs text-muted-foreground">Prompts Created</div>
                </div>
                <div className="bg-card rounded-lg p-3">
                  <div className="text-2xl font-bold text-prompt-purple">{userData.stats.promptsShared}</div>
                  <div className="text-xs text-muted-foreground">Prompts Shared</div>
                </div>
                <div className="bg-card rounded-lg p-3">
                  <div className="text-2xl font-bold text-prompt-purple">{userData.stats.promptsUsed}</div>
                  <div className="text-xs text-muted-foreground">Total Uses</div>
                </div>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="account">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
              <TabsTrigger value="subscription">Subscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="mt-6">
              <Card className="border-prompt-purple/20">
                <CardHeader>
                  <CardTitle>Account Details</CardTitle>
                  <CardDescription>
                    Update your account information and public profile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={userData.bio}
                      onChange={handleInputChange}
                      rows={4}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={userData.location}
                      onChange={handleInputChange}
                    />
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6 flex justify-between">
                  <Button variant="ghost">Cancel</Button>
                  <Button 
                    onClick={handleSaveProfile}
                    className="bg-prompt-purple hover:bg-prompt-purple/90"
                  >
                    Save Changes
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="border-prompt-purple/20 mt-6">
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>
                    Change your password.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button className="bg-prompt-purple hover:bg-prompt-purple/90">
                    Update Password
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <Card className="border-prompt-purple/20">
                <CardHeader>
                  <CardTitle>Preferences</CardTitle>
                  <CardDescription>
                    Manage your application preferences and default settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Default AI Model</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {['GPT-4', 'GPT-3.5-Turbo', 'Claude-2', 'Gemini-Pro'].map(model => (
                        <Button key={model} variant="outline" className="justify-start">
                          {model}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-medium">Editor Preferences</h3>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Auto-save drafts</Label>
                        <p className="text-sm text-muted-foreground">
                          Automatically save your work as you type
                        </p>
                      </div>
                      <div>
                        <input type="checkbox" className="toggle" defaultChecked />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Show suggestion panel</Label>
                        <p className="text-sm text-muted-foreground">
                          Show AI-powered suggestions while writing
                        </p>
                      </div>
                      <div>
                        <input type="checkbox" className="toggle" defaultChecked />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t pt-6">
                  <Button className="bg-prompt-purple hover:bg-prompt-purple/90">
                    Save Preferences
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscription" className="mt-6">
              <Card className="border-prompt-purple/20">
                <CardHeader>
                  <CardTitle>Subscription</CardTitle>
                  <CardDescription>
                    Manage your subscription plan and billing information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="rounded-lg border p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Free Plan</h3>
                        <p className="text-sm text-muted-foreground">Limited features and prompt storage</p>
                      </div>
                      <Badge>Current Plan</Badge>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Up to 20 prompts in your library</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Basic prompt editor</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Community templates</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border border-prompt-purple p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-prompt-purple">Pro Plan</h3>
                        <p className="text-sm text-muted-foreground">Advanced features for serious prompt engineers</p>
                      </div>
                      <div className="text-xl font-bold">$9.99<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-prompt-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Unlimited prompt storage</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-prompt-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Advanced AI suggestions</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-prompt-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Priority support</span>
                      </div>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-prompt-purple" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Custom prompt templates</span>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-prompt-purple hover:bg-prompt-purple/90">
                      Upgrade to Pro
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
