import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 50;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: 0.1;
    pointer-events: none;
  }
`;

const NavInner = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
  padding: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.gradients.glow};
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const DesktopNav = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -1rem;
      right: -1rem;
      bottom: -1rem;
      left: -1rem;
      background: ${({ theme }) => theme.colors.patterns.leaves};
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }

    &:hover::before {
      opacity: 0.05;
    }
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: all 0.3s ease;
  position: relative;
  padding: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    &::before {
      transform: scaleX(1);
    }
  }
`;

const MobileMenuButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (min-width: 768px) {
    display: none;
  }
`;

const IconButton = styled.button`
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(55, 65, 81)"};
  &:hover {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "white" : "rgb(17, 24, 39)"};
  }
`;

const MobileNav = styled.div<{ isOpen: boolean }>`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
  transition: all 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "16rem" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(17, 24, 39)" : "white"};
`;

const MobileNavLinks = styled.div`
  padding: 0.5rem 1rem;
  padding-bottom: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const MobileNavLink = styled(NavLink)`
  padding: 0.5rem 0;
  display: block;
`;

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileNavClick = () => {
    setIsOpen(false);
  };

  return (
    <NavContainer>
      <NavInner>
        <NavContent>
          <LogoContainer>
            <Logo>DK</Logo>
          </LogoContainer>

          <DesktopNav>
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <ThemeToggle />
          </DesktopNav>

          <MobileMenuButton>
            <ThemeToggle />
            <IconButton onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </IconButton>
          </MobileMenuButton>
        </NavContent>
      </NavInner>

      <MobileNav isOpen={isOpen}>
        <MobileNavLinks>
          <MobileNavLink href="#home" onClick={handleMobileNavClick}>
            Home
          </MobileNavLink>
          <MobileNavLink href="#about" onClick={handleMobileNavClick}>
            About
          </MobileNavLink>
          <MobileNavLink href="#projects" onClick={handleMobileNavClick}>
            Projects
          </MobileNavLink>
          <MobileNavLink href="#contact" onClick={handleMobileNavClick}>
            Contact
          </MobileNavLink>
        </MobileNavLinks>
      </MobileNav>
    </NavContainer>
  );
};

export default Navigation;
