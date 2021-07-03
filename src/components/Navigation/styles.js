import styled from 'styled-components';

export const NavigationContainer = styled.nav`
  .container {
    width: 100%;
    min-width: 100%;
    margin: 0;
    height: 100vh;

    @include media('<=1080px') {
      width: 100%;
      min-width: 100%;

      nav {
        left: 0;
        top: -1px;
        width: 100%;
        height: 100vh;
        z-index: 1;
        display: none;
        position: relative;
        overflow: hidden;
        background: white;
        transform: translateY(-100);
        position: relative;

        @media (min-width: 768px) {
          height: 85vh;
        }

        a {
          position: relative;
          &:after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            margin-top: 5px;
            right: 0;
            background: black;
            transition: 0.4s ease;
          }
          &:hover {
            color: pink;
            &:after {
              width: 100%;
              left: 0;
              background: black;
            }
          }
        }
        .nav-columns {
          transform: translateY(125px);
          align-items: center;
          padding: 0 16px;
          display: grid;
          grid-template-columns: 1fr;

          @media (min-width: 650px) {
            grid-template-columns: 1fr 1fr;

            padding: 0 32px;
          }
          .nav-column {
            width: 100%;
            @media (min-width: 650px) {
              width: 45%;
            }
            &:last-child {
              width: 100%;
              @media (min-width: 650px) {
                width: 55%;
              }
            }
            .nav-label {
              font-size: 0.875rem;
              margin-bottom: 1.2rem;
              @media (min-width: 768px) {
                font-size: 1rem;
                margin-bottom: 1.4rem;
              }
              @media (min-width: 1000px) {
                margin-bottom: 3rem;
                font-size: 1.2rem;
              }
            }
            .nav-infos {
              display: grid;
              grid-template-columns: 1fr 1fr;

              justify-content: space-between;
              @media (min-width: 768px) {
                grid-template-columns: 1fr;
              }
              .nav-info {
                padding: 0;
                width: 100%;
                &:nth-child(2),
                &:nth-child(3) {
                  @include media('<=654px') {
                    display: none;
                  }
                }
                .nav-info-label {
                  font-weight: 600;
                }
                li {
                  font-weight: 300;
                  list-style: none;
                  font-size: 1rem;
                  margin-bottom: 0.875rem;
                  @media (min-width: 768px) {
                    font-size: 1.2rem;
                    margin-bottom: 1rem;
                  }
                  @media (min-width: 1000px) {
                    font-size: 1.4rem;
                    margin-bottom: 1.2rem;
                  }
                  a {
                    text-decoration: none;
                    color: black;
                  }
                }
              }
            }
            .nav-links {
              padding: auto;
              margin: auto;
              li {
                list-style: none;
                margin-bottom: 1.2rem;
                @media (min-width: 768px) {
                  margin-bottom: 2.4rem;
                }
                a {
                  font-weight: 600;
                  font-size: 1.5rem;
                  text-decoration: none;
                  color: black;
                  @media (min-width: 768px) {
                    font-size: 2rem;
                  }
                  @media (min-width: 1000px) {
                    font-size: 2.8rem;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
