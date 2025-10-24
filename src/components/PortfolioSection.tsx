import { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Brand Campaign Launch',
    description: 'Comprehensive social media campaign that increased engagement by 250%',
    image: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjEyMTk3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Social Media',
  },
  {
    title: 'SEO Transformation',
    description: 'Drove 400% increase in organic traffic within 6 months',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnR8ZW58MXx8fHwxNzYxMjg3MjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'SEO',
  },
  {
    title: 'E-commerce Optimization',
    description: 'Redesigned user experience resulting in 180% conversion rate increase',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MTI3ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Web Design',
  },
  {
    title: 'Mobile App Marketing',
    description: 'Generated 50K+ downloads through targeted ad campaigns',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxMjMwODAxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Paid Ads',
  },
  {
    title: 'Content Strategy Success',
    description: 'Created viral content series reaching 2M+ impressions',
    image: 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nfGVufDF8fHx8MTc2MTIyMDE1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Content',
  },
  {
    title: 'Email Campaign Overhaul',
    description: 'Redesigned email strategy increasing open rates by 320%',
    image: 'https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBjYW1wYWlnbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjEyMTk3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'Email Marketing',
  },
];

export function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  const handleShowMore = () => {
    // Dispatch custom event to navigate to portfolio page
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'portfolio' }));
  };

  return (
    <section id="portfolio" className="py-24 p-6 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-[#0F6EEA] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/3 w-[500px] h-[500px] bg-[#4AA3FF] rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #4AA3FF 0, #4AA3FF 1px, transparent 0, transparent 50%), repeating-linear-gradient(0deg, #4AA3FF 0, #4AA3FF 1px, transparent 0, transparent 50%)',
        backgroundSize: '30px 30px'
      }}></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] uppercase tracking-wider" >Portfolio</span>
          </div>
          <h2 className="text-white mb-4 text-4xl lg:text-5xl">Our Success Stories</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Discover how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#0F6EEA]/5 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/20 overflow-hidden group hover:border-[#4AA3FF]/40 hover:shadow-xl hover:shadow-[#0F6EEA]/10 transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/80 via-[#0A1628]/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] text-white text-sm rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-white mb-2 flex items-center justify-between group">
                  {project.title}
                  <ExternalLink className="text-[#4AA3FF] opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </h3>
                <p className="text-white/70">{project.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {!showAll && (
          <div className="text-center">
            <Button
              onClick={handleShowMore}
              variant="outline"
              size="lg"
              className="border-2 border-[#4AA3FF]/50 text-[#4AA3FF] hover:bg-gradient-to-r hover:from-[#0F6EEA] hover:to-[#4AA3FF] hover:text-white hover:border-transparent transition-all shadow-lg hover:shadow-[#0F6EEA]/20"
            >
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}