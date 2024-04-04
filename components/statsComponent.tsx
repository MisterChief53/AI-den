import SmallTitleComponent from '@/components/smallTitleComponent';
import RowStatComponent from '@/components/rowStatComponent';

export default function StatsComponent(){
    return (
        <div className="flex flex-col items-start justify-between space-y-4">
            <SmallTitleComponent text="Stats"/>
            <RowStatComponent text="text" value={42}/>
            <RowStatComponent text="text" value={42}/>
            <RowStatComponent text="text" value={42}/>
            <RowStatComponent text="text" value={42}/>
        </div>
    )
}