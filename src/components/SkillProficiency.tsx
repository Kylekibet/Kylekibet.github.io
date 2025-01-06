import React from 'react';

interface SkillProficiencyProps {
  name: string;
  level: number;
}

const SkillProficiency: React.FC<SkillProficiencyProps> = ({ name, level }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-300 min-w-[100px]">{name}</span>
      <div className="flex-1 h-2 bg-black/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-gold-600 to-gold-400 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
      <span className="text-xs text-gold-400 min-w-[40px]">{level}%</span>
    </div>
  );
};

export default SkillProficiency;