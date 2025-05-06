
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { SectionHeading } from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

// Define interfaces for form data and errors
interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validate()) {
      setSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message sent",
          description: "Thank you for reaching out! We'll respond to your message shortly.",
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        
        setSubmitting(false);
      }, 1500);
    }
  };

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-include-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Have questions about our work or want to get involved? 
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                title="Get in Touch"
                subtitle="We're here to answer your questions about our programs and how you can get involved."
              />
              
              <div className="space-y-8 mt-8">
                <div className="flex items-start">
                  <div className="bg-include-light rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-include-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <a href="mailto:info@includefoundation.org" className="text-include-blue hover:underline">
                      info@includefoundation.org
                    </a>
                    <p className="text-gray-600 mt-1">
                      For general inquiries and information
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-include-light rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-include-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <a href="tel:+2348000000000" className="text-include-blue hover:underline">
                      +234 800 000 0000
                    </a>
                    <p className="text-gray-600 mt-1">
                      Monday to Friday, 9am - 5pm WAT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-include-light rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-include-blue" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Visit Us</h3>
                    <address className="not-italic text-gray-800">
                      123 Inclusion Street<br />
                      Lagos, Nigeria
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  
                  <a href="https://youtube.com/@afrix_gen?si=vzSIFGwpUy-Wd7-m" className="h-10 w-10 rounded-full bg-include-blue flex items-center justify-center text-white hover:bg-include-dark transition-colors">
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.instagram.com/afrix_gen?igsh=eG4zZWRhaW5tdTA1&utm_source=qr" className="h-10 w-10 rounded-full bg-include-blue flex items-center justify-center text-white hover:bg-include-dark transition-colors">
                    <Instagram size={20} />
                  </a>
                  
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-describedby="name-error"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-sm text-red-500">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-base">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        aria-describedby="email-error"
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-500">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">
                      Phone (optional)
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-base">
                      Subject <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      aria-describedby="subject-error"
                      className={errors.subject ? "border-red-500" : ""}
                    />
                    {errors.subject && (
                      <p id="subject-error" className="text-sm text-red-500">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base">
                      Message <span className="text-red-500">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-describedby="message-error"
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-sm text-red-500">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-include-blue hover:bg-include-dark flex items-center justify-center"
                    disabled={submitting}
                  >
                    {submitting ? 'Sending...' : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
