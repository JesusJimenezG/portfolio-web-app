import localFont from '@next/font/local'
import {
  Major_Mono_Display,
  Nova_Mono,
  VT323,
  Fira_Mono,
} from '@next/font/google'

export const majorMonoDisplay = Major_Mono_Display({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-major-mono-display',
})

export const novaMono = Nova_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-nova-mono-display',
})

export const vt323 = VT323({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-vt323',
})

export const firaMono = Fira_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fira-mono',
})

export const hackBold = localFont({
  src: './fonts/Hack-Bold.ttf',
  variable: '--font-hack-bold',
})

export const hackRegular = localFont({
  src: './fonts/Hack-Regular.ttf',
  variable: '--font-hack-regular',
})

export const vcrOsdMono = localFont({
  src: './fonts/VCR_OSD_MONO.ttf',
  variable: '--font-vcr-osd-mono',
})
