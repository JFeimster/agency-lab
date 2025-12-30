import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import FilterBar from "@/components/ui/FilterBar";
import DirectoryCard from "@/components/ui/DirectoryCard";

export default function DirectoryPage() {
  return (
    <main className="min-h-screen bg-bg-primary pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h1 className="font-headline text-5xl md:text-6xl text-text-primary mb-6">
            The Tool Stack.
          </h1>
          <p className="font-body text-text-secondary text-lg">
            Curated fintech, AI, and automation tools for the modern funding agency.
             vetted for performance and API capabilities.
          </p>
        </div>

        {/* Filter */}
        <FilterBar />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Item 1 */}
          <DirectoryCard 
            title="FairFigure" 
            category="Fintech" 
            description="Business credit monitoring and funding readiness platform. Essential for preparing clients for capital raises."
            url="https://fairfigure.com"
            tags={["Credit", "Data", "Monitoring"]}
          />
          
          {/* Example Item 2 */}
          <DirectoryCard 
            title="Make.com" 
            category="Automation" 
            description="Visual automation platform to connect your CRM, email, and lending portals without code."
            url="https://make.com"
            tags={["No-Code", "Workflow", "API"]}
          />

           {/* Example Item 3 */}
           <DirectoryCard 
            title="Telescope" 
            category="Lead Gen" 
            description="AI-driven lead sourcing that filters mostly by intent signals rather than just firmographics."
            url="#"
            tags={["Leads", "AI", "Outbound"]}
          />
        </div>

      </div>
    </main>
  );
}