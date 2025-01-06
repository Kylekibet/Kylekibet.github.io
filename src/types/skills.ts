import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react'; 

interface StackItem {
  name: string;
  level: number;
}

interface SkillStack {
  [category: string]: StackItem[];
}

export interface SkillDetails {
  name: string;
  icon: ReactNode;
  description: string;
  percentage: number;
  stack: SkillStack;
}