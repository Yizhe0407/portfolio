import Container from "@/components/layout/Container";
import { dashColor, dashedRuleStyle } from "@/components/layout/SectionDivider";

const horizontalDash = dashedRuleStyle(dashColor, 10, 16);

export default function PageDivider() {
  return (
    <div className="relative pt-4 sm:pt-6 lg:pt-12">
      <Container className="relative h-4">
        {/* 行動端：線比內容每邊寬 10px（-mx = padding 24px + 10px），呼應桌面「框架層比內容寬」的層級；
            視窗 <390px 時剛好滿版、不會溢出。方塊收在線內（left-0）避免外凸造成水平捲動 */}
        <div className="relative h-4 -mx-[2.125rem] sm:-mx-10">
          <div
            className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2"
            style={horizontalDash}
          />
          <div
            className="absolute left-0 sm:left-[-7px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm border-2 bg-white"
            style={{ borderColor: dashColor }}
          />
          <div
            className="absolute right-0 sm:right-[-7px] top-1/2 h-5 w-5 -translate-y-1/2 rounded-sm border-2 bg-white"
            style={{ borderColor: dashColor }}
          />
        </div>
      </Container>
    </div>
  );
}
