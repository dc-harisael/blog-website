import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.jpg';
import Avatar_128 from '$assets/avatar.jpg?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.jpg?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.jpg?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.jpg?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.jpg?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://chc-danny.com',
  title: 'PixelReel - DC',
  subtitle: '🚀 QWER - Built using Svelte with ❤',
  description: '🚀 QWER - Awesome Blog Starter, Built using Svelte with ❤',
  lang: 'en',
  timeZone: 'America/Toronto',
  since: 2025,
  cover: SiteCover,
  author: {
    name: 'Danny Chan',
    status: '☕',
    statusTip: 'Always keep learning new things, and never stop exploring.',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://chcdanny.com',
    github: 'https://github.com/dc-harisael',
    email: 'danny@chcdanny.com',
    bio: `Take problems mix them up like a cocktail🍹`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://github.com/dc-harisael'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Replace the following with your own setting
          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          // `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          // `<script type="text/partytown">
          //   window.dataLayer = window.dataLayer || [];
          //   function gtag(){dataLayer.push(arguments);}
          //   gtag('js', new Date());
          //   gtag('config', 'G-LQ73GWF6XT');
          // </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: true,
  id: 'giscus-comment',
  repo: 'dc-harisael/blog-website',
  repoId: 'R_kgDOOliakw',
  category: 'General',
  categoryId: 'DIC_kwDOOliak84Cp12k',
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

type NavConfigType = {
  [key: string]: (DD.Nav | DD.Link)[];
};

export const navConfig: NavConfigType = {
  en: [
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Portfolio',
      url: 'https://portfolio.chcdanny.com',
      rel: 'external',
    },
  ],
  zh: [
    {
      name: '關於',
      url: '/about',
    },
    {
      name: '作品集',
      url: 'https://portfolio.chcdanny.com',
      rel: 'external',
    },
  ],
};

type MobileNavConfigType = {
  [key: string]: DD.Nav;
};

export const mobilenavConfig: MobileNavConfigType = {
  en: {
    orientation: 2,
    links: [
      {
        name: 'About',
        url: '/about',
      },
      {
        name: 'Portfolio',
        url: 'https://dc-harisael.work/',
        rel: 'external',
      },
    ],
  },
  zh: {
    orientation: 2,
    links: [
      {
        name: '關於',
        url: '/about',
      },
      {
        name: '作品集',
        url: 'https://dc-harisael.work/',
        rel: 'external',
      },
    ],
  },
};
