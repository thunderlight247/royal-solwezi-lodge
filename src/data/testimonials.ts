export interface Testimonial {
  name: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar?: string;
  source?: string;
}

// Add verified, client-approved reviews here.
// The testimonial section on the homepage remains hidden automatically while this array is empty.
//
// Example format:
// {
//   name: "Kofi Owusu",
//   quote: "The pavilion was so serene for an evening meal, and the room was exceptionally clean with great air-conditioning.",
//   rating: 5,
//   source: "Google Review"
// }

export const testimonials: Testimonial[] = [];
