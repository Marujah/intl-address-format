import { formatAddress, type Address, type FormatAddressOptions } from '../index';

class IntlAddress extends HTMLElement {
  static get observedAttributes() {
    return ['data', 'country-code', 'locale'];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  private render() {
    try {
      const addressData = this.getAddressData();
      if (!addressData) {
        this.innerHTML = '<div class="intl-address-error">No address data provided</div>';
        return;
      }

      const formatted = formatAddress({ ...addressData, output: 'string' }) as string;
      
      // Clean up the formatted string by removing empty lines and extra whitespace
      const cleanedLines = formatted
        .split('\n')
        .map(line => line.trim())
        .filter(line => line.length > 0 && !line.match(/^[:\s]*$/)); // Remove empty lines and lines with just colons/spaces

      this.innerHTML = `<div class="intl-address">${cleanedLines.join('<br>')}</div>`;
      
      // Add CSS styling if not already present
      this.addStyles();
    } catch (error) {
      console.error('IntlAddress error:', error);
      this.innerHTML = '<div class="intl-address-error">Invalid address data</div>';
    }
  }

  private getAddressData(): FormatAddressOptions | null {
    // Try to get data from 'data' attribute first (JSON format)
    const dataAttr = this.getAttribute('data');
    if (dataAttr) {
      try {
        return JSON.parse(dataAttr);
      } catch {
        // If JSON parsing fails, continue to individual attributes
      }
    }

    // Fallback to individual attributes
    const countryCode = this.getAttribute('country-code');
    if (!countryCode) return null;

    const address: Address = {
      name: this.getAttribute('name') || undefined,
      company: this.getAttribute('company') || undefined,
      houseNumber: this.getAttribute('house-number') || undefined,
      street: this.getAttribute('street') || undefined,
      street2: this.getAttribute('street2') || undefined,
      city: this.getAttribute('city') || undefined,
      state: this.getAttribute('state') || undefined,
      postalCode: this.getAttribute('postal-code') || undefined,
      country: this.getAttribute('country') || undefined,
      taxNumber: this.getAttribute('tax-number') || undefined,
    };

    return {
      countryCode,
      locale: this.getAttribute('locale') || undefined,
      address
    };
  }

  private addStyles() {
    if (document.getElementById('intl-address-styles')) return;

    const style = document.createElement('style');
    style.id = 'intl-address-styles';
    style.textContent = `
      intl-address {
        display: block;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        line-height: 1.4;
      }
      
      intl-address .intl-address {
        white-space: pre-line;
      }
      
      intl-address .intl-address-error {
        color: #d32f2f;
        font-style: italic;
        padding: 8px;
        background-color: #ffebee;
        border: 1px solid #ffcdd2;
        border-radius: 4px;
      }
    `;
    document.head.appendChild(style);
  }
}

customElements.define('intl-address', IntlAddress);

export default IntlAddress;