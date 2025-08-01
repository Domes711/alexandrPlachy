import './App.css'
import { DroneViewCard } from './components/DroneViewCard';
import styled from '@emotion/styled';


const LandImage = styled('img')({
  height: 350,
  borderRadius: 24,
  marginLeft: -50,
  objectFit: 'cover',

  '@media (max-width: 1000px)': {
    marginLeft: 100,
    marginRight: -50
  }
})

const HouseImage = styled('img')({
  height: 350,
  borderRadius: 24,
  marginRight: -20,
  objectFit: 'cover',

  '@media (max-width: 1000px)': {
    marginRight: 100,
    marginLeft: -150
  }
})

const Section = styled('div')({
  display: 'flex',
  marginTop: 64,
  gap: 36,
  '@media (max-width: 1000px)': {
    flexDirection: 'column-reverse',
    marginLeft: 64
  },
})

const Title = styled('p')({
  fontSize: 24,
  fontWeight: 600,
  display: 'flex',
  gap: 12
})

const TextWrapper = styled('div')({

})

const Price = styled('div')({
  display: 'flex',
  flexDirection: 'column',
})

const Icon = styled('img')({
  height: 35
})

function App() {


  return (
    <>
      <DroneViewCard />
      <Section>
        <LandImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2021.43.54.jpeg" />
        <TextWrapper>
          <Title>
            <Icon src="./icons/land.png" />
            Rozměry pozemku
          </Title>
          <div style={{ marginLeft: 25, marginRight: 50 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.
              Pellentesque imperdiet tellus quis consectetur tempus. In dictum varius consectetur.
              Nullam tortor ligula, pharetra id finibus ac, commodo id ante. Donec lacinia erat nulla
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.
              Pellentesque imperdiet tellus quis consectetur tempus.
            </p>
          </div>
        </TextWrapper>
      </Section>
      <Section style={{ justifyContent: 'space-between', marginTop: -20, marginLeft: 50 }}>
        <TextWrapper style={{ marginTop: 80 }}>
          <Title>
            Rozměry nemovitosti
            <Icon src="./icons/house.png" />
          </Title>
          <div style={{ marginLeft: 25, marginRight: 50 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.
              Pellentesque imperdiet tellus quis consectetur tempus. In dictum varius consectetur.
              Nullam tortor ligula, pharetra id finibus ac, commodo id ante. Donec lacinia erat nulla
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.
              Pellentesque imperdiet tellus quis consectetur tempus.
            </p>
          </div>
        </TextWrapper>
        <HouseImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(1).jpeg" />
      </Section>
      <div style={{ backgroundColor: '#000000d9', marginTop: 64, height: 200, color: 'white', alignItems: 'center', display: 'flex', justifyContent: 'space-evenly' }}>
        <Price>
          <div style={{ fontSize: 16, fontWeight: 100 }}>cena</div>
          <div style={{ fontSize: 40, fontWeight: 400 }}>27 000 000 Kč</div>
        </Price>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
           Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.<br /> <br /> 
           Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>
    </>
  )
}

export default App
