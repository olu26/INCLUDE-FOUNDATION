
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { Book, Headphones, Users, File, Link } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Assistive Technology Distribution",
      description: "We provide deaf and blind individuals with affordable or free assistive tools to help them learn and communicate effectively.",
      details: [
        "Distribution of LearnPod devices to schools and community centers",
        "Provision of screen readers and braille displays for blind students",
        "Supply of hearing aids and communication apps for deaf students",
        "Training on how to use assistive technologies effectively"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      icon: <Book className="h-12 w-12" />,
      title: "School Partnerships",
      description: "We work with schools to create inclusive learning environments that meet the needs of deaf and blind students.",
      details: [
        "Teacher training on inclusive education practices",
        "Development and distribution of accessible learning materials",
        "Classroom modifications to improve accessibility",
        "Ongoing support and mentorship for teachers working with disabled students"
      ],
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Family Support Workshops",
      description: "We offer workshops and resources to help families support the learning and communication of their deaf or blind children.",
      details: [
        "Regular workshops on communication strategies",
        "Support groups for parents and caregivers",
        "Resources and guides for home-based learning",
        "Counseling services for families"
      ],
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    },
    {
      icon: <Link className="h-12 w-12" />,
      title: "Mentorship & Leadership Development",
      description: "We connect deaf and blind youths with mentors, role models, and leadership training opportunities.",
      details: [
        "Matching program for young people with successful deaf and blind adults",
        "Leadership development workshops and courses",
        "Career guidance and counseling",
        "Internship and job placement assistance"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      icon: <File className="h-12 w-12" />,
      title: "Policy Advocacy",
      description: "We work with policymakers to promote disability rights and push for inclusive education laws.",
      details: [
        "Research on best practices in inclusive education",
        "Policy recommendations for government agencies",
        "Collaboration with international organizations on disability rights",
        "Advocacy campaigns to raise awareness about the needs of deaf and blind individuals"
      ],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <Layout>
      <Hero 
        title="Our Programs" 
        subtitle="Comprehensive support services for deaf and blind individuals, their families, and educators"
        imageUrl="https://images.unsplash.com/photo-1500673922987-e212871fec22"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="How We Make a Difference"
            subtitle="The INCLUDE Foundation offers a range of programs designed to address the challenges faced by deaf and blind individuals in accessing education and employment."
            center
          />
          
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div 
                key={program.title} 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-include-blue">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  
                  <p className="text-lg mb-6">
                    {program.description}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold mb-4">Key Components:</h4>
                    <ul className="space-y-3">
                      {program.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-include-blue mr-2 font-bold">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={program.image} 
                      alt={`Illustration of ${program.title} program`} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LearnPod Feature Section */}
      <section className="py-16 md:py-24 bg-include-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Spotlight on LearnPod</h2>
              <p className="text-xl mb-6">
                Our flagship product is making education accessible to deaf and blind students across Sub-Saharan Africa.
              </p>
              <p className="mb-6">
                LearnPod is a compact, solar-powered pocket device designed to provide inclusive education for deaf and blind children in low-resource areas. It enables self-paced learning using Braille, sign language videos, and audio content.
              </p>
              
              <div className="bg-white/10 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="text-include-yellow mr-2">✓</span>
                    <span>Solar-powered for use in areas with limited electricity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-include-yellow mr-2">✓</span>
                    <span>Offline access to educational content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-include-yellow mr-2">✓</span>
                    <span>Braille display for blind users</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-include-yellow mr-2">✓</span>
                    <span>Visual sign language content for deaf users</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-include-yellow mr-2">✓</span>
                    <span>Durable design for challenging environments</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="/contact" 
                className="inline-block bg-include-yellow hover:bg-yellow-400 text-gray-900 px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More About LearnPod
              </a>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="LearnPod device being used by students" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Teaser */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Impact Stories"
            subtitle="See how our programs are making a difference in the lives of deaf and blind individuals"
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Student using LearnPod" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Amina's Story</h3>
                <p className="text-gray-600 mb-4">
                  How a blind student in rural Nigeria gained access to education through our LearnPod program.
                </p>
                <a 
                  href="#" 
                  className="text-include-blue font-medium hover:underline"
                >
                  Read Amina's Story
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Teacher training session" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Transforming Classroom</h3>
                <p className="text-gray-600 mb-4">
                  How our teacher training program helped a school in Lagos become fully inclusive.
                </p>
                <a 
                  href="#" 
                  className="text-include-blue font-medium hover:underline"
                >
                  Read the School's Story
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Family workshop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Family Support</h3>
                <p className="text-gray-600 mb-4">
                  How our workshops helped the Okafor family better support their deaf daughter.
                </p>
                <a 
                  href="#" 
                  className="text-include-blue font-medium hover:underline"
                >
                  Read the Family's Story
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/" 
              className="inline-block bg-include-blue hover:bg-include-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              View All Impact Stories
            </a>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved with Our Programs</h2>
          <p className="text-lg mb-8">
            Whether you want to volunteer, donate, or partner with us, there are many ways to support our mission of empowering deaf and blind individuals through education and technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-include-blue hover:bg-include-dark text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#" 
              className="bg-white border border-include-blue text-include-blue px-6 py-3 rounded-md font-medium hover:bg-include-light transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
