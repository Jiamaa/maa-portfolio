export type ProjectCategory = 'Computer Vision' | 'Software Development' | 'IoT' | 'LLM';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  languages: string[];
  frameworks: string[];
  year: string;
  achievements: string[];
  goals: string;
  imageUrl: string;
  contentImageUrl?: string;
  publicUrl?: string;
}

export interface Research {
  id: string;
  title: string;
  description: string;
  year: string;
  achievements: string[];
  imageUrl: string;
  paperUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  thesisTitle?: string;
  expertise?: string;
}
