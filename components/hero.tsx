import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  data: {
    name: string;
    title: string;
    location: string;
    phone: string;
    github: string;
    linkedin: string;
    resume: string;
    heroDescription: string;
  };
  // onDownloadResume: () => void;
}

// export const Hero = ({ data, onDownloadResume }: HeroProps) => {
export const Hero = ({ data }: HeroProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {data.title}
          </p>
          <p className="text-lg text-muted-foreground">📍 {data.location}</p>
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
          {data.heroDescription}
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Link href={data.resume} target="_blank" rel="noopener noreferrer">
            <Button 
              // onClick={onDownloadResume}
              size="lg" 
              className="gap-2 hover:scale-105 transition-transform"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
          </Link>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="gap-2 hover:scale-105 transition-transform"
          >
            <Link href={data.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="gap-2 hover:scale-105 transition-transform"
          >
            <Link href={data.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            asChild
            className="gap-2 hover:scale-105 transition-transform"
          >
            <Link href={`tel:${data.phone}`}>
              <Phone className="w-5 h-5" />
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};