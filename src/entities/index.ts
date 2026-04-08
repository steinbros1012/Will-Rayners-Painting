/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: customerreviews
 * Interface for CustomerReviews
 */
export interface CustomerReviews {
  _id: string;
  _createdDate?: Date | string;
  _updatedDate?: Date | string;
  customerName?: string;
  reviewText?: string;
  rating?: number;
  reviewDate?: Date | string;
  reviewSource?: string;
}


/**
 * Collection ID: estimatesubmissions
 * Interface for EstimateSubmissions
 */
export interface EstimateSubmissions {
  _id: string;
  _createdDate?: Date | string;
  _updatedDate?: Date | string;
  name?: string;
  phone?: string;
  email?: string;
  serviceType?: string;
  propertyType?: string;
  timeline?: string;
  projectDetails?: string;
  submittedAt?: Date | string;
}


/**
 * Collection ID: paintingservices
 * Interface for PaintingServices
 */
export interface PaintingServices {
  _id: string;
  _createdDate?: Date | string;
  _updatedDate?: Date | string;
  serviceName?: string;
  shortSummary?: string;
  description?: string;
  serviceImage?: string;
  serviceAreaContext?: string;
  isFeatured?: boolean;
}


/**
 * Collection ID: projectgallery
 * Interface for ProjectGallery
 */
export interface ProjectGallery {
  _id: string;
  _createdDate?: Date | string;
  _updatedDate?: Date | string;
  projectTitle?: string;
  beforePhoto?: string;
  afterPhoto?: string;
  projectDescription?: string;
  projectLocation?: string;
  dateCompleted?: Date | string;
}


/**
 * Collection ID: trustindicators
 * Interface for TrustIndicators
 */
export interface TrustIndicators {
  _id: string;
  _createdDate?: Date | string;
  _updatedDate?: Date | string;
  title?: string;
  indicatorImage?: string;
  shortDescription?: string;
  displayOrder?: number;
  isActive?: boolean;
}
