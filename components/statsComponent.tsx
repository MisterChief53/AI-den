import { FC } from 'react';

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

const getBarColor = (value: number, lower: number, upper: number) => {
    const range = upper - lower;
    const position = value - lower;

    if (position < range * 0.3) {
        return 'bg-red-600';
    } else if (position < range * 0.6) {
        return 'bg-yellow-600';
    } else {
        return 'bg-green-600';
    }
};

const Stat: FC<{ name: string; value: number; icon: string }> = ({ name, value, icon }) => (
    <>
        <span className="text-white text-2xl">{name}</span>  
        <div className="flex items-center space-x-2 bg-green-600 p-4 rounded-lg">
            <span className="text-white text-2xl">{value.toFixed(2)}</span>
            <img src={`/${icon}.svg`} alt={name} width="22" height="22" />
        </div>
    </>
);

export default async function StatsComponent(){
    const { sensorData } = await getSensorData()
  
    return (
      <div className="flex flex-col items-start justify-between space-y-4">
        <span className="text-white font-bold text-3xl">Stats</span>
        <Stat name="Soil Humidity" value={sensorData.soilHumidity} icon="soil-icon" />
        <Stat name="Temperature" value={sensorData.temperature} icon="temp-icon" />
        <Stat name="Air Humidity" value={sensorData.humidity} icon="humidity-icon" />
        <Stat name="Contamination" value={sensorData.ppm} icon="contam-icon" />
      </div>
    );
  }