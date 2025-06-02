import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import styled, { keyframes } from "styled-components";
import { toast } from "@/components/ui/sonner";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2); }
  100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1); }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.gradients.subtle};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  padding-top: 4rem;

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
  width: 100%;
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AvatarSection = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  order: 1;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;

  @media (min-width: 640px) {
    height: 400px;
  }
  @media (min-width: 1024px) {
    height: 600px;
    order: 1;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.glow};
  z-index: -1;
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: 0.05;
    border-radius: inherit;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 280px;
  height: 280px;
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${float} 6s ease-in-out infinite;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};

  @media (min-width: 640px) {
    width: 350px;
    height: 350px;
  }

  &:hover {
    transform: scale(1.02) translateY(-10px);
    animation: ${glow} 2s ease-in-out infinite;

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0.1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: ${({ theme }) => theme.colors.gradients.primary};
    border-radius: inherit;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: 0.05;
    pointer-events: none;
    border-radius: inherit;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const AvatarImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
  z-index: 2;
  border: 4px solid
    ${({ theme }) => (theme.mode === "dark" ? "rgb(31, 41, 55)" : "white")};
`;

const ContentSection = styled.div`
  text-align: left;
  order: 2;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1.5rem;
  transition: colors 0.3s ease;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
  @media (min-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const TitleIntro = styled.div`
  margin-bottom: 0.5rem;
`;

const StyledTypeAnimation = styled(TypeAnimation)`
  color: ${({ theme }) => theme.colors.primary[500]};
  display: block;
  transition: colors 0.3s ease;
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: 2rem;
  line-height: 1.75;
  font-weight: 500;
  transition: colors 0.3s ease;

  @media (min-width: 640px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
`;

const ButtonText = styled.span`
  @media (max-width: 640px) {
    display: none;
  }
`;

const ButtonIcon = styled.span`
  @media (min-width: 641px) {
    margin-left: 0.5rem;
  }
  height: 1.25rem;
  width: 1.25rem;
`;

const PrimaryButton = styled.button`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadows.md};
  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 0.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const SecondaryButton = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: 2px solid ${({ theme }) => theme.colors.border.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;

  @media (max-width: 640px) {
    padding: 0.75rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border-color: ${({ theme }) => theme.colors.border.dark};
  }
`;

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleResumeDownload = () => {
    // Show a loading toast
    const loadingToast = toast.loading("Downloading resume...");

    // Create a temporary link to download the file
    const link = document.createElement("a");
    link.href = "/assets/Web_Dev___Dhakshin_resume.pdf";
    link.download = "Dhakshin_Krishna_Resume.pdf";

    // Add event listener for download completion
    link.onload = () => {
      toast.dismiss(loadingToast);
      toast.success("Resume downloaded successfully!");
    };

    // Add error handling
    link.onerror = () => {
      toast.dismiss(loadingToast);
      toast.error("Failed to download resume. Please try again.");
    };

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HeroSection id="home">
      <Container>
        <Grid>
          <AvatarSection>
            <BackgroundCircle />
            <ImageContainer>
              <AvatarImage
                src="/assets/dozie ghibili.png"
                alt="Profile Avatar"
                loading="eager"
              />
            </ImageContainer>
          </AvatarSection>

          <ContentSection>
            <Title>
              <TitleIntro>Hi, I'm</TitleIntro>
              <StyledTypeAnimation
                sequence={["Dhakshin Krishna J", 5000, "", 500]}
                speed={50}
                repeat={Infinity}
                cursor={true}
              />
            </Title>

            <Description>
              Full Stack Web Developer specializing in enterprise mobility
              solutions and modern web technologies
            </Description>

            <ButtonContainer>
              <PrimaryButton onClick={scrollToProjects}>
                <ButtonText>View My Work</ButtonText>
                <ButtonIcon as={ArrowRight} />
              </PrimaryButton>

              <SecondaryButton
                onClick={handleResumeDownload}
                href="/assets/Web_Dev___Dhakshin_resume.pdf"
                download="Dhakshin_Krishna_Resume.pdf"
              >
                <ButtonIcon as={Download} />
                <ButtonText>Download CV</ButtonText>
              </SecondaryButton>
            </ButtonContainer>
          </ContentSection>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export default Hero;
