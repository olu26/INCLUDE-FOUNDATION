
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "Limited Access to Assistive Technology",
      description: "Many deaf and blind individuals, especially those in rural and low-income areas, lack access to essential assistive technologies that could help them learn and communicate effectively.",
      impact: "Without assistive technology, deaf and blind students struggle to access educational content, resulting in lower academic achievement and fewer opportunities for future employment.",
      solution: "The INCLUDE Foundation is addressing this challenge through our LearnPod device and by distributing other affordable or free assistive tools such as screen readers, braille displays, hearing aids, and communication apps.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 2,
      title: "Inadequate Teacher Training",
      description: "Most teachers in mainstream schools lack the specialized training needed to effectively teach students with visual or hearing impairments.",
      impact: "Even when deaf and blind students attend school, they often receive inadequate instruction because teachers don't know how to adapt their teaching methods to meet these students' needs.",
      solution: "We partner with schools to provide comprehensive training programs for teachers, equipping them with the skills and knowledge to create inclusive learning environments for deaf and blind students.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: 3,
      title: "Inaccessible Learning Materials",
      description: "Educational materials such as textbooks, worksheets, and digital resources are rarely available in formats accessible to deaf and blind students.",
      impact: "Without accessible materials, deaf and blind students cannot fully participate in classroom activities or complete assignments, hindering their learning progress.",
      solution: "We develop and distribute accessible learning materials, including braille textbooks, sign language videos, and audio content, ensuring that educational resources are available to all students.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: 4,
      title: "Limited Family Support",
      description: "Many families of deaf and blind children lack the knowledge and resources to support their children's education and communication development.",
      impact: "Without proper support at home, deaf and blind children struggle to reinforce what they learn at school and develop essential life skills.",
      solution: "We offer workshops, training programs, and support groups for families, providing them with the tools and strategies they need to support their deaf or blind children effectively.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
    },
    {
      id: 5,
      title: "Social Stigma and Discrimination",
      description: "Deaf and blind individuals often face stigma and discrimination in their communities, leading to social isolation and reduced opportunities.",
      impact: "Social stigma can result in exclusion from educational and employment opportunities, as well as psychological harm and diminished self-esteem.",
      solution: "We conduct awareness campaigns and community outreach programs to reduce stigma and promote understanding and acceptance of deaf and blind individuals in society.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: 6,
      title: "Inadequate Policy Framework",
      description: "Many countries lack comprehensive policies to protect the rights of individuals with disabilities and ensure their access to quality education and employment.",
      impact: "Without strong policy frameworks, systemic barriers to inclusion persist, making it difficult to implement lasting changes in education and employment systems.",
      solution: "We advocate for policy changes at local, national, and regional levels, working with government agencies and international organizations to promote disability rights and inclusive education laws.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="E-LAB Challenges" 
        subtitle="Understanding the barriers to education and employment for deaf and blind individuals"
        imageUrl="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Six Major Challenges"
            subtitle="At the INCLUDE Foundation, we've identified six critical challenges that prevent deaf and blind individuals from accessing quality education and employment opportunities."
            center
          />
          
          <div className="space-y-16">
            {challenges.map((challenge) => (
              <div 
                key={challenge.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="md:grid md:grid-cols-2">
                  <div className="bg-include-blue p-8 text-white">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-include-yellow text-include-blue font-bold text-lg mb-4">
                      {challenge.id}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                      {challenge.title}
                    </h3>
                    <p className="text-white/90 mb-6">
                      {challenge.description}
                    </p>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="font-semibold mb-2">Impact:</h4>
                      <p className="text-white/90">
                        {challenge.impact}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="font-semibold text-xl mb-4 text-include-blue">
                      Our Solution:
                    </h4>
                    <p className="text-gray-700 mb-6">
                      {challenge.solution}
                    </p>
                    
                    {/* Real image instead of placeholder */}
                    <div className="mt-2">
                      <div className="aspect-[4/3] rounded-lg overflow-hidden">
                        <img 
                          src={challenge.image} 
                          alt={`Illustration for ${challenge.title}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="Join Us in Addressing These Challenges"
            center
          />
          
          <p className="text-lg max-w-3xl mx-auto mb-8">
            We believe that by working together, we can overcome these challenges and create a more inclusive world for deaf and blind individuals. Your support can make a difference.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-include-blue hover:bg-include-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Get Involved
            </a>
            <a 
              href="/programs" 
              className="bg-white border border-include-blue text-include-blue px-6 py-3 rounded-md font-medium hover:bg-include-light transition-colors"
            >
              Learn About Our Programs
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Challenges;
