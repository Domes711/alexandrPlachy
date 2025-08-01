import { useEffect, useRef } from 'react';
import './App.css'

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      video.play(); // automatické spuštění
    };

    const handleWaiting = () => {
      video.pause(); // pokud se nestíhá načítat, pauzni
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('waiting', handleWaiting);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('waiting', handleWaiting);
    };
  }, []);

  return (
    <>
      <div style={{ position: "relative", display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#0000004a" }}>
        <video
          ref={videoRef}
          src="https://storage.googleapis.com/milena-a/DJI_0095_1080p_crf22.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <div style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center" }}>
          <p style={{ fontSize: 55, fontWeight: 500, marginBottom: 0 }}>Rodinný dům dvořákovo</p>
          <p style={{ fontSize: 18}}>Stromořadí č.p. 988, Hranice</p>
        </div>
      </div>
      <div>this is test</div>
    </>
  )
}

export default App
