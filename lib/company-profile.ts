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
  email: '',
  phone: '',
  telegram: '',
  whatsapp: '',
  address: '',
} as const;

export const PUBLIC_SOCIAL_LINKS: Array<{
  label: string;
  href: string;
  icon: 'Twitter' | 'Instagram' | 'Linkedin' | 'Github';
}> = [];

export const CONTACT_DISCLOSURE =
  'Публичные телефон, мессенджеры, email и юридические реквизиты будут опубликованы после подтверждения командой. Сейчас мы не показываем шаблонные данные и не подставляем вымышленные контакты.';
