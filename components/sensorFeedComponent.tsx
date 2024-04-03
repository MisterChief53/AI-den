import {useServerEffect} from 'react';
//import sensor from "/workspace/components/sensor";
import { PubSub, Topic } from "@google-cloud/pubsub";

// interface SensorData {
//     ppm: number,
//     humidity: number,
//     temperature: number,
//     soilHumidity: number
//   }

// interface Callback{
//     (
//         sensorData: {
//             temperature: number,
//             humidity: number,
//         },
//         error?: any
//     ): void;
// };

export default function SensorFeedComponent(){
    // const [temperatureState, setTemperatureState] = useState<number>();
    // const [humidityState, setHumidityState] = useState<number>();


    //  const handleSensorData = ({ temperature: tempSensor, humidity: humiditySensor } : SensorData) => {
    //      setTemperatureState(tempSensor);
    //      setHumidityState(humiditySensor);
    //      console.log("sensor function executed");
    // };

    useServerEffect(() => {
        // console.log("before sensor call");
        // sensor(handleSensorData as Callback).then(() => {
        //     console.log("sensor function executed");
        // }).catch((error) => {
        //     console.error(`There was an error on the sensor server function ${error}`);
        // });

    }, []);

    

    return (
        <div>
            <h3>Placeholder</h3>
            <h3>{temperatureState}</h3>
            <h2>{humidityState}</h2>
        </div>
    )
}