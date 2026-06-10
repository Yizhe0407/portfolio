import { cn } from "@/lib/utils";

export const dashColor = "rgba(161, 161, 170, 0.8)";

/** Builds a `repeating-linear-gradient` dashed-rule background, shared by every dashed-rail echo across the site. */
export function dashedRuleStyle(
  color: string,
  dashLength: number,
  dashGap: number,
  direction: "to right" | "to bottom" = "to right"
) {
  return {
    backgroundImage: `repeating-linear-gradient(${direction}, ${color} 0 ${dashLength}px, transparent ${dashLength}px ${dashLength + dashGap}px)`,
  };
}

const horizontalDash = dashedRuleStyle(dashColor, 10, 14);

type SectionDividerProps = {
  className?: string;
  nodeSize?: number;
};

/**
 * In-page echo of the site's dashed side rails: a thin dashed rule capped
 * with rounded-square nodes, used to separate sections within a container.
 */
export default function SectionDivider({
  className,
  nodeSize = 12,
}: SectionDividerProps) {
  const nodeStyle = { height: nodeSize, width: nodeSize, borderColor: dashColor };

  return (
    <div className={cn("relative my-1 h-3.5", className)}>
      <div
        className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2"
        style={horizontalDash}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-[3px] border-2 bg-white"
        style={nodeStyle}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-[3px] border-2 bg-white"
        style={nodeStyle}
      />
    </div>
  );
}
