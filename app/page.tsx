import HeroSection from "@/components/home/HeroSection";
import { BentoGrid, BentoGridItem } from "@/components/home/BentoGrid";
import FeatureCard from "@/components/ui/FeatureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary">
      <HeroSection />
      
      <div className="container mx-auto py-20">
        <h2 className="text-4xl font-headline text-text-primary mb-10 px-8">Latest Issues</h2>
        
        <BentoGrid>
          {/* Main Feature - Spans 2 Columns */}
          <BentoGridItem
            colSpan={2}
            header={<FeatureCard 
              title="Building an AI Underwriter" 
              category="Automation" 
              image="/images/ai-underwriter.jpg" 
              slug="ai-underwriter"
              readingTime="12 min"
            />}
            className="p-0 border-0 bg-transparent min-h-[400px]"
          />
          
          {/* Secondary Feature */}
           <BentoGridItem
            colSpan={1}
            header={<FeatureCard 
              title="The Death of Cold Calling" 
              category="Strategy" 
              image="/images/cold-call.jpg" 
              slug="death-cold-calling"
              readingTime="5 min"
            />}
            className="p-0 border-0 bg-transparent min-h-[400px]"
          />

          {/* Third Feature */}
          <BentoGridItem
            colSpan={1}
            header={<FeatureCard 
              title="Fintech SEO Guide" 
              category="Marketing" 
              image="/images/seo.jpg" 
              slug="fintech-seo"
              readingTime="8 min"
            />}
            className="p-0 border-0 bg-transparent min-h-[400px]"
          />
        </BentoGrid>
      </div>
    </main>
  );
}