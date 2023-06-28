import styled from "styled-components";

import { usePathname, useRouter } from "next/navigation";
import {
  motion,
  useAnimation,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import NavLink from "./components/NavLink";
import { life_savers } from "@/app/layout";

const Nav = styled(motion.nav)`
  position: fixed;

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  top: 0;
  font-size: 14px;
  padding: 20px 30px;
  color: white;
  background-color: black;
  box-shadow: 0 0 2px 1px;
`;

const Col = styled.div`
  display: flex;
  width: 100%;
  padding-right: 30px;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 175px;
  height: 25px;
  cursor: pointer;
  fill: ${(props) => props.theme.major.blue.basic};
  font-family: var(--font--frank-ruhl-libre);
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
    backgroundColor: "rgb(0, 0, 0, 0.5)",
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
    if (latest > 60) {
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
          width="1040"
          height="360"
          viewBox="0 0 2120 324"
        >
          <motion.text
            y="260"
            fontFamily={life_savers.style.fontFamily}
            fontWeight="900"
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
