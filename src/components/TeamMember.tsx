
import React from 'react';
import { cn } from '@/lib/utils';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  className?: string;
}

export function TeamMember({ name, role, image, bio, className }: TeamMemberProps) {
  return (
    <div className={cn('group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow', className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={`Portrait of ${name}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-include-blue font-medium mb-3">{role}</p>
        <p className="text-gray-600">{bio}</p>
      </div>
    </div>
  );
}
