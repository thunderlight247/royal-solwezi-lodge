export interface Testimonial { name: string; quote: string; rating: 1 | 2 | 3 | 4 | 5; avatar?: string; source?: string }
// Add ONLY real, client-approved reviews. The section stays hidden while this list is empty.
export const testimonials: Testimonial[] = [];
