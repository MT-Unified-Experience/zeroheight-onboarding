import { ZeroHeightTabsV2 } from "@/components/component/zero-height-tabs-v2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-0 px-24">
      <ZeroHeightTabsV2 />
    </main>
  );
}
