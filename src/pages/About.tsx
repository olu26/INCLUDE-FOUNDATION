import React from "react";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMember } from "@/components/TeamMember";
import pod from "/pod.jpeg";
import peace from "/peace.jpeg";
import caleb from "/caleb.jpeg";
import amina from "/nadia.jpeg";
import lisete from "/lisette.jpeg"

const About = () => {
  const teamMembers = [
    {
      name: "Peace Chukwuka",
      role: "Founder & Executive Director",
      image: peace,
      bio: "Peace Chukwuka is an innovative thinker with a strong background in digital accessibility. She is passionate about utilizing technology to create educational tools that are not only effective but also inclusive for all students, ensuring that learning opportunities are accessible to everyone, regardless of their abilities.",
    },
    {
      name: "Lisette Muskiza",
      role: "policy & Advocacy director",
      image: lisete,
      bio: "Lisette is a passionate advocate for inclusive education, dedicated to improving access to learning resources for the blind and deaf communities across Africa. With a background in special education and technology integration, she aims to bridge the gap between traditional teaching methods and innovative approaches that cater to all learners",
    },
    {
      name: "Nadia Odame",
      role: "Education Programs Lead",
      image: amina,
      bio: "Nadia Akua Nsiah Odame brings a wealth of experience in community engagement and outreach programs. Her commitment to fostering inclusive environments is evident in her work, which focuses on empowering the blind and deaf communities through tailored educational initiatives and technology-driven solutions.",
    },
    {
      name: "Arjuna Caleb",
      role: "Technology Director",
      image: caleb,
      bio: "Technology Director Caleb leads our technology initiatives, including the development of LearnPod and other assistive technologies. He is dedicated to creating innovative solutions that enhance the learning experience for deaf and blind students, ensuring they have access to the same educational resources as their peers.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="About INCLUDE Foundation"
        subtitle="Our mission, vision, and the dedicated team working to empower the deaf and blind"
        imageUrl="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
      />

      {/* Mission and Vision */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading title="Our Mission" className="mb-6" />
              <p className="text-lg mb-6">
                The INCLUDE Foundation is committed to enhancing access to
                education and employment for the deaf and blind through improved
                communication tools and technology, fostering inclusive and
                disability-friendly education systems.
              </p>
              <p className="text-lg mb-6">
                We believe that everyone deserves equal access to quality
                education and meaningful employment opportunities, regardless of
                their disabilities.
              </p>
            </div>
            <div>
              <SectionHeading title="Our Vision" className="mb-6" />
              <p className="text-lg mb-6">
                We are a team of student innovators from ALCHE united by a
                shared mission — to break down the barriers faced disabled
                individuals specifically the deaf and blind across Africa.
              </p>
              <p className="text-lg mb-6">
                Our project, INCLUDE, was born from a simple yet urgent
                question: What would it take to make education and opportunity
                truly accessible for everyone
              </p>
              <p className="text-lg mb-6">
                Through research, interviews, and design, we discovered that
                most deaf and blind people face daily exclusion, not just from
                school or work, but from society itself. We couldn’t ignore
                that. So we decided to act.
              </p>
              <p className="text-lg mb-6">
                <p className="text-lg mb-6">
                  <h2>INCLUDE is our response</h2>.
                </p>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement in Detail */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="The Problem We're Addressing"
            subtitle="In-depth look at the challenges facing deaf and blind individuals in education and employment"
            center
          />

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg">
                According to UNICEF (2022), over 10.5 million children aged 5–14
                in Nigeria are out of school, and many of these children live
                with disabilities. In Sub-Saharan Africa, UNESCO reports that up
                to 90% of children with disabilities do not attend school.
              </p>
              <p className="text-lg">
                In Nigeria, an estimated 95.5% of children with disabilities are
                not in school, facing major challenges in education and
                employment. These challenges stem from:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-lg">
                <li>
                  Poor infrastructure in schools that doesn't accommodate
                  students with disabilities
                </li>
                <li>
                  Limited awareness and understanding of the needs of deaf and
                  blind students
                </li>
                <li>
                  Lack of specialized training for teachers working with
                  disabled students
                </li>
                <li>
                  Limited access to technologies that support inclusive learning
                </li>
                <li>
                  Insufficient government policies and funding for inclusive
                  education
                </li>
              </ul>
              <p className="text-lg">
                This situation not only affects individuals with disabilities
                but also limits national and regional development by excluding a
                large population from contributing to social and economic
                progress.
              </p>
              <p className="text-lg font-semibold text-include-blue">
                The INCLUDE Foundation is committed to addressing these
                challenges through a focused 3–5 year plan to improve access
                through localized tech, training, and awareness—empowering the
                blind and deaf to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach / Solution */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Approach"
            subtitle="How we're addressing the challenges facing deaf and blind individuals"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src={pod}
                alt="Student using LearnPod device in a classroom"
                className="w-full h-auto"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                LearnPod: Our Flagship Solution
              </h3>
              <p className="text-lg mb-4">
                LearnPod is a compact, solar-powered pocket device designed to
                provide inclusive education for deaf and blind children in
                low-resource areas.
              </p>
              <p className="text-lg mb-4">
                It enables self-paced learning using Braille, sign language
                videos, and audio content — all without requiring constant
                internet connectivity or stable electricity.
              </p>
              <p className="text-lg">
                Beyond technology, our comprehensive approach includes teacher
                training, policy advocacy, community engagement, and family
                support to create sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The dedicated professionals working to make our mission a reality"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                bio={member.bio}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-include-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-include-yellow text-include-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p>
                We believe in creating spaces where everyone belongs and can
                participate fully, regardless of ability.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-include-yellow text-include-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p>
                We constantly seek creative solutions to overcome barriers to
                education and employment for deaf and blind individuals.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-include-yellow text-include-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p>
                We aim to provide tools and resources that enable deaf and blind
                individuals to become independent and self-sufficient.
              </p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg">
              <div className="bg-include-yellow text-include-blue h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p>
                We develop solutions that are environmentally sustainable,
                financially viable, and can be maintained long-term.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
