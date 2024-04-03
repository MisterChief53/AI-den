"use client";
import { useState } from "react";
import publish from "@/components/publish";

export default function PublishComponent(){
    const [message, setMessage] = useState('');
    const [isPublished, setIsPublished] = useState(false);

    function handlePublish(){
        publish({message})
            .then((response) => {
                setIsPublished(true);
                console.log(`Publish result: ${response.message}`);
            })
            .catch((error) => {
                console.error(`Error publishing message: ${error}`);
            })
    }
    
    return (
        <div>
            <input className="bg-color-black" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handlePublish}>Publish</button>
            {isPublished && <p>Message published successfully!</p>}
        </div>
    )
}