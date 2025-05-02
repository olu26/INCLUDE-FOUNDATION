
import React from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { CalendarIcon, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
}

export function BlogCard({ title, excerpt, image, date, category, slug, className }: BlogCardProps) {
  return (
    <article className={cn('bg-white rounded-lg overflow-hidden shadow-md group', className)}>
      <Link to={`/blog/${slug}`} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt="" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            aria-hidden="true"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between text-sm mb-3">
            <Badge variant="secondary" className="bg-include-light text-include-blue">
              {category}
            </Badge>
            <div className="flex items-center text-gray-500">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <time dateTime={date}>{date}</time>
            </div>
          </div>
          <h3 className="text-xl font-bold group-hover:text-include-blue transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 line-clamp-3">{excerpt}</p>
          <span className="inline-flex items-center mt-4 font-medium text-include-blue">
            Read more
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </article>
  );
}
