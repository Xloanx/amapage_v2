'use client'

import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { usePortfolioData } from "@/hooks/usePortfolioData";
// import { generatePDF } from "@/utils/pdfGenerator";
// import {toast} from "sonner";

const Index = () => {
  const { data } = usePortfolioData();
  // const { toast } = useToast();

  // const handleDownloadResume = async () => {
  //   try {
  //     toast("Generating PDF...",{
  //       description: "Please wait while we prepare your resume.",
  //     });
      
  //     await generatePDF('portfolio-content', `${data.personal.name.replace(/\s+/g, '_')}_Resume.pdf`);
      
  //     toast("Success!",{
  //       description: "Resume downloaded successfully.",
  //     });
  //   } catch (error) {
  //     toast("Error",{
  //       description: "Failed to generate PDF. Please try again."
  //     });
  //   }
  // };

  return (
    <div className="min-h-screen bg-background">
      <div id="portfolio-content">
        {/* <Hero data={data.personal} onDownloadResume={handleDownloadResume} /> */}
        <Hero data={data.personal}/>
        <div id="skills">
          <Skills skills={data.skills} />
        </div>
        <div id="experience">
          <Experience experience={data.experience} />
        </div>
        <div id="projects">
          <Projects projects={data.projects} />
        </div>
        <div id="about">
          <About about={data.about} />
        </div>
        <div id="contact">
          <Contact data={data.personal} />
        </div>
      </div>
      <Footer data={data.personal} />
    </div>
  );
};

export default Index;