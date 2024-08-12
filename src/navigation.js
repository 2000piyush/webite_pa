import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Architecture',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },
    
    {
      text: 'Interior',
      href: 'blog'
    },

    {
      text: 'Services',
      href: 'services'
    },
    
    {
      text: 'About us',
      href: 'about'
    },
    
    
  ],
  actions: [ { text: 'Contact us', href: 'contact' }],
};

export const footerData = {
  links: [
   

  
    {
      title: 'Company',
      links: [
        { text: 'About', href: 'about' },
        { text: 'Blog', href: 'blog' },
        { text: 'Careers', href: 'pricing' },
        
      ],
    },
    {
      title: 'Contact us',
      links: [
        { text: 'Address - 26, R T nagar Bengaluru, Karnataka - 560032',href: ' https://maps.app.goo.gl/3Vbj7fQYKiBs95Eq6 ' },
        { text: 'Email - info@piyusharchitects.com', },
        { text: 'Phone - +91 9448077707 ', },
        
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/piyusharchitects/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61563774185311' },
    
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `
    
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="77">
<path d="M0 0 C33 0 66 0 100 0 C100 25.41 100 50.82 100 77 C67 77 34 77 0 77 C0 51.59 0 26.18 0 0 Z " fill="#262223" transform="translate(0,0)"/>
<path d="M0 0 C33 0 66 0 100 0 C100 25.41 100 50.82 100 77 C67 77 34 77 0 77 C0 51.59 0 26.18 0 0 Z M2 2 C2 25.76 2 49.52 2 74 C6.95 74 11.9 74 17 74 C17 65.42 17 56.84 17 48 C24.59 48 32.18 48 40 48 C39.4225 49.62550781 38.845 51.25101563 38.25 52.92578125 C37.49975508 55.0546012 36.74976846 57.18351219 36 59.3125 C35.42765625 60.9202832 35.42765625 60.9202832 34.84375 62.56054688 C34.30234375 64.10258789 34.30234375 64.10258789 33.75 65.67578125 C33.41484375 66.62364502 33.0796875 67.57150879 32.734375 68.5480957 C31.85654047 71.05239079 31.85654047 71.05239079 32 74 C36.95 74 41.9 74 47 74 C48.32 69.38 49.64 64.76 51 60 C59.91 59.67 68.82 59.34 78 59 C78.99 62.96 79.98 66.92 81 71 C81.33 71.99 81.66 72.98 82 74 C86.95 74 91.9 74 97 74 C96.30336961 69.12358727 95.71218879 65.66979871 94.11401367 61.20751953 C93.72658493 60.11593536 93.33915619 59.0243512 92.93998718 57.89968872 C92.5202211 56.73911957 92.10045502 55.57855042 91.66796875 54.3828125 C91.23494949 53.17108368 90.80193024 51.95935486 90.35578918 50.71090698 C89.44110432 48.15261199 88.52198475 45.59597125 87.59936523 43.04052734 C86.42588629 39.78980098 85.2612746 36.5359887 84.09974194 33.28097725 C82.98049822 30.14687132 81.85537938 27.0148891 80.73046875 23.8828125 C80.31677536 22.72629181 79.90308197 21.56977112 79.47685242 20.37820435 C77.21664306 14.12587323 74.78498531 8.03752582 72 2 C66.72 2 61.44 2 56 2 C55.34 3.98 54.68 5.96 54 8 C53.06172363 7.35683838 53.06172363 7.35683838 52.10449219 6.70068359 C42.02667093 0.68028081 32.67338692 1.3096989 21.25 1.625 C14.8975 1.74875 8.545 1.8725 2 2 Z " fill="#FCFCFC" transform="translate(0,0)"/>
<path d="M0 0 C3.361875 -0.0825 6.72375 -0.165 10.1875 -0.25 C11.23832764 -0.28641602 12.28915527 -0.32283203 13.37182617 -0.36035156 C17.74859079 -0.41239095 20.29968768 -0.42528377 24.11328125 1.890625 C27.27982507 5.43086032 27.38911541 8.12108233 27.359375 12.73828125 C26.78943134 16.32520929 24.79773951 17.86838894 22 20 C19.59940183 21.20029908 18.10639351 21.11459743 15.4296875 21.09765625 C14.62257324 21.09515869 13.81545898 21.09266113 12.98388672 21.09008789 C11.9579541 21.08098389 10.93202148 21.07187988 9.875 21.0625 C4.986875 21.0315625 4.986875 21.0315625 0 21 C0 14.07 0 7.14 0 0 Z " fill="#FAFAFA" transform="translate(17,15)"/>
<path d="M0 0 C2.3320807 3.49812105 3.30792824 7.00462268 4.4375 11 C4.65559326 11.75659912 4.87368652 12.51319824 5.09838867 13.29272461 C6.78840225 19.17992851 8.41663796 25.08322607 10 31 C3.73 31 -2.54 31 -9 31 C-6.75 20.875 -6.75 20.875 -5.2734375 16.30859375 C-4.9640625 15.34501953 -4.6546875 14.38144531 -4.3359375 13.38867188 C-4.01882812 12.41478516 -3.70171875 11.44089844 -3.375 10.4375 C-2.88773438 8.92446289 -2.88773438 8.92446289 -2.390625 7.38085938 C-1.59735302 4.91938308 -0.80041857 2.4591597 0 0 Z " fill="#F5F5F5" transform="translate(64,16)"/>
<path d="M0 0 C0 0.33 0 0.66 0 1 C-5.28 1 -10.56 1 -16 1 C-16.33 2.98 -16.66 4.96 -17 7 C-20.44002497 7 -21.09134794 6.36365328 -23.8984375 4.55078125 C-32.14223423 0.30302339 -41.5796409 1.21370692 -50.625 1.1875 C-52.50653901 1.16432514 -54.38805232 1.13895366 -56.26953125 1.11132812 C-60.8464502 1.04886295 -65.42269309 1.01622256 -70 1 C-70 0.67 -70 0.34 -70 0 C-18.72403233 -1.56733305 -18.72403233 -1.56733305 0 0 Z " fill="#EFEEEF" transform="translate(72,1)"/>
</svg>

<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="D:\pa website repo\astrowind\src\assets\images\pa logo transparent.png" alt="PA logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" All rights reserved 2024.
 

    
  `,
};
