import SmallTitleComponent from "@/components/smallTitleComponent";

export default function AiTipsComponent(){
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="pb-5">
                <SmallTitleComponent text="AI Tips"/>
            </div>


            <div className="relative items-center justify-center">
                <div className="h-40 w-40 min-h-20 max-h-40 min-w-60 max-w-60 bg-cover bg-no-repeat rounded-2xl overflow-y-auto items-center justify-center bg-green-500 p-5">
                    <div className="flex items-center justify-center text-white">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}   