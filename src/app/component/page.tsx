"use client";

import styled from "styled-components";

const BG = styled.div`
  width: 100vw;
  height: 200vh;
  background-color: green;
`;

export default function Home() {
  return (
    <BG>
      <div>Home</div>
    </BG>
  );
}
