import './App.css'
import { DroneViewCard } from './components/DroneViewCard';
import styled from '@emotion/styled';
import 'animate.css';
import { useInViewAnimation } from './hooks/useInViewAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';



const Section = styled('div')({
  display: 'flex',
  gap: 36,

  '@media (max-width: 1000px)': {
    flexDirection: 'column-reverse',
  },
})

const Title = styled('p')({
  fontSize: 24,
  fontWeight: 600,
  display: 'flex',
  gap: 12
})

const TextWrapper = styled('div')({
  backgroundColor: '#000000cc'
})

// const Price = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',

//   '@media (max-width: 850px)': {
//     flexDirection: 'row',
//     alignItems: 'end',
//     gap: 12,
//     marginBottom: 24,
//     marginTop: 24
//   }
// })

const SectionHouse = styled(Section)({
  justifyContent: 'space-between',
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.5), transparent)',
  },
})

const TechnologyGrid = styled('div')({
  display: 'grid',
  marginTop: 30,
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 24,

  '@media (max-width: 1000px)': {
    marginLeft: 0,
    marginRight: 0,
    gridTemplateColumns: '1fr'
  }
})

const TechnologyCard = styled('div')({
  backdropFilter: 'blur(5px)',
  background: 'linear-gradient(145deg, #1e1e1eed, #2a2a2aed)',
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(184, 140, 153, 0.2)',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.6), transparent)',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 20px rgba(184, 140, 153, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(184, 140, 153, 0.4)',
  }
})

const TechnologyTitle = styled('h3')({
  fontSize: 18,
  fontWeight: 600,
  color: '#f8f9fa',
  marginBottom: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

const TechnologyDescription = styled('p')({
  fontSize: 14,
  lineHeight: 1.6,
  color: '#d1d5db',
  margin: 0,
  textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
})

const TechnologyIcon = styled('div')({
  width: 32,
  height: 32,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #b88c99, #d4a5b3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(184, 140, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

const FloorIcon = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: '#b88c99',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: 'white',
  fontWeight: 'bold',
  margin: 0,
  boxShadow: '0 2px 8px rgba(184, 140, 153, 0.3)'
})

const FloorCard = styled('div')({
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius: 16,
  padding: 24,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(255, 255, 255, 0.15)',
  maxWidth: 400,
  backdropFilter: 'blur(5px)',

  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
})

const FloorTitle = styled('h3')({
  fontSize: 20,
  fontWeight: 600,
  color: '#ecf0f1',
  marginBottom: 12,
  margin: '0 0 12px 0',
  display: 'flex',
  alignItems: 'center',
  gap: 12
})

const FloorDescription = styled('p')({
  fontSize: 14,
  lineHeight: 1.6,
  color: '#bdc3c7',
  margin: 0
})

const IntroText = styled('p')({
  fontSize: 16,
  lineHeight: 1.6,
  color: '#f1f5f9',
  marginLeft: 5,
  marginRight: 50,
  marginBottom: 0,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
  fontWeight: 300,

  '@media (max-width: 1000px)': {
    marginLeft: 0,
    marginRight: 0
  }
})
// const PriceSection = styled('div')({
const CitySection = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url("https://infocentrum-hranice.cz/wp-content/uploads/2018/08/dsc-0013-shop-3x1-1920x639.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  overflow: 'hidden',
  padding: '100px 0px'
})

const CityContainer = styled('div')({
  display: 'flex',
  padding: '0 24px',
  textAlign: 'center',
  gap: 24,
  color: 'white',
  zIndex: 2,
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  
  '@media (max-width: 900px)': {
    flexDirection: 'column'
  }
})

const CityTitle = styled('h1')({
  fontSize: 64,
  fontWeight: 800,
  marginBottom: 24,
  color: 'white',
  textShadow: '0 4px 16px rgba(0,0,0,0.8)',
  letterSpacing: '2px',

  '@media (max-width: 768px)': {
    fontSize: 48
  }
})

const CitySubtitle = styled('p')({
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 40,
  opacity: 0.95,
  maxWidth: 600,
  margin: '0 auto 40px auto',
  textShadow: '0 2px 8px rgba(0,0,0,0.7)',

  '@media (max-width: 768px)': {
    fontSize: 20
  }
})

const CityDescription = styled('div')({
  maxWidth: 700,
  fontSize: 18,
  lineHeight: 1.6,
  opacity: 0.95,
  textShadow: '0 2px 6px rgba(0,0,0,0.6)',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  padding: '24px',
  borderRadius: '12px',
  backdropFilter: 'blur(10px)',

  '@media (max-width: 768px)': {
    fontSize: 16
  }
})

const MilenkaSection = styled('div')({
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  color: 'white',
  padding: '80px 24px',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.5), transparent)',
  },
})

const MilenkaContainer = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  textAlign: 'center'
})

const MilenkaTitle = styled('h1')({
  fontFamily: '"Delius Swash Caps", cursive',
  fontSize: 72,
  fontWeight: 400,
  marginBottom: 48,
  color: '#b88c99',
  textShadow: '0 4px 16px rgba(0,0,0,0.8)',
  letterSpacing: '2px',

  '@media (max-width: 768px)': {
    fontSize: 48
  }
})

const MilenkaSubtitle = styled('p')({
  fontSize: 24,
  fontWeight: 300,
  marginBottom: 32,
  color: '#d1d5db',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto 32px auto',
  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
  lineHeight: 1.4,

  '@media (max-width: 768px)': {
    fontSize: 20
  }
})

const MilenkaGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: 32,
  marginTop: 48,

  '@media (max-width: 1000px)': {
    gridTemplateColumns: '1fr'
  }
})

const MilenkaCard = styled('div')({
  backdropFilter: 'blur(5px)',
  background: 'linear-gradient(145deg, #1e1e1eed, #2a2a2aed)',
  borderRadius: 16,
  padding: 32,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(184, 140, 153, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'left',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.6), transparent)',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 20px rgba(184, 140, 153, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(184, 140, 153, 0.4)',
  }
})

const MilenkaCardTitle = styled('h3')({
  fontSize: 22,
  fontWeight: 600,
  color: '#f8f9fa',
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

const MilenkaCardDescription = styled('p')({
  fontSize: 16,
  lineHeight: 1.6,
  color: '#d1d5db',
  margin: 0,
  textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
})

const MilenkaIcon = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #b88c99, #d4a5b3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(184, 140, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

const FloorPlansSection = styled('div')({
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #f8f9fa 100%)',
  color: '#2d3436',
  padding: '100px 24px',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.3), transparent)',
  },
})

const FloorPlansContainer = styled('div')({
  maxWidth: 1400,
  margin: '0 auto',
})

const FloorPlansTitle = styled('h1')({
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 24,
  color: '#2d3436',
  textAlign: 'center',
  letterSpacing: '1px',

  '@media (max-width: 768px)': {
    fontSize: 36
  }
})

const FloorPlansSubtitle = styled('p')({
  fontSize: 20,
  fontWeight: 300,
  marginBottom: 64,
  color: '#636e72',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto 64px auto',
  lineHeight: 1.5,

  '@media (max-width: 768px)': {
    fontSize: 18
  }
})

const ArchitecturalShowcase = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 80,
})

const ShowcaseItem = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 48,
  alignItems: 'center',

  '&:nth-of-type(even)': {
    '& > div:first-of-type': {
      order: 2
    }
  },

  '@media (max-width: 1000px)': {
    gridTemplateColumns: '1fr',
    gap: 32,
    
    '&:nth-of-type(even)': {
      '& > div:first-of-type': {
        order: 0
      }
    }
  }
})

const ShowcaseImage = styled('div')({
  position: 'relative',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
  background: 'white',
  padding: 24,
  
  '& img': {
    width: '100%',
    height: 'auto',
    borderRadius: 8,
  }
})

const ShowcaseContent = styled('div')({
  padding: '0 24px',
})

const ShowcaseTitle = styled('h2')({
  fontSize: 32,
  fontWeight: 600,
  marginBottom: 16,
  color: '#2d3436',
  lineHeight: 1.2,

  '@media (max-width: 768px)': {
    fontSize: 28
  }
})

const ShowcaseDescription = styled('p')({
  fontSize: 18,
  lineHeight: 1.6,
  color: '#636e72',
  marginBottom: 24,

  '@media (max-width: 768px)': {
    fontSize: 16
  }
})

const ShowcaseFeatures = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
})

const ShowcaseFeature = styled('li')({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  fontSize: 16,
  color: '#2d3436',
  
  '&::before': {
    content: '""',
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #b88c99, #d4a5b3)',
    flexShrink: 0,
  }
})

const FloorPlanGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: 32,
  marginTop: 80,
  padding: 40,
  background: 'white',
  borderRadius: 20,
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)',

  '@media (max-width: 1000px)': {
    gridTemplateColumns: '1fr',
    gap: 24,
    padding: 24,
  }
})

const FloorPlanItem = styled('div')({
  textAlign: 'center',
})

const FloorPlanImage = styled('div')({
  width: '100%',
  height: 300,
  background: 'linear-gradient(135deg, #f1f3f4, #e8eaed)',
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 16,
  border: '2px dashed #b88c99',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '"📐"',
    fontSize: 48,
    opacity: 0.3,
  }
})

const FloorPlanLabel = styled('h3')({
  fontSize: 18,
  fontWeight: 600,
  color: '#2d3436',
  margin: 0,
})

const LandSection = styled('div')({
  background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
  color: 'white',
  padding: '80px 24px',
  position: 'relative',
  overflow: 'hidden',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.5), transparent)',
  },
})

const LandContainer = styled('div')({
  maxWidth: 1200,
  margin: '0 auto',
  textAlign: 'center'
})

const LandTitle = styled('h1')({
  fontSize: 48,
  fontWeight: 700,
  marginBottom: 32,
  color: '#b88c99',
  textShadow: '0 4px 16px rgba(0,0,0,0.8)',
  letterSpacing: '1px',

  '@media (max-width: 768px)': {
    fontSize: 36
  }
})

const LandSubtitle = styled('p')({
  fontSize: 20,
  fontWeight: 300,
  marginBottom: 48,
  color: '#ecf0f1',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto 48px auto',
  textShadow: '0 2px 8px rgba(0,0,0,0.7)',
  lineHeight: 1.5,

  '@media (max-width: 768px)': {
    fontSize: 18
  }
})

const LandGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: 32,
  marginTop: 48,

  '@media (max-width: 1000px)': {
    gridTemplateColumns: '1fr'
  }
})

const LandCard = styled('div')({
  backdropFilter: 'blur(5px)',
  background: 'linear-gradient(145deg, #1e1e1eed, #2a2a2aed)',
  borderRadius: 16,
  padding: 32,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  border: '1px solid rgba(184, 140, 153, 0.2)',
  position: 'relative',
  overflow: 'hidden',
  textAlign: 'left',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(184, 140, 153, 0.6), transparent)',
  },

  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.4), 0 0 20px rgba(184, 140, 153, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    borderColor: 'rgba(184, 140, 153, 0.4)',
  }
})

const LandCardTitle = styled('h3')({
  fontSize: 22,
  fontWeight: 600,
  color: '#f8f9fa',
  marginBottom: 16,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

const LandCardDescription = styled('p')({
  fontSize: 16,
  lineHeight: 1.6,
  color: '#d1d5db',
  margin: 0,
  textShadow: '0 1px 1px rgba(0, 0, 0, 0.3)'
})

const LandIcon = styled('div')({
  width: 40,
  height: 40,
  borderRadius: '8px',
  background: 'linear-gradient(135deg, #b88c99, #d4a5b3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  color: 'white',
  fontWeight: 'bold',
  boxShadow: '0 4px 12px rgba(184, 140, 153, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
})

//   backgroundColor: '#000000d9',
//   marginTop: 64,
//   minHeight: 200,
//   color: 'white',
//   alignItems: 'center',
//   display: 'flex',
//   justifyContent: 'space-evenly',

//   '@media (max-width: 1000px)': {
//     justifyContent: 'space-between',
//     padding: '24px 24px'
//   },

//   '@media (max-width: 850px)': {
//     flexDirection: 'column',
//     justifyContent: 'center',
//   }
// })

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
  const { ref: houseTitleRef, isVisible: isHouseTitleVisible } = useInViewAnimation();
  const { ref: houseContentRef, isVisible: isHouseContentVisible } = useInViewAnimation();

  return (
    <>
      <DroneViewCard />
      {/* <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 24px' }}>
        <HouseImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(1).jpeg" />
      </div> */}
      {/* <Section>
        <LandImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2021.43.54.jpeg" />
        <TextWrapper>
          <Title ref={landTitleRef} className={isLandTitleVisible ? 'animate__animated animate__fadeInDown' : ''}>
            <Icon src="./icons/land.png" />
            Rozměry pozemku
          </Title>
          <div ref={landContentRef} className={isLandContentVisible ? 'animate__animated animate__fadeIn' : ''}>
            <p>
              Pozemek o <b>celkové výměře 2 634 m²</b>, tvořený třemi parcelami, nabízí široké možnosti využití.
              V současnosti slouží především k parkování a k provozu níže uvedeného občerstvení s venkovním posezením pod <b>názvem „Milenka"</b>, registrovaným jako ochranná známka.
            </p>
          </div>
        </TextWrapper>
      </Section> */}
      {/* <div style={{ marginTop: 24, width: '100%', backgroundColor: '#000000de', padding: '18px 0px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <div style={{ color: 'white', fontSize: 38 }}>SUTERÉN</div>
      </div>
      <p>Suterén domu prošel rekonstrukcí a nese industriální charakter doplněný designovými prvky. Dominantou hlavní místnosti je velký epoxidový stůl, který prostoru dodává jedinečný výraz. Zbylé části suterénu jsou v současnosti využívány převážně technicky, k dispozici je také toaleta.</p>
      <div style={{ marginTop: 24, width: '100%', backgroundColor: '#000000de', padding: '18px 0px', display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
        <div style={{ color: 'white', fontSize: 38 }}>1. NP</div>
      </div>
      První nadzemní podlaží tvoří z velké části nově zrekonstruovaný byt o podlahové ploše 108 m² se zimní zahradou. Zbytek podlaží zahrnuje chodbu, čtyři pokoje (z nichž jeden je již zrekonstruovaný) a sklad s koupelnou. Celé podlaží má rozvody elektřiny v mědi.
      {/* <PriceSection> */}
        {/* <Price>
          <div style={{ fontSize: 16, fontWeight: 100, paddingBottom: 12 }}>cena</div>
          <div style={{ fontSize: 40, fontWeight: 400 }}>27 000 000 Kč</div>
        </Price>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
          Nullam in nisi in urna pellentesque hendrerit at sit amet lacus.<br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </PriceSection> */}
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', marginTop: 0, alignItems: 'start', gap: 40, backgroundImage: 'url(https://storage.googleapis.com/milena-a/house-front.jpeg)', backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundPositionX: 'center' }}>
      <div style={{ backgroundColor: '#00000066', width: '100%', padding: 30, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'start' }}>
        <div style={{ display: 'flex', justifyContent: 'start', width: '100%' }}>
          <FloorCard>
            <FloorTitle>
              <FloorIcon>3</FloorIcon>
              3. N.P.
            </FloorTitle>
            <FloorDescription>
              Třetí nadzemní podlaží tvoří čtyři pokoje, úklidová místnost a chodba. Součástí je také možnost využití krovu, který nabízí další potenciál pro rozšíření či úpravy dle potřeb budoucího vlastníka.
            </FloorDescription>
          </FloorCard>
        </div>
        <FloorCard>
          <FloorTitle>
            <FloorIcon>2</FloorIcon>
            2. N.P.
          </FloorTitle>
          <FloorDescription>
            Druhé nadzemní podlaží nabízí šest pokojů, přičemž tři z nich disponují vlastním sociálním zázemím. Součástí patra je také chodba, sklad a společné sociální zařízení doplněné o kuchyňku.
          </FloorDescription>
        </FloorCard>
        <FloorCard>
          <FloorTitle>
            <FloorIcon>1</FloorIcon>
            1. N.P.
          </FloorTitle>
          <FloorDescription>
            První nadzemní podlaží tvoří z velké části nově zrekonstruovaný byt o podlahové ploše 108 m² se zimní zahradou. Zbytek podlaží zahrnuje chodbu, čtyři pokoje (z nichž jeden je již zrekonstruovaný) a sklad s koupelnou. Celé podlaží má rozvody elektřiny v mědi.
          </FloorDescription>
        </FloorCard>
        <FloorCard>
          <FloorTitle>
            <FloorIcon>B</FloorIcon>
            Suterén
          </FloorTitle>
          <FloorDescription>
            Suterén domu prošel rekonstrukcí a nese industriální charakter doplněný designovými prvky. Dominantou hlavní místnosti je velký epoxidový stůl, který prostoru dodává jedinečný výraz. Zbylé části suterénu jsou v současnosti využívány převážně technicky, k dispozici je také toaleta.
          </FloorDescription>
        </FloorCard>
        </div>
      </div>
      
      <SectionHouse style={{ backgroundImage: 'url(https://storage.googleapis.com/milena-a/plan-left.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <TextWrapper>
          <div style={{ padding: '30px 40px', backgroundColor: '#37363685'}}>
            <Title ref={houseTitleRef} className={isHouseTitleVisible ? 'animate__animated animate__fadeInDown' : ''}>
              Popis technologií instalovaných v objektu
            </Title>
          <div ref={houseContentRef} className={isHouseContentVisible ? 'animate__animated animate__fadeIn' : ''}>
            <IntroText>
              V domě je instalován moderní energetický systém využívající obnovitelné zdroje a úsporné technologie
            </IntroText>
            <TechnologyGrid>
              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>⚡</TechnologyIcon>
                  Fotovoltaický systém Growatt SPH-BH UP
                </TechnologyTitle>
                <TechnologyDescription>
                  Třífázový hybridní střídač s možností ukládání přebytků do bateriového úložiště, záložním napájením (EPS/UPS) a chytrým řízením spotřeby. Systém umožňuje efektivní využití solární energie a zvyšuje energetickou soběstačnost budovy.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>☀️</TechnologyIcon>
                  Fotovoltaické panely Canadian Solar
                </TechnologyTitle>
                <TechnologyDescription>
                  Vysoce účinné FV moduly renomovaného výrobce s dlouhou životností a zárukou výkonu, určené pro výrobu elektrické energie z obnovitelného zdroje.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>🔥</TechnologyIcon>
                  Tepelné čerpadlo ASH-35CHWIFR
                </TechnologyTitle>
                <TechnologyDescription>
                  3 fázové, výkon 10,0 kW. Slouží k energeticky úspornému vytápění domu a ohřevu teplé vody. Jednotka je napojena na akumulační zásobníky a zajišťuje komfortní provoz i při nízkých venkovních teplotách.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>📱</TechnologyIcon>
                  Vzdálený přístup a monitoring
                </TechnologyTitle>
                <TechnologyDescription>
                  Umožňuje online monitoring a správu systému, sledování výroby a spotřeby energie v reálném čase prostřednictvím komunikačního rozhraní pro FVE.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>🏺</TechnologyIcon>
                  Akumulační zásobníky
                </TechnologyTitle>
                <TechnologyDescription>
                  <strong>500 l</strong> – slouží k vyrovnání tepelné bilance a zvýšení účinnosti systému.<br/><br/>
                  <strong>1000 l s výměníky</strong> – umožňuje integraci více zdrojů tepla a efektivní akumulaci energie pro vytápění i přípravu teplé vody.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>🔥</TechnologyIcon>
                  Kotel na pelety (záložní zdroj)
                </TechnologyTitle>
                <TechnologyDescription>
                  Instalován jako nouzový zdroj tepla, který se běžně nevyužívá. Je určen výhradně pro zajištění vytápění a ohřevu vody v případě poruchy tepelného čerpadla nebo jiné části hlavního systému.
                </TechnologyDescription>
              </TechnologyCard>

              <TechnologyCard>
                <TechnologyTitle>
                  <TechnologyIcon>🚗</TechnologyIcon>
                  Dobíjecí stanice pro elektromobily
                </TechnologyTitle>
                <TechnologyDescription>
                  V objektu jsou instalovány dvě nabíjecí stanice, které umožňují pohodlné a ekologické dobíjení elektromobilů přímo z vlastní vyrobené elektrické energie z fotovoltaického systému.
                </TechnologyDescription>
              </TechnologyCard>
            </TechnologyGrid>
          </div>
        </div>
        </TextWrapper>
      </SectionHouse>
      
      <FloorPlansSection>
        <FloorPlansContainer>
          <FloorPlansTitle>Architektonické řešení</FloorPlansTitle>
          <FloorPlansSubtitle>
            Moderní přístup k prostorové koncepci s důrazem na funkčnost a estetiku
          </FloorPlansSubtitle>
          
          <ArchitecturalShowcase>
            <ShowcaseItem>
              <ShowcaseImage>
                <img 
                  src="https://images.pexels.com/photos/7031406/pexels-photo-7031406.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Moderní architektonický návrh"
                />
              </ShowcaseImage>
              <ShowcaseContent>
                <ShowcaseTitle>Koncepční návrh</ShowcaseTitle>
                <ShowcaseDescription>
                  Architektonické řešení vychází z moderních trendů s důrazem na maximální využití prostoru 
                  a propojení interiéru s exteriérem. Každé patro je navrženo s ohledem na specifické potřeby 
                  a komfort budoucích obyvatel.
                </ShowcaseDescription>
                <ShowcaseFeatures>
                  <ShowcaseFeature>Otevřené prostory s vysokými stropy</ShowcaseFeature>
                  <ShowcaseFeature>Velkorysé prosklené plochy</ShowcaseFeature>
                  <ShowcaseFeature>Optimální orientace ke světovým stranám</ShowcaseFeature>
                  <ShowcaseFeature>Propojení s venkovními terasami</ShowcaseFeature>
                </ShowcaseFeatures>
              </ShowcaseContent>
            </ShowcaseItem>

            <ShowcaseItem>
              <ShowcaseImage>
                <img 
                  src="https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Interiérové řešení"
                />
              </ShowcaseImage>
              <ShowcaseContent>
                <ShowcaseTitle>Interiérové řešení</ShowcaseTitle>
                <ShowcaseDescription>
                  Vnitřní prostory jsou navrženy s důrazem na funkčnost a estetiku. Každá místnost 
                  má své specifické určení a je optimálně využita. Materiály a barvy jsou zvoleny 
                  tak, aby vytvářely harmonický celek.
                </ShowcaseDescription>
                <ShowcaseFeatures>
                  <ShowcaseFeature>Kvalitní materiály a povrchy</ShowcaseFeature>
                  <ShowcaseFeature>Promyšlené úložné prostory</ShowcaseFeature>
                  <ShowcaseFeature>Moderní technické vybavení</ShowcaseFeature>
                  <ShowcaseFeature>Flexibilní uspořádání místností</ShowcaseFeature>
                </ShowcaseFeatures>
              </ShowcaseContent>
            </ShowcaseItem>
          </ArchitecturalShowcase>

          <FloorPlanGrid>
            <FloorPlanItem>
              <FloorPlanImage />
              <FloorPlanLabel>Půdorys 3. NP</FloorPlanLabel>
            </FloorPlanItem>
            <FloorPlanItem>
              <FloorPlanImage />
              <FloorPlanLabel>Půdorys 2. NP</FloorPlanLabel>
            </FloorPlanItem>
            <FloorPlanItem>
              <FloorPlanImage />
              <FloorPlanLabel>Půdorys 1. NP</FloorPlanLabel>
            </FloorPlanItem>
            <FloorPlanItem>
              <FloorPlanImage />
              <FloorPlanLabel>Půdorys suterénu</FloorPlanLabel>
            </FloorPlanItem>
          </FloorPlanGrid>
        </FloorPlansContainer>
      </FloorPlansSection>
      
      <LandSection>
        <LandContainer>
          <LandTitle>Pozemek</LandTitle>
          <LandSubtitle>
            Rozlehlý pozemek s výbornou polohou a širokými možnostmi využití
          </LandSubtitle>
          
          <LandGrid>
            <LandCard>
              <LandCardTitle>
                <LandIcon>📐</LandIcon>
                Celková výměra
              </LandCardTitle>
              <LandCardDescription>
                Pozemek o <strong>celkové výměře 2 634 m²</strong> je tvořen třemi samostatnými parcelami, což nabízí flexibilitu při případném rozdělení nebo různém využití jednotlivých částí.
              </LandCardDescription>
            </LandCard>

            <LandCard>
              <LandCardTitle>
                <LandIcon>🚗</LandIcon>
                Současné využití
              </LandCardTitle>
              <LandCardDescription>
                V současnosti slouží pozemek především k <strong>parkování</strong> a k provozu občerstvení Milenka s venkovním posezením. Toto uspořádání vytváří příjemnou atmosféru pro hosty a zajišťuje dostatečné parkovací kapacity.
              </LandCardDescription>
            </LandCard>

            <LandCard>
              <LandCardTitle>
                <LandIcon>🌳</LandIcon>
                Potenciál rozvoje
              </LandCardTitle>
              <LandCardDescription>
                Díky své velikosti a strategické poloze nabízí pozemek <strong>široké možnosti budoucího využití</strong> - od rozšíření stávajícího provozu přes výstavbu dalších objektů až po vytvoření reprezentativních zahrad či rekreačních ploch.
              </LandCardDescription>
            </LandCard>

            <LandCard>
              <LandCardTitle>
                <LandIcon>📍</LandIcon>
                Strategická poloha
              </LandCardTitle>
              <LandCardDescription>
                Pozemek se nachází v <strong>atraktivní lokalitě</strong> s výbornou dostupností a viditelností. Blízkost lázeňské promenády a centra města z něj činí ideální místo pro komerční i rezidenční využití.
              </LandCardDescription>
            </LandCard>
          </LandGrid>
        </LandContainer>
      </LandSection>
            <CitySection>
        <CityContainer>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <CityTitle>Hranice</CityTitle>
          <CitySubtitle>
            Město s bohatou historií a termálními prameny
          </CitySubtitle>
          </div>


          <CityDescription>
            <p><strong>Vila Milena</strong> se nachází v srdci tohoto historického města, které je proslulé svými léčivými termálními prameny a jedinečnou atmosférou.</p>
            
            <p>Hranice nabízejí ideální kombinaci městského komfortu a blízkosti přírody. Město leží strategicky na křižovatce důležitých dopravních tras s výborným spojením do <strong>Ostravy</strong> (30 km) i dalších významných center.</p>
            
            <p>Okolí města je bohaté na přírodní krásy - <strong>Moravskoslezské Beskydy</strong>, <strong>Jeseníky</strong> a četné turistické stezky jsou na dosah ruky. Pro milovníky historie nabízí město řadu památek včetně známé <strong>Hranické propasti</strong> - nejhlubší zatopené jeskyně světa.</p>
          </CityDescription>
        </CityContainer>
      </CitySection>
      
      <MilenkaSection>
        <MilenkaContainer>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
            <img 
              src="https://storage.googleapis.com/milena-a/milenka-logo.svg" 
              alt="Milenka logo" 
              style={{ height: 120, filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.8))' }}
            />
          </div>
          
          <MilenkaSubtitle>
            Registrovaná ochranná známka s etablovaným konceptem a zákaznickou základnou. Brand Milenka je k dispozici také k samostatnému prodeji.
          </MilenkaSubtitle>
          
          <MilenkaGrid>
            <MilenkaCard>
              <MilenkaCardTitle>
                <MilenkaIcon>🍽️</MilenkaIcon>
                Moderní občerstvení
              </MilenkaCardTitle>
              <MilenkaCardDescription>
                Milenka, inspirovaná protější historickou vilou Milena v Teplicích nad Bečvou, je moderní občerstvení s venkovním posezením. Nabízí nadstandardní rychlé občerstvení, kvalitní kávu, čepované plzeňské pivo, zmrzlinu i speciality z BBQ grilu.
              </MilenkaCardDescription>
            </MilenkaCard>

            <MilenkaCard>
              <MilenkaCardTitle>
                <MilenkaIcon>🎵</MilenkaIcon>
                Kulturní program
              </MilenkaCardTitle>
              <MilenkaCardDescription>
                Díky své atmosféře a atraktivní poloze přímo u lázeňské promenády se stala oblíbeným místem pro místní i návštěvníky lázní. Součástí provozu je také pravidelný kulturní program s hudebními vystoupeními – od lokálních kapel až po známé interprety.
              </MilenkaCardDescription>
            </MilenkaCard>

            <MilenkaCard>
              <MilenkaCardTitle>
                <MilenkaIcon>®</MilenkaIcon>
                Registrovaná ochranná známka
              </MilenkaCardTitle>
              <MilenkaCardDescription>
                Značka Milenka je registrovanou ochrannou známkou, která je již využívána také pro další provozovnu v Rožnově pod Radhoštěm. Tato ochrana zajišťuje jedinečnost a kvalitu služeb pod touto značkou.
              </MilenkaCardDescription>
            </MilenkaCard>
          </MilenkaGrid>
        </MilenkaContainer>
      </MilenkaSection>
    </>
  );
}

export default App;
      