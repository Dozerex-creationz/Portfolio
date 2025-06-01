import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
} from "lucide-react";
import styled from "styled-components";

const IconBox = styled.div`
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  margin-right: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.primary[500]};
    transition: transform 0.3s ease;
  }
`;

const ContactSection = styled.section`
  padding: 3rem 0;
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
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: ${({ theme }) => theme.colors.patterns.vines};
    background-repeat: repeat-x;
    opacity: 0.2;
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
  margin-bottom: 2.5rem;
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
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(75, 85, 99)"};
  max-width: 42rem;
  margin: 0 auto;
  transition: colors 0.3s ease;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "white" : "rgb(17, 24, 39)"};
  margin-bottom: 1.5rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.h4`
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "white" : "rgb(17, 24, 39)"};
`;

const ContactLink = styled.a`
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(75, 85, 99)"};
  transition: colors 0.2s ease;

  &:hover {
    color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(96, 165, 250)" : "rgb(37, 99, 235)"};
  }
`;

const ContactText = styled.p`
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(75, 85, 99)"};
`;

const SocialSection = styled.div`
  margin-top: 2rem;
`;

const SocialTitle = styled.h4`
  font-weight: 600;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "white" : "rgb(17, 24, 39)"};
  margin-bottom: 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
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
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  flex: 1;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(209, 213, 219)" : "rgb(55, 65, 81)"};
  margin-bottom: 0.5rem;
  transition: colors 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.border.medium};
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.inverse};
  font-weight: 600;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    background: ${({ theme }) => theme.colors.primary[600]};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }
`;

const SuccessMessage = styled.div`
  color: rgb(34, 197, 94);
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

const ErrorMessage = styled.div`
  color: rgb(239, 68, 68);
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
`;

const ContactCard = styled.div`
  background: ${({ theme }) => theme.colors.gradients.glass};
  backdrop-filter: ${({ theme }) => theme.blur.sm};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border.light};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.patterns.leaves};
    opacity: 0.05;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: ${({ theme }) => theme.colors.patterns.vines};
    background-repeat: repeat-x;
    opacity: 0.1;
  }
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/dhakshinkrishna.j@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact from ${formData.name}`,
          }),
        }
      );

      const data = await response.json();

      if (data.success === "true") {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <ContactSection id="contact">
      <Container>
        <Header>
          <Title>Get In Touch</Title>
          <Divider />
          <Description>
            I'm always open to discussing new opportunities, innovative
            projects, or just having a conversation about technology and
            development.
          </Description>
        </Header>

        <Grid>
          <ContactInfo>
            <SectionTitle>Let's Connect</SectionTitle>

            <ContactList>
              <ContactItem>
                <IconBox>
                  <Mail />
                </IconBox>
                <ContactDetails>
                  <ContactLabel>Email</ContactLabel>
                  <ContactLink href="mailto:dhakshinkrishna.j@gmail.com">
                    dhakshinkrishna.j@gmail.com
                  </ContactLink>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <IconBox>
                  <Phone />
                </IconBox>
                <ContactDetails>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactLink href="tel:+919994934696">
                    +91 99949 34696
                  </ContactLink>
                </ContactDetails>
              </ContactItem>

              <ContactItem>
                <IconBox>
                  <MapPin />
                </IconBox>
                <ContactDetails>
                  <ContactLabel>Location</ContactLabel>
                  <ContactText>Tirupur, Tamil Nadu, India</ContactText>
                </ContactDetails>
              </ContactItem>
            </ContactList>

            <SocialSection>
              <SocialTitle>Follow Me</SocialTitle>
              <SocialLinks>
                <SocialLink
                  href="https://www.linkedin.com/in/dhakshin-krishna-j-1210301b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </SocialLink>
                <SocialLink
                  href="https://github.com/Dozerex-creationz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </SocialLink>
                <SocialLink
                  href="https://www.instagram.com/dozerex/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram />
                </SocialLink>
                <SocialLink
                  href="https://x.com/DozerexReignzz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter />
                </SocialLink>
              </SocialLinks>
            </SocialSection>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <InputRow>
              <FormGroup>
                <Label htmlFor="name">Your Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  disabled={status === "loading"}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  disabled={status === "loading"}
                />
              </FormGroup>
            </InputRow>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project or just say hello!"
                disabled={status === "loading"}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send Message"}
            </SubmitButton>

            {status === "success" && (
              <SuccessMessage>
                Thank you for your message! I'll get back to you soon.
              </SuccessMessage>
            )}

            {status === "error" && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </ContactForm>
        </Grid>
      </Container>
    </ContactSection>
  );
};

export default Contact;
