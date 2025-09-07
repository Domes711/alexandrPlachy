import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled('div')({
  position: "relative",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#0000004a",
  color: '#fff8e3'
});

const PlayButton = styled('button')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '80px',
  height: '80px',
  fontSize: '24px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  }
});
export const DroneViewCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setShowPlayButton(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowPlayButton(true);
    };

    video.addEventListener('play', handlePlay);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <Wrapper>
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/milena-a/dron.mp4"
        loop
        muted
        autoPlay
        poster='https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44.jpeg'
        playsInline
        preload="auto"
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
      <div style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center", padding: '0px 45px 45px 45px' }}>
        <p style={{ fontSize: 75, fontWeight: 500, marginBottom: 0 }}>Vila Milena</p>
        <p style={{ fontSize: 18 }}>Stromořadí č.p. 988, Hranice</p>
      </div>
    </Wrapper>
  )
}