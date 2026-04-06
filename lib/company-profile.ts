export const COMPANY_NAME = 'Техно-Бэхно';

export const CONTACT_CTA = {
  href: '/contacts',
  shortLabel: 'Связаться',
  primaryLabel: 'Обсудить проект',
} as const;

export const SERVICE_AREAS = [
  'Краснодар',
  'Сочи',
  'Новороссийск',
  'Анапа',
  'Краснодарский край',
] as const;

export const PUBLIC_CONTACTS = {
  email: 'echoproject@icloud.com',
  phone: '',
  telegram: '@tehnobehno',
  whatsapp: '+33605646494',
  address: '',
} as const;

export const MEETING_LOCATION = {
  city: 'Париж',
  country: 'Франция',
  note: 'Очные встречи проводим в Париже. Удалённая работа — по всему миру.',
} as const;

export const PUBLIC_SOCIAL_LINKS: Array<{
  label: string;
  href: string;
  icon: 'Twitter' | 'Instagram' | 'Linkedin' | 'Github';
}> = [];


