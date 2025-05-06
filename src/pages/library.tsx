
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromptCard from '@/components/PromptCard';

// Mock data for the prompt library
const mockPrompts = [
  {
    id: '1',
    title: 'Professional Email Generator',
    description: 'Creates formal business emails with the right tone and structure based on the provided context and recipient.',
    tags: ['email', 'business', 'professional'],
    createdAt: new Date('2023-11-15'),
    lastUsed: new Date('2023-12-05'),
    model: 'GPT-4',
    collection: 'business',
  },
  {
    id: '2',
    title: 'Product Description Writer',
    description: 'Generates compelling product descriptions highlighting key features, benefits, and unique selling points.',
    tags: ['marketing', 'product', 'ecommerce'],
    createdAt: new Date('2023-10-23'),
    lastUsed: new Date('2023-12-10'),
    model: 'Claude-2',
    collection: 'marketing',
  },
  {
    id: '3',
    title: 'Code Explanation Helper',
    description: 'Takes a code snippet and explains it line by line in clear, simple language for beginners.',
    tags: ['coding', 'programming', 'education'],
    createdAt: new Date('2023-09-30'),
    lastUsed: new Date('2023-12-01'),
    model: 'GPT-4',
    collection: 'development',
  },
  {
    id: '4',
    title: 'Academic Paper Summarizer',
    description: 'Summarizes academic papers into concise abstracts highlighting key findings, methods, and conclusions.',
    tags: ['academic', 'research', 'summary'],
    createdAt: new Date('2023-11-05'),
    lastUsed: new Date('2023-11-28'),
    model: 'GPT-4',
    collection: 'academic',
  },
  {
    id: '5',
    title: 'Social Media Post Generator',
    description: 'Creates engaging social media content optimized for different platforms with hashtag suggestions.',
    tags: ['social media', 'marketing', 'content'],
    createdAt: new Date('2023-10-12'),
    lastUsed: new Date('2023-12-08'),
    model: 'GPT-3.5-Turbo',
    collection: 'marketing',
  },
  {
    id: '6',
    title: 'Customer Service Response',
    description: 'Generates professional and empathetic customer service responses for different scenarios.',
    tags: ['customer service', 'business', 'support'],
    createdAt: new Date('2023-11-20'),
    lastUsed: new Date('2023-12-12'),
    model: 'Claude-2',
    collection: 'business',
  },
];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCollection, setActiveCollection] = useState('all');
  
  // Filter prompts based on search query and active collection
  const filteredPrompts = mockPrompts.filter(prompt => {
    const matchesSearch = 
      prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prompt.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCollection = 
      activeCollection === 'all' || 
      prompt.collection === activeCollection;
    
    return matchesSearch && matchesCollection;
  });
  
  // Get unique collections for the tabs
  const collections = ['all', ...new Set(mockPrompts.map(prompt => prompt.collection))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-24 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Prompt Library</h1>
            <p className="text-muted-foreground">Your collection of saved prompts</p>
          </div>
          
          <Button className="bg-prompt-purple hover:bg-prompt-purple/90" asChild>
            <Link to="/editor">Create New Prompt</Link>
          </Button>
        </div>
        
        <div className="flex flex-col space-y-6">
          {/* Search and Filter Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-md"
            />
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {['all', 'recent', 'favorite'].map((filter) => (
                <Badge
                  key={filter}
                  variant={filter === 'all' ? "default" : "outline"}
                  className={filter === 'all' ? "bg-prompt-purple hover:bg-prompt-purple/90" : "hover:bg-secondary cursor-pointer"}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Tabs for Collections */}
          <Tabs defaultValue="all" value={activeCollection} onValueChange={setActiveCollection}>
            <TabsList className="mb-6">
              {collections.map(collection => (
                <TabsTrigger key={collection} value={collection} className="capitalize">
                  {collection}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {collections.map(collection => (
              <TabsContent key={collection} value={collection} className="m-0">
                {collection === activeCollection && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPrompts.length > 0 ? (
                      filteredPrompts.map(prompt => (
                        <PromptCard
                          key={prompt.id}
                          title={prompt.title}
                          description={prompt.description}
                          tags={prompt.tags}
                          createdAt={prompt.createdAt}
                          lastUsed={prompt.lastUsed}
                          model={prompt.model}
                        />
                      ))
                    ) : (
                      <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                        <p className="text-muted-foreground mb-4">No prompts found matching your criteria</p>
                        <Button variant="outline" onClick={() => {setSearchQuery(''); setActiveCollection('all');}}>
                          Clear filters
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Library;
