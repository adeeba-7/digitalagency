import { Button } from './ui/button';
import { ArrowRight, CheckCircle2, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { Badge } from './ui/badge';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative p-6 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#050B14] via-[#0A1628] to-[#0F2847]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-[#5BB4FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.7s' }}></div>
      </div>

      {/* Dot Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: 'radial-gradient(circle, #4AA3FF 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 1. IMAGE CONTENT: Appears on top (Mobile) / Left (Desktop) */}
          <div className="relative lg:h-[600px] lg:order-1">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] rounded-2xl blur-2xl opacity-20"></div>
            
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl shadow-[#0F6EEA]/30 border-2 border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50 transition-all">
              <img
                src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW18ZW58MXx8fHwxNzYxMjc0MDIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional Business Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EEA]/50 via-transparent to-transparent"></div>
              
              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#4AA3FF] rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#4AA3FF] rounded-br-2xl"></div>
            </div>
            
            {/* Enhanced Floating Card - FIXED FOR MOBILE SIZE */}
            <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#0F6EEA] via-[#2B8BF5] to-[#4AA3FF] p-4 md:p-6 rounded-2xl shadow-2xl backdrop-blur-sm border-2 border-[#5BB4FF]/50 max-w-[150px] md:max-w-xs hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 md:gap-3 mb-2">
                {/* Icon wrapper sets responsive dimensions */}
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30">
                  {/* Icon uses responsive w/h classes for size */}
                  <TrendingUp className="text-white w-5 h-5 md:w-7 md:h-7" /> 
                </div>
                <div>
                  <p className="text-white/90 text-xs md:text-sm">Client Success Rate</p>
                  <p className="text-white text-xl md:text-3xl">98%</p>
                </div>
              </div>
            </div>

            {/* Enhanced Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-full opacity-30 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-16 -right-16 w-52 h-52 bg-gradient-to-br from-[#4AA3FF] to-[#5BB4FF] rounded-full opacity-30 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* 2. TEXT CONTENT: Appears on bottom (Mobile) / Right (Desktop) */}
          <div className="text-left space-y-8 lg:order-2">
            
            {/* Headline with enhanced gradient */}
            <div>
              <h1 className="text-white mb-6 text-5xl lg:text-5xl leading-tight drop-shadow-2xl">
                Empower Your Brand with{' '}
                <span className="relative inline-block">
                  <span className="relative bg-gradient-to-r from-[#0F6EEA] via-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent">
                    Data-Driven Marketing
                  </span>
                </span>
              </h1>
              <p className="text-white/90 text-xl leading-relaxed">
                We help ambitious businesses grow online through strategic planning, creative excellence, 
                and cutting-edge technology. Transform your digital presence into measurable results.
              </p>
            </div>

            {/* CTAs with enhanced effects */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="relative bg-gradient-to-r from-[#0F6EEA] via-[#2B8BF5] to-[#4AA3FF] hover:from-[#0E63D5] hover:via-[#267DD6] hover:to-[#3A92E5] text-white shadow-2xl shadow-[#0F6EEA]/40 transition-all px-8 py-6 text-lg group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></span>
                <span className="relative">Start Your Growth Journey</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative" size={20} />
              </Button>
              <Button
                onClick={() => scrollToSection('portfolio')}
                size="lg"
                variant="outline"
                className="border-2 border-[#4AA3FF]/60 text-Black hover:bg-gradient-to-r hover:from-[#0F6EEA]/20 hover:to-[#4AA3FF]/20 hover:border-[#5BB4FF] backdrop-blur-sm transition-all px-8 py-6 text-lg shadow-lg shadow-[#4AA3FF]/10"
              >
                View Projects
              </Button>
            </div>

            {/* Stats with enhanced cards */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#4AA3FF]/20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm p-4 rounded-lg border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="text-[#4AA3FF]" size={24} />
                    <span className="text-2xl text-white">200+</span>
                  </div>
                  <p className="text-white/70 text-sm">Happy Clients</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm p-4 rounded-lg border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="text-[#4AA3FF]" size={24} />
                    <span className="text-2xl text-white">300%</span>
                  </div>
                  <p className="text-white/70 text-sm">Avg. ROI Growth</p>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm p-4 rounded-lg border border-[#4AA3FF]/30 hover:border-[#4AA3FF]/50 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="text-[#4AA3FF]" size={24} />
                    <span className="text-2xl text-white">15+</span>
                  </div>
                  <p className="text-white/70 text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}