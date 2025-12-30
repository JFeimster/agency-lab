import { ArrowUpRight } from 'lucide-react';

interface DirectoryCardProps {
  title: string;
  description: string;
  category: string;
  url: string;
  tags: string[];
}

export default function DirectoryCard({ title, description, category, url, tags }: DirectoryCardProps) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col bg-bg-secondary border border-border p-6 rounded-lg hover:border-accent-gold/50 transition-colors duration-300 h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded bg-bg-tertiary flex items-center justify-center font-headline text-xl text-text-primary border border-white/5">
          {title.charAt(0)}
        </div>
        <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-accent-gold transition-colors" />
      </div>

      <h3 className="font-headline text-lg text-text-primary mb-1">{title}</h3>
      <p className="font-body text-sm text-text-secondary mb-4 line-clamp-2">
        {description}
      </p>

      <div className="mt-auto flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono uppercase text-text-muted bg-white/5 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}