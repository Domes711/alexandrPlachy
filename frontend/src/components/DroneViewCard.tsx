import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

const Wrapper = styled('div')({
  position: "relative",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  backgroundColor: "#0000004a"
});

export const DroneViewCard = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlayThrough = () => {
      video.play();
    };

    const handleWaiting = () => {
      video.pause();
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('waiting', handleWaiting);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('waiting', handleWaiting);
    };
  }, []);

  return (
    <Wrapper>
      <video
        ref={videoRef}
        src="https://storage.googleapis.com/milena-a/drop.mov"
        loop
        muted
        autoPlay
        poster='https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44.jpeg'
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
      <div style={{ position: "relative", zIndex: 1, color: "white", textAlign: "center", padding: '0px 45px 45px 45px' }}>
        <p style={{ fontSize: 75, fontWeight: 500, marginBottom: 0 }}>Vila Milena</p>
        <p style={{ fontSize: 18 }}>Stromořadí č.p. 988, Hranice</p>
      </div>
    </Wrapper>
  )
}