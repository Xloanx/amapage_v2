import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectItem {
  title: string;
  challenge: string;
  solution: string;
  implementation: string;
  tools: string[];
  repository: string;
  image: string;
  demo: string;
}

interface ProjectsProps {
  projects: ProjectItem[];
}

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that demonstrate technical expertise and business impact
          </p>
        </div>
        
          <Carousel className="w-full max-w-full">
            <CarouselContent >
              {projects.map((project, index) => (
              <CarouselItem key={index} >
                <div className="p-1">
                  <Card  className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <div className="aspect-video bg-muted flex  justify-center overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover object-center"
                        height={300}
                        width={1500}
                        // layout="fill"
                        // objectFit="cover"
                        // sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Business Challenge</h4>
                        <p className="text-foreground/80 text-justify">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Solution</h4>
                        <p className="text-foreground/80 text-justify">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Implementation Strategy</h4>
                        <p className="text-foreground/80 text-justify">{project.implementation}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, toolIndex) => (
                            <Badge key={toolIndex} variant="secondary">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4 pt-4">
                        {project.repository === "Private Repository" ? "Private Repository" :
                        <Link href={project.repository} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" size="sm" className="gap-2">
                            <Github className="w-4 h-4" />
                            Source
                          </Button>
                        </Link>} 

                        <Separator orientation="vertical" className="h-6" />

                        {project.demo === "custom demo available upon request" ? "Custom Demo Available Upon Request" :
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Demo
                          </Button>
                        </Link>}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
          ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};