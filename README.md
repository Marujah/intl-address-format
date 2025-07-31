# 🌍 International Address Formatter

A lightweight TypeScript library for formatting international addresses with country-specific layouts, business address support, and web component integration.

## Features

- ✅ **50+ Country Support** - Proper address formatting for major countries worldwide
- ✅ **Business & Personal Addresses** - Support for company names and tax numbers
- ✅ **Multiple Output Formats** - String, HTML, or Web Component
- ✅ **Complete Address Fields** - House numbers, street2 (apartments/suites), and more
- ✅ **Web Component** - Easy integration with any web framework
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Lightweight** - Small bundle size with tree-shaking support

## Installation

```bash
npm install intl-address-format
```

## Quick Start

### Basic Usage

```typescript
import { formatAddress } from 'intl-address-format';

const address = formatAddress({
  countryCode: 'US',
  address: {
    company: 'Tech Corp Inc.',
    name: 'John Smith',
    houseNumber: '123',
    street: 'Main Street',
    street2: 'Suite 456',
    city: 'New York',
    state: 'NY',
    postalCode: '10001',
    country: 'United States',
    taxNumber: '12-3456789'
  },
  output: 'string'
});

console.log(address);
// Output:
// John Smith
// Tech Corp Inc.
// 123 Main Street
// Suite 456
// New York, NY 10001
// United States
// Tax ID: 12-3456789
```

### Web Component Usage

#### Method 1: Individual Attributes

```html
<intl-address 
  country-code="DE"
  company="Mustermann GmbH"
  name="Hans Müller"
  street="Hauptstraße"
  house-number="42"
  street2="Gebäude A"
  postal-code="10115"
  city="Berlin"
  country="Deutschland"
  tax-number="DE123456789">
</intl-address>
```

#### Method 2: JSON Data Attribute

```html
<intl-address id="address-display"></intl-address>

<script>
const addressData = {
  countryCode: 'JP',
  address: {
    company: '株式会社サンプル',
    name: '田中太郎',
    postalCode: '100-0001',
    state: '東京都',
    city: '千代田区',
    street: '丸の内',
    houseNumber: '1-1-1',
    street2: '丸の内ビル 5F'
  }
};

document.getElementById('address-display')
  .setAttribute('data', JSON.stringify(addressData));
</script>
```

## Address Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Individual's name |
| `company` | string | Company/organization name |
| `houseNumber` | string | Street number/house number |
| `street` | string | Street name |
| `street2` | string | Apartment, suite, unit, building, floor, etc. |
| `city` | string | City/locality |
| `state` | string | State, province, or region |
| `postalCode` | string | Postal/ZIP code |
| `country` | string | Country name |
| `taxNumber` | string | Business tax ID/VAT number |

## Supported Countries

### 🌎 Americas
- 🇺🇸 United States (US)
- 🇨🇦 Canada (CA)
- 🇲🇽 Mexico (MX)
- 🇧🇷 Brazil (BR)
- 🇦🇷 Argentina (AR)
- 🇨🇱 Chile (CL)
- 🇨🇴 Colombia (CO)
- 🇵🇪 Peru (PE)

### 🌍 Europe
- 🇩🇪 Germany (DE)
- 🇫🇷 France (FR)
- 🇮🇹 Italy (IT)
- 🇪🇸 Spain (ES)
- 🇬🇧 United Kingdom (GB)
- 🇳🇱 Netherlands (NL)
- 🇧🇪 Belgium (BE)
- 🇨🇭 Switzerland (CH)
- 🇦🇹 Austria (AT)
- 🇵🇹 Portugal (PT)
- 🇮🇪 Ireland (IE)
- 🇸🇪 Sweden (SE)
- 🇳🇴 Norway (NO)
- 🇩🇰 Denmark (DK)
- 🇫🇮 Finland (FI)
- 🇮🇸 Iceland (IS)
- 🇵🇱 Poland (PL)
- 🇨🇿 Czech Republic (CZ)
- 🇸🇰 Slovakia (SK)
- 🇭🇺 Hungary (HU)
- 🇷🇴 Romania (RO)
- 🇧🇬 Bulgaria (BG)
- 🇭🇷 Croatia (HR)
- 🇸🇮 Slovenia (SI)
- 🇷🇺 Russia (RU)
- 🇺🇦 Ukraine (UA)
- 🇧🇾 Belarus (BY)

### 🌏 Asia Pacific
- 🇯🇵 Japan (JP)
- 🇰🇷 South Korea (KR)
- 🇨🇳 China (CN)
- 🇹🇼 Taiwan (TW)
- 🇭🇰 Hong Kong (HK)
- 🇸🇬 Singapore (SG)
- 🇲🇾 Malaysia (MY)
- 🇹🇭 Thailand (TH)
- 🇻🇳 Vietnam (VN)
- 🇮🇩 Indonesia (ID)
- 🇵🇭 Philippines (PH)
- 🇮🇳 India (IN)
- 🇵🇰 Pakistan (PK)
- 🇧🇩 Bangladesh (BD)
- 🇱🇰 Sri Lanka (LK)
- 🇦🇺 Australia (AU)
- 🇳🇿 New Zealand (NZ)

### 🌍 Middle East & Africa
- 🇹🇷 Turkey (TR)
- 🇸🇦 Saudi Arabia (SA)
- 🇦🇪 UAE (AE)
- 🇿🇦 South Africa (ZA)
- 🇪🇬 Egypt (EG)
- 🇳🇬 Nigeria (NG)
- 🇰🇪 Kenya (KE)

## Output Formats

The library supports three different output formats to suit various use cases:

### String Output
Returns a plain text string with newline characters (`\n`) separating address lines. Perfect for logging, email templates, or plain text displays.

```typescript
const formatted = formatAddress({
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

console.log(formatted);
// Output:
// "John Smith\nTech Corp Inc.\n123 Main Street\nNew York, NY 10001\nTax ID: "
```

### HTML Output
Returns an `HTMLDivElement` with `<br>` tags for line breaks. Ideal for direct DOM insertion and web applications.

```typescript
const htmlElement = formatAddress({
  countryCode: 'DE',
  address: {
    company: 'Mustermann GmbH',
    name: 'Hans Müller',
    street: 'Hauptstraße',
    houseNumber: '42',
    postalCode: '10115',
    city: 'Berlin'
  },
  output: 'html'
});

document.body.appendChild(htmlElement);
// Creates: <div>Hans Müller<br>Mustermann GmbH<br>Hauptstraße 42<br>10115 Berlin<br>USt-IdNr.: </div>
```

### Web Component Output
Returns a custom `<intl-address>` web component that automatically renders the address with built-in styling.

```typescript
const webComponent = formatAddress({
  countryCode: 'JP',
  address: {
    company: '株式会社サンプル',
    postalCode: '100-0001',
    state: '東京都',
    city: '千代田区'
  },
  output: 'webcomponent'
});

document.body.appendChild(webComponent);
// Creates: <intl-address data="{...}">formatted address content</intl-address>
```

## Practical Usage Examples

### Email Templates (String Output)
```typescript
import { formatAddress } from 'intl-address-format';

const emailBody = `
Dear ${customerName},

Your order will be shipped to:

${formatAddress({
  countryCode: order.shippingAddress.country,
  address: order.shippingAddress,
  output: 'string'
})}

Thank you for your business!
`;
```

### Dynamic Web Content (HTML Output)
```typescript
// Add formatted address to existing DOM element
const addressContainer = document.getElementById('shipping-address');
const formattedAddress = formatAddress({
  countryCode: 'FR',
  address: customerAddress,
  output: 'html'
});
addressContainer.appendChild(formattedAddress);
```

### React/Vue/Angular Components (Web Component)
```html
<!-- Works in any framework -->
<intl-address 
  country-code="AU"
  company="Sydney Tech Pty Ltd"
  name="Sarah Wilson"
  house-number="88"
  street="George Street"
  city="Sydney"
  state="NSW"
  postal-code="2000">
</intl-address>
```

## Country-Specific Examples

### 🇺🇸 United States
```
Tech Corp Inc.
John Smith
123 Main Street
Suite 456
New York, NY 10001
United States
Tax ID: 12-3456789
```

### 🇩🇪 Germany
```
Mustermann GmbH
Hans Müller
Hauptstraße 42
Apartment 3A
10115 Berlin
Deutschland
USt-IdNr.: DE123456789
```

### 🇯🇵 Japan
```
株式会社サンプル
田中太郎
100-0001
東京都千代田区
丸の内 1-1-1
丸の内ビル 5F
日本
Tax Number: 1234567890123
```

### 🇧🇷 Brazil
```
Empresa Exemplo Ltda.
José Silva
Rua das Flores, 100
Apto 201
São Paulo - SP
01234-567
Brasil
Tax Number: 12.345.678/0001-90
```

## API Reference

### `formatAddress(options: FormatAddressOptions)`

#### Parameters

```typescript
interface FormatAddressOptions {
  countryCode: string;           // ISO 3166-1 alpha-2 country code
  locale?: string;               // Locale for future localization support
  address: Address;              // Address data object
  output?: 'string' | 'html' | 'webcomponent'; // Output format
}

interface Address {
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
}
```

#### Returns
- `string` - When `output` is 'string'
- `HTMLElement` - When `output` is 'html' or 'webcomponent'

## Web Component API

### Attributes

| Attribute | Description |
|-----------|-------------|
| `country-code` | ISO 3166-1 alpha-2 country code |
| `locale` | Locale code (optional) |
| `name` | Individual's name |
| `company` | Company name |
| `house-number` | Street number |
| `street` | Street name |
| `street2` | Apartment/suite |
| `city` | City name |
| `state` | State/province |
| `postal-code` | Postal code |
| `country` | Country name |
| `tax-number` | Tax ID number |
| `data` | JSON string with all address data |

### Styling

The web component includes default styling but can be customized:

```css
intl-address {
  font-family: your-font;
  line-height: 1.6;
  color: #333;
}

intl-address .intl-address-error {
  color: #d32f2f;
  background-color: #ffebee;
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build library
npm run build

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Type checking
npm run lint

# Run pre-commit checks manually
npm run pre-commit
```

### Git Hooks

This project uses [Husky](https://typicode.github.io/husky/) for Git hooks to ensure code quality:

- **Pre-commit Hook**: Automatically runs TypeScript type checking and all tests before each commit
- **Commit fails if**:
  - TypeScript compilation errors are found
  - Any tests fail
  - This ensures only working code is committed

**Manual pre-commit check:**
```bash
npm run pre-commit
```

The pre-commit hook will show output like:
```
🔍 Running pre-commit checks...
📋 Type checking...
🧪 Running tests...
✅ All checks passed! Proceeding with commit.
```

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions welcome! Please read our contributing guidelines and submit PRs for any improvements.

---

Made with ❤️ for the global developer community 🌍
