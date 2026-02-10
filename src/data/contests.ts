export type Contest = {
  year: string;
  title: string;
  result: string;
  highlights?: string[];
};

export const contests: Contest[] = [
  {
    year: "2026",
    title: "ITSA 生成式 AI 應用網頁設計競賽 - 決賽",
    result: "xxx",
    highlights: [
      "技術實踐：運用 PHP PDO、MySQL 與 JavaScript 快速建構具備物件導向（OOP）架構的 Full-stack 網頁系統。",
      "AI 策略優化：開發高效 AI Prompt 策略，實現精準的 UI/UX 視覺還原與自動化前後端驗證，大幅提升 50% 以上的開發速度。",
    ],
  },
  {
    year: "2025",
    title: "雲湧智生：臺灣生成式 AI 應用黑客松競賽 - 零售創新",
    result: "優選獎 (第一名)",
    highlights: [
      "技術架構：整合 AWS Nova Pro (LLM)、Amazon Transcribe (STT) 與 GPT-SoVITS (TTS) 實現全自動化語音銷售閉環。",
      "實作成果：利用 Docker 與 AWS EC2/ALB 部署高可用性系統，顯著提升開發測試效率並降低人工成本。",
    ],
  },
  {
    year: "2025",
    title: "雲科大 AI 賽車",
    result: "第三名",
    highlights: [
      "技術開發：基於 PyTorch 框架開發專屬強化學習（Reinforcement Learning）模型，於 AI Console/AI Stack 雲端運算平台進行大規模訓練與參數調校。",
      "策略優化：針對虛擬賽道的彎道與直線挑戰，優化獎勵函數（Reward Function）以提升模型在避障與路徑規劃上的穩定性，有效減少車輛出界次數並縮短完賽時間。",
    ],
  },
];
