async function getTips() {
  try {
    const params = new URLSearchParams({
        prompt: "Describe what is hapening in the video, and if any pollenizers appear. DO not mention any timestamps. The video is not a Time lapse, do not mention any time lapses or anything related to time.",
        uri: 'test-img-aiden/video'
    });

    const url = `https://us-central1-aiden-419204.cloudfunctions.net/prompt-with-uri-vid?${params.toString()}`;

    const res = await fetch(url, { cache: 'no-store' });
    const aiTips = await res.text();

    return { aiTips };
  } catch (error) {
    console.error(error);
    return { aiTips: 'Failed to get AI tips' };
  }
}
  
  export default async function AiTipsVideo() {
    const { aiTips } = await getTips();
  
    return (
        <div className="flex flex-col items-center justify-between w=full m-4">
          <div className="flex items-center justify-center w-full bg-green-800 p-5 rounded-2xl border border-white flex-col">
            <strong className="text-white text-2xl">AI Tips (Video)</strong>
            <p className="text-white mt-2 text-xl">{aiTips}</p>
          </div>
        </div>
    );
  } 