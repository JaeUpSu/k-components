import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import NavLink from "./components/NavLink";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 20px;
  padding-left: 30px;
  color: white;
  background-color: black;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 175px;
  height: 25px;
  cursor: pointer;
  fill: ${(props) => props.theme.red};
  path {
    stroke-width: 6px;
    stroke: white;
  }
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
`;
const Item = styled.li`
  margin-right: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  height: 30px;
`;

const navVariants = {
  top: {
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  scroll: {
    backgroundColor: "rgb(0, 0, 0)",
  },
};

const logoVariants = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 80) {
      navAnimation.start("scroll");
    } else {
      navAnimation.start("top");
    }
  });

  const onHome = () => {
    router.push("/");
  };

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Logo
          variants={logoVariants}
          whileHover="active"
          initial="normal"
          animate="normal"
          xmlns="http://www.w3.org/2000/svg"
          width="1420"
          height="360"
          viewBox="0 0 2220 324"
        >
          <motion.text
            y="260"
            fontWeight="bold"
            fontSize="210pt"
            onClick={onHome}
          >
            K - Components
          </motion.text>
        </Logo>
        <Items>
          <Item>
            <NavLink href="/" name="Home" active={pathname === "/"} />
          </Item>
          <Item>
            <NavLink
              href="/component"
              name="Component"
              active={pathname === "/component"}
            />
          </Item>
          <Item>
            <NavLink
              href="/animation"
              name="Animation"
              active={pathname === "/animation"}
            />
          </Item>
        </Items>
      </Col>
    </Nav>
  );
}
export default Header;
