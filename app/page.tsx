import CameraStream from "@/app/cameraStream/page";
import PublishComponent from "@/components/publishComponent";
import NavBar from "@/components/navbar";


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
  {text: "Leaderboard", url: "/"}
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar logo="/aiden_logo.png" links={links}/>
      Hello
      <PublishComponent/>
    </main>
  );
}
