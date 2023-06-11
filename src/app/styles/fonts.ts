import localFont from '@next/font/local'
import {
  VT323,
  Mukta,
  Raleway,
  Playfair_Display,
  Lora,
} from '@next/font/google'

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
  preload: true,
})

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display',
  preload: true,
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-raleway',
  preload: true,
})

export const mukta = Mukta({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mukta',
  preload: true,
})

export const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
  preload: true,
})

export const hackBold = localFont({
  src: '../../../public/assets/fonts/Hack-Bold.ttf',
  variable: '--font-hack-bold',
  preload: true,
})

export const hackRegular = localFont({
  src: '../../../public/assets/fonts/Hack-Regular.ttf',
  variable: '--font-hack-regular',
  preload: true,
})

export const vcrOsdMono = localFont({
  src: '../../../public/assets/fonts/VCR_OSD_MONO.ttf',
  variable: '--font-vcr-osd-mono',
  preload: true,
})

export const linebeam = localFont({
  src: '../../../public/assets/fonts/Linebeam.ttf',
  variable: '--font-linebeam',
  preload: true,
})

export const dsDigital = localFont({
  src: '../../../public/assets/fonts/DIGI.ttf',
  variable: '--font-ds-digital',
  preload: true,
})
