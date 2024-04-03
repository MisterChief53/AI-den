import Image from "next/image"

export default function SmallTitleComponent(){
    return (
        // <div className="relative bg-cover bg-no-repeat h-100 w-200 rounded-full" style={{ backgroundImage: `url("/small_title.png")` }}>
        //     <div className="flex items-center justify-center h-full">
        //         hi
        //     </div>
        // </div>
        // <div className="h-100 w-200 relative bg-cover bg-no-repeat"  style={{ backgroundImage: `url("/small_title.png")` }}>
        //     <div className="flex items-center justify-center h-full">
        //         hijjjjjjjjjjjjjjjjjjj
        //     </div>
        // </div>
        <div className="relative items-center justify-center">
            <div className="h-20 w-50 min-h-20 min-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-600">
                <div className="flex items-center justify-center h-full text-white">
                    Your Garden
                </div>
            </div>
        </div>
    )
}