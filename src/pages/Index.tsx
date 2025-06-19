
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Building, Users, TrendingUp, Database, Code, Terminal, Server, Globe, Zap, Layers, Monitor, Cpu, Cloud, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Enhanced Moving Background Icons */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Custom CSS for random floating animations */}
        <style>{`
          @keyframes float1 {
            0% { transform: translate(0, 100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.1; }
            100% { transform: translate(-20vw, -20vh) rotate(360deg); opacity: 0; }
          }
          
          @keyframes float2 {
            0% { transform: translate(100vw, 100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.25; }
            90% { opacity: 0.15; }
            100% { transform: translate(-30vw, -10vh) rotate(-360deg); opacity: 0; }
          }
          
          @keyframes float3 {
            0% { transform: translate(-10vw, 100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.2; }
            90% { opacity: 0.1; }
            100% { transform: translate(110vw, -30vh) rotate(180deg); opacity: 0; }
          }
          
          @keyframes float4 {
            0% { transform: translate(50vw, 100vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.3; }
            90% { opacity: 0.15; }
            100% { transform: translate(20vw, -40vh) rotate(-180deg); opacity: 0; }
          }
          
          @keyframes float5 {
            0% { transform: translate(100vw, 50vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.25; }
            90% { opacity: 0.1; }
            100% { transform: translate(-20vw, 10vh) rotate(270deg); opacity: 0; }
          }
          
          @keyframes float6 {
            0% { transform: translate(-20vw, 0vh) rotate(0deg); opacity: 0; }
            10% { opacity: 0.2; }
            90% { opacity: 0.15; }
            100% { transform: translate(120vw, 80vh) rotate(-270deg); opacity: 0; }
          }

          .floating-icon-1 { animation: float1 25s linear infinite; }
          .floating-icon-2 { animation: float2 30s linear infinite; }
          .floating-icon-3 { animation: float3 35s linear infinite; }
          .floating-icon-4 { animation: float4 28s linear infinite; }
          .floating-icon-5 { animation: float5 32s linear infinite; }
          .floating-icon-6 { animation: float6 27s linear infinite; }
        `}</style>

        {/* React Icons */}
        <div className="absolute floating-icon-1" style={{ animationDelay: '0s' }}>
          <Layers className="w-12 h-12 text-cyan-400/30" />
        </div>
        <div className="absolute floating-icon-2" style={{ animationDelay: '5s' }}>
          <Layers className="w-8 h-8 text-cyan-400/20" />
        </div>
        <div className="absolute floating-icon-3" style={{ animationDelay: '12s' }}>
          <Layers className="w-10 h-10 text-cyan-400/25" />
        </div>

        {/* Node.js / Server Icons */}
        <div className="absolute floating-icon-4" style={{ animationDelay: '2s' }}>
          <Server className="w-11 h-11 text-emerald-400/25" />
        </div>
        <div className="absolute floating-icon-1" style={{ animationDelay: '8s' }}>
          <Server className="w-9 h-9 text-emerald-400/20" />
        </div>
        <div className="absolute floating-icon-5" style={{ animationDelay: '15s' }}>
          <Server className="w-7 h-7 text-emerald-400/30" />
        </div>

        {/* TypeScript / Code Icons */}
        <div className="absolute floating-icon-6" style={{ animationDelay: '3s' }}>
          <Code className="w-10 h-10 text-blue-400/25" />
        </div>
        <div className="absolute floating-icon-3" style={{ animationDelay: '9s' }}>
          <Code className="w-8 h-8 text-blue-400/20" />
        </div>
        <div className="absolute floating-icon-2" style={{ animationDelay: '16s' }}>
          <Code className="w-12 h-12 text-blue-400/30" />
        </div>

        {/* JavaScript / Zap Icons */}
        <div className="absolute floating-icon-5" style={{ animationDelay: '4s' }}>
          <Zap className="w-9 h-9 text-yellow-400/25" />
        </div>
        <div className="absolute floating-icon-1" style={{ animationDelay: '11s' }}>
          <Zap className="w-7 h-7 text-yellow-400/30" />
        </div>
        <div className="absolute floating-icon-4" style={{ animationDelay: '18s' }}>
          <Zap className="w-11 h-11 text-yellow-400/20" />
        </div>

        {/* Express / Globe Icons */}
        <div className="absolute floating-icon-2" style={{ animationDelay: '6s' }}>
          <Globe className="w-8 h-8 text-indigo-400/25" />
        </div>
        <div className="absolute floating-icon-6" style={{ animationDelay: '13s' }}>
          <Globe className="w-10 h-10 text-indigo-400/20" />
        </div>
        <div className="absolute floating-icon-3" style={{ animationDelay: '19s' }}>
          <Globe className="w-9 h-9 text-indigo-400/30" />
        </div>

        {/* Database Icons */}
        <div className="absolute floating-icon-4" style={{ animationDelay: '7s' }}>
          <Database className="w-11 h-11 text-purple-400/25" />
        </div>
        <div className="absolute floating-icon-1" style={{ animationDelay: '14s' }}>
          <Database className="w-8 h-8 text-purple-400/20" />
        </div>
        <div className="absolute floating-icon-5" style={{ animationDelay: '20s' }}>
          <Database className="w-10 h-10 text-purple-400/30" />
        </div>

        {/* Terminal Icons */}
        <div className="absolute floating-icon-6" style={{ animationDelay: '1s' }}>
          <Terminal className="w-9 h-9 text-green-400/25" />
        </div>
        <div className="absolute floating-icon-2" style={{ animationDelay: '10s' }}>
          <Terminal className="w-7 h-7 text-green-400/30" />
        </div>
        <div className="absolute floating-icon-4" style={{ animationDelay: '17s' }}>
          <Terminal className="w-11 h-11 text-green-400/20" />
        </div>

        {/* Cloud Icons */}
        <div className="absolute floating-icon-3" style={{ animationDelay: '21s' }}>
          <Cloud className="w-10 h-10 text-sky-400/25" />
        </div>
        <div className="absolute floating-icon-5" style={{ animationDelay: '23s' }}>
          <Cloud className="w-8 h-8 text-sky-400/20" />
        </div>

        {/* Monitor/CPU Icons */}
        <div className="absolute floating-icon-1" style={{ animationDelay: '22s' }}>
          <Monitor className="w-9 h-9 text-orange-400/25" />
        </div>
        <div className="absolute floating-icon-6" style={{ animationDelay: '24s' }}>
          <Cpu className="w-8 h-8 text-red-400/20" />
        </div>

        {/* Settings Icons */}
        <div className="absolute floating-icon-2" style={{ animationDelay: '25s' }}>
          <Settings className="w-7 h-7 text-gray-400/25" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-400">SHEHZAD</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-blue-400">
                <AvatarImage src="/lovable-uploads/65d09810-82e9-4d6a-bd9e-eb086762a403.png" alt="Shehzad Kareem" />
                <AvatarFallback className="text-2xl font-bold bg-blue-600 text-white">SK</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SHEHZAD KAREEM
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8">
              Full Stack Developer | DevOps Engineer | AWS Expert
            </p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              6+ Years of Experience • Led teams to deliver sophisticated SaaS solutions • Expert in scalable microservices & cloud architecture
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open('https://www.linkedin.com/in/mrshehzad137/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
                onClick={() => window.open('mailto:mr.shehzad.137@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Team Leadership</h3>
                <p className="text-slate-300">Led teams of 5+ developers delivering sophisticated CRM and workforce management solutions</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Scalable Solutions</h3>
                <p className="text-slate-300">Converted Single to Multi-Tenancy Architecture supporting 10k+ users without downtime</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Enterprise Experience</h3>
                <p className="text-slate-300">Contributed to $5M+ revenue SaaS platforms with microservices architecture</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
          <div className="space-y-12">
            {/* Current Role */}
            <div className="relative">
              <div className="absolute left-0 top-6 w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="absolute left-2 top-10 w-0.5 h-full bg-slate-700"></div>
              <div className="ml-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">Full Stack Developer / DevOps Engineer / AWS Expert</h3>
                        <p className="text-lg text-white mb-2">Freelance / Self Employed</p>
                        <div className="flex items-center text-slate-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          April 2025 - Present
                        </div>
                        <div className="flex items-center text-slate-400">
                          <MapPin className="w-4 h-4 mr-2" />
                          Remote
                        </div>
                      </div>
                    </div>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Implemented DevOps best practices, including CI/CD pipelines, Docker, and Kubernetes</li>
                      <li>• Converted Single Tenancy to Multi-Tenancy Architecture ensuring scalability for 10k users</li>
                      <li>• Architected frontend in React.js and Next.js with state management and responsive design</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Octonius */}
            <div className="relative">
              <div className="absolute left-0 top-6 w-4 h-4 bg-purple-400 rounded-full"></div>
              <div className="absolute left-2 top-10 w-0.5 h-full bg-slate-700"></div>
              <div className="ml-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-purple-400 mb-2">Principal Software Engineer / Team Lead</h3>
                        <p className="text-lg text-white mb-2">Octonius <span className="text-green-400">(SaaS - $5M Revenue in 2024)</span></p>
                        <div className="flex items-center text-slate-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          June 2023 - April 2025 • 2 years
                        </div>
                        <div className="flex items-center text-slate-400 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          Remote, USA
                        </div>
                        <a href="https://octonius.com" className="text-blue-400 hover:text-blue-300 flex items-center">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          octonius.com
                        </a>
                      </div>
                    </div>
                    <ul className="text-slate-300 space-y-2">
                      <li>• Led a team of 5 developers delivering sophisticated CRM and workforce management tools</li>
                      <li>• Architected scalable microservices using Node.js and AWS (Lambda, API Gateway, DynamoDB, SQS)</li>
                      <li>• Engineered end-to-end CI/CD pipelines integrating AWS CodePipeline with GitHub Enterprise</li>
                      <li>• Used TypeScript for type safety and delivered production-ready services for thousands of users</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Codility */}
            <div className="relative">
              <div className="absolute left-0 top-6 w-4 h-4 bg-green-400 rounded-full"></div>
              <div className="ml-8">
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-green-400 mb-2">Sr. Software Engineer</h3>
                        <p className="text-lg text-white mb-2">Codility.co</p>
                        <div className="flex items-center text-slate-400 mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          May 2018 - April 2023 • 5 years
                        </div>
                        <div className="flex items-center text-slate-400 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          Lahore, PK
                        </div>
                        <a href="https://codility.co/" className="text-blue-400 hover:text-blue-300 flex items-center">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          codility.co
                        </a>
                      </div>
                    </div>
                    <div className="text-slate-300 space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Key Projects:</h4>
                        <ul className="space-y-2">
                          <li>• <strong>Chowmill</strong> - Fresh Food Delivery Platform ($1.2M Revenue)</li>
                          <li>• <strong>OrderMadeSimple</strong> - Managed 400+ suppliers, 400K+ products, 700+ venues</li>
                          <li>• <strong>Swedish Fall (VAAMSports)</strong> - Sustainable sportswear brand with serverless backend</li>
                          <li>• <strong>OpenSea NFT Bot</strong> - AI-powered automated bidding system</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-6 h-6 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-blue-400">Backend & DevOps</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'Node.js', icon: <Server className="w-4 h-4" /> },
                    { name: 'TypeScript', icon: <Code className="w-4 h-4" /> },
                    { name: 'Express.js', icon: <Globe className="w-4 h-4" /> },
                    { name: 'Nest.js', icon: <Layers className="w-4 h-4" /> },
                    { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
                    { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
                    { name: 'Redis', icon: <Zap className="w-4 h-4" /> },
                    { name: 'Docker', icon: <Settings className="w-4 h-4" /> },
                    { name: 'Kubernetes', icon: <Cloud className="w-4 h-4" /> },
                    { name: 'AWS Lambda', icon: <Cloud className="w-4 h-4" /> },
                    { name: 'API Gateway', icon: <Globe className="w-4 h-4" /> },
                    { name: 'DynamoDB', icon: <Database className="w-4 h-4" /> }
                  ].map((tech) => (
                    <span key={tech.name} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300 hover:bg-slate-600 transition-colors flex items-center gap-1">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-6 h-6 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-purple-400">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'React.js', icon: <Layers className="w-4 h-4" /> },
                    { name: 'Next.js', icon: <Monitor className="w-4 h-4" /> },
                    { name: 'Vue.js', icon: <Layers className="w-4 h-4" /> },
                    { name: 'Redux', icon: <Settings className="w-4 h-4" /> },
                    { name: 'TypeScript', icon: <Code className="w-4 h-4" /> },
                    { name: 'TailwindCSS', icon: <Layers className="w-4 h-4" /> },
                    { name: 'Material UI', icon: <Layers className="w-4 h-4" /> },
                    { name: 'Angular.js', icon: <Layers className="w-4 h-4" /> },
                    { name: 'HTML5', icon: <Code className="w-4 h-4" /> },
                    { name: 'CSS/SCSS', icon: <Code className="w-4 h-4" /> }
                  ].map((tech) => (
                    <span key={tech.name} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300 hover:bg-slate-600 transition-colors flex items-center gap-1">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Terminal className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-semibold text-green-400">AWS & Cloud</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    { name: 'EC2', icon: <Server className="w-4 h-4" /> },
                    { name: 'Lambda', icon: <Cloud className="w-4 h-4" /> },
                    { name: 'S3', icon: <Database className="w-4 h-4" /> },
                    { name: 'RDS', icon: <Database className="w-4 h-4" /> },
                    { name: 'DynamoDB', icon: <Database className="w-4 h-4" /> },
                    { name: 'CloudFront', icon: <Globe className="w-4 h-4" /> },
                    { name: 'Route 53', icon: <Globe className="w-4 h-4" /> },
                    { name: 'VPC', icon: <Settings className="w-4 h-4" /> },
                    { name: 'IAM', icon: <Settings className="w-4 h-4" /> },
                    { name: 'CloudWatch', icon: <Monitor className="w-4 h-4" /> },
                    { name: 'SNS', icon: <Globe className="w-4 h-4" /> },
                    { name: 'SQS', icon: <Globe className="w-4 h-4" /> }
                  ].map((tech) => (
                    <span key={tech.name} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300 hover:bg-slate-600 transition-colors flex items-center gap-1">
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Octonius', 
                url: 'https://octonius.com/', 
                desc: 'Sophisticated CRM & Workforce Management', 
                revenue: '$5M Revenue',
                image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop'
              },
              { 
                name: 'Chowmill', 
                url: 'https://chowmill.com/', 
                desc: 'Fresh Food Delivery Platform', 
                revenue: '$1.2M Revenue',
                image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop'
              },
              { 
                name: 'OrderMadeSimple', 
                url: 'https://ordersmadesimple.com/', 
                desc: 'Order & Supplier Management', 
                users: '400+ Suppliers',
                image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
              },
              { 
                name: 'VAAMSport', 
                url: 'https://vaamsport.com/en', 
                desc: 'Sustainable Sportswear Brand', 
                tech: 'Serverless Architecture',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop'
              },
              { 
                name: 'Tournated', 
                url: 'https://www.tournated.com/', 
                desc: 'Tournament Management Platform', 
                feature: 'Real-time Updates',
                image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop'
              },
              { 
                name: 'Centraleyes', 
                url: 'https://www.centraleyes.com/', 
                desc: 'Risk Management Solution', 
                feature: 'Enterprise Grade',
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop'
              }
            ].map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                  <p className="text-slate-300 mb-4">{project.desc}</p>
                  {project.revenue && <p className="text-green-400 text-sm mb-4">{project.revenue}</p>}
                  {project.users && <p className="text-purple-400 text-sm mb-4">{project.users}</p>}
                  {project.tech && <p className="text-blue-400 text-sm mb-4">{project.tech}</p>}
                  {project.feature && <p className="text-yellow-400 text-sm mb-4">{project.feature}</p>}
                  <a href={project.url} className="text-blue-400 hover:text-blue-300 flex items-center text-sm">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Project
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-slate-300 mb-12">
            Ready to bring your ideas to life with scalable, high-performance solutions
          </p>
          <div className="flex justify-center space-x-6">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => window.open('mailto:mr.shehzad.137@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
              onClick={() => window.open('https://www.linkedin.com/in/mrshehzad137/', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Shehzad Kareem. Full Stack Developer | DevOps Engineer | AWS Expert</p>
          <p className="mt-2">Bachelor's in Software Engineering • COMSATS Institute of Information Technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
