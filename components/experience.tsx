import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ExperienceItem {
  company: string;
  website: string;
  position: string;
  duration: string;
  type: string;
  tools: string[];
  responsibilities: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

export const Experience = ({ experience }: ExperienceProps) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record in training development and AI solutions engineering
          </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-primary mb-2">
                      {exp.position}
                    </CardTitle>
                    <div className="flex items-center gap-2 mb-2">
                      <a 
                        href={exp.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg font-semibold hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {exp.company}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">{exp.duration}</p>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Technologies & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.tools.map((tool, toolIndex) => (
                      <Badge key={toolIndex} variant="secondary">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Roles & Responsibilities</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span className="text-foreground/80">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};