export type ResumeProfile = {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone?: string;
  handle?: string;
};

export type ResumeSkillGroup = {
  title: string;
  skills: string[];
};

export type ResumeExperience = {
  role: string;
  org: string;
  period: string;
  highlights: string[];
};

export type ResumeEducation = {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
};

export const resumeProfile: ResumeProfile = {
  name: "Liao Yizhe",
  title: "Full-stack Developer",
  summary:
    "Driven by curiosity and a passion for technology, I am currently focusing on mastering frontend and backend development. I enjoy the process of exploring how different technologies work together and using code to bring creative ideas to life.",
  location: "",
  email: "liaoyizhe75@gmail.com",
  phone: "+886-908-297-576",
  handle: "Yizhe0407",
};

export const resumeSkills: ResumeSkillGroup[] = [
  {
    title: "Core Skills",
    skills: ["Next.js", "Node.js", "Docker", "Git", "Proxmox", "Linux"],
  },
];

export const resumeExperience: ResumeExperience[] = [
  {
    role: "網管小組 副組長",
    org: "國立雲林科技大學",
    period: "2025-2026",
    highlights: [
      "系統維運：負責全校宿舍區網路設備維護與故障排除，確保住宿生網路服務之穩定性與高可用性。",
      "組織管理：領導跨組別團隊進行定期技術培訓與社課，負責協調文書、器材、總務及系統教學組之分工合作。",
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    school: "National Yunlin University",
    degree: "Computer Science and Information Engineering",
    period: "2023 - 2027",
    highlights: [],
  },
];
