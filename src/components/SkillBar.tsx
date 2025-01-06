import React, { useEffect, useState } from 'react';

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, color = 'gold-400' }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gold-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-black/50 rounded-full overflow-hidden">
        <div
          className={`h-full bg-${color} transition-all duration-1000 ease-out rounded-full`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;