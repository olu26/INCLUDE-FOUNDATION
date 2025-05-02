
import React from 'react';
import { Layout } from '@/components/Layout';
import { Hero } from '@/components/Hero';
import { SectionHeading } from '@/components/SectionHeading';

const Challenges = () => {
  const challenges = [
    {
      "id": 1,
      title: "WEEK ONE CHALLENGE",
      description: "This week, our challenge was to create a powerful elevator pitch — a short, compelling video introduction from each team member that highlights who we are and why our work matters. We focused on the urgent issue faced by deaf and blind individuals, particularly in rural and underserved communities, who lack access to essential assistive technologies for learning and communication.",
      impact: "Millions of deaf and blind students face significant barriers in accessing education due to the absence of tools like screen readers, braille devices, and hearing aids. This exclusion leads to lower literacy levels, limited opportunities, and reduced independence — perpetuating cycles of poverty and inequality.",
      solution: "In our elevator pitch video compilation, each team member shares our collective vision through the lens of our solution: the LearnPod device. We also spotlight other tools provided by the INCLUDE Foundation, including free or low-cost screen readers, braille displays, hearing aids, and accessible communication apps — all aimed at empowering every learner, regardless of ability.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      video: "https://youtu.be/j7w_88tvwF8?si=hyPJtYYXDt14XsDt"
    }
    ,
    {
      id: 2,
      title: "WEEK TWO CHALLENGE",
      description:  "This week's challenge focused on cultural exploration and storytelling. Our team delved into the traditional rite of passage known as Dipo — a revered initiation ceremony practiced among the Krobo people of Ghana. We set out to uncover not just the amazing facts about Dipo, but also to challenge common misconceptions and present a more informed, respectful narrative.",
      impact: "Cultural practices like Dipo are often misunderstood or misrepresented, especially outside their native context. These misperceptions can lead to stigma, cultural erosion, or loss of heritage — particularly among younger generations and diaspora communities.",

      solution: "Through research, interviews, and creative presentation, we documented the origins, values, and evolution of the Dipo rite. Our aim was to celebrate African heritage by fostering understanding and respect for traditional practices while creating content that educates and preserves these stories for the future.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      video: "https://youtu.be/j7w_88tvwF8?si=hyPJtYYXDt14XsDt"

    },
    {
      id: 3,
      title: "WEEK THREE CHALLENGE",
      description: "For this week’s challenge, our focus shifted to community impact. The task: launch a 'Help Lab' — a dedicated initiative to foster positive engagement and improve the quality of our shared spaces, both online and offline. Our team brainstormed and implemented solutions to real concerns raised within our community.",
      impact: "Communities thrive when members feel seen, heard, and supported. Without intentional effort, however, gaps in communication, accessibility, or accountability can lead to disconnection or stagnation. Our Help Lab challenge aimed to reverse that trend through proactive listening and collaborative problem-solving.",
      solution: "We engaged with peers to identify pain points, then designed practical, empathetic interventions — ranging from improved onboarding experiences to mental health check-ins, skill-sharing sessions, and more. The Help Lab isn’t just a project; it’s a mindset shift toward everyday inclusion and collective growth.",
      image: "https://images.unsplash.com/photo-1520975922323-195c0f50dca5",
      video: "https://youtu.be/j7w_88tvwF8?si=hyPJtYYXDt14XsDt"
    }
    ,
    {
      id: 4,
      title: "WEEK FOUR CHALLENGE",
      "description": "In this challenge, we went on a ‘Hunt for Treasure’ — not gold or gems, but powerful stories. Our journey led us to the Cape Coast School for the DeafBlind, where we had the honor of interviewing the school’s leader. Through this conversation, we uncovered deep insights into the realities, hopes, and resilience of an often-overlooked community.",
      impact: "Leaders in specialized education play a vital role in shaping inclusive futures, yet their voices are rarely amplified. By sharing their perspectives, we bring visibility to the systemic challenges and remarkable triumphs happening at the intersection of disability and education in Ghana.",
      solution: "We documented the interview to spotlight the school’s achievements, highlight areas of need, and inspire others to support inclusive education. The challenge reminded us that true treasure lies in lived experiences — and the knowledge that can only come from those at the heart of the mission.",
      image: "https://images.unsplash.com/photo-1531266752451-78c925f9d2ce",
      video: "https://youtu.be/j7w_88tvwF8?si=hyPJtYYXDt14XsDt"
    }
    ,
    {
      id: 5,
      title: "WEEK FIVE CHALLENGE",
      description: "This week marked a turning point: after weeks of research, collaboration, and testing, we officially launched our solution. Centered on the challenges faced by deaf and blind students, our solution integrates the LearnPod device with a suite of assistive technologies designed to enhance learning, communication, and inclusion.",
      impact: "The launch isn't just about shipping a product — it's about creating access. For the first time, students in our pilot schools are experiencing learning environments that are built with their needs in mind. This step forward promises long-term educational and social impact.",
      solution: "Our final product includes the LearnPod — a user-friendly, portable learning device — alongside a curated toolkit of accessible software and hardware: from braille displays to speech-to-text apps. The solution was co-created with users, tested in real environments, and refined based on feedback. Our launch is a declaration: inclusive education is not optional, it's essential.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      video: "https://youtu.be/j7w_88tvwF8?si=hyPJtYYXDt14XsDt"
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
                    {challenge.video && (
                      <a
                        href={challenge.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-include-blue hover:bg-include-dark text-white px-4 py-2 rounded-md font-medium transition-colors"
                      >
                        Watch Video
                      </a>
                    )}
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
