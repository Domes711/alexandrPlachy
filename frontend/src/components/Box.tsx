import styled from "@emotion/styled";

type RectProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  onClick: (floor: number) => void;
  id: number;
  title?: string;
}

const StyledBox = styled('div')<{ x: number, y: number, width: number, height: number }>(({ x, y, width, height }) => ({
  position: 'absolute',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  x: x,
  y: y,
  width: width,
  height: height,
  ":hover": {
    x: x - 5,
    y: y - 5,
    width: width + 10,
    height: height + 10,
    transition: 'all 0.2s ease',
    cursor: 'pointer'
  }
}));

export const Box = ({ x, y, width, height, color, onClick, id, title }: RectProps) => {

  return (
    <>
        <StyledBox 
      x={x}
      y={y}
      width={width}
      height={height}
      color={color}
      onClick={() => onClick(id)}
    />
    <div>Patro 1</div>
    </>
  );
}