# 🌍 International Address Formatter

[![npm version](https://badge.fury.io/js/intl-address-format.svg)](https://badge.fury.io/js/intl-address-format)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/intl-address-format)](https://bundlephobia.com/package/intl-address-format)

A lightweight TypeScript library for formatting international addresses with country-specific layouts, business address support, and web component integration.

## ⚡ Quick Start

```bash
npm install intl-address-format
```

```typescript
import { formatAddress } from 'intl-address-format';

const address = formatAddress({
  countryCode: 'US',
  address: {
    company: 'Tech Corp Inc.',
    name: 'John Smith',
    houseNumber: '123',
    street: 'Main Street',
    city: 'New York',
    state: 'NY',
    postalCode: '10001'
  },
  output: 'string'
});
// Output: "John Smith\nTech Corp Inc.\n123 Main Street\nNew York, NY 10001\nTax ID: "
```

## 🌟 Features

- ✅ **50+ Countries** - Proper formatting for major countries worldwide
- ✅ **Business Addresses** - Company names and tax numbers
- ✅ **Multiple Outputs** - String, HTML, or Web Component
- ✅ **TypeScript** - Full type safety and IntelliSense
- ✅ **Lightweight** - ~1.7KB gzipped

## 📖 Output Formats

### String Output
```typescript
formatAddress({ countryCode: 'US', address: {...}, output: 'string' })
// Returns: "Name\nStreet\nCity, State ZIP"
```

### HTML Output  
```typescript
formatAddress({ countryCode: 'DE', address: {...}, output: 'html' })
// Returns: HTMLDivElement with <br> line breaks
```

### Web Component
```html
<intl-address 
  country-code="GB"
  name="John Doe"
  street="Baker Street"
  house-number="221B"
  city="London"
  postal-code="NW1 6XE">
</intl-address>
```

## 🌍 Supported Countries

**Americas:** US, CA, MX, BR, AR, CL, CO, PE  
**Europe:** DE, FR, IT, ES, GB, NL, BE, CH, AT, SE, NO, DK, FI, PL, CZ, SK, HU, RO, BG, HR, SI, RU, UA, BY  
**Asia Pacific:** JP, KR, CN, TW, HK, SG, MY, TH, VN, ID, PH, IN, PK, BD, LK, AU, NZ  
**Middle East & Africa:** TR, SA, AE, ZA, EG, NG, KE

## 📋 Address Fields

| Field | Description |
|-------|-------------|
| `name` | Individual's name |
| `company` | Company/organization name |
| `houseNumber` | Street number |
| `street` | Street name |
| `street2` | Apartment, suite, unit, etc. |
| `city` | City/locality |
| `state` | State, province, or region |
| `postalCode` | Postal/ZIP code |
| `country` | Country name |
| `taxNumber` | Business tax ID/VAT number |

## 🔗 Links

- **Documentation:** [GitHub Repository](https://github.com/Marujah/intl-address-format)
- **Demo:** [Live Examples](https://github.com/Marujah/intl-address-format#demo)
- **Issues:** [Report Bug](https://github.com/Marujah/intl-address-format/issues)

## 📄 License

MIT © [Marouen Mhiri](https://github.com/Marujah)
