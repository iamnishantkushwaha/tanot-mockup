import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MotionAssets } from "@/components/ui/motion-primitives";

export default function V1Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MotionAssets />
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
