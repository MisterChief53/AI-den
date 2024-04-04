import SmallTitleComponent from '@/components/smallTitleComponent';
import RowStatComponent from '@/components/rowStatComponent';

async function getSensorData() {
    try {
        const url = `https://us-central1-aiden-419204.cloudfunctions.net/getAverage`;
        const res = await fetch(url);
        const sensorData = await res.json();

        return { sensorData };
    } catch (error) {
        console.error(error);
        return { aiTips: 'Failed to get AI tips' };
    }
}

export default async function StatsComponent(){
    const { sensorData } = await getSensorData()

    return (
        <div className="flex flex-col items-start justify-between space-y-4">
            <SmallTitleComponent text="Stats"/>
            <RowStatComponent text="Soil Humidity" value={sensorData.soilHumidity.toFixed(2)}/>
            <RowStatComponent text="Temperature" value={sensorData.temperature.toFixed(2)}/>
            <RowStatComponent text="Air Humidity" value={sensorData.humidity.toFixed(2)}/>
            <RowStatComponent text="Contamination" value={sensorData.ppm.toFixed(2)}/>
        </div>
    )
}