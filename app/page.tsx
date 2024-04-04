import CameraStream from "@/app/cameraStream/page";
import PublishComponent from "@/components/publishComponent";
import NavBar from "@/components/navbar";
import SmallTitleComponent from "@/components/smallTitleComponent";
import Image from "next/image";
import GardenStateComponent from "@/components/gardenStateComponent";
import AiTipsComponent from "@/components/aiTipsComponent";
import StatsComponent from "@/components/statsComponent";
import RowStatComponent from "@/components/rowStatComponent";


interface NavbarProps{
  logo: string,
  links: NavItem[]
}

interface NavItem{
  text: string,
  url: string,
};

const links: NavItem[] = [
  {text: "Dashboard", url: "/"},
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar logo="/aiden_logo.png" links={links}/>
      <SmallTitleComponent text="Your Garden"/>
      <GardenStateComponent/>
      <div className="relative items-center justify-center">
          <div className="flex items-center justify-center h-full text-white">
              <ul className="md:flex md:space-x-4 md:space-y-0 space-y-4">
                  <li><AiTipsComponent/></li>
                  <li><StatsComponent/></li>
              </ul>
          </div>
      </div>
    </main>
  );
}
