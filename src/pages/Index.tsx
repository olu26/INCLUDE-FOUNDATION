
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { ChallengeCard } from '@/components/ChallengeCard';
import { ProgramCard } from '@/components/ProgramCard';
import { Link } from 'react-router-dom';
import { Book, File, Headphones, Users } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <Hero 
        title="Empowering the Deaf and Blind Through Technology" 
        subtitle="Enhancing access to education and employment through improved communication tools and inclusive systems"
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                The INCLUDE Foundation is committed to enhancing access to education and employment for the deaf and blind through improved communication tools and technology, fostering inclusive and disability-friendly education systems.
              </p>
              <p className="text-lg mb-6">
                We believe that everyone deserves equal access to quality education and meaningful employment opportunities, regardless of their disabilities.
              </p>
              <Button asChild className="bg-include-blue hover:bg-include-dark">
                <Link to="/about">About Our Work</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Student using assistive technology to access education" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Challenge We're Addressing"
            subtitle="In Sub-Saharan Africa, UNESCO reports that up to 90% of children with disabilities do not attend school."
            center
          />
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg">
                According to UNICEF (2022), over 10.5 million children aged 5–14 in Nigeria are out of school, and many of these children live with disabilities. In Nigeria, an estimated 95.5% of children with disabilities are not in school, facing major challenges in education and employment.
              </p>
              <p className="text-lg">
                These challenges stem from poor infrastructure, low awareness, and limited access to technologies that support inclusive learning. This also limits national and regional development by excluding a large population from contributing to social and economic progress.
              </p>
              <p className="text-lg font-semibold text-include-blue">
                A focused 3–5 year plan is needed to improve access through localized tech, training, and awareness empowering the blind and deaf to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Challenges */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="E-LAB Challenges" 
            subtitle="Explore the six major challenges we're addressing to improve access to education and employment for the deaf and blind."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ChallengeCard
              title="Limited Access to Assistive Technology"
              description="Many deaf and blind individuals lack access to essential assistive technologies due to high costs and limited availability."
              image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
            />
            <ChallengeCard
              title="Inadequate Teacher Training"
              description="Most teachers lack the specialized training needed to effectively teach students with visual or hearing impairments."
              image="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
            />
            <ChallengeCard
              title="Inaccessible Learning Materials"
              description="Educational materials are rarely available in formats accessible to deaf and blind students, creating barriers to learning."
              image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-include-blue hover:bg-include-dark">
              <Link to="/challenges">View All Challenges</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Our Programs" 
            subtitle="The INCLUDE Foundation offers several programs designed to address the challenges faced by deaf and blind individuals."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProgramCard
              title="Assistive Technology Distribution"
              description="We provide deaf and blind individuals with affordable or free assistive tools such as our LearnPod, screen readers, braille displays, and more."
              icon={<Headphones className="h-10 w-10" />}
            />
            <ProgramCard
              title="School Partnerships"
              description="We partner with schools to train teachers, provide accessible learning materials, and create disability-friendly classrooms."
              icon={<Book className="h-10 w-10" />}
            />
            <ProgramCard
              title="Family Support Workshops"
              description="We offer workshops and guides to help families support the learning and communication of their deaf or blind children."
              icon={<Users className="h-10 w-10" />}
            />
            <ProgramCard
              title="Policy Advocacy"
              description="We work with policymakers to promote disability rights and push for inclusive education laws."
              icon={<File className="h-10 w-10" />}
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-include-blue hover:bg-include-dark">
              <Link to="/programs">Explore Our Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Learn Pod Feature */}
      <section className="py-16 md:py-24 bg-include-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Introducing LearnPod</h2>
              <p className="text-xl mb-6">
                A compact, solar-powered pocket device designed to provide inclusive education for deaf and blind children in low-resource areas.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <span className="text-include-yellow mr-2">✓</span>
                  <span>Enables self-paced learning using Braille</span>
                </li>
                <li className="flex">
                  <span className="text-include-yellow mr-2">✓</span>
                  <span>Provides sign language videos</span>
                </li>
                <li className="flex">
                  <span className="text-include-yellow mr-2">✓</span>
                  <span>Features accessible audio content</span>
                </li>
                <li className="flex">
                  <span className="text-include-yellow mr-2">✓</span>
                  <span>Solar-powered for use in areas with limited electricity</span>
                </li>
              </ul>
              <Button className="bg-include-yellow hover:bg-yellow-400 text-gray-900">
                Learn More About LearnPod
              </Button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="LearnPod device being used by a student" 
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-include-blue py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating an Inclusive Future</h2>
          <p className="text-xl mb-8 text-white/90">
            Together, we can break down barriers and create a world where everyone, regardless of disability, has access to quality education and meaningful employment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-include-yellow hover:bg-yellow-400 text-gray-900 font-medium">
              <Link to="/contact">Get Involved</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
              <Link to="/programs">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
