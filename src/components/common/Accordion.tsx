import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '../../types';

interface AccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = ''
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds(prev =>
        prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds(prev => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div
            key={item.id || index}
            className="border border-border rounded-xl bg-bg-surface overflow-hidden transition-colors duration-200"
          >
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-ink hover:text-primary transition-colors focus-visible:outline-none focus-visible:bg-primary-tint/30 cursor-pointer"
              >
                <span className="text-base sm:text-lg">{item.question}</span>
                <span
                  className={`p-1 rounded-full bg-primary-tint text-primary shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-primary text-white' : ''
                  }`}
                  aria-hidden="true"
                >
                  <ChevronDown size={18} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={`px-5 pb-5 pt-1 text-ink-muted leading-relaxed text-sm sm:text-base border-t border-border/50 ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
