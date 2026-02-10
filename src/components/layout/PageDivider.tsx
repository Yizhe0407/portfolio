import Container from "@/components/layout/Container";

const dashColor = "rgba(161, 161, 170, 0.8)";
const dashLength = 10;
const dashGap = 16;
const dashTotal = dashLength + dashGap;
const horizontalDash = {
  backgroundImage: `repeating-linear-gradient(to right, ${dashColor} 0 ${dashLength}px, transparent ${dashLength}px ${dashTotal}px)`,
};

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
