import Image from "next/image";

interface SensorData{
    soilHumidity: number,
    temperature: number,
    humidity: number,
    ppm: number
}

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

function getMagnitude(data : SensorData){
    const weightA = 0.3;
    const weightB = 0.2;
    const weightC = 0.25;
    const weightD = 0.25;

    // normalize before calculations
    const total = data.soilHumidity + data.temperature + data.humidity + data.ppm;
    const normalizedA = Math.min(data.soilHumidity / total, 1) * 100;
    const normalizedB = Math.min(data.temperature / total, 1) * 100;
    const normalizedC = Math.min(data.humidity / total, 1) * 100;
    const normalizedD = Math.min(data.ppm / total, 1) * 100;

    // Calculate the weighted sum
    const weightedSum = (data.soilHumidity * weightA) + (data.temperature * weightB) + (data.humidity * weightC) + (data.ppm * weightD);

    // Normalize to a scale of 0 to 100
    let rating = (weightedSum / (weightA + weightB + weightC + weightD)) * 100;

    // Cap the rating at 100
    rating = rating / 100;

    let level;
    if (rating > 75) {
        level = 3;
    } else if (rating > 50) {
        level = 2;
    } else {
        level = 1;
    }

    // Round the rating to two decimal places
    return [Math.round(rating * 100) / 100, level];
}

export default async function GardenStateComponent(){
    const { sensorData } = await getSensorData();

    const [rating, level] = getMagnitude(sensorData);

    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center justify-center bg-green-600 p-4 rounded-2xl">
                <span className="text-white font-bold text-5xl">Your Garden</span>
            </div>
            <Image
                src={`/level${level}.svg`}
                width={400}
                height={400}
                alt={`Level ${level} garden`}
            />
            <div className="flex items-center space-x-2">
                <span className="text-white font-bold text-3xl">{rating}</span>
                <Image
                    src='/heart.svg'
                    width={30}
                    height={30}
                    alt="Green heart"
                />
            </div>
        </div>
    );
}