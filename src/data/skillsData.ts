import { Code2, Database, Globe, Palette } from 'lucide-react';
import { SkillDetails } from '../types/skills';

export const skillsData: SkillDetails[] = [
  {
    name: 'Frontend Development',
    percentage: 90,
    description: 'Specialized in building responsive, performant, and accessible web applications using modern frontend technologies and best practices.',
    stack: {
      'Frameworks & Libraries': [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Angular', level: 80 },
      ],
      'Core Technologies': [
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 90 },
      ],
      'Build Tools': [
        { name: 'Webpack', level: 85 },
        { name: 'Vite', level: 90 },
        { name: 'ESBuild', level: 80 },
      ],
    },
    icon: undefined
  },
  {
    name: 'Backend Development',
    percentage: 85,
    description: 'Experienced in designing and implementing scalable server-side applications and APIs with a focus on performance and security.',
    stack: {
      'Languages & Frameworks': [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Java', level: 75 },
      ],
      'Databases': [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
      ],
    },
    icon: undefined
  },
  {
    name: 'Cloud Services',
    percentage: 80,
    description: 'Proficient in cloud architecture and deployment, with experience in multiple cloud platforms and DevOps practices.',
    stack: {
      'Platforms': [
        { name: 'AWS', level: 85 },
        { name: 'GCP', level: 80 },
        { name: 'Azure', level: 75 },
      ],
      'DevOps': [
        { name: 'Docker', level: 90 },
        { name: 'Kubernetes', level: 80 },
        { name: 'CI/CD', level: 85 },
      ],
    },
    icon: undefined
  },
  {
    name: 'UI/UX Design',
    percentage: 75,
    description: 'Skilled in creating intuitive and visually appealing user interfaces with a strong focus on user experience and accessibility.',
    stack: {
      'Design': [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Sketch', level: 75 },
      ],
      'Principles': [
        { name: 'Wireframing', level: 90 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 80 },
      ],
    },
    icon: undefined
  },
];