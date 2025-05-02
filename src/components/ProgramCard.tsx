
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function ProgramCard({ title, description, icon, className }: ProgramCardProps) {
  return (
    <div className={cn(
      'bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-include-blue', 
      className
    )}>
      <div className="mb-4 text-include-blue bg-include-light inline-flex p-3 rounded-full">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="outline" className="group">
        Learn More 
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </div>
  );
}
