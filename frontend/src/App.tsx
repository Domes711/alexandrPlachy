import './App.css'
import { DroneViewCard } from './components/DroneViewCard';
import styled from '@emotion/styled';
import 'animate.css';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const LandImage = styled('img')({
  height: 350,
  borderRadius: 24,
  objectFit: 'cover',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  marginLeft: -24,

  '@media (max-width: 1000px)': {
    marginLeft: 100,
    marginRight: -24,
    borderRadius: 24,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  }
})

const HouseImage = styled('img')({
  height: 350,
  borderRadius: 24,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
  objectFit: 'cover',

  '@media (max-width: 1000px)': {
    marginRight: 100,
    marginLeft: -88,
    borderRadius: 24,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }
})

const Section = styled('div')({
  display: 'flex',
  marginTop: 64,
  gap: 36,
  paddingRight: 24,
  paddingLeft: 24,

  '@media (max-width: 1000px)': {
    flexDirection: 'column-reverse',
    marginLeft: 64,
    marginTop: 20
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

  '@media (max-width: 850px)': {
    flexDirection: 'row',
    alignItems: 'end',
    gap: 12,
    marginBottom: 24,
    marginTop: 24
  }
})

const Icon = styled('img')({
  height: 35
})

const SectionHouse = styled(Section)({
  justifyContent: 'space-between',
  marginTop: -20,
  marginLeft: 50,
  paddingTop: 80,
  paddingRight: 0,

  '@media (max-width: 1200px)': {
    marginTop: 20,
    paddingTop: 0
  },

  '@media (max-width: 1000px)': {
    flexDirection: 'column'
  }
})

const PriceSection = styled('div')({
  backgroundColor: '#000000d9',
  marginTop: 64,
  minHeight: 200,
  color: 'white',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-evenly',

  '@media (max-width: 1000px)': {
    justifyContent: 'space-between',
    padding: '24px 24px'
  },

  '@media (max-width: 850px)': {
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

const images = [
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(2).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(3).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(4).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(5).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44.jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.45%20(1).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.45%20(2).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.45%20(3).jpeg',
  'https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.45.jpeg'
];

function App() {
  const { ref: landTitleRef, isVisible: isLandTitleVisible } = useInViewAnimation();
  const { ref: landContentRef, isVisible: isLandContentVisible } = useInViewAnimation();
  const { ref: houseTitleRef, isVisible: isHouseTitleVisible } = useInViewAnimation();
  const { ref: houseContentRef, isVisible: isHouseContentVisible } = useInViewAnimation();

  return (
    <>
      <DroneViewCard />
      <Section>
        <LandImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2021.43.54.jpeg" />
        <TextWrapper>
          <Title ref={landTitleRef} className={isLandTitleVisible ? 'animate__animated animate__fadeInDown' : ''}>
            <Icon src="./icons/land.png" />
            Rozměry pozemku
          </Title>
          <div ref={landContentRef} className={isLandContentVisible ? 'animate__animated animate__fadeIn' : ''}>
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
      <SectionHouse>
        <TextWrapper>
          <Title ref={houseTitleRef} className={isHouseTitleVisible ? 'animate__animated animate__fadeInDown' : ''}>
            Rozměry nemovitosti
            <Icon src="./icons/house.png" />
          </Title>
          <div ref={houseContentRef} className={isHouseContentVisible ? 'animate__animated animate__fadeIn' : ''} style={{ marginLeft: 25, marginRight: 50 }}>
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
      </SectionHouse>
      <PriceSection>
        <Price>
          <div style={{ fontSize: 16, fontWeight: 100, paddingBottom: 12 }}>cena</div>
          <div style={{ fontSize: 40, fontWeight: 400 }}>27 000 000 Kč</div>
        </Price>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.<br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </PriceSection>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={0}
        slidesPerView={2}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} style={{ width: '100%', height: '300', objectFit: 'cover' }} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default App
