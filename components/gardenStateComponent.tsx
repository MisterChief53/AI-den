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
        <div className="flex flex-col items-center justify-between pb-4">
            <div className="pb-5">
                <Image
                    src={`/level${level}.svg`}
                    width={400}
                    height={400}
                    alt={`Level ${level} garden`}
                />
            </div>

            <div className="relative items-center justify-center">
                <div className="h-20 w-40 min-h-20 min-w-30 max-w-60 bg-cover bg-no-repeat rounded-2xl overflow-hidden items-center justify-center bg-green-800">
                    <div className="flex items-center justify-center h-full text-white">
                        <ul className="flex space-x-4">
                            <li>{rating}</li>
                            <li>
                                <Image
                                    src='/heart.svg'
                                    width={25}
                                    height={25}
                                    alt="Green heart"
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}