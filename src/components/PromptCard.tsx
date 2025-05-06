
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface PromptCardProps {
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
  lastUsed?: Date;
  model?: string;
}

const PromptCard = ({
  title,
  description,
  tags,
  createdAt,
  lastUsed,
  model = 'GPT-4',
}: PromptCardProps) => {
  return (
    <Card className="prompt-card-gradient hover:shadow-lg transition-all duration-300 border-prompt-purple/20">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          <Badge variant="outline" className="bg-prompt-purple/10 text-prompt-light border-prompt-purple/20">
            {model}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-secondary/50">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t border-border/30 pt-4 flex flex-col items-start gap-4">
        <div className="w-full flex justify-between text-xs text-muted-foreground">
          <span>Created {formatDate(createdAt)}</span>
          {lastUsed && <span>Last used {formatDate(lastUsed)}</span>}
        </div>
        <div className="w-full flex justify-between">
          <Button variant="ghost" size="sm">Copy</Button>
          <Button variant="outline" size="sm" className="border-prompt-purple/30 text-prompt-light">Use</Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Helper function to format dates
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

export default PromptCard;
