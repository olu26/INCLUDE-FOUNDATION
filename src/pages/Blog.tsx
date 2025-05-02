
import React from 'react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const Blog = () => {
  // Mock blog posts data
  const blogPosts = [
    {
      title: "The Impact of Inclusive Education on Society",
      excerpt: "Exploring how inclusive education benefits not just students with disabilities, but society as a whole. When schools and communities embrace diversity and provide equal opportunities for all learners...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "May 1, 2024",
      category: "Education",
      slug: "impact-inclusive-education"
    },
    {
      title: "Advancements in Assistive Technology for the Blind",
      excerpt: "Recent technological innovations are transforming how blind individuals access information and navigate the world. From AI-powered devices to sophisticated braille displays...",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      date: "April 18, 2024",
      category: "Technology",
      slug: "advancements-assistive-technology"
    },
    {
      title: "Success Story: Mary's Journey with LearnPod",
      excerpt: "How our LearnPod device helped Mary, a deaf student from rural Nigeria, excel in her studies despite the odds. Mary's story highlights the transformative power of accessible education...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      date: "April 5, 2024",
      category: "Success Stories",
      slug: "success-story-mary"
    },
    {
      title: "Building Inclusive Classrooms: A Guide for Teachers",
      excerpt: "Practical strategies for educators to create learning environments that accommodate students with various disabilities. This comprehensive guide provides step-by-step approaches...",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      date: "March 22, 2024",
      category: "Education",
      slug: "building-inclusive-classrooms"
    },
    {
      title: "The Role of Sign Language in Early Childhood Development",
      excerpt: "Research shows that introducing sign language to young children, regardless of hearing ability, can enhance cognitive development and communication skills...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      date: "March 10, 2024",
      category: "Research",
      slug: "sign-language-development"
    },
    {
      title: "Policy Changes Needed to Support Inclusive Education in Africa",
      excerpt: "An analysis of current educational policies across African nations and recommendations for changes that would better support students with disabilities...",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      date: "February 28, 2024",
      category: "Policy",
      slug: "policy-changes-inclusive-education"
    },
  ];

  // Mock categories
  const categories = [
    { name: "All", count: 12 },
    { name: "Education", count: 5 },
    { name: "Technology", count: 3 },
    { name: "Success Stories", count: 2 },
    { name: "Research", count: 2 },
    { name: "Policy", count: 1 },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-include-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Resources</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Stay updated with the latest news, impact stories, and resources related to deaf and blind education and assistive technology.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <h2 className="text-2xl font-bold mb-4 md:mb-0">Latest Articles</h2>
                
                <div className="relative w-full md:w-auto">
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 pr-4 py-2 w-full md:w-64"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard 
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    image={post.image}
                    date={post.date}
                    category={post.category}
                    slug={post.slug}
                  />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="border-include-blue text-include-blue hover:bg-include-light">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div 
                        key={category.name} 
                        className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                      >
                        <a href="#" className="text-gray-800 hover:text-include-blue">
                          {category.name}
                        </a>
                        <Badge variant="outline">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-include-light p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Stay updated with our latest news, stories, and resources.
                  </p>
                  
                  <form className="space-y-4">
                    <Input 
                      placeholder="Your email address" 
                      type="email" 
                      required 
                    />
                    <Button className="w-full bg-include-blue hover:bg-include-dark">
                      Subscribe
                    </Button>
                  </form>
                  
                  <p className="text-xs text-gray-500 mt-4">
                    By subscribing, you agree to receive email communications from INCLUDE Foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
