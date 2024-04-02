'use client';
import IframeComponent from 'react-iframe';

export default function CameraStream(){
    return (
        <>
            <h3>Camera Stream</h3>
            <IframeComponent
                url="api/video_feed"
                width="100%"
                height="500px"
                allow="camera; microphone"
                display="initial"
                position="relative"
            />
        </>
    )
}