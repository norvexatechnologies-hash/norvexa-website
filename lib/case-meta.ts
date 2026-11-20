import { CASES, type CaseStudy } from './cases';

export const REGIONS = ['UAE', 'Oman', 'Kuwait', 'Middle East', 'India', 'UK', 'Indonesia', 'Australia', 'Kyrgyzstan'] as const;
export type Region = (typeof REGIONS)[number];

const FLAG: Record<Region, string> = {
  UAE: '🇦🇪', Oman: '🇴🇲', Kuwait: '🇰🇼', 'Middle East': '🌍', India: '🇮🇳', UK: '🇬🇧', Indonesia: '🇮🇩', Australia: '🇦🇺', Kyrgyzstan: '🇰🇬',
};

export function regionsOf(c: CaseStudy): Region[] {
  const l = c.location;
  const r = new Set<Region>();
  if (/UAE|Dubai|Abu Dhabi|GCC/.test(l)) r.add('UAE');
  if (/Oman|Sohar/.test(l)) r.add('Oman');
  if (/Kuwait/.test(l)) r.add('Kuwait');
  if (/Middle East|GCC/.test(l)) r.add('Middle East');
  if (/India|Kerala|Kochi|Thrissur/.test(l)) r.add('India');
  if (/UK|United Kingdom|Nottingham|Ireland/.test(l)) r.add('UK');
  if (/Indonesia/.test(l)) r.add('Indonesia');
  if (/Australia/.test(l)) r.add('Australia');
  if (/Kyrgyzstan/.test(l)) r.add('Kyrgyzstan');
  return [...r];
}

export function flagOf(c: CaseStudy): string {
  if (/Global/.test(c.location)) return '✈️';
  const r = regionsOf(c)[0];
  return r ? FLAG[r] : '🌍';
}

// Brand-friendly palettes for the generated preview art: [from, to, accent]
const PALETTES: [string, string, string][] = [
  ['#0a1230', '#1d4ed8', '#5ef3f7'],
  ['#0f2a24', '#0f766e', '#7ef2c8'],
  ['#2a0f3d', '#7c3aed', '#f0abfc'],
  ['#3a1a06', '#c2410c', '#fdba74'],
  ['#0b1f3a', '#0369a1', '#7dd3fc'],
  ['#1e1b2e', '#be185d', '#fda4af'],
  ['#14231a', '#15803d', '#bef264'],
  ['#1f1a0a', '#a16207', '#fde047'],
];

export function paletteOf(slug: string): [string, string, string] {
  const i = CASES.findIndex((c) => c.slug === slug);
  return PALETTES[(i < 0 ? 0 : i * 3) % PALETTES.length];
}

export function initialsOf(name: string): string {
  const w = name.replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).filter(Boolean);
  return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase();
}
