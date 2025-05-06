
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Editor = () => {
  const [promptText, setPromptText] = useState('');
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [model, setModel] = useState('gpt-4');
  const [saveButtonText, setSaveButtonText] = useState('Save Prompt');
  
  const handleSave = () => {
    // In a real implementation, this would save to your backend
    console.log('Saving prompt:', { title, promptText, tags: tags.split(','), model });
    
    // Show feedback
    setSaveButtonText('Saved!');
    setTimeout(() => setSaveButtonText('Save Prompt'), 2000);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container py-24 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-8">Prompt Editor</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-prompt-purple/20">
              <CardHeader className="pb-3">
                <CardTitle>Create Your Prompt</CardTitle>
                <CardDescription>
                  Write your prompt below. Use clear, specific language for best results.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Prompt Title</Label>
                    <Input 
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="E.g., 'Professional Email Writer'"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="prompt">Prompt Content</Label>
                    <Textarea
                      id="prompt"
                      value={promptText}
                      onChange={(e) => setPromptText(e.target.value)}
                      placeholder="Write your prompt here..."
                      className="min-h-[200px] resize-y"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                      placeholder="E.g., email, professional, business"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="model">Target Model</Label>
                    <select
                      id="model"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="gpt-4">GPT-4</option>
                      <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
                      <option value="claude-2">Claude 2</option>
                      <option value="gemini-pro">Gemini Pro</option>
                    </select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-border pt-6">
                <Button variant="outline">
                  Test Prompt
                </Button>
                <Button 
                  onClick={handleSave}
                  className="bg-prompt-purple hover:bg-prompt-purple/90"
                >
                  {saveButtonText}
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="border-prompt-purple/20">
              <CardHeader className="pb-3">
                <CardTitle>Prompt Tips</CardTitle>
                <CardDescription>
                  Recommendations to improve your prompt effectiveness.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="structure">
                  <TabsList className="grid grid-cols-3">
                    <TabsTrigger value="structure">Structure</TabsTrigger>
                    <TabsTrigger value="clarity">Clarity</TabsTrigger>
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                  </TabsList>
                  <TabsContent value="structure" className="space-y-4 mt-4">
                    <h4 className="font-medium">Good Prompt Structure</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Start with a clear role or context</li>
                      <li>Provide specific instructions</li>
                      <li>Include constraints or limitations</li>
                      <li>End with the specific output format</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="clarity" className="space-y-4 mt-4">
                    <h4 className="font-medium">Clarity Tips</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>Use simple, precise language</li>
                      <li>Break complex requests into steps</li>
                      <li>Define terms that could be ambiguous</li>
                      <li>Avoid vague instructions</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="examples" className="space-y-4 mt-4">
                    <h4 className="font-medium">Example Patterns</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>"Act as a [role] and [task]..."</li>
                      <li>"I want you to [action] with these specifications: [details]"</li>
                      <li>"Follow this format: [format details]"</li>
                      <li>"Respond in the style of [reference]"</li>
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            <Card className="border-prompt-purple/20">
              <CardHeader className="pb-3">
                <CardTitle>Template Library</CardTitle>
                <CardDescription>
                  Quick-start with proven prompt templates.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" onClick={() => setPromptText("Act as a professional copywriter. Write persuasive marketing copy for [product] that highlights its [benefits] and appeals to [target audience]. Keep the tone [tone] and include a compelling call to action at the end.")}>
                  Copywriting Template
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => setPromptText("You are an expert in [field]. Explain [concept] in simple terms as if you're teaching a beginner. Break down complex ideas, avoid jargon, and use analogies where helpful.")}>
                  Educational Explanation
                </Button>
                <Button variant="outline" className="w-full justify-start" onClick={() => setPromptText("I want you to act as a language translator. I will provide text in [source language], and you will translate it to [target language]. Please maintain the tone, context, and cultural nuances as much as possible. The text is: [text to translate]")}>
                  Language Translation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Editor;
