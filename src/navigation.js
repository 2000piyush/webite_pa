import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Projects',
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
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/piyusharchitects/' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=61563774185311' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    
    
    
  ],
  footNote: `
    
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" zoomAndPan="magnify" viewBox="0 0 75 60" height="80" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="036ce7513d"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="9cb181094c"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><clipPath id="bebf8f5099"><path d="M 4.097656 5 L 70.847656 5 L 70.847656 55.597656 L 4.097656 55.597656 Z M 4.097656 5 " clip-rule="nonzero"/></clipPath><image x="0" y="0" width="192" xlink:href="data:image/png;base64,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" id="3efa5f08f3" height="146" preserveAspectRatio="xMidYMid meet"/><mask id="17aa590352"><g filter="url(#036ce7513d)"><g filter="url(#9cb181094c)" transform="matrix(0.347656, 0, 0, 0.349315, 4.096665, 4.599549)"><image x="0" y="0" width="192" xlink:href="data:image/png;base64,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" height="146" preserveAspectRatio="xMidYMid meet"/></g></g></mask><image x="0" y="0" width="192" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACSCAIAAACc+FKsAAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODBAEkhAAFEHLscAAAAAElFTkSuQmCC" id="5bafbe82d0" height="146" preserveAspectRatio="xMidYMid meet"/></defs><g clip-path="url(#bebf8f5099)"><g mask="url(#17aa590352)"><g transform="matrix(0.347656, 0, 0, 0.349315, 4.096665, 4.599549)"><image x="0" y="0" width="192" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAACSCAIAAACc+FKsAAAABmJLR0QA/wD/AP+gvaeTAAAAaUlEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODBAEkhAAFEHLscAAAAAElFTkSuQmCC" height="146" preserveAspectRatio="xMidYMid meet"/></g></g></g></svg>

<img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"  src:'~/assets/images/pa logo 2.png' alt="PA logo" loading="lazy"></img>
    All rights reserved 2024. <a class="text-blue-600 underline dark:text-muted" 
 

    
  `,
};
