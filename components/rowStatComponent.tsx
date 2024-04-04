interface Stat{
    text: string,
    value: number
};

export default function RowStatComponent(props: Stat){
    return (
        <div className="relative items-center justify-center">
            <div className="h-20 w-50 min-h-20 min-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-800">
                <div className="flex items-center justify-start h-full text-white">
                    {props.text}
                </div>
            </div>
        </div>
    )
}