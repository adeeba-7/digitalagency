import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, ArrowLeft, Filter } from 'lucide-react';

const allProjects = [
  {
    title: 'TechStart Growth Campaign',
    category: 'Digital Marketing',
    description: 'Increased organic traffic by 250% through comprehensive SEO and content strategy',
    image: 'https://images.unsplash.com/photo-1759393851741-674ee71fb498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwY2FtcGFpZ258ZW58MXx8fHwxNzYxMjg4Mjc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: { roi: '+250%', duration: '6 months', platform: 'Multi-channel' }
  },
  {
    title: 'FitLife Mobile App',
    category: 'App Development',
    description: 'Built a fitness tracking app that reached 100K downloads in the first month',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjMwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: { roi: '100K', duration: '4 months', platform: 'iOS & Android' }
  },
  {
    title: 'E-Commerce Platform Redesign',
    category: 'Web Development',
    description: 'Redesigned and developed a modern e-commerce platform increasing conversions by 180%',
    image: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjEyMDY1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: { roi: '+180%', duration: '8 months', platform: 'Web' }
  },
  {
    title: 'Social Media Mastery',
    category: 'Social Media',
    description: 'Grew Instagram following from 5K to 150K with engaging content strategy',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzYxMjg3MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    metrics: { roi: '145K', duration: '12 months', platform: 'Instagram' }
  },
  {
    title: 'HealthCare Brand Revival',
    category: 'Branding',
    description: 'Complete brand overhaul resulting in 300% increase in brand recognition',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1080',
    metrics: { roi: '+300%', duration: '5 months', platform: 'Multi-channel' }
  },
  {
    title: 'B2B Lead Generation',
    category: 'Digital Marketing',
    description: 'Generated 500+ qualified leads through targeted LinkedIn and email campaigns',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1080',
    metrics: { roi: '500+', duration: '3 months', platform: 'LinkedIn' }
  },
  {
    title: 'Restaurant Chain Automation',
    category: 'Web Development',
    description: 'Developed online ordering system that increased revenue by 220%',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1080',
    metrics: { roi: '+220%', duration: '6 months', platform: 'Web & Mobile' }
  },
  {
    title: 'Fashion Brand Launch',
    category: 'Social Media',
    description: 'Launched fashion brand on TikTok reaching 2M+ views in first campaign',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1080',
    metrics: { roi: '2M+', duration: '2 months', platform: 'TikTok' }
  },
  {
    title: 'SaaS Product Marketing',
    category: 'Digital Marketing',
    description: 'Reduced customer acquisition cost by 65% through optimized PPC campaigns',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1080',
    metrics: { roi: '-65% CAC', duration: '4 months', platform: 'Google Ads' }
  },
  {
    title: 'Real Estate Virtual Tours',
    category: 'App Development',
    description: 'Created VR tour platform increasing property inquiries by 340%',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1080',
    metrics: { roi: '+340%', duration: '7 months', platform: 'Web & VR' }
  },
  {
    title: 'Education Platform SEO',
    category: 'Digital Marketing',
    description: 'Dominated search rankings for 50+ education-related keywords',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1080',
    metrics: { roi: '50+ #1', duration: '9 months', platform: 'Google' }
  },
  {
    title: 'Fintech App Design',
    category: 'App Development',
    description: 'Designed intuitive banking app with 4.8★ rating and 500K+ downloads',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1080',
    metrics: { roi: '500K+', duration: '5 months', platform: 'iOS & Android' }
  }
];

const categories = ['All', 'Digital Marketing', 'App Development', 'Web Development', 'Social Media', 'Branding'];

interface PortfolioPageProps {
  onBack: () => void;
}

export function PortfolioPage({ onBack }: PortfolioPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628]">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#0F6EEA] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4AA3FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#5BB4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-700"></div>
      </div>

      {/* Header with Back Button */}
      <div className="sticky top-0 z-50 bg-[#0A1628]/95 backdrop-blur-lg border-b border-[#4AA3FF]/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-white hover:text-[#4AA3FF] hover:bg-[#4AA3FF]/10 mb-4"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
          <div className="text-center">
            <h1 className="text-white mb-4 text-4xl lg:text-5xl">Our Portfolio</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-4"></div>
            <p className="text-white/80 text-lg">Explore all our successful projects and campaigns</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8 flex-wrap justify-center">
          <Filter className="text-[#4AA3FF]" size={20} />
          {categories.map((category) => (
            <Badge
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white shadow-lg shadow-[#0F6EEA]/30'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-[#4AA3FF]/20'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#0F6EEA]/5 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/20 overflow-hidden group hover:border-[#4AA3FF]/40 hover:shadow-xl hover:shadow-[#0F6EEA]/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/90 via-[#0A1628]/40 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white border-0 shadow-lg">
                    {project.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs">
                      {project.metrics.roi}
                    </Badge>
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs">
                      {project.metrics.duration}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2 flex items-center justify-between group">
                  {project.title}
                  <ExternalLink className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </h3>
                <p className="text-white/70 mb-3">{project.description}</p>
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span className="flex items-center gap-1">
                    📍 {project.metrics.platform}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
