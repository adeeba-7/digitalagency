import { Card } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Star } from 'lucide-react';
import logo1 from '../assets/ESSENTIAL HAIR SALOON LOGO-01.png';
import logo2 from '../assets/FFLogo.jpeg';
import logo3 from '../assets/global_solutions.jpeg';
import logo4 from '../assets/healthcare.png';
const testimonials = [
  {
    company: 'Essential Hair Salon',
    Location: 'kirkland, WDC, US',
    image: logo1,
    quote: 'KickOff Media transformed our digital presence completely. Within 3 months, we saw a 300% increase in qualified leads. Their strategic approach and attention to detail is unmatched.',
    rating: 5,
  },
  {
    company: 'Fashion Forward',
    Location: 'London UK',
    image: logo2,
    quote: 'Working with KickOff Media has been a game-changer for our e-commerce business. Their data-driven strategies helped us double our online sales in just 6 months.',
    rating: 5,
  },
  {
    company: 'Global Solutions',
    Location: 'Iatanbul, Turkey',
    image: logo3,
    quote: 'The team at KickOff Media truly understands modern marketing. Their creative campaigns and technical expertise helped us reach new markets we never thought possible.',
    rating: 5,
  },
  {
    company: 'HealthCare Plus',
    Location: 'Karachi, Pakistan',
    image:logo4,
    quote: 'Exceptional service and results! KickOff Media helped us build a strong online community and significantly increased our patient engagement rates.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 p-6 bg-gradient-to-br from-[#0A1628] via-[#0F2847] to-[#0A1628] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-20 w-96 h-96 bg-[#0F6EEA] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-1/3 right-20 w-96 h-96 bg-[#4AA3FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#4AA3FF] uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="text-white mb-4 text-4xl lg:text-5xl">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mx-auto mb-8"></div>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from the businesses we've helped grow
          </p>
        </div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border-[#4AA3FF]/30 p-8 h-full hover:border-[#4AA3FF]/50 transition-all">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.Location}
                      className="w-16 h-16 rounded-full object-cover mr-4 ring-2 ring-[#4AA3FF]/30"
                    />
                    <div>
                      <h3 className="text-[#4AA3FF]">{testimonial.company}</h3>
                      <h4 className="text-white">{testimonial.Location}</h4>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[#4AA3FF] fill-[#4AA3FF]" size={20} />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed">"{testimonial.quote}"</p>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 border-[#4AA3FF]/30 text-white hover:bg-[#0F6EEA]/30 hover:border-[#4AA3FF]/50" />
          <CarouselNext className="bg-gradient-to-br from-[#0F6EEA]/20 to-[#4AA3FF]/20 border-[#4AA3FF]/30 text-white hover:bg-[#0F6EEA]/30 hover:border-[#4AA3FF]/50" />
        </Carousel>
      </div>
    </section>
  );
}