
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div 
        className="absolute inset-0 z-0" 
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 87, 184, 0.85), rgba(0, 87, 184, 0.85)), url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-include-blue/90 to-include-blue/70 z-10" />
      
      <div className="container relative z-20 mx-auto px-4 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-include-yellow hover:bg-yellow-400 text-gray-900 font-medium text-lg">
              <Link to="/about">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-lg">
              <Link to="/contact">Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
