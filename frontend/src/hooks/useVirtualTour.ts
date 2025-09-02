import { useState } from "react"

export type Room = {
  id: number;
  title: string,
  x: number,
  y: number,
  width: number,
  height: number,
  color: string;
}

export type Rooms = Room[];

export type Floor = {
  img: string,
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  rooms: Rooms,
};

export type Floors = Record<string, Floor>;

export type House = {
  img: string;
  width: number;
  height: number;
  floors: Floors;
}
export const useVirtualTour = () => {
  const [currentFloor, setCurrentFloor] = useState<Floor | undefined>();

  return ({
    currentFloor,
    setCurrentFloor,
  })
}