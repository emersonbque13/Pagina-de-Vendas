export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InsideItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface CuriosityItem {
  id: string;
  fact: string;
  explanation: string;
}

export interface DifferentialItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
