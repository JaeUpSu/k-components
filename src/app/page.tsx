"use client";

import Image from "next/image";
import styled from "styled-components";

import { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { IoIosSearch } from "react-icons/io";
import { FaRegKeyboard } from "react-icons/fa";

import { life_savers } from "@/app/layout";
import { Divider } from "@/components/Divider";
import { Tooltip } from "@/components/Tooltip/Tooltip";

const Container = styled.div`
  display: flex;
  gap: 100px;
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
    color: ${(props) => props.theme.major.blue.basic};
    font-size: 45pt;
    line-height: 100px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 70vw;

  font-weight: 700;
  text-align: center;
  letter-spacing: 2px;
  background-color: transparent;

  &:nth-child(2) {
    color: ${(props) => props.theme.major.gray.dark};
    font-size: 15pt;
    line-height: 25px;
  }
`;

const BoxMt50 = styled.div`
  margin-top: 50px;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 4vh;
  max-width: 40vw;
  min-width: 350px;
  padding: 5px 20px;

  display: flex;
  align-items: center;

  border-radius: 50px;
  border: 1px solid darkgray;

  background-color: white;
  &:hover {
    box-shadow: 0 1px 6px rgba(32, 33, 36, 0.28);
  }
`;

const Search = styled.input`
  width: 100%;
  height: 90%;
  padding: 0px 7px;
  border-color: transparent;
  background-color: transparent;

  flex-grow: 3;
  font-size: 14pt;
  outline: none;
  overflow: auto;
`;

const Sliders = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 60px;
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
  const [searchValue, setSearchValue] = useState("");
  const projects = {
    id: ["b3", "cg", "myinfo", "runner8"],
    name: ["방삼", "코딩가든", "마이인포", "러너8"],
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  const onSearch = () => {
    console.log(searchValue);
  };

  const onLink = (e: React.MouseEvent<HTMLImageElement>): void => {
    const target = e.currentTarget.id;
    const gitLink = "https://github.com/JaeUpSu/";
    const projectLinks = new Map([
      ["b3", "chatting_front"],
      ["cg", "My-Front-Log/blob/main/Projects/CodingGarden/ReadMe.md"],
      ["myinfo", "My-Front-Log/blob/main/Projects/MyInfo/ReadMe.md"],
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
          {projects["id"].map((p: string, idx: number) => (
            <div style={{ cursor: "pointer" }}>
              <Image
                id={p}
                onClick={onLink}
                src={`/images/${p}Logo.png`}
                alt={`${p} 프로젝트 링크`}
                height={90}
                width={idx === 2 ? 180 : 90}
              />
            </div>
          ))}
        </Projects>
      </Introduce>
      <Description>
        <SearchBox>
          <Flex style={{ flexGrow: 1, minWidth: "250px" }}>
            <IoIosSearch
              style={{
                width: "25px",
                fontSize: "18px",
                marginRight: "10px",
              }}
            />
            <Search
              type="text"
              value={searchValue}
              onChange={handleInputChange}
              placeholder="검색"
              autoFocus
            />
          </Flex>
          <Flex>
            {searchValue !== "" ? (
              <>
                <Divider style={{ height: "30px" }} />
                <Tooltip contents="지우기">
                  <TfiClose
                    onClick={clearSearch}
                    cursor={"pointer"}
                    style={{
                      fontSize: "18px",
                    }}
                  />
                </Tooltip>
              </>
            ) : (
              <>
                <div style={{ width: "34px" }} />
              </>
            )}
            <Tooltip contents="키보드">
              <FaRegKeyboard
                cursor={"pointer"}
                style={{
                  fontSize: "20px",
                }}
              />
            </Tooltip>
            <Tooltip contents="검색">
              <IoIosSearch
                onClick={onSearch}
                cursor={"pointer"}
                style={{
                  fontSize: "25px",
                  marginRight: "10px",
                }}
              />
            </Tooltip>
          </Flex>
        </SearchBox>
        <br />
        <BoxMt50>
          <text className={life_savers.className}>
            This page is a collection of components and animations <br />
            <br />
            that were used or useful during web development. <br />
          </text>
        </BoxMt50>
      </Description>
      <Sliders>
        <Components>컴포넌트</Components>
        <Animations>애니메이션</Animations>
      </Sliders>
    </Container>
  );
}
