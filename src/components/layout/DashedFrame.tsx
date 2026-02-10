import Container from "@/components/layout/Container";

const dashColor = "rgba(161, 161, 170, 0.8)";
const dashLength = 10;
const dashGap = 16;
const dashTotal = dashLength + dashGap;
const verticalDash = {
  backgroundImage: `repeating-linear-gradient(to bottom, ${dashColor} 0 ${dashLength}px, transparent ${dashLength}px ${dashTotal}px)`,
};

export default function DashedFrame() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block">
      <Container className="relative h-full">
        <div className="absolute left-0 top-0 h-full w-0.5" style={verticalDash} />
        <div className="absolute right-0 top-0 h-full w-0.5" style={verticalDash} />
      </Container>
    </div>
  );
}
