"use client";

import Image from "next/image";
import styled from "styled-components";
import { life_savers } from "@/app/layout";
import { BiSearch } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  align-items: center;

  width: 100vw;
  height: 200vh;
  padding: 30px 50px;
`;

const Projects = styled.div`
  display: flex;
  gap: 40px;

  margin-top: 50px;
`;

const Introduce = styled.div`
  width: 70vw;
  padding: 30px;
  padding-top: 2vh;

  font-weight: 700;
  letter-spacing: 14px;
  background-color: transparent;

  &:nth-child(1) {
    color: ${(props) => props.theme.major.blue.dark};
    font-size: 45pt;
    line-height: 100px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70vw;
  padding-top: 2vh;

  font-weight: 700;
  line-height: 30px;
  letter-spacing: 2px;
  background-color: transparent;

  &:nth-child(2) {
    color: ${(props) => props.theme.major.gray.dark};
    font-size: 15pt;
    line-height: 45px;
  }
`;

const SearchBox = styled.div`
  width: 70vw;
  height: 5vh;
  padding: 5px 20px;

  display: flex;
  align-items: center;

  border-radius: 50px;
  border: 3px solid darkgray;

  background-color: white;
`;

const Search = styled.input`
  width: 100%;
  height: 90%;
  border-color: transparent;

  font-size: 14pt;
`;

const Sliders = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 50px;
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
  const projects = ["b3", "cg", "runner8"];

  const onSearch = () => {
    console.log("search ...");
  };

  const onLink = (e: React.MouseEvent<HTMLImageElement>): void => {
    const target = e.currentTarget.id;
    const gitLink = "https://github.com/JaeUpSu/";
    const projectLinks = new Map([
      ["b3", "chatting_front"],
      ["cg", "My-Front-Log/blob/main/Projects/CodingGarden/ReadMe.md"],
      ["runner8", "Runner-8"],
    ]);

    window.open(gitLink + projectLinks.get(target));
  };

  return (
    <Container>
      <Introduce>
        <text className={life_savers.className}>
          JaeUpSu
          <br />
          Frontend
          <br />& Web Developer
        </text>
        <Projects>
          {projects.map((p: string, idx: number) => (
            <div style={{ cursor: "pointer" }}>
              <Image
                id={p}
                key={p + idx}
                onClick={onLink}
                src={`/images/${p}Logo.png`}
                alt={`${p} 프로젝트 링크`}
                width={90}
                height={90}
              />
            </div>
          ))}
        </Projects>
      </Introduce>
      <Description>
        <SearchBox>
          <Search placeholder="Search . . . " />
          <BiSearch onClick={onSearch} scale={"lg"} cursor={"pointer"} />
        </SearchBox>
        <br />
        <text className={life_savers.className}>
          This page is a collection of components and animations <br />
          <br />
          that were used or useful during web development. <br />
        </text>
      </Description>
      <Sliders>
        <Components>컴포넌트</Components>
        <Animations>애니메이션</Animations>
      </Sliders>
    </Container>
  );
}
