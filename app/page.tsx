import CameraStream from "@/app/cameraStream/page";
import PublishComponent from "@/components/publishComponent";
import SensorFeedComponent from "@/components/sensorFeedComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello
      <PublishComponent/>
      <SensorFeedComponent/>
    </main>
  );
}
