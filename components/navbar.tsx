import Link from "next/link";
import Image from "next/image";

interface NavbarProps{
    logo: string,
    links: NavItem[]
}

interface NavItem{
    text: string,
    url: string,
};

export default function NavBar(props: NavbarProps){
    return (
        <div className="">
            <nav className="fixed top-0 left-0 w-full h-16 bg-white text-black px-4">
                {/* <div className="flex items-center">
                    <Image
                        src={props.logo}
                        className="h-9 w-auto mr-4"
                        width={200}
                        height={200}
                    />
                </div> */}
                <ul className="flex space-x-4">
                    <Image
                        src={props.logo}
                        className="h-12 w-auto mr-4 pt-4"
                        width={200}
                        height={200}
                        alt="aiden logo"
                    />
                    {props.links.map((link) => (
                        <li key={link.url} className="text-xl hover:underline pt-4">
                            <Link href={link.url}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}