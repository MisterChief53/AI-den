import NavBar from "@/components/navbar";
import GardenStateComponent from "@/components/gardenStateComponent";
import AiTipsComponent from "@/components/aiTipsComponent";
import StatsComponent from "@/components/statsComponent";
import MediaComponent from "@/components/mediaComponent";
import FileUpload from "@/components/uploadAction";

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
    <>
      <NavBar logo="/aiden_logo.png" links={links}/>
      <div className="flex flex-col sm:flex-row">
        <div className="flex-1">
          <main className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-16 mt-16">
            <GardenStateComponent />
            <StatsComponent />
          </main>
        </div>
        <div className="flex-1 m-8">
          <MediaComponent />
        </div>
      </div>
      <AiTipsComponent />
      <div className="flex justify-center text-2xl m-4">
        <FileUpload />
      </div>
    </>
  );
}
