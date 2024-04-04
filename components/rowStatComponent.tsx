interface Stat{
    text: string,
    value: number
};

export default function RowStatComponent(props: Stat){
    return (
        <div className="relative items-center justify-center">
            <div className="h-19 w-50 min-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-800">
                <div className="flex items-center justify-start h-full text-white">
                    <p className="h-10 pl-5 pt-2">{props.text}</p>
                </div>
            </div>
        </div>
    )
}