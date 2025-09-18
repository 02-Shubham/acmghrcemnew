import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Being part of ACM GHRCEM helped me gain the confidence to take my entrepreneurial ideas forward.",
      name: "Sanjana Rajput",
      designation: "Btech-AIML",
      src: "/img/team/sanjana rajput.png",
    },
    {
      quote:
        "It was a great experience- conducting events and meets and learning more about businesses.",
      name: "Udya Salathia",
      designation: "Btech-DS",
      src: "/img/team/udya.png",
    },
    {
      quote:
        "ACM GHRCEM sparked my passion for innovation. I also learned the importance of teamwork and strategic thinking.",
      name: "Juned Pothawale",
      designation: "Btech-CS",
      src: "/img/team/juned.png",
    },
    {
      quote:
        "Amazing team. Had a great time working with Lalit. He's very dedicated towards his work and good at managing the team.",
      name: "Devyani Chavan",
      designation: "Btech IT",
      src: "/img/team/deviyani.png",
    },
  ];
  
  return <AnimatedTestimonials testimonials={testimonials} />;
}
