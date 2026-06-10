import Container from "@/components/layout/Container";
import { dashColor, dashedRuleStyle } from "@/components/layout/SectionDivider";

const horizontalDash = dashedRuleStyle(dashColor, 10, 16);

export default function PageDivider() {
  return (
    <div className="relative hidden md:block lg:pt-12 sm:pt-6">
      <Container className="relative h-4">
        <div className="relative h-4 -mx-6 sm:-mx-10">
          <div
            className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2"
            style={horizontalDash}
          />
          <div
            className="absolute left-[-7px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm border-2 bg-white"
            style={{ borderColor: dashColor }}
          />
          <div
            className="absolute right-[-7px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm border-2 bg-white"
            style={{ borderColor: dashColor }}
          />
        </div>
      </Container>
    </div>
  );
}
