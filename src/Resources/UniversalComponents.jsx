import { styled, keyframes } from "styled-components";
import {
  alwaysWhite,
  darkGreyColor,
  primaryColor,
  secondaryColor,
  textPrimaryColorContrast,
  textSecondaryColorContrast,
} from "../Styles/Styles";
import { Link } from "react-router-dom";

export const Button = styled.button`
  border: 1px solid ${primaryColor()};
  background-color: ${primaryColor()};
  cursor: pointer;
  color: ${textPrimaryColorContrast()};
  padding: 0.4rem;
  width: 5.5rem;
  border-radius: 8px;
  max-height: 2rem;

  &:hover {
    border: 1px solid ${darkGreyColor()};
  }
  &:active {
    font-size: 0.8rem;
  }
`;

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spin = styled.div`
  width: 80px;
  height: 80px;
  display: grid;
  border-radius: 50%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: ${`#aaa`};
  animation-name: ${spinAnimation};
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform: rotate(0.03turn);
`;

export function InputField({ value, onChange, id, placeholder, type }) {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "3px",
          fontWeight: 500,
          textAlign: "right",
        }}
      >
        {placeholder}
      </p>
      <input
        style={{
          alignItems: "center",
          justifyContent: "space-around",
          padding: "0.4rem",
          marginBottom: "0.3rem",
          fontSize: "1.1rem",
          fontWeight: 500,
          backgroundColor: "white",
          minWidth: "15rem",
          border: "#555 1px solid",
        }}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeholder}
        type={type}
        required
      />
    </div>
  );
}

export const ButtonDisapear = styled.button`
  border: 1px solid ${primaryColor()};
  background-color: ${primaryColor()};

  cursor: pointer;
  color: ${textPrimaryColorContrast()};
  padding: 0.5rem;
  width: 5rem;
  margin-right: 3rem;

  &:hover {
    border: 1px solid ${darkGreyColor()};
  }
  &:active {
    font-size: 0.8rem;
  }
  @media (max-width: 1300px) {
    margin-right: 4rem;
  }

  @media (max-width: 1350px) {
    display: none;
  }
`;

export const Xp = styled.p`
  cursor: pointer;
  font-weight: 900;
  position: absolute;
  top: -5px;
  right: 5px;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: ${primaryColor()};
  &:hover {
    color: ${secondaryColor()};
  }
  &:active {
    font-weight: 500;
  }
`;

export const linkReset = {
  display: "inline",
  color: alwaysWhite(),
};

export const IFrameVideo = styled.iframe`
  margin: 0 1rem;
  min-width: 1200px;
  min-height: 650px;
  border-radius: 0.75rem;
  border: 1px #222 solid;
  display: inline-block;
  box-shadow: 2px 2px 20px 3px #222;
  @media (max-width: 1250px) {
    margin-top: 0;
    min-width: 1100px;
    min-height: 600px;
  }

  @media (max-width: 1140px) {
    margin-top: 0;
    min-width: 810px;
    min-height: 450px;
  }

  @media (max-width: 920px) {
    margin-top: 0;
    min-width: 648px;
    min-height: 360px;
  }

  @media (max-width: 750px) {
    margin-top: 0;
    min-width: 350px;
    min-height: 200px;
  }
`;

export const IFrameVideoCourses = styled.iframe`
  min-width: 1600px;
  min-height: 750px;
  border-radius: 0.75rem;
  border: 1px #222 solid;
  box-shadow: 2px 2px 20px 3px #222;
  @media (max-width: 1860px) {
    margin-top: 0;
    min-width: 1200px;
    min-height: 750px;
  }

  @media (max-width: 1500px) {
    margin-top: 0;
    min-width: 810px;
    min-height: 450px;
  }

  @media (max-width: 1100px) {
    margin-top: 0;
    min-width: 648px;
    min-height: 360px;
  }

  @media (max-width: 930px) {
    margin-top: 0;
    min-width: 405px;
    min-height: 225px;
  }

  @media (max-width: 730px) {
    margin-top: 0;
    min-width: 350px;
    min-height: 200px;
  }
`;

export const ImgBlog = styled.img`
  margin-top: 0;
  width: 900px;
  height: 500px;
  @media (max-width: 1350px) {
    margin-top: 0;
    width: 700px;
    height: 400px;
  }
  @media (max-width: 800px) {
    margin-top: 0;
    width: 600px;
    height: 300px;
  }
  @media (max-width: 700px) {
    margin-top: 0;
    width: 300px;
    height: 200px;
  }
`;

export const DisapearOnMobile = styled.div`
  display: block;
  @media (max-width: 920px) {
    display: none;
  }
`;

export const BackToHomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        justifyContent: "right",
      }}
    >
      <Link
        style={{
          ...linkReset,
          backgroundColor: primaryColor(),
          color: textPrimaryColorContrast(),
          padding: "0.5rem",
        }}
        to="/"
      >
        Voltar à página inicial
      </Link>
    </div>
  );
};

export function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

export function getVideoEmbedUrl(videoUrl) {
  let embedUrl = "";
  if (!videoUrl) {
    return "";
  }
  if (videoUrl.includes("youtube.com")) {
    const youtubeIdMatch = videoUrl.match(
      /(?:\?v=|\/embed\/|\/watch\?v=|\/\d\/|\.be\/)([\w\d_-]+)/i
    );

    if (youtubeIdMatch && youtubeIdMatch[1]) {
      embedUrl = `https://www.youtube.com/embed/${youtubeIdMatch[1]}`;
    }
  } else if (videoUrl.includes("vimeo.com")) {
    const vimeoIdMatch = videoUrl.match(/vimeo\.com\/(\d+)/);

    if (vimeoIdMatch && vimeoIdMatch[1]) {
      embedUrl = `https://player.vimeo.com/video/${vimeoIdMatch[1]}`;
    }
  }

  return embedUrl;
}

export function isDev() {
  if (window.location.hostname === "localhost") {
    return "http://localhost:3502";
  } else {
    return "https://seu-outro-dominio.com";
  }
}

export function logout24h() {
  setTimeout(() => {
    alert("Token expirado: Faça login novamente");
    localStorage.removeItem("authorization");
    localStorage.removeItem("loggedIn");
    window.location.assign("/");
  }, 86400000); // vai expirar o login em 24h de inatividade
}

export const backDomain = isDev();
