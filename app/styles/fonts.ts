import localFont from '@next/font/local'
import {
  Major_Mono_Display,
  Nova_Mono,
  VT323,
  Fira_Mono,
  Mukta,
  Raleway,
  Playfair_Display,
  Lora,
} from '@next/font/google'

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
})

export const mukta = Mukta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mukta',
})

export const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
})

export const novaMono = Nova_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

export const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
})

export const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400'],
})

export const hackBold = localFont({
  src: '../../public/assets/fonts/Hack-Bold.ttf',
  variable: '--font-hack-bold',
})

export const hackRegular = localFont({
  src: '../../public/assets/fonts/Hack-Regular.ttf',
  variable: '--font-hack-regular',
})

export const vcrOsdMono = localFont({
  src: '../../public/assets/fonts/VCR_OSD_MONO.ttf',
  variable: '--font-vcr-osd-mono',
})

export const linebeam = localFont({
  src: '../../public/assets/fonts/Linebeam.ttf',
  variable: '--font-linebeam',
})

export const dsDigital = localFont({
  src: '../../public/assets/fonts/DIGI.ttf',
  variable: '--font-ds-digital',
})
