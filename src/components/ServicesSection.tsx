import { Card } from './ui/card';
import { Share2, Search, Target, FileText, Mail, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build your brand presence across all major social platforms with engaging content and strategic campaigns.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with our proven SEO strategies that drive organic traffic and conversions.',
  },
  {
    icon: Target,
    title: 'Google Ads',
    description: 'Maximize ROI with targeted Google Ads campaigns optimized for performance and conversion.',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'Captivate your audience with high-quality content that tells your story and drives engagement.',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns that convert.',
  },
  {
    icon: TrendingUp,
    title: 'Data-Driven Strategy',
    description: 'Make informed decisions with comprehensive analytics and insights that fuel sustainable growth.',
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 p-6 bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at center, #4AA3FF 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-white mb-4 text-4xl lg:text-5xl">What We Do</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Comprehensive digital marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-8 hover:bg-[#0F6EEA]/15 hover:border-[#4AA3FF]/50 hover:shadow-xl hover:shadow-[#0F6EEA]/20 transition-all duration-300 group overflow-hidden"
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/0 to-[#4AA3FF]/0 group-hover:from-[#0F6EEA]/10 group-hover:to-[#4AA3FF]/10 transition-all duration-200"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#0F6EEA]/40 transition-all duration-300 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <Icon className="text-white relative z-10" size={32} />
                  </div>
                  <h3 className="text-white mb-3">{service.title}</h3>
                  <p className="text-white/70">{service.description}</p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[#4AA3FF]/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}