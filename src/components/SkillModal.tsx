import React from 'react';
import { X } from 'lucide-react';
import { SkillDetails } from '../types/skills';
import SkillProficiency from './SkillProficiency';

interface SkillModalProps {
  skill: SkillDetails;
  onClose: () => void;
}

const SkillModal: React.FC<SkillModalProps> = ({ skill, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-gray-900 to-black border border-gold-500/20 rounded-lg shadow-xl animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-gold-500/20">
          <div className="flex items-center gap-3">
            <div className="text-gold-400">{skill.icon}</div>
            <h2 className="text-2xl font-bold">{skill.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gold-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Overview</h3>
            <p className="text-gray-300">{skill.description}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(skill.stack).map(([category, items]) => (
                <div key={category} className="space-y-3">
                  <h4 className="text-gold-400 font-medium">{category}</h4>
                  {items.map((item) => (
                    <SkillProficiency key={item.name} {...item} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;