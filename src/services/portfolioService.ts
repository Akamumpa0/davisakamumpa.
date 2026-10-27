import { profileData } from '../data/profile';
import { servicesData, processSteps } from '../data/services';
import { projectsData } from '../data/projects';
import { galleryData } from '../data/gallery';
import { skillCategoriesData, softSkillsData } from '../data/skills';
import { experienceData, educationData } from '../data/experience';
import { certificationsData } from '../data/certifications';
import { writingData } from '../data/writing';
import { testimonialsData } from '../data/testimonials';
import { homeFaqData, allFaqData } from '../data/faq';
import {
  ProfileData,
  ServiceItem,
  ProcessStep,
  ProjectItem,
  ProjectCategory,
  GalleryItem,
  SkillCategory,
  SoftSkill,
  ExperienceItem,
  EducationItem,
  CertificationItem,
  PostItem,
  FAQItem,
  TestimonialItem
} from '../types';

/**
 * Abstracted Data Service Layer
 * When a custom REST or GraphQL backend is added, update these functions
 * to fetch from `import.meta.env.VITE_API_BASE_URL` without altering any UI components.
 */

export const getProfile = async (): Promise<ProfileData> => {
  return profileData;
};

export const getServices = async (): Promise<ServiceItem[]> => {
  return servicesData;
};

export const getServiceBySlug = async (slug: string): Promise<ServiceItem | undefined> => {
  return servicesData.find(service => service.slug === slug);
};

export const getProcessSteps = async (): Promise<ProcessStep[]> => {
  return processSteps;
};

export const getProjects = async (category?: ProjectCategory | 'All'): Promise<ProjectItem[]> => {
  if (!category || category === 'All') {
    return projectsData;
  }
  return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = async (): Promise<ProjectItem[]> => {
  return projectsData.filter(project => project.featured);
};

export const getProjectBySlug = async (slug: string): Promise<ProjectItem | undefined> => {
  return projectsData.find(project => project.slug === slug);
};

export const getGalleryItems = async (category?: string): Promise<GalleryItem[]> => {
  if (!category || category === 'All') {
    return galleryData;
  }
  return galleryData.filter(item => item.category === category);
};

export const getSkills = async (): Promise<SkillCategory[]> => {
  return skillCategoriesData;
};

export const getSoftSkills = async (): Promise<SoftSkill[]> => {
  return softSkillsData;
};

export const getExperience = async (): Promise<ExperienceItem[]> => {
  return experienceData;
};

export const getEducation = async (): Promise<EducationItem[]> => {
  return educationData;
};

export const getCertifications = async (): Promise<CertificationItem[]> => {
  return certificationsData;
};

export const getPosts = async (): Promise<PostItem[]> => {
  return writingData;
};

export const getHomeFAQs = async (): Promise<FAQItem[]> => {
  return homeFaqData;
};

export const getAllFAQs = async (): Promise<FAQItem[]> => {
  return allFaqData;
};

export const getTestimonials = async (): Promise<TestimonialItem[]> => {
  return testimonialsData;
};
