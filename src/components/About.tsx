import React, { useState, useEffect } from "react";
import {
  Code2,
  Server,
  Globe,
  Database,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import styled from "styled-components";

const About: React.FC = () => {
  const [isSkillsOpen, setIsSkillsOpen] = useState(() => {
    // Check if window is defined (client-side) and screen width is >= 768px
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return false;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSkillsOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSkills = () => {
    setIsSkillsOpen(!isSkillsOpen);
  };

  return (
    <AboutSection id="about">
      <Container>
        <Header>
          <Title>About Me</Title>
          <Subtitle>
            I'm a passionate full-stack developer with a focus on creating
            efficient and scalable web applications.
          </Subtitle>
        </Header>

        <SkillsContainer>
          <SkillsAccordion>
            <AccordionHeader onClick={toggleSkills}>
              <span>Technical Skills</span>
              {isSkillsOpen ? <ChevronUp /> : <ChevronDown />}
            </AccordionHeader>
            <AccordionContent isOpen={isSkillsOpen}>
              <SkillsList>
                <SkillCard>
                  <SkillIcon>
                    <Code2 />
                  </SkillIcon>
                  <SkillContent>
                    <SkillName>Frontend Development</SkillName>
                    <SkillDescription>
                      React, TypeScript, Javascript, Tailwind
                      CSS, 
                    </SkillDescription>
                  </SkillContent>
                </SkillCard>

                <SkillCard>
                  <SkillIcon>
                    <Server />
                  </SkillIcon>
                  <SkillContent>
                    <SkillName>Backend Development</SkillName>
                    <SkillDescription>
                      Node.js, Express, Django, Flask, Spring Boot
                    </SkillDescription>
                  </SkillContent>
                </SkillCard>

                <SkillCard>
                  <SkillIcon>
                    <Database />
                  </SkillIcon>
                  <SkillContent>
                    <SkillName>Database Management</SkillName>
                    <SkillDescription>
                      MongoDB, Redis, MySQL
                    </SkillDescription>
                  </SkillContent>
                </SkillCard>

                <SkillCard>
                  <SkillIcon>
                    <Globe />
                  </SkillIcon>
                  <SkillContent>
                    <SkillName>DevOps & Cloud</SkillName>
                    <SkillDescription>
                      Docker, GCP, CI/CD, Git, Jenkins, 
                    </SkillDescription>
                  </SkillContent>
                </SkillCard>
              </SkillsList>
            </AccordionContent>
          </SkillsAccordion>
        </SkillsContainer>
      </Container>
    </AboutSection>
  );
};

export default About;

const AboutSection = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.gradients.subtle};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: ${({ theme }) => (theme.mode === "dark" ? "0.1" : "0.2")};
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: ${({ theme }) => theme.colors.patterns.vines};
    background-repeat: repeat-x;
    opacity: ${({ theme }) => (theme.mode === "dark" ? "0.4" : "0.8")};
    transform: scaleY(-1);
    pointer-events: none;
  }
`;

const Container = styled.div`
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

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1rem;

  @media (max-width: 640px) {
    font-size: 1.875rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.75;

  @media (max-width: 640px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const SkillsContainer = styled.div`
  margin-top: 2rem;
`;

const SkillsAccordion = styled.div`
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const AccordionHeader = styled.button`
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[500]};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
`;

const AccordionContent = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
  overflow-y: auto;
  transition: max-height 0.3s ease;
  padding: ${({ isOpen }) => (isOpen ? "1rem 1.5rem" : "0 1.5rem")};
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) =>
    `${theme.colors.border.medium} transparent`};

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.border.medium};
    border-radius: 3px;
  }
`;

const SkillsList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: 640px) {
    padding: 0.75rem;
    gap: 0.75rem;
  }
`;

const SkillIcon = styled.div`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary[500]};

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  @media (max-width: 640px) {
    padding: 0.5rem;
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const SkillContent = styled.div`
  flex: 1;
`;

const SkillName = styled.h4`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.25rem;

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;
  line-height: 1.5;

  @media (max-width: 640px) {
    font-size: 0.75rem;
  }
`;
