import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { capriola, life_savers } from "@/app/layout";

interface INavLink {
  href: string;
  name: string;
  active?: boolean;
}
const A = styled.a`
  color: ${(props) => props.theme.major.blue.basic};
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  font-size: 13pt;
  font-weight: 700;
  &:hover {
    color: silver;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: silver;
`;

const NavLink: React.FC<INavLink> = ({ href, name, active }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <A>
        <text className={life_savers.className}>{name}</text>{" "}
        {active && <Circle layoutId="circle" />}
      </A>
    </Link>
  );
};

export default NavLink;
