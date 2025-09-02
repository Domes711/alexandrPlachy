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
import { Card } from './components/Card';

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

// const PriceSection = styled('div')({
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
              Pozemek o <b>celkové výměře 2 634 m²</b>, tvořený třemi parcelami, nabízí široké možnosti využití.
              V současnosti slouží především k parkování a k provozu níže uvedeného občerstvení s venkovním posezením pod <b>názvem „Milenka“</b>, registrovaným jako ochranná známka.
            </p>
          </div>
        </TextWrapper>
      </Section>
      <SectionHouse>
        <TextWrapper>
          <Title ref={houseTitleRef} className={isHouseTitleVisible ? 'animate__animated animate__fadeInDown' : ''}>
            Popis technologií instalovaných v objektu
            <Icon src="./icons/house.png" />
          </Title>
          <div ref={houseContentRef} className={isHouseContentVisible ? 'animate__animated animate__fadeIn' : ''} style={{ marginLeft: 25, marginRight: 50 }}>
            <p>
              V domě je instalován moderní energetický systém využívající obnovitelné zdroje a úsporné technologie:
            </p>
            <ul>
              <li>
                <b>Fotovoltaický systém Growatt SPH-BH UP</b>
                <p style={{ paddingLeft: 12 }}>Třífázový hybridní střídač s možností ukládání přebytků do bateriového úložiště, záložním napájením (EPS/UPS) a chytrým řízením spotřeby. Systém umožňuje efektivní využití solární energie a zvyšuje energetickou soběstačnost budovy.</p>
              </li>
              <li>
                <b>Fotovoltaické panely Canadian Solar (xxx Wp).</b>
                <p style={{ paddingLeft: 12 }}>Vysoce účinné FV moduly renomovaného výrobce s dlouhou životností a zárukou výkonu, určené pro výrobu elektrické energie z obnovitelného zdroje.</p>
              </li>
              <li>
                <b>Tepelné čerpadlo ASH-35CHWIFR</b>
                <p style={{ paddingLeft: 12 }}>3 fázové, výkon 10,0 kW. Slouží k energeticky úspornému vytápění domu a ohřevu teplé vody. Jednotka je napojena na akumulační zásobníky a zajišťuje komfortní provoz i při nízkých venkovních teplotách.</p>
              </li>
              <li>
                <b>Vzdálený přístup a komunikační rozhraní pro FVE</b>
                <p style={{ paddingLeft: 12 }}>Umožňuje online monitoring a správu systému, sledování výroby a spotřeby energie v reálném čase.</p>
              </li>
              <li>
                <b>Akumulační zásobníky</b>
                <div style={{ paddingLeft: 12 }}>
                  <p><b>500 l</b> – slouží k vyrovnání tepelné bilance a zvýšení účinnosti systému.</p>
                  <p><b>1000 l s výměníky</b> – umožňuje integraci více zdrojů tepla a efektivní akumulaci energie pro vytápění i přípravu teplé vody.</p>
                  <p><b>Kotel na pelety (záložní zdroj)</b> - Instalován jako nouzový zdroj tepla, který se běžně nevyužívá. Je určen výhradně pro zajištění vytápění a ohřevu vody v případě poruchy tepelného čerpadla nebo jiné části hlavního systému.</p>
                  <p><b>Dobíjecí stanice pro elektromobily</b> - V objektu jsou instalovány dvě nabíjecí stanice, které umožňují pohodlné a ekologické dobíjení elektromobilů přímo z vlastní vyrobené elektrické energie z fotovoltaického systému.</p>
                </div>
              </li>
            </ul>
          </div>
        </TextWrapper>
        <HouseImage src="https://storage.googleapis.com/milena-a/WhatsApp%20Image%202025-07-31%20at%2022.38.44%20(1).jpeg" />
      </SectionHouse>
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
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignContent: 'center', marginTop: 50, alignItems: 'start', gap: 40, padding: 20, backgroundImage: 'url(./house-back.jpg)' }}>
        <div style={{ display: 'flex', justifyContent: 'start' }}>
          <Card title="Třetí patro" description="Třetí nadzemní podlaží tvoří čtyři pokoje, úklidová místnost a chodba. Součástí je také možnost využití krovu, který nabízí další potenciál pro rozšíření či úpravy dle potřeb budoucího vlastníka." />
        </div>
        <Card title="Druhé patro" description="Druhé nadzemní podlaží nabízí šest pokojů, přičemž tři z nich disponují vlastním sociálním zázemím. Součástí patra je také chodba, sklad a společné sociální zařízení doplněné o kuchyňku." />
        <Card title="První patro" description="První nadzemní podlaží tvoří z velké části nově zrekonstruovaný byt o podlahové ploše 108 m² se zimní zahradou. Zbytek podlaží zahrnuje chodbu, čtyři pokoje (z nichž jeden je již zrekonstruovaný) a sklad s koupelnou. Celé podlaží má rozvody elektřiny v mědi." />
        <Card title="Suterén" description="Suterén domu prošel rekonstrukcí a nese industriální charakter doplněný designovými prvky. Dominantou hlavní místnosti je velký epoxidový stůl, který prostoru dodává jedinečný výraz. Zbylé části suterénu jsou v současnosti využívány převážně technicky, k dispozici je také toaleta." />
      </div>
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
