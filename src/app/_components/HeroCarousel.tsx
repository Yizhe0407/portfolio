import Marquee from "react-fast-marquee";
import { sora } from "@/lib/fonts";
import { IconType } from "react-icons";
import {
  SiDocker,
  SiFigma,
  SiGit,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiProxmox,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

type TechItem = {
  label: string;
  Icon: IconType;
  color: string;
};

const topRow: TechItem[] = [
  { label: "Javascript", Icon: SiJavascript, color: "#F7DF1E" },
  { label: "Typescript", Icon: SiTypescript, color: "#3178C6" },
  { label: "Next.Js", Icon: SiNextdotjs, color: "#000000" },
  { label: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { label: "Node.Js", Icon: SiNodedotjs, color: "#339933" },
  { label: "React", Icon: SiReact, color: "#61DAFB" },
  { label: "Git", Icon: SiGit, color: "#F05032" },
];

const bottomRow: TechItem[] = [
  { label: "VS Code", Icon: VscVscode, color: "#007ACC" },
  { label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { label: "Postman", Icon: SiPostman, color: "#FF6C37" },
  { label: "Ubuntu", Icon: SiUbuntu, color: "#E95420" },
  { label: "Proxmox", Icon: SiProxmox, color: "#E57000" },
  { label: "Figma", Icon: SiFigma, color: "#F24E1E" },
];


function MarqueeRow({
  items,
  direction,
  speed,
}: {
  items: TechItem[];
  direction: "left" | "right";
  speed: number;
}) {
  return (
    <Marquee direction={direction} speed={speed} gradient={false} autoFill>
      <div className="flex gap-8 pr-8">
        {items.map(({ label, Icon, color }) => (
          <div
            key={label}
            style={{ "--brand-color": color } as React.CSSProperties}
            className="group flex h-[108px] w-[108px] flex-col items-center justify-center gap-2 rounded-[28px] border-2 border-zinc-900 bg-white md:h-[140px] md:w-[140px] md:gap-4 lg:h-[160px] lg:w-[160px]"
          >
            <Icon
              className="text-[32px] text-zinc-900 transition-colors duration-1000 delay-700 group-hover:duration-300 group-hover:delay-0 group-hover:text-[var(--brand-color)] md:text-[44px] lg:text-[56px]"
            />
            <span
              className={`text-[13px] font-bold text-zinc-900 md:text-[16px] lg:text-[18px] ${sora.className}`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
    </Marquee>
  );
}

export default function HeroCarousel() {
  return (
    <div className="flex w-full flex-col gap-8">
      <MarqueeRow items={topRow} direction="left" speed={32} />
      <MarqueeRow items={bottomRow} direction="right" speed={34} />
    </div>
  );
}
