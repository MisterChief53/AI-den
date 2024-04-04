import SmallTitleComponent from "@/components/smallTitleComponent";

async function getTips() {
    try {
        const params = new URLSearchParams({
            prompt: 'Describe the image',
            uri: 'test-img-aiden/rodrigo'
        });

        const url = `https://us-central1-aiden-419204.cloudfunctions.net/prompt-with-uri-img?${params.toString()}`;

        const res = await fetch(url);
        const aiTips = await res.text();

        return { aiTips };
    } catch (error) {
        console.error(error);
        return { aiTips: 'Failed to get AI tips' };
    }
}

export default async function AiTipsComponent(){
    const { aiTips } = await getTips()
    
    return (
        <div className="flex flex-col items-center justify-between">
            <div className="pb-5">
                <SmallTitleComponent text="AI Tips"/>
            </div>


            <div className="relative items-center justify-center">
                <div className="h-50 w-40 min-h-20 max-h-50 min-w-60 max-w-60 bg-cover bg-no-repeat rounded-2xl overflow-y-auto items-center justify-center bg-green-800 p-5">
                    <div className="flex items-center justify-center text-white">
                     <p>{aiTips}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}   