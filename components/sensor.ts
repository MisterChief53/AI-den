'use server';
interface Callback{
    (
        sensorData: {
            temperature: number,
            humidity: number,
        },
        error?: any
    ): void;
};

import { PubSub, Topic } from "@google-cloud/pubsub";

export default async function sensor(callback: Callback){
    console.log("entered sensor function");
    try{
        const projectId = "EcobaraTest";
        const topicNameOrId = "SensorData";
    
        const pubsub = new PubSub({projectId});
    
        const topics = await pubsub.getTopics();
        let topicToListenTo;
    
        for (const topic of topics[0] as Topic[]) {
            if (topic.name.endsWith(`/${topicNameOrId}`)) {
              topicToListenTo = topic;
              break;
            }
        }
    
        if (!topicToListenTo) {
            throw new Error('Topic not found');
        }

        const [subscription] = await topicToListenTo.createSubscription("SensorData-sub");
    
        subscription.on('message', message => {
            console.log("new message detected");
            callback({ temperature: 42, humidity: 32});
        });

        return null;


    } catch (error) {
        callback({temperature: 40, humidity: 40}, error);
    }
}
