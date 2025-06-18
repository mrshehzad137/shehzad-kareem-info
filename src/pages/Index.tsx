
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Calendar, MapPin, Building, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
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
      <section className="pt-32 pb-20 px-6">
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
      <section id="about" className="py-20 px-6">
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
      <section id="experience" className="py-20 px-6 bg-slate-900/50">
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
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">Backend & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'TypeScript', 'Express.js', 'Nest.js', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS Lambda', 'API Gateway', 'DynamoDB'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Vue.js', 'Redux', 'TypeScript', 'TailwindCSS', 'Material UI', 'Angular.js', 'HTML5', 'CSS/SCSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-400">AWS & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {['EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'CloudFront', 'Route 53', 'VPC', 'IAM', 'CloudWatch', 'SNS', 'SQS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">{tech}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Octonius', url: 'https://octonius.com/', desc: 'Sophisticated CRM & Workforce Management', revenue: '$5M Revenue' },
              { name: 'Chowmill', url: 'https://chowmill.com/', desc: 'Fresh Food Delivery Platform', revenue: '$1.2M Revenue' },
              { name: 'OrderMadeSimple', url: 'https://ordersmadesimple.com/', desc: 'Order & Supplier Management', users: '400+ Suppliers' },
              { name: 'VAAMSport', url: 'https://vaamsport.com/en', desc: 'Sustainable Sportswear Brand', tech: 'Serverless Architecture' },
              { name: 'Tournated', url: 'https://www.tournated.com/', desc: 'Tournament Management Platform', feature: 'Real-time Updates' },
              { name: 'Centraleyes', url: 'https://www.centraleyes.com/', desc: 'Risk Management Solution', feature: 'Enterprise Grade' }
            ].map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-colors group">
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
      <section id="contact" className="py-20 px-6">
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
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Shehzad Kareem. Full Stack Developer | DevOps Engineer | AWS Expert</p>
          <p className="mt-2">Bachelor's in Software Engineering • COMSATS Institute of Information Technology</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
