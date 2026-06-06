import { groq } from 'next-sanity';

// Query to get all projects for portfolio page
export const allProjectsQuery = groq`
  *[_type == "project"] | order(completionDate desc) {
    _id,
    title,
    "slug": slug.current,
    category,
    mainImage,
    completionDate,
    location,
    area,
    client
  }
`;

// Query to get a single project by its slug
export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    category,
    mainImage,
    gallery,
    description,
    completionDate,
    location,
    area,
    client
  }
`;

// Query to get all services
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    order
  }
`;
