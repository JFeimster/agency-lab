export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-bg-primary pt-20 pb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Brand */}
        <div className="max-w-sm">
          <h2 className="font-headline text-2xl font-bold text-text-primary mb-4">
            AGENCY LAB.
          </h2>
          <p className="font-body text-text-secondary text-sm">
            The definitive playbook for modern funding agencies. 
            Scaling brokers from $0 to $10M with automation and aesthetics.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-12 font-mono text-sm text-text-secondary">
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase tracking-wider text-xs">Explore</span>
            <a href="/issues" className="hover:text-accent-gold">Issues</a>
            <a href="/directory" className="hover:text-accent-gold">Tools</a>
            <a href="/collections" className="hover:text-accent-gold">Collections</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase tracking-wider text-xs">Social</span>
            <a href="#" className="hover:text-accent-gold">Twitter</a>
            <a href="#" className="hover:text-accent-gold">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center md:text-left">
        <span className="font-mono text-xs text-text-muted">
          © 2025 Agency Lab. All rights reserved.
        </span>
      </div>
    </footer>
  );
}