'use server';
import { PubSub, Topic } from "@google-cloud/pubsub";

export default async function publish({ message } : { message: String}) { // Added comma after async
  const projectId = "EcobaraTest"; // Replace with your project ID
  const topicNameOrId = "SensorData"; // Replace with your topic ID

  const pubsub = new PubSub({ projectId });

  const topics = await pubsub.getTopics();
  let topicToPublishTo;

  for (const topic of topics[0] as Topic[]) {
    if (topic.name.endsWith(`/${topicNameOrId}`)) {
      topicToPublishTo = topic;
      break;
    }
  }

  if (!topicToPublishTo) {
    throw new Error('Topic not found');
  }

  const res = await topicToPublishTo.publishMessage({ data: Buffer.from(message) });

  return { message: res.toString() };
}
