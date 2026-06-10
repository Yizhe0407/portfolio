import Container from "@/components/layout/Container";
import { dashColor, dashedRuleStyle } from "@/components/layout/SectionDivider";

const verticalDash = dashedRuleStyle(dashColor, 10, 16, "to bottom");

export default function DashedFrame() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
      <Container className="relative h-full">
        <div className="absolute left-0 top-0 h-full w-0.5" style={verticalDash} />
        <div className="absolute right-0 top-0 h-full w-0.5" style={verticalDash} />
      </Container>
    </div>
  );
}
