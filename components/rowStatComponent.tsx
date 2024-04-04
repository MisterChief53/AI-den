interface Stat{
    text: string,
    value: number
};

export default function RowStatComponent(props: Stat){
    return (
        <div className="relative items-center justify-center">
          <div className="flex items-center justify-center h-full text-white">
              <ul className="flex space-x-0 space-y-0">
                  <li>
                    <div className="relative items-start justify-start pt-5">
                        <div className="h-19 w-40 min-w-50 bg-cover bg-no-repeat rounded-2xl rounded-r-none overflow-hidden items-start justify-start bg-green-800">
                            <div className="flex items-start justify-start h-full text-white">
                                <p className="h-10 pl-5 pt-2">{props.text}</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="relative items-center justify-center">
                        <div className="h-20 w-20 min-h-20 min-w-30 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-600">
                            <div className="flex items-center justify-center h-full text-white">
                                {props.value}
                            </div>
                        </div>
                    </div>
                </li>
              </ul>
          </div>
      </div>
    )
}