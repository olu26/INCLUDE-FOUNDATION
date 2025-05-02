
import React from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-5xl md:text-7xl font-bold text-include-blue mb-4">404</h1>
        <p className="text-2xl md:text-3xl font-semibold mb-8">Page Not Found</p>
        <p className="text-lg text-gray-600 text-center max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild size="lg" className="bg-include-blue hover:bg-include-dark">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
