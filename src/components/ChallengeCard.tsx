
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface ChallengeCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export function ChallengeCard({ title, description, image, className }: ChallengeCardProps) {
  return (
    <Card className={cn('overflow-hidden h-full transition-all hover:shadow-lg', className)}>
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={`Illustration for ${title}`} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
