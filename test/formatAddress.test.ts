import { describe, it, expect, beforeEach } from 'vitest';
import { formatAddress } from '../src/index';
import { JSDOM } from 'jsdom';

// Setup DOM environment for web component tests
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;
global.customElements = dom.window.customElements;

describe('formatAddress', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('formats US business address as string with all fields', () => {
    const result = formatAddress({
      countryCode: 'US',
      address: {
        company: 'Tech Corp Inc.',
        name: 'John Doe',
        houseNumber: '123',
        street: 'Main St',
        street2: 'Suite 456',
        city: 'New York',
        state: 'NY',
        postalCode: '10001',
        country: 'USA',
        taxNumber: '12-3456789'
      },
      output: 'string'
    });

    expect(result).toContain('Tech Corp Inc.');
    expect(result).toContain('John Doe');
    expect(result).toContain('123 Main St');
    expect(result).toContain('Suite 456');
    expect(result).toContain('New York, NY 10001');
    expect(result).toContain('Tax ID: 12-3456789');
    expect(typeof result).toBe('string');
  });

  it('formats German address with European format', () => {
    const result = formatAddress({
      countryCode: 'DE',
      address: {
        company: 'Mustermann GmbH',
        name: 'Max Mustermann',
        street: 'Hauptstraße',
        houseNumber: '42',
        street2: 'Apartment 3A',
        city: 'Berlin',
        postalCode: '10115',
        country: 'Deutschland',
        taxNumber: 'DE123456789'
      },
      output: 'string'
    });

    expect(result).toContain('Mustermann GmbH');
    expect(result).toContain('Hauptstraße 42');
    expect(result).toContain('10115 Berlin');
    expect(result).toContain('USt-IdNr.: DE123456789');
    expect(typeof result).toBe('string');
  });

  it('formats address as HTML with proper line breaks', () => {
    const result = formatAddress({
      countryCode: 'GB',
      address: {
        name: 'William Johnson',
        houseNumber: '10',
        street: 'Downing Street',
        city: 'London',
        postalCode: 'SW1A 2AA',
        country: 'United Kingdom'
      },
      output: 'html'
    });

    expect(result).toBeInstanceOf(HTMLElement);
    expect((result as HTMLElement).innerHTML).toContain('<br>');
    expect((result as HTMLElement).innerHTML).toContain('10 Downing Street');
  });

  it('creates web component element', () => {
    const result = formatAddress({
      countryCode: 'JP',
      address: {
        company: '株式会社サンプル',
        name: '田中太郎',
        postalCode: '100-0001',
        state: '東京都',
        city: '千代田区',
        street: '丸の内',
        houseNumber: '1-1-1'
      },
      output: 'webcomponent'
    });

    expect(result).toBeInstanceOf(HTMLElement);
    expect((result as HTMLElement).tagName.toLowerCase()).toBe('intl-address');
    expect((result as HTMLElement).getAttribute('data')).toBeTruthy();
  });

  it('handles missing fields gracefully', () => {
    const result = formatAddress({
      countryCode: 'US',
      address: {
        name: 'John Doe',
        city: 'New York'
      },
      output: 'string'
    });

    expect(result).toContain('John Doe');
    expect(result).toContain('New York');
    expect(typeof result).toBe('string');
  });

  it('falls back to default template for unknown country', () => {
    const result = formatAddress({
      countryCode: 'XX',
      address: {
        name: 'Test User',
        street: 'Test Street',
        city: 'Test City'
      },
      output: 'string'
    });

    expect(result).toContain('Test User');
    expect(result).toContain('Test Street');
    expect(typeof result).toBe('string');
  });
});