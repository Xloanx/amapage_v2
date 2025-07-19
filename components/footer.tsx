import { Github, Linkedin, Phone } from "lucide-react";

interface FooterProps {
  data: {
    name: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

export const Footer = ({ data }: FooterProps) => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{data.name}</h3>
            <p className="text-primary-foreground/80">
              AI Fullstack Solutions Engineer & Training Specialist
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#skills" className="hover:text-primary-foreground transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-primary-foreground transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary-foreground transition-colors">Projects</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">About</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <a 
                href={data.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href={data.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href={`tel:${data.phone}`}
                className="hover:text-primary-foreground/70 transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} {data.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};