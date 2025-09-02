import styled from "@emotion/styled";
import { Box } from "./Box";
import { useVirtualTour, type House } from "../hooks/useVirtualTour";
import { useState } from "react";

export type VirtualTourProps = {
  width: number;
  height: number;
}

const Wrapper = styled('div')<{ height: number, width: number }>(({ height, width }) => ({
  width: width,
  height: height,
  position: 'relative',
}));

const Image = styled('img')<{ height: number, width: number }>(({ height, width }) => ({
  width: width,
  height: height,
}));

const HouseFloor = styled('div')({
  width: 530,
  height: 120, 
  backgroundColor: '#0000007d',
  transition: 'all 0.2s ease-in-out',
  color: 'white',
  padding: 12,
  position: 'absolute',
  '&:hover': {
    top: 560,
    left:220,
    width: 550,
    height: 130,
  }
})

const Floor = styled('div')({
  display: 'flex'
})

const house: House = {
  img: 'https://storage.googleapis.com/milena-a/80845d4cc82673056f3a5bae1ece824ee37d744888cc3d85ef53bd7c778880a0.png',
  width: 1000,
  height: 1000,
  floors: {
    "first": {
      img: 'https://storage.googleapis.com/milena-a/Sni%CC%81mek%20obrazovky%202025-08-06%20v%C2%A021.26.21.png',
      width: 530,
      height: 140,
      x: 225,
      y: 530,
      color: 'red',
      rooms: [{
        title: 'test',
        x: 10,
        y: 10,
        width: 10,
        height: 1,
        id: 1,
        color: "black"
      }]
    }
  }
}

export const VirtualTour = ({ width, height }: VirtualTourProps) => {
  const [currentFloor, setCurrentFloor] = useState<number | undefined>();

  const onFloor = (floor: number) => {
    setCurrentFloor(floor);
  }

  const renderHouse = () => {
    return (
      <Wrapper style={{ backgroundImage: `url('${house.img}')` }} height={height} width={width}>
        <HouseFloor style={{ top: 565, left: 230 }} onClick={() => onFloor(1)}>Patro 1</HouseFloor>
        <HouseFloor style={{ top: 422, left: 230 }} onClick={() => onFloor(2)}>Patro 2</HouseFloor>
      </Wrapper>
    )
  }

  const renderFloor = (floor: number) => {
    let image = '';
    if (floor == 1) {
      image = 'https://storage.googleapis.com/milena-a/Sni%CC%81mek%20obrazovky%202025-08-06%20v%C2%A021.26.21.png';
    }
    return (
      <Floor>
        <div onClick={() => setCurrentFloor(undefined)} style={{ width: 20, height: 20, backgroundColor: 'red', position: 'absolute', top: 20, left: 20 }}>test</div>
        <img width={width} height={height} src={image} />
      </Floor>
    )
  }

  return (
    <Wrapper width={width} height={height}>
      {!currentFloor && renderHouse()}
      {currentFloor && renderFloor(currentFloor)}
    </Wrapper>
  );
}