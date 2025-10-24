import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 p-6 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#0F6EEA] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#4AA3FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-white mb-4 text-4xl lg:text-5xl">Let's Work Together</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Ready to take your digital marketing to the next level? Get in touch with us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/5 border-[#4AA3FF]/30 text-white placeholder:text-white/50 focus:border-[#4AA3FF] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/5 border-[#4AA3FF]/30 text-white placeholder:text-white/50 focus:border-[#4AA3FF] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/5 border-[#4AA3FF]/30 text-white placeholder:text-white/50 min-h-[150px] focus:border-[#4AA3FF] transition-colors"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] hover:from-[#0E63D5] hover:to-[#3A92E5] shadow-lg shadow-[#0F6EEA]/30 transition-all"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 hover:border-[#4AA3FF]/50 transition-all">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-[#0F6EEA]/30">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Email</h4>
                  <p className="text-white/70">hello@kickoffmedia.com</p>
                  <p className="text-white/70">support@kickoffmedia.com</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 hover:border-[#4AA3FF]/50 transition-all">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-[#0F6EEA]/30">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Phone</h4>
                  <p className="text-white/70">+1 (555) 123-4567</p>
                  <p className="text-white/70">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-6 hover:border-[#4AA3FF]/50 transition-all">
              <div className="flex items-start">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mr-4 flex-shrink-0 shadow-lg shadow-[#0F6EEA]/30">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-2">Location</h4>
                  <p className="text-white/70">123 Marketing Street</p>
                  <p className="text-white/70">New York, NY 10001</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}