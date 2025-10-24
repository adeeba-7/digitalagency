import { Card } from "./ui/card";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 p-6 bg-gradient-to-br from-[#0F2847] via-[#1a4d7a] to-[#0F2847] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#0F6EEA] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4AA3FF] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(79, 163, 255, 0.3) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 1. Text Content (Left Column in HTML) - Has lg:order-2 to move it to the RIGHT column on desktop */}
          <div className="lg:order-2">
            <div className="inline-block mb-4">
              <span className="text-[#4AA3FF] uppercase tracking-wider">
                About Us
              </span>
            </div>
            <h2 className="text-white mb-6 text-4xl lg:text-5xl">Who We Are</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#0F6EEA] to-[#4AA3FF] mb-8"></div>
            <div className="space-y-4">
              <p className="text-white/80 text-lg leading-relaxed">
                KickOff Media is a forward-thinking digital marketing agency
                dedicated to helping businesses thrive in the digital age.
                Founded with a passion for innovation and results, we combine
                data-driven strategies with creative excellence to deliver
                measurable growth for our clients.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Our mission is to empower brands to reach their full potential
                through cutting-edge marketing solutions and personalized
                service. We believe in building lasting partnerships with our
                clients, understanding their unique challenges, and crafting
                strategies that drive real, sustainable results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border border-[#4AA3FF]/20 rounded-xl p-6 hover:border-[#4AA3FF]/40 transition-all">
                <div className="text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-white/70">Projects Completed</p>
              </div>
              <div className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border border-[#4AA3FF]/20 rounded-xl p-6 hover:border-[#4AA3FF]/40 transition-all">
                <div className="text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <p className="text-white/70">Happy Clients</p>
              </div>
              <div className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border border-[#4AA3FF]/20 rounded-xl p-6 hover:border-[#4AA3FF]/40 transition-all">
                <div className="text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-white/70">Years Experience</p>
              </div>
              <div className="bg-gradient-to-br from-[#0F6EEA]/10 to-[#4AA3FF]/5 backdrop-blur-sm border border-[#4AA3FF]/20 rounded-xl p-6 hover:border-[#4AA3FF]/40 transition-all">
                <div className="text-4xl bg-gradient-to-r from-[#4AA3FF] to-[#5BB4FF] bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-white/70">Client Retention</p>
              </div>
            </div>
          </div>

          {/* 2. Image Content (Right Column in HTML) - Has lg:order-1 to pull it to the LEFT column on desktop */}
          <div className="relative lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#0F6EEA]/20 border border-[#4AA3FF]/20">
              <img
                src="https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyNTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F6EEA]/30 via-transparent to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-[#0F6EEA] to-[#4AA3FF] rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-gradient-to-br from-[#4AA3FF] to-[#5BB4FF] rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
