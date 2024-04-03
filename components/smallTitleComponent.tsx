import Image from "next/image"

export default function SmallTitleComponent(){
    return (
        <div className="relative items-center justify-center">
            <div className="h-20 w-50 min-h-20 min-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-600">
                <div className="flex items-center justify-center h-full text-white">
                    Your Garden
                </div>
            </div>
        </div>
    )
}