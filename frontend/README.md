# Prestige Reality - Prezentační webová stránka makléře

Moderní, responzivní webová aplikace pro realitní makléře vytvořená v React s TypeScript a Tailwind CSS.

## Funkce

- **Moderní design** inspirovaný prémiovými realitními portály
- **Plně responzivní** - optimalizováno pro desktop, tablet i mobil
- **Rychlá navigace** s fixním headrem a mobilním menu
- **Hero sekce** s působivým pozadím a statistikami
- **Seznam nemovitostí** s detailními kartami a filtry
- **Profesionální footer** s kontaktními informacemi a odkazy

## Technologie

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Modern ES6+

## Instalace

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev

# Build pro produkci
npm run build

# Náhled produkční verze
npm run preview
```

## Struktura projektu

```
realtor-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Hlavička s navigací
│   │   ├── Hero.tsx          # Hero sekce s CTA
│   │   ├── PropertyCard.tsx  # Karta jednotlivé nemovitosti
│   │   ├── PropertyList.tsx  # Seznam nemovitostí
│   │   └── Footer.tsx        # Footer s kontakty
│   ├── App.tsx               # Hlavní komponenta
│   └── index.css             # Globální styly a Tailwind
├── tailwind.config.js        # Konfigurace Tailwind CSS
└── package.json
```

## Přizpůsobení

### Barvy
Upravte barvy v `tailwind.config.js`:
```js
colors: {
  primary: '#1a1a1a',    // Primární barva
  secondary: '#d4af37',  // Sekundární/zlatá barva
  accent: '#2c3e50',     // Doplňková barva
}
```

### Nemovitosti
Upravte seznam nemovitostí v `src/components/PropertyList.tsx` v poli `properties`.

### Fonty
Změňte fonty v `tailwind.config.js` a v `src/index.css`.

## Deployment

Aplikace je připravena pro deployment na:
- Vercel
- Netlify
- GitHub Pages
- Jakýkoliv hosting podporující statické stránky

```bash
npm run build
# Složka dist/ obsahuje připravenou aplikaci
```

## Spuštění

Aplikace běží na: **http://localhost:5173/**

## Licence

Vytvořeno pro demonstrační účely.
