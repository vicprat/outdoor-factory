import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Logo } from '../Logo';

export function HomeParallax() {
  return (
    <ParallaxBanner
    layers={[
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_0.png?raw=true',
            amount: 0.1,
        },
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_1.png?raw=true',
            amount: 0.2,
        },
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_2.png?raw=true',
            amount: 0.3,
        },
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_3.png?raw=true',
            amount: 0.4,
        },
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_4.png?raw=true',
            amount: 0.5,
        },
       
        {
            image: 'https://github.com/samdbeckham/blog/blob/master/dev/_assets/images/articles/firewatch/layer_6.png?raw=true',
            amount: 0.7,
        },
    ]}
    style={{
    height: '80vh'
    }}
>
    <h1>Outdoor Factory</h1>
</ParallaxBanner>
  );
}