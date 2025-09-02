import styled from "@emotion/styled";

const Wrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  padding: 30,
  flexDirection: 'column',
  boxShadow: '3px 3px 38px -15px rgba(0,0,0,1)',
  maxWidth: 500,
  borderRadius: 12,
  backgroundColor: '#000000ad',
  color: 'white',
  gap: 12
})

const Title = styled('div')({
  fontSize: 22,
  fontWeight: 800
})

export type CardProps = {
  title: string;
  description: string;
}

export const Card = ({ title, description }: CardProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{description}</div>
    </Wrapper>
  )
}