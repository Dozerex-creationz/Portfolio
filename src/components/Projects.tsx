import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Github,
  Folder,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
} from "lucide-react";
import styled, { keyframes } from "styled-components";
import { toast } from "@/components/ui/sonner";

const slideLeft = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const slideInLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ProjectSection = styled.section`
  min-height: 100vh;
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
  max-width: 72rem;
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
  margin-bottom: 4rem;
`;

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "white" : "rgb(17, 24, 39)"};
  margin-bottom: 1rem;
  transition: colors 0.3s ease;

  @media (min-width: 640px) {
    font-size: 2.25rem;
  }
`;

const Divider = styled.div`
  width: 5rem;
  height: 0.25rem;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(59, 130, 246)" : "rgb(37, 99, 235)"};
  margin: 0 auto 1.5rem;
  transition: colors 0.3s ease;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(75, 85, 99)"};
  max-width: 42rem;
  margin: 0 auto;
  transition: colors 0.3s ease;
`;

const MobileView = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  position: relative;
`;

const CardContainer = styled.div`
  aspect-ratio: 1;
  max-width: min(90vw, 500px);
  margin: 0 auto;
  position: relative;

  @media (min-width: 768px) {
    max-width: none;
    aspect-ratio: auto;
  }
`;

const Card = styled.div<{ direction: "left" | "right" | null }>`
  position: absolute;
  inset: 0;
  animation: ${({ direction }) => {
      if (direction === "left") return slideLeft;
      if (direction === "right") return slideRight;
      return "none";
    }}
    0.3s ease-out;
`;

const CardContent = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(17, 24, 39)" : "white"};
  border-radius: 0.75rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  height: 100%;
`;

const CardInner = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: 640px) {
    padding: 1rem;
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
`;

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 640px) {
    font-size: 0.875rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.border.medium};
  }
`;

const ProjectImage = styled.img<{ featured?: boolean }>`
  width: 100%;
  height: ${({ featured }) => (featured ? "400px" : "250px")};
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: 640px) {
    height: ${({ featured }) => (featured ? "250px" : "200px")};
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.75rem;

  @media (max-width: 640px) {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex-grow: 1;

  @media (max-width: 640px) {
    font-size: 0.875rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 640px) {
    gap: 0.375rem;
    margin-bottom: 1rem;
  }
`;

const TechTag = styled.span`
  padding: 0.375rem 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 9999px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 0.25rem 0.5rem;
    font-size: 0.675rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.light};

  @media (max-width: 640px) {
    gap: 0.75rem;
  }
`;

const IconContainer = styled.div`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.primary[500]};
  transition: all 0.3s ease;

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

const ProjectLink = styled.a<{ variant?: "primary" | "secondary" }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(156, 163, 175)" : "rgb(156, 163, 175)"};
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: not-allowed;
  opacity: 0.7;

  @media (max-width: 640px) {
    font-size: 0.875rem;
    gap: 0.25rem;
  }

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(156, 163, 175)" : "rgb(156, 163, 175)"};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;

    @media (max-width: 640px) {
      width: 1rem;
      height: 1rem;
    }
  }
`;

const FeaturedBadge = styled.span`
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`;

const NavigationButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ position }) => position}: 0;
  transform: translateY(-50%);
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(17, 24, 39)" : "white"};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(156, 163, 175)" : "rgb(75, 85, 99)"};
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(96, 165, 250)" : "rgb(37, 99, 235)"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

const ProgressIndicator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
`;

const ProgressDot = styled.div<{ active: boolean }>`
  height: 0.25rem;
  width: 2rem;
  border-radius: 9999px;
  background-color: ${({ theme, active }) =>
    active
      ? theme.mode === "dark"
        ? "rgb(59, 130, 246)"
        : "rgb(37, 99, 235)"
      : theme.mode === "dark"
      ? "rgb(75, 85, 99)"
      : "rgb(209, 213, 219)"};
  transition: colors 0.2s ease;
`;

const DesktopGrid = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ViewAllButton = styled.a`
  display: none;
  @media (min-width: 768px) {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    border: 2px solid
      ${({ theme }) =>
        theme.mode === "dark" ? "rgb(59, 130, 246)" : "rgb(37, 99, 235)"};
    color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(96, 165, 250)" : "rgb(37, 99, 235)"};
    font-weight: 600;
    border-radius: 0.5rem;
    transition: all 0.2s ease;
    margin-top: 3rem;

    &:hover {
      background-color: ${({ theme }) =>
        theme.mode === "dark" ? "rgb(59, 130, 246)" : "rgb(37, 99, 235)"};
      color: white;
    }

    svg {
      margin-right: 0.5rem;
      height: 1.25rem;
      width: 1.25rem;
    }
  }
`;

const BackToTopButton = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 50;
  transform: translateY(${({ visible }) => (visible ? "0" : "100px")});
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.md};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.75rem;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &:hover {
    transform: translateY(${({ visible }) => (visible ? "-5px" : "100px")});
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  @media (max-width: 640px) {
    bottom: 1rem;
    right: 1rem;
  }
`;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowBackToTop(heroBottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const projects = [
    {
      title: "BosNest - Enterprise Device Management",
      description:
        "Comprehensive enterprise mobility solution for device management with role-based access control and real-time monitoring capabilities.",
      technologies: [
        "Spring Boot",
        "Android Enterprise",
        "React.js",
        "Redis",
        "Spring-scheduler",
        "JWT",
      ],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Device Finder System",
      description:
        "Advanced device tracking and management system with location services and automated reporting features.",
      technologies: ["React.js", "Spring Boot", "Google Pub/Sub", "Kafka"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "BGSS - Bluebird Global Service System",
      description:
        "Business process management system with modern UI/UX and comprehensive workflow automation.",
      technologies: ["React.js", "Redux", "TanStack Tables"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Voice-Based Hotel Booking",
      description:
        "Innovative voice-controlled hotel booking system using natural language processing and speech recognition.",
      technologies: ["Python", "NLP", "Voice Processing"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "Mezzala - chat app",
      description:
        "Full-featured chat application with real-time messaging, file sharing, and user authentication.",
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB"],
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      title: "NLP Analysis System",
      description:
        "Comprehensive natural language processing system for text analysis and sentiment detection.",
      technologies: ["Python", "Machine Learning", "NLP", "Flask"],
      liveDemo: "#",
      sourceCode: "#",
    },
  ];

  const nextProject = () => {
    setDirection("left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % (projects.length + 1));
      setDirection(null);
    }, 300);
  };

  const prevProject = () => {
    setDirection("right");
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + (projects.length + 1)) % (projects.length + 1)
      );
      setDirection(null);
    }, 300);
  };

  const handleProjectLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toast("Sorry, work in progress...", {
      description: "This project will be available soon!",
    });
  };

  return (
    <ProjectSection id="projects">
      <Container>
        <Header>
          <Title>My Projects</Title>
          <Divider />
          <Description>
            Here are some of the projects I've worked on, ranging from
            enterprise solutions to innovative applications using cutting-edge
            technologies.
          </Description>
        </Header>

        <MobileView>
          <CardContainer>
            {currentIndex < projects.length && (
              <Card direction={direction}>
                <CardContent>
                  <CardInner>
                    <CardHeader>
                      <IconContainer>
                        <Folder />
                      </IconContainer>
                    </CardHeader>

                    <ProjectTitle>{projects[currentIndex].title}</ProjectTitle>
                    <ProjectDescription>
                      {projects[currentIndex].description}
                    </ProjectDescription>

                    <TechStack>
                      {projects[currentIndex].technologies.map(
                        (tech, techIndex) => (
                          <TechTag key={techIndex}>{tech}</TechTag>
                        )
                      )}
                    </TechStack>

                    <LinkContainer>
                      <ProjectLink
                        href="#"
                        variant="primary"
                        onClick={handleProjectLink}
                      >
                        <ExternalLink />
                        Demo
                      </ProjectLink>
                      <ProjectLink
                        href="#"
                        variant="secondary"
                        onClick={handleProjectLink}
                      >
                        <Github />
                        Code
                      </ProjectLink>
                    </LinkContainer>
                  </CardInner>
                </CardContent>
              </Card>
            )}

            {currentIndex === projects.length && (
              <Card direction={direction}>
                <CardContent>
                  <CardInner>
                    <div style={{ textAlign: "center" }}>
                      <Github
                        style={{
                          height: "3rem",
                          width: "3rem",
                          marginBottom: "1rem",
                          color: "rgb(59, 130, 246)",
                        }}
                      />
                      <ProjectTitle>Want to see more?</ProjectTitle>
                      <ViewAllButton href="#">View All Projects</ViewAllButton>
                    </div>
                  </CardInner>
                </CardContent>
              </Card>
            )}
          </CardContainer>

          <NavigationButton
            position="left"
            onClick={prevProject}
            disabled={currentIndex === 0}
          >
            <ChevronLeft />
          </NavigationButton>
          <NavigationButton
            position="right"
            onClick={nextProject}
            disabled={currentIndex === projects.length}
          >
            <ChevronRight />
          </NavigationButton>

          <ProgressIndicator>
            {[...Array(projects.length + 1)].map((_, index) => (
              <ProgressDot key={index} active={index === currentIndex} />
            ))}
          </ProgressIndicator>
        </MobileView>

        <DesktopGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <CardInner>
                <CardHeader>
                  <IconContainer>
                    <Folder />
                  </IconContainer>
                </CardHeader>

                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <TechStack>
                  {project.technologies.map((tech, techIndex) => (
                    <TechTag key={techIndex}>{tech}</TechTag>
                  ))}
                </TechStack>

                <ProjectLinks>
                  <ProjectLink
                    href="#"
                    variant="primary"
                    onClick={handleProjectLink}
                  >
                    <ExternalLink />
                    Demo
                  </ProjectLink>
                  <ProjectLink
                    href="#"
                    variant="secondary"
                    onClick={handleProjectLink}
                  >
                    <Github />
                    Code
                  </ProjectLink>
                </ProjectLinks>
              </CardInner>
            </ProjectCard>
          ))}
        </DesktopGrid>

        <div style={{ textAlign: "center" }}>
          <ViewAllButton
            href="https://github.com/Dozerex-creationz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            View All Projects on GitHub
          </ViewAllButton>
        </div>
      </Container>

      <BackToTopButton
        onClick={scrollToTop}
        visible={showBackToTop}
        aria-label="Back to top"
      >
        <ArrowUp />
      </BackToTopButton>
    </ProjectSection>
  );
};

export default Projects;
