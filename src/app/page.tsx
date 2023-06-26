"use client";

import styled from "styled-components";
import { life_savers } from "@/app/layout";

const Container = styled.div`
  display: flex;
  gap: 100px;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 200vh;
  padding: 100px 50px;
`;

const Label = styled.text`
  font-size: 25px;
`;

const Description = styled.div`
  width: 70vw;
  padding: 30px;
  padding-top: 2vh;
  line-height: 30px;
  border: 1px solid lightgray;
  border-radius: 50px;

  background-color: ${(props) => props.theme.major.gray.light};

  &:first-child {
    color: ${(props) => props.theme.major.gray.dark};
    font-size: 25pt;
    line-height: 55px;
  }
`;

const Search = styled.div`
  width: 70vw;
  height: 5vh;
  padding-top: 2vh;

  background-color: ${(props) => props.theme.major.gray.light};
`;

const Sliders = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 200px;
`;

const Components = styled.div`
  width: 70vw;
  height: 20vh;
  padding-top: 2vh;

  background-color: green;
`;

const Animations = styled.div`
  width: 70vw;
  height: 20vh;
  padding-top: 2vh;

  background-color: navy;
`;

export default function Home() {
  return (
    <Container>
      <Description>
        <text className={life_savers.className}>
          Hello, I am a <b>Front-end</b> web developer <br />
          <br />
          This page is a collection of components and animations <br />
          <br />
          that were used or useful during web development. <br />
          <br />
          that page A summary of components and animations that were useful or
          used during web development
        </text>
      </Description>
      <Search>검색창</Search>
      <Sliders>
        <Components>컴포넌트</Components>
        <Animations>애니메이션</Animations>
      </Sliders>
    </Container>
  );
}
