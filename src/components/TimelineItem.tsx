import React from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  subtitle,
  description,
  isLast = false,
}) => {
  return (
    <div className="relative pl-8 pb-8">
      {!isLast && (
        <div className="absolute left-[11px] top-[24px] w-[2px] h-[calc(100%-24px)]">
          <div className="h-full bg-gradient-to-b from-gold-400 to-gold-600 blur-[2px]" />
          <div className="absolute inset-0 h-full bg-gradient-to-b from-gold-400 to-gold-600" />
        </div>
      )}
      <div className="absolute left-0 top-0 w-6 h-6">
        <div className="absolute inset-0 bg-gold-400 rounded-full blur-[2px]" />
        <div className="absolute inset-0 bg-gold-400 rounded-full" />
      </div>
      <div className="relative ml-8">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-black bg-gradient-to-r from-gold-400 to-gold-600 rounded-full mb-2">
          {year}
        </span>
        <div className="bg-gradient-to-r from-gold-600/10 to-gold-400/10 p-4 rounded-lg border border-gold-500/20 hover:border-gold-400/40 transition-all">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gold-400 mt-1">{subtitle}</p>
          <p className="text-gray-400 mt-2 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;