import React from "react";
import RankingList from "./RankingList";
import { primaryColor } from "../../../Styles/Styles";
import {
  IFrameVideoInstructions,
  ImgResponsive2,
  getVideoEmbedUrl,
} from "../../../Resources/UniversalComponents";
import WarningText from "../../../Resources/Warning";

export default function RankingExplanation() {
  const h3 = {
    textAlign: "center",
    color: primaryColor(),
    fontWeight: 600,
    margin: "1rem 0",
  };
  const h4 = {
    textDecoration: "underline",
    color: primaryColor(),
    fontWeight: 600,
    margin: "1rem 0",
  };

  return (
    <>
      <h3 style={h3}>O Propósito</h3>
      <p>
        Nosso sistema de classificação é uma verdadeira celebração de sua
        dedicação! Cada tarefa realizada, cada meta alcançada e cada passo dado
        em direção à fluência é uma oportunidade de ganhar pontos e brilhar!
        Temos dois tipos de pontuação: o <strong>MONTHLY SCORE</strong>, que é
        zerado a cada novo mês, e o <strong>TOTAL SCORE</strong>, que acumula ao
        longo do tempo. A cada mês, destacamos os líderes da pontuação mensal(
        <strong>MONTHLY SCORE</strong>), oferecendo descontos exclusivos ou
        aulas extras como recompensa, e monitoramos o progresso total de cada
        aluno, impulsionando-os para novos patamares de fluência. Não é só uma
        competição; é uma jornada emocionante rumo à excelência linguística!
      </p>
      <h3 style={h3}>Como pontuar</h3>
      <div>
        <ImgResponsive2
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/Levels%20_1%20(1).png?updatedAt=1709316937391"
          alt="class"
        />
        <ImgResponsive2
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/Levels%20_1%20(3).png?updatedAt=1709318003761"
          alt="anki"
        />
        <ImgResponsive2
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/groupclassesscore.png?updatedAt=1709216354830"
          alt="group"
        />
        <ImgResponsive2
          src="https://ik.imagekit.io/vjz75qw96/assets/arvin_visuals/othersscore.png?updatedAt=1709216354890"
          alt="others"
        />
        <WarningText
          text={`Qualificação apenas para quem tem PELO MENOS 3000 pontos no mês!`}
        />
      </div>
      <h3 style={h3}>Qualificação mensal</h3>
      <ul>
        <li
          style={{
            fontFamily: "Athiti",
            padding: "0.5rem",
            borderRadius: "0 1.05rem ",
            border: "2px groove #FFD51E",
            background: "linear-gradient(to right, #A68B12 0%, #FFD51E 80%)",
            marginBottom: "5px",
            color: "#fff",
          }}
        >
          <strong> 1st place</strong> = 15% discount/cashback (no mês seguinte à
          qualificação) <strong>ou</strong> 2 aulas extras (particulares);
        </li>
        <li
          style={{
            fontFamily: "Athiti",
            padding: "0.5rem",
            borderRadius: "0 1.05rem ",
            border: "2px groove #B2B2B2",
            background: "linear-gradient(to right, #555 0%, #999 80%)",
            marginBottom: "5px",
            color: "#fff",
          }}
        >
          <strong> 2nd place</strong> = 10% discount/cashback (no mês seguinte à
          qualificação) <strong>ou</strong> 1 aula extra (particular);
        </li>
        <li
          style={{
            fontFamily: "Athiti",
            padding: "0.5rem",
            borderRadius: "0 1.05rem ",
            border: "2px groove #693D2B",
            background: "linear-gradient(to right, #693D2B 0%, #B47755 80%)",
            marginBottom: "5px",
            color: "#fff",
          }}
        >
          <strong> 3rd place</strong> = 5% discount/cashback (no mês seguinte à
          qualificação) <strong>ou</strong> 1 aula extra (particular);
        </li>
      </ul>
      <div style={{ display: "grid", gap: "2rem", padding: "3px" }}>
        <h3 style={h3}>Passando de Nível</h3>
        <IFrameVideoInstructions
          src={getVideoEmbedUrl("https://vimeo.com/913456514?share=copy")}
        />

        <RankingList />
      </div>
    </>
    // <div
    //   style={{
    //     padding: "1rem",
    //   }}
    // >
    //   <p>
    //     Os rankings são oportunidades de ganhar descontos ou cashbacks na
    //     mensalidade por disciplina!
    //   </p>
    //   <h3 style={h3}>O altera a pontuação? (Score)</h3>
    //   <h4 style={h4}>Revisões do Anki (pelo menos 15 cards)</h4>
    //   <ul>
    //     <li>
    //       Revisados pelo menos 6 dias em 7? ={" "}
    //       <span style={{ color: "green" }}>+ 500 pontos</span>
    //     </li>
    //     <li>
    //       Revisados pelo menos 3 dias em 7? ={" "}
    //       <span style={{ color: "green" }}>+ 200 pontos</span>
    //     </li>
    //     <li>
    //       Chegou na aula com o Anki vazio (nenhuma revisão pendente)? ={" "}
    //       <span style={{ color: "green" }}>+ 200 pontos</span>
    //     </li>
    //     <li>
    //       Mandou print/foto para o professor com o{" "}
    //       <strong>ANKI ZERADO DE REVISÕES NO DIA</strong>? (Pode fazer isso
    //       todos os dias) = <span style={{ color: "green" }}>+ 100 pontos</span>
    //     </li>
    //     <li>
    //       Nenhuma revisão nos últimos 7 dias? ={" "}
    //       <span style={{ color: "red" }}> - 100 pontos</span>
    //     </li>
    //   </ul>
    //   <h4 style={h4}>Homework</h4>
    //   <ul>
    //     <li>
    //       Homework feita = <span style={{ color: "green" }}>+ 500 pontos</span>
    //     </li>
    //   </ul>
    //   <h4 style={h4}>Group classes</h4>
    //   <ul>
    //     <li>
    //       Participou da aula em grupo ={" "}
    //       <span style={{ color: "green" }}>+ 300 pontos</span>
    //     </li>
    //     <li>
    //       Fez a Homework da aula em grupo ={" "}
    //       <span style={{ color: "green" }}>+ 500 pontos</span>
    //     </li>
    //     <li>
    //       Fez a apresentação ={" "}
    //       <span style={{ color: "green" }}>+ 1,000 pontos</span>
    //     </li>
    //   </ul>
    //   <h4 style={h4}>Outros</h4>
    //   <ul>
    //     <li>
    //       Bônus por recomendar alguém para estudar comigo (caso feche) ={" "}
    //       <span style={{ color: "green" }}>+ 300 pontos</span>.
    //     </li>
    //     <li>
    //       Stories no instagram marcando o perfil{" "}
    //       <Link
    //         to="https://www.instagram.com/thearthurvincent_/"
    //         target="_blank"
    //       >
    //         {" "}
    //         @thearthurvincent_
    //       </Link>
    //       <strong> fazendo homework </strong>ou
    //       <strong> revisando o Anki</strong>
    //       <span style={{ color: "green" }}>+ 100 pontos</span>.
    //     </li>
    //     <li>
    //       Test - Pode ser marcado a cada 3 meses ={" "}
    //       <span style={{ color: "green" }}>+ até 3,000 pontos</span>
    //     </li>
    //     <li>Extra activities - [[Em breve será criado]]</li>
    //     <li>
    //       AWOL (absent without leave)/Não comparecer à aula sem aviso ={" "}
    //       <span style={{ color: "red" }}>- 200 pontos</span>
    //     </li>
    //   </ul>

    //   <h3 style={h3}>Passando de Nível</h3>
    //   <IFrameVideoInstructions
    //     style={{
    //       border: "solid 1px black",
    //     }}
    //     src={getVideoEmbedUrl("https://vimeo.com/913456514?share=copy")}
    //   />
    //   <RankingList />
    // </div>
  );
}
