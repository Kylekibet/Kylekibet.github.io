import React, { useState } from 'react';
import SkillBar from '../components/SkillBar';
import TimelineItem from '../components/TimelineItem';
import SkillModal from '../components/SkillModal';
import { skillsData } from '../data/skillsData';
import { SkillDetails } from '../types/skills';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillDetails | null>(null);

  const timeline = [
    {
      year: '2023',
      title: 'Senior Software Engineer',
      subtitle: 'Tech Giant Corp',
      description: 'Leading development of cloud-native applications and mentoring junior developers.',
    },
    {
      year: '2021',
      title: 'Software Engineer',
      subtitle: 'Innovative Startup',
      description: 'Developed scalable web applications using React and Node.js.',
    },
    {
      year: '2019',
      title: 'BSc Computer Science',
      subtitle: 'University of Technology',
      description: 'Graduated with First Class Honours, specialized in Software Engineering.',
    },
    {
      year: '2018',
      title: 'Software Development Intern',
      subtitle: 'Tech Solutions Inc',
      description: 'Gained hands-on experience in full-stack development.',
    },
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-4xl font-bold mb-12">
        About <span className="text-gold-400">Me</span>
      </h1>
      
      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-8">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="p-6 border border-gold-500/20 rounded-lg hover:border-gold-400/40 transition-all cursor-pointer"
              onClick={() => setSelectedSkill(skill)}
            >
              <div className="flex items-center mb-4">
                <div className="text-gold-400 mr-3">{skill.icon}</div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <SkillBar name={skill.name} percentage={skill.percentage} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl font-semibold mb-12">My Journey</h2>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              isLast={index === timeline.length - 1}
            />
          ))}
        </div>
      </div>

      {selectedSkill && (
        <SkillModal
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
};

export default About;