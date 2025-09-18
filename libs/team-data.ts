export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
  github?: string;
  mail?: string;
};

export type Teams = {
  [key: string]: TeamMember[];
};

export const teams: Teams = {
  "Faculty Advisors": [
    {
      id: 1,
      name: "Dr. Deepika A. Ajalkar",
      role: "HOD, CS&DS",
      image: "img/team/hodma'am.png",
      bio: "Dr. Ajalkar is passionate about fostering innovation and guiding students towards excellence in the field of CyberSecurity and Data Science.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    
    },
    {
      id: 2,
      name: "Ms. Masira M.S Kulkarni",
      role: "Faculty Co-ordinator of ACM",
      image: "img/team/masirama'am.png",
      bio: "Ms. Kulkarni is dedicated to mentoring students and promoting a culture of creativity and technological advancement.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    
    },
  ],
  Core: [
    {
      id: 1,
      name: "Aditya Kurhade",
      role: "President",
      image: "img/team/AdityaK1.png",
      bio: "Aditya is the president of ACM, leading the team with a vision to foster innovation.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 2,
      name: "Shubham Sahu",
      role: "Vice President",
      image: "img/team/shubham pro.png",
      bio: "Shubham is the vice president of ACM, supporting the president in driving the club's initiatives.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 3,
      name: "Mansi Patil",
      role: "Public Relations Lead",
      image: "img/team/Mansi.png",
      bio: "Mansi is the public relations lead, managing communications and outreach for ACM.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 4,
      name: "Anurag Jadhav",
      role: "Event Management Lead",
      image: "img/team/Anurag.png",
      bio: "Anurag is the event management lead, orchestrating successful events and workshops.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 5,
      name: "Shubham Singh",
      role: "Design Lead",
      image: "img/team/Shubham singh .jpg",
      bio: "Shubham is the design lead, crafting visually appealing designs for ACM's branding and events.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    {
      id: 6,
      name: "Krishna Gavali",
      role: "Technical Lead",
      image: "img/team/krishna.png",
      bio: "Krishna is the technical lead, overseeing the technical aspects of ACM's projects and initiatives.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
     {
      id: 7,
      name: "Vaishnav Gaikwad",
      role: " Finance Lead",
      image: "img/team/Vaishnavi Vikas Gaikwad .jpg",
      bio: "Vaishnav is the finance lead, managing the financial planning and budgeting for ACM.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
  ],
  "Tech": [
    {
      id: 2,
      name: "Shubham Sahu",
      role: "Co-Lead",
      image: "img/team/shubham pro.png",
      bio: "Shubham is a tech enthusiast with a strong focus on backend development and system architecture.",
      linkedin: "https://www.linkedin.com/in/shubham-sahu-2548b4291",
      mail: "",
    },
    {
      id: 6,
      name: "Krishna Gavali",
      role: "Technical Lead",
      image: "img/team/krishna.png",
      bio: "Krishna is the technical lead, overseeing the technical aspects of ACM's projects and initiatives.",
      linkedin: "", // Add LinkedIn profile URL if available
      mail: "", // Add email if available
    },
    
    
  ],
  "Public Relationals": [
    
  ],
  "Event Management": [
    {
      id: 19,
      name: "Anurag Jadhav",
      role: "Member",
      image: "img/team/Anurag Jadhav..JPG",
      bio: "Anurag is a creative event planner with a knack for innovative ideas.",
      linkedin: "https://www.linkedin.com/in/anurag-jadhav-4287a5281",
      mail: "",
    },
  ],
  "Finance": [
    {
      id: 33,
      name: "Vaishnavi Gaikwad",
      role: "Lead",
      image: "img/team/Vaishnavi Vikas Gaikwad .jpg",
      bio: "Vaishnavi is a dedicated finance manager with a focus on financial reporting.",
      linkedin: "www.linkedin.com/in/vaishnavi-gaikwad",
      mail: "",
    },
  ],
  "Design": [
    {
      id: 42,
      name: "Shubham Singh",
      role: "Lead",
      image: "img/team/Shubham singh .jpg",
      bio: "Shubham is a creative design lead with a passion for visual storytelling.",
      linkedin: "https://www.linkedin.com/in/shubham-singh-034263286",
      mail: "",
    },
    {
      id: 43,
      name: "Sanika Bavaskar",
      role: "Member",
      image: "img/team/sanika .png",
      bio: "Sanika is a talented designer with a focus on creating user-friendly interfaces.",
      linkedin: "https://www.linkedin.com/in/sanika-bavaskar-473810325",
      mail: "",
    },
  ],
};
