'use client'

import Link from "next/link";
import CareerForm from "./CareerForm";

interface JobDetailBadge {
  label: string;
  value: string;
}

interface JobListItem {
  content: string;
  isBold?: boolean;
}

interface JobSection {
  title: string;
  content?: string;
  listItems?: JobListItem[];
}

interface JobDescriptionProps {
  title: string;
  slug: string;
  badges: JobDetailBadge[];
  sections: JobSection[];
}

export default function JobDescription({ title, slug, badges, sections }: JobDescriptionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link 
        href="/careers"
        className="text-sm text-muted-foreground hover:text-foreground font-sans mb-6 inline-block"
      >
        ← Back to careers
      </Link>
      
      <h1 className="text-3xl font-bold mb-6 font-sans">{title}</h1>
      
      <div className="mb-8 space-y-6">
        <div className="flex flex-wrap gap-4 text-sm">
          {badges.map((badge, index) => (
            <div key={index} className="bg-muted px-3 py-1 rounded-full font-sans">
              <span className="font-medium">{badge.label}:</span> {badge.value}
            </div>
          ))}
        </div>
        
        {sections.map((section, index) => (
          <section key={index} className="font-sans">
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            
            {section.content && (
              <p className="text-muted-foreground">{section.content}</p>
            )}
            
            {section.listItems && section.listItems.length > 0 && (
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {section.listItems.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    {item.isBold ? (
                      <>
                        <span className="font-medium">{item.content.split(':')[0]}:</span>
                        {item.content.split(':')[1]}
                      </>
                    ) : (
                      item.content
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-4 font-sans">Apply for this Position</h2>
        <CareerForm position={slug} />
      </div>
    </div>
  );
} 