import Marquee from "react-fast-marquee";
import { Sora } from "next/font/google";
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
};

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["700"],
});

const topRow: TechItem[] = [
  { label: "Javascript", Icon: SiJavascript },
  { label: "Typescript", Icon: SiTypescript },
  { label: "Next.Js", Icon: SiNextdotjs },
  { label: "Tailwind", Icon: SiTailwindcss },
  { label: "Node.Js", Icon: SiNodedotjs },
  { label: "React", Icon: SiReact },
  { label: "Git", Icon: SiGit },
];

const bottomRow: TechItem[] = [
  { label: "VS Code", Icon: VscVscode },
  { label: "Docker", Icon: SiDocker },
  { label: "Postman", Icon: SiPostman },
  { label: "Ubuntu", Icon: SiUbuntu },
  { label: "Proxmox", Icon: SiProxmox },
  { label: "Figma", Icon: SiFigma },
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
        {items.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex h-[108px] w-[108px] flex-col items-center justify-center gap-2 rounded-[28px] border-2 border-[#111111] bg-white md:h-[140px] md:w-[140px] md:gap-4 lg:h-[160px] lg:w-[160px]"
          >
            <Icon className="text-[32px] text-[#111111] md:text-[44px] lg:text-[56px]" />
            <span
              className={`text-[13px] font-bold text-[#111111] md:text-[16px] lg:text-[18px] ${sora.className}`}
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
