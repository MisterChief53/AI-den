import Image from "next/image";

export default function GardenStateComponent(){
    return (
        <div className="flex flex-col items-center justify-between pb-4">
            <div className="pb-5">
                <Image
                    src="/level1.svg"
                    width={400}
                    height={400}
                    alt="Level 1 garden"
                />
            </div>

            <div className="relative items-center justify-center">
                <div className="h-20 w-40 min-h-20 min-w-30 max-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-800">
                    <div className="flex items-center justify-center h-full text-white">
                        <ul className="flex space-x-4">
                            <li>34</li>
                            <li>
                                <Image
                                    src='/heart.svg'
                                    width={25}
                                    height={25}
                                    alt="Green heart"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}