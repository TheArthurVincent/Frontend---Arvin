import { keyframes, styled } from "styled-components";
import {
  primaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
  alwaysWhite,
  alwaysBlack,
  transparentWhite,
  secondaryColor,
} from "../../Styles/Styles";

export const RouteSizeControlBox = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  @media (max-width: 900px) {
    max-width: 750px;
  }
  @media (max-width: 800px) {
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
    h1,
    h2,
    h3,
    p,
    ul,
    li {
      font-size: 1rem;
    }
  }
  @media (max-width: 700px) {
    max-width: 550px;
  }
  &.smooth {
    animation-name: slideInLeft;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }
`;
export const BlogSideBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.51rem;
  @media (max-width: 900px) {
    flex-direction: row;
  }
`;
export const OverFlow = styled.div`
  max-height: 15rem,
  overflow: auto,
  @media (max-width: 500px) {
    max-height: 2rem,
    font-size: 0.6rem;
    max-width:10ch;
}
  `;
export const BlogRouteSizeControlBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  max-width: 1000px;
  gap: 0.2rem;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    max-width: 500px;
  }
  @media (max-width: 900px) {
    max-width: 500px;
    align-items: center;
  }
  &.smooth {
    animation-name: slideInLeft;
    animation-duration: 0.3s;
    animation-timing-function: ease-out;
  }
`;

export const HOne = styled.h1`
  font-weight: 800;
  font-size: 1.3rem;
  background-color: ${secondaryColor()};
  display: flex;
  max-width: fit-content;
  padding: 0 1rem;
  border-radius: 1rem;
  align-items: center;
  margin: 1rem auto;
  font-family: Athiti;
  box-shadow: 1px 1px 10px 1px #aaa;
  text-align: center;
  color: ${textPrimaryColorContrast()};
  text-shadow: 2px 0 ${primaryColor()}, -2px 0 ${primaryColor()},
    0 2px ${primaryColor()}, 0 -2px ${primaryColor()}, 1px 1px ${primaryColor()},
    -1px -1px ${primaryColor()}, 1px -1px ${primaryColor()},
    -1px 1px ${primaryColor()};
`;
export const SpanIcon = styled.span`
  font-size: 1px;
  text-decoration: underline;
  color: ${alwaysWhite()};
  opacity: 0.8;
  transition: 0.3s;
  display: flex;
  font-family: Athiti;
  align-items: center;
  &:hover {
    opacity: 1;
    gap: 0.2rem;
    font-size: 0.8rem;
    padding: 5px;
    border-radius: 10px;
    background-color: ${alwaysBlack()};
  }
`;
export const BlogPostTitle = styled.div`
  font-weight: 400;
  background-color: ${primaryColor()};
  padding: 0rem 0.5rem;
  margin: 0.5rem;
  box-shadow: 1px 1px 10px 1px #aaa;
  font-size: 1.3rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 2.5rem;
  color: ${textPrimaryColorContrast()};
  @media (max-width: 650px) {
    margin: 3px;
  }
`;

export const HTwo = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.6rem;
  margin-bottom: 1rem;
  color: ${alwaysBlack()};
  @media (max-width: 1700px) {
    text-align: center;
    margin-top: 1rem;
  }
  @media (max-width: 650px) {
    padding: 3px;
    margin: 3px;
  }
`;

export const HThree = styled.h3`
  padding: 6px;
  background-color: ${textPrimaryColorContrast()};
  color: ${textSecondaryColorContrast()};
  @media (max-width: 750px) {
    padding: 3px;
    margin: 5px;
  }
`;

export const RouteDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: ${alwaysWhite()};
  color: ${alwaysBlack()};
  padding: 0.5rem;
  margin: 0;

  @media (max-width: 750px) {
    padding: 5px;
    max-width: 600px;
  }
  @media (max-width: 610px) {
    max-width: 600px;
  }
  @media (max-width: 550px) {
    max-width: 500px;
  }
  @media (max-width: 450px) {
    max-width: 400px;
  }
  @media (max-width: 350px) {
    max-width: 300px;
  }
  @media (max-width: 300px) {
    max-width: 250px;
  }
`;

export const NextTutoringsDiv = styled.div`
  margin-right: auto;
  margin-left: auto;
  background-color: ${alwaysWhite()};
  color: ${alwaysBlack()};
  padding: 0.5rem;
  margin: 0 auto;
  min-width: 260px;
`;
export const NextLive = styled.div`
  background-color: ${alwaysWhite()};
  padding: 0.5rem;
  min-width: 260px;
  @media (max-width: 500px) {
    min-width: 160px;
  }
`;

export const LevelCardComponent = styled.div`
  padding: 8px;
  display: grid;
  text-align: center;
  background-color: white;
  min-width: 155px;
  font-size: 12px;
  justify-content: center;
  text-align: center;
`;

export const NewLevelCardComponent = styled.div`
  padding: 12px 8px;
  display: grid;
  border-radius: 1rem;
  text-align: center;
  background: linear-gradient(to bottom, black 0%, #444 50%);
  color: white;
  min-width: 200px;
  height: 300px;
  font-size: 12px;
  justify-content: center;
  text-align: center;
  @media (max-width: 900px) {
    display: flex;
    width: 30rem;
    height: 9rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 450px) {
    display: flex;
    width: 21rem;
    height: 9rem;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
  }
`;

export const DivCardLevel = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
  margin: auto;
`;
const spinAnimation = keyframes`
0% {
  transform: translate(-50%, -40%) rotate(0deg);
}
100% {
  transform: translate(-50%, -40%) rotate(360deg);
}
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
export const DivFont = styled.div`
  font-weight: 700;
  font-size: 2rem;
  font-family: Athiti;
  margin: 0;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;
export const AnimatedLi = styled.li`
  padding: 0.5rem 1rem;
  margin-bottom: 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 0rem 3rem;
  animation: ${fadeIn} ${({ index }) => index * 0.3}s forwards;
`;
export const AnimatedLi2 = styled.li`
  padding: 0.5rem 1rem;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} ${({ index }) => index * 0.3}s forwards;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const LevelCardLevel = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  top: 50%;
  position: absolute;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -40%);
  animation: ${spinAnimation} 1s ease-out forwards;

  @media (max-width: 900px) {
    top: 36%;
    left: -18%;
  }
  @media (max-width: 450px) {
    top: 36%;
    left: 35%;
  }
`;
export const LevelCardPhotoLevel = styled.img`
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  top: 17%;
  left: 0%;
  @media (max-width: 900px) {
    top: 3%;
    left: -68%;
  }
  @media (max-width: 450px) {
    top: 3%;
    left: -15%;
  }
`;
export const TextLevelCard = styled.div`
  position: relative;
  top: 30%;
  left: 0%;
  @media (max-width: 900px) {
    top: 0%;
    left: -5%;
  }
`;

export const BackgroundClickBlog = styled.div`
  position: fixed;
  z-index: 5;
  background-color: ${transparentWhite()};
  height: 10000vh;
  width: 10000vw;
`;
