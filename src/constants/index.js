import TempleTracker_Pic from "../assets/TempleTracker.jpg"
import AdaptEd_Pic from "../assets/AdaptEd.png"
import Python_Pic from "../assets/Python.png"
import NH_Pic from "../assets/NH_Logo.png"


export const HERO_CONTENT = `I am a first-generation Ethiopian college student studying Computer Science at The Ohio State University. Through my academic journey and personal projects, I have developed a strong foundation in programming and a drive to solve complex problems. I am passionate about becoming a full-stack software engineer to make a positive impact on people's lives. I'm excited to continue learning, collaborating, building innovative solutions, and yes, coding!`;

export const ABOUT_TEXT = `Ever since I was young, I’ve been drawn to tech. Whether it was taking things apart, asking questions, or learning how things work, that curiosity has always driven me. Over time, it’s grown into a passion for using technology to solve real-world problems.

Now, as I finish my undergraduate degree, I’m pursuing my dream of becoming a full-time software engineer. I’m excited to keep learning, building, and growing—both personally and professionally.

Looking ahead, I’m motivated by the opportunity to use code as a tool for positive change. Thank you for joining me on this journey through tech!

-Nabeu Habetaslassa`;

export const EXPERIENCES = [
  {
    year: "Summer 2025",
    role: "Software Engineering Intern",
    company: "WillowTree",
    description: `Upcoming summer internship!`,
    technologies: ["TBD..."],
  },
  {
    year: "2025",
    role: "Fullstack Web Developer",
    company: "Ohio State University Classroom Services",
    description: `Maintain and develop web applications for Ohio State University Classroom Services.`,
    technologies: ["HTML", "CSS", "Next.js", "TypeScript"],
  },
];

export const PROJECTS = [
  {
    title: "Temple Tracker",
    image: TempleTracker_Pic,
    description:
      "A fullstack wellness app focused on tracking exersize, sleep, and eating habits.",
    technologies: ["HTML", "CSS", "Next.js", "TypeScript", "Firebase"],
    link: "https://github.com/nabeuH/Temple-Tracker",
  },
  {
    title: "AdaptEd",
    image: AdaptEd_Pic,
    description:
      "A fullstack web-app for Opprotunity International. The app provides resourses for teachers in remote location around the world including a lesson plan generator, student retention tracker, language customization, and a friends feature.",
    technologies: ["HTML", "CSS", "React", "Firebase", "Gemini Api"],
    link: "https://github.com/cfgcolumbus24/Team-9",
  },
  {
    title: "Portfolio Website",
    image: NH_Pic,
    description:
      "What you are looking at now!",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion"],
    link: "https://github.com/nabeuH/Portfolio",
  },
  {
    title: "Automated File Organizer",
    image: Python_Pic,
    description:
      "A script that extracts the file extention from my files in my download folder and moves them to their designated folders. Automated this process with the macOs built-in automater.",
    technologies: ["Python", "macOs"],
    link: "https://github.com/nabeuH/File-Organizer",
  },
];

export const CONTACT = {
  address: " ",
  phoneNo: "(513) 954-3501",
  email: "habetaslassa.1@buckeyemail.osu.edu",
};
