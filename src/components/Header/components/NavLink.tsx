import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface INavLink {
  href: string;
  name: string;
  active?: boolean;
}
const A = styled.a`
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  text-decoration: none;
  font-size: 13pt;
  font-weight: 600;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
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
  background-color: ${(props) => props.theme.white.darker};
`;

const NavLink: React.FC<INavLink> = ({ href, name, active }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <A>
        {name} {active && <Circle layoutId="circle" />}
      </A>
    </Link>
  );
};

export default NavLink;
