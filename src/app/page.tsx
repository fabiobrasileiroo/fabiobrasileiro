import Portfolio from "@/components/Portfolio";
import { DevelopmentDialog } from "@/components/ui/development-dialog";
// import Image from "next/image";

export default function Home() {
  return (
    <>
      <DevelopmentDialog />
      <Portfolio/>
    </>
  );
}
