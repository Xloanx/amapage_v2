import { Card, CardContent } from "@/components/ui/card";

interface AboutProps {
  about: string;
}

export const About = ({ about }: AboutProps) => {
  const paragraphs = about.split('\n\n');
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Bridging the gap between human development and technological advancement
          </p>
        </div>
        
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-foreground/80 text-center">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};