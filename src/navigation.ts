import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: '/' },
    { text: 'Services', href: getPermalink('/services') },
    { text: 'Pricing', href: getPermalink('/pricing') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [{ text: 'Get Started', href: '/contact' }],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'Services', href: '/services' },
        { text: 'Pricing', href: '/pricing' },
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Service One', href: '/services' },
        { text: 'Service Two', href: '/services' },
        { text: 'Service Three', href: '/services' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Contact Us', href: '/contact' },
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    All rights reserved.
  `,
};
