export type Address = {
  name?: string;
  company?: string;
  houseNumber?: string;
  street?: string;
  street2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  taxNumber?: string;
};

export type FormatAddressOptions = {
  countryCode: string;
  locale?: string;
  address: Address;
  output?: 'string' | 'html' | 'webcomponent';
};

import { templates } from './templates';
import './components/IntlAddress';

export function formatAddress({
  countryCode,
  locale,
  address,
  output = 'string'
}: FormatAddressOptions): string | HTMLElement {
  const template = templates[countryCode.toUpperCase()] || templates['default'];

  const formatted = template
    .replace('{name}', address.name || '')
    .replace('{company}', address.company || '')
    .replace('{houseNumber}', address.houseNumber || '')
    .replace('{street}', address.street || '')
    .replace('{street2}', address.street2 || '')
    .replace('{city}', address.city || '')
    .replace('{state}', address.state || '')
    .replace('{postalCode}', address.postalCode || '')
    .replace('{country}', address.country || '')
    .replace('{taxNumber}', address.taxNumber || '');

  if (output === 'html') {
    const div = document.createElement('div');
    div.innerHTML = formatted.replace(/\n/g, '<br>');
    return div;
  }

  if (output === 'webcomponent') {
    const el = document.createElement('intl-address');
    el.setAttribute('data', JSON.stringify({ countryCode, locale, address }));
    return el;
  }

  return formatted;
}

// Export the web component for direct access
export { default as IntlAddress } from './components/IntlAddress';
