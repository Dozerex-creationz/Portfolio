import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import styled from "styled-components";

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  position: relative;
  padding: 0.5rem;
`;

const FooterSection = styled.footer`
  padding: 2rem 0;
  background: ${({ theme }) => theme.colors.gradients.subtle};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: 0.1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: ${({ theme }) => theme.colors.patterns.vines};
    background-repeat: repeat-x;
    opacity: 0.2;
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  transition: color 0.3s ease;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterSection>
      <FooterContent>
        <Logo>DK</Logo>

        <SocialLinks>
          <SocialLink
            href="https://github.com/dhakshinkrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/dhakshinkrishna"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </SocialLink>
          <SocialLink href="mailto:dhakshinkrishna.j@gmail.com">
            <Mail />
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © {new Date().getFullYear()} Dhakshin Krishna J. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
