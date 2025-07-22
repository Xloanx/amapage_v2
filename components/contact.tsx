import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface ContactProps {
  data: {
    phone: string;
    email: string;
    github: string;
    linkedin: string;
  };
}

export const Contact = ({ data }: ContactProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to collaborate on innovative solutions or discuss opportunities
          </p>
        </div>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Email - spans full width */}
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="w-full h-16 gap-4 hover:scale-105 transition-transform"
            >
              <a href={`mailto:${data.email}`}>
                <Mail className="w-6 h-6" />
                <div className="text-left">
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-muted-foreground">{data.email}</div>
                </div>
              </a>
            </Button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-16 gap-4 hover:scale-105 transition-transform"
              >
                <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">LinkedIn</div>
                    <div className="text-sm text-muted-foreground">Professional Network</div>
                  </div>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-16 gap-4 hover:scale-105 transition-transform"
              >
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">GitHub</div>
                    <div className="text-sm text-muted-foreground">Code Collaboration</div>
                  </div>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-16 gap-4 hover:scale-105 transition-transform"
              >
                <a href={`tel:${data.phone}`}>
                  <Phone className="w-6 h-6" />
                  <div className="text-left">
                    <div className="font-semibold">Phone</div>
                    <div className="text-sm text-muted-foreground">{data.phone}</div>
                  </div>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="h-16 gap-4 hover:scale-105 transition-transform"
              >
                <a href={`https://wa.me/${data.phone.replace(/[^\d]/g, '')}`} target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm text-muted-foreground">Quick Message</div>
                  </div>
                </a>
              </Button>
            </div>
            
            <div className="text-center pt-6 border-t">
              <p className="text-muted-foreground">
                Open to collaborations, consulting opportunities, and innovative projects
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};