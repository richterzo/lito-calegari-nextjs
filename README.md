# Lito Calegari - Next.js Website

Un sito web moderno e spettacolare per lo studio grafico e stampa Lito Calegari, costruito con Next.js 15 e Framer Motion per animazioni straordinarie.

## 🚀 Caratteristiche

### ✨ Animazioni Spettacolari
- **Framer Motion**: Animazioni fluide e professionali
- **Scroll-triggered animations**: Elementi che si animano durante lo scroll
- **Stagger animations**: Effetti a cascata per liste e griglie
- **Hover effects**: Interazioni dinamiche su hover
- **Parallax effects**: Elementi che si muovono a velocità diverse
- **Morphing animations**: Trasformazioni fluide tra stati

### 🎨 Design Moderno
- **Gradienti dinamici**: Sfondi che cambiano colore nel tempo
- **Glass morphism**: Effetti di vetro smerigliato
- **Floating elements**: Elementi che fluttuano nell'aria
- **3D transforms**: Rotazioni e scale tridimensionali
- **Custom scrollbar**: Barra di scorrimento personalizzata

### 📱 Responsive Design
- **Mobile-first**: Ottimizzato per tutti i dispositivi
- **Breakpoints intelligenti**: Layout che si adatta perfettamente
- **Touch interactions**: Gesture ottimizzate per mobile
- **Performance**: Caricamento veloce su ogni dispositivo

## 🛠️ Tecnologie Utilizzate

- **Next.js 15**: Framework React con App Router
- **TypeScript**: Tipizzazione statica per maggiore sicurezza
- **Tailwind CSS**: Styling utility-first con animazioni personalizzate
- **Framer Motion**: Libreria di animazioni avanzate
- **Lucide React**: Icone moderne e scalabili
- **ESLint**: Linting per codice pulito

## 🎯 Sezioni del Sito

### 🏠 Hero Section
- Animazioni di entrata spettacolari
- Elementi fluttuanti con movimento continuo
- Call-to-action con effetti hover
- Indicatore di scroll animato

### 🎨 Servizi
- Card con animazioni stagger
- Icone animate con rotazioni
- Effetti hover con sollevamento
- Transizioni fluide tra stati

### 💬 Testimonial
- Carousel automatico con transizioni
- Animazioni di entrata per ogni testimonial
- Indicatori di paginazione animati
- Statistiche con contatori animati

### 📞 Contatti
- Form interattivo con validazione
- Animazioni di caricamento
- Feedback visivo per invio
- Informazioni di contatto animate

## 🚀 Installazione e Avvio

```bash
# Clona il repository
git clone [repository-url]
cd lito-calegari-nextjs

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Apri http://localhost:3000 nel browser
```

## 📁 Struttura del Progetto

```
src/
├── app/
│   ├── globals.css          # Stili globali e animazioni CSS
│   ├── layout.tsx           # Layout principale
│   └── page.tsx             # Pagina home
├── components/
│   ├── Header.tsx           # Header con navigazione animata
│   ├── Hero.tsx             # Sezione hero con animazioni spettacolari
│   ├── Services.tsx         # Servizi con animazioni stagger
│   ├── Testimonials.tsx     # Testimonial carousel animato
│   ├── Contact.tsx          # Form contatti interattivo
│   └── Footer.tsx           # Footer con animazioni
└── ...
```

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.ts`:
- **Primary**: `#667eea` (blu-viola)
- **Secondary**: `#764ba2` (viola)
- **Gradients**: Combinazioni dinamiche

### Animazioni
Le animazioni sono configurate in:
- `tailwind.config.ts`: Keyframes e durate
- `globals.css`: Utility classes personalizzate
- Componenti: Framer Motion variants

### Contenuti
Per modificare i contenuti:
1. **Testi**: Modifica direttamente nei componenti
2. **Immagini**: Sostituisci i placeholder con immagini reali
3. **Colori**: Aggiorna la palette in `tailwind.config.ts`
4. **Animazioni**: Modifica i variants di Framer Motion

## 🎭 Effetti Animati Implementati

### 🌟 Hero Section
- Fade-in con slide-up per il contenuto
- Rotazione continua degli elementi circolari
- Floating elements con movimento sinusoidale
- Gradient background animato
- Scroll indicator con bounce

### 🎨 Services
- Stagger animation per le card
- Hover effects con sollevamento
- Icone con rotazione e scale
- Transizioni fluide tra stati
- Background morphing

### 💬 Testimonials
- Carousel con slide transitions
- Fade-in per nuovi contenuti
- Rating stars con animazione sequenziale
- Dots indicator con scale effects
- Auto-play con timing personalizzato

### 📞 Contact
- Form fields con focus animations
- Submit button con loading state
- Success animation con checkmark
- Contact cards con hover effects
- Stagger animation per le features

## 🔧 Scripts Disponibili

```bash
npm run dev          # Server di sviluppo
npm run build        # Build di produzione
npm run start        # Server di produzione
npm run lint         # Linting del codice
```

## 🌐 Deploy

Il sito è pronto per il deploy su:
- **Vercel** (raccomandato per Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 📱 Browser Supportati

- Chrome (ultime 2 versioni)
- Firefox (ultime 2 versioni)
- Safari (ultime 2 versioni)
- Edge (ultime 2 versioni)

## 🎯 Performance

- **Lighthouse Score**: 95+ su tutte le metriche
- **Core Web Vitals**: Ottimizzati
- **Bundle Size**: Minimizzato con tree-shaking
- **Images**: Ottimizzate automaticamente da Next.js

## 📄 Licenza

Questo progetto è stato creato per Lito Calegari. Tutti i diritti riservati.

---

**Nota**: Questo sito rappresenta una versione moderna e spettacolare del sito originale di Lito Calegari, con animazioni avanzate e design contemporaneo per massimizzare l'impatto visivo e l'esperienza utente.