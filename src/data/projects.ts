export type Project = {
  id: string;
  title: string;
  yearMonth: string;
  summary: string;
  about: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  // Use a 3:2 cover image. Ideal: 1600x1067px. Minimum: 1200x800px.
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "e-portfolios-in-health-profession-education",
    title: "健康照護整合學習歷程平台",
    yearMonth: "2026-02",
    summary:
      "基於 Next.js 15、Express、Prisma 與 MySQL 的健康照護整合學習歷程平台，整合驗證、物件儲存與容器化部署。",
    about:
      "健康照護整合學習歷程平台是一套以 Next.js 15、Express、Prisma 與 MySQL 建置的 Monorepo 全端系統，透過 pnpm workspaces 管理多套件依賴。系統採用 Repository 模式與 Zod 雙層驗證，並整合 MinIO 物件儲存與 Docker-compose 進行高可用性容器化部署。專案遵循 Conventional Commits 與嚴格的 TypeScript 規範，並獨立設計包含測驗、問卷及醫療能力認證 (EPA) 的完整教學模組。",
    tech: ["Next.js 15", "Express", "Prisma", "MySQL", "Zod", "MinIO", "Docker"],
    liveUrl: "https://www.ennova.today/mls",
    imageSrc: "/projects/ennova.png",
    featured: true,
  },
  {
    id: "mega-line-reserve",
    title: "Mega Line Reserve",
    yearMonth: "2026-01",
    summary:
      "一個基於 LINE LIFF 的現代化預約與管理系統。專為提升商家預約效率與顧客體驗而設計。",
    about:
      "Mega Line Reserve 是一個整合 LINE LIFF 的現代化預約管理平台。本專案的核心目標是簡化預約流程，透過自動化通知與直覺的後端介面，讓商家能更高效地管理營業時段與資源調配。從資料庫設計到 Docker 部署，這是我對全端技術整合與 O2O 應用場景的一次深入實踐。",
    tech: ["Next.js", "MySQL", "Docker", "Node.js"],
    githubUrl: "https://github.com/Yizhe0407/mega-line-reserve",
    liveUrl: "https://mega.yizhe.dev",
    imageSrc: "/projects/mega.svg",
    featured: true,
  },
  {
    id: "skynet",
    title: "SkyNet",
    yearMonth: "2024-06",
    summary: "可以客製化氣象列表，提供每日天氣預報。",
    about:
      "一個為氣象愛好者設計的平台，提供客製化的氣象列表和每日天氣預報。界面簡潔直觀，並根據個人需求調整顯示內容。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Clerk"],
    githubUrl: "https://github.com/Yizhe0407/SkyNet",
    liveUrl: "https://sky-net-steel.vercel.app/",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const latestProjects = projects
  .slice()
  .sort((a, b) => b.yearMonth.localeCompare(a.yearMonth))
  .slice(0, 2);
