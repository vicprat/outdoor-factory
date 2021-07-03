import gsap from 'gsap';

let tl = gsap.timeline();

export const openMenu = () => {
  tl.to('nav', 0, {
    css: { display: 'block', position: 'fixed' },
  })
    .to('body', -0.5, { css: { overflow: 'hidden' } })
    .to('nav', 1, {
      y: '1%',
      ease: 'expo.inOut',
    })
    .to('.hamburger-menu span', 0.6, {
      delay: -1,
      scaleX: 0,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut',
    })

    .to('.hamburger-menu-close', 0.6, {
      delay: -0.8,
      css: { display: 'block' },
    });
};

export const closeMenu = () => {
  tl.to('nav', 1, {
    y: '-100%',
    ease: 'expo.inOut',
  })

    .to('.hamburger-menu span', 0.6, {
      delay: -0.6,
      scaleX: 1,
      transformOrigin: '50% 0%',
      ease: 'expo.inOut',
    })
    .to('.hamburger-menu-close', 0, {
      delay: -1,
      css: { display: 'none' },
    })
    .to('body', 0, { css: { overflow: 'auto' } })
    .to('nav', 0, {
      css: { display: 'none' },
    });
};
