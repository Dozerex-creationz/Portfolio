import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import styled from "styled-components";

const ToggleButton = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "rgb(31, 41, 55)" : "rgb(229, 231, 235)"};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.mode === "dark" ? "rgb(55, 65, 81)" : "rgb(209, 213, 219)"};
  }
`;

const IconContainer = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;

const SunIcon = styled(Sun)<{ $isVisible: boolean }>`
  position: absolute;
  inset: 0;
  height: 1.5rem;
  width: 1.5rem;
  color: rgb(234, 179, 8);
  transform: rotate(${({ $isVisible }) => ($isVisible ? "0deg" : "180deg")});
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: all 0.5s ease;
`;

const MoonIcon = styled(Moon)<{ $isVisible: boolean }>`
  position: absolute;
  inset: 0;
  height: 1.5rem;
  width: 1.5rem;
  color: rgb(59, 130, 246);
  transform: rotate(${({ $isVisible }) => ($isVisible ? "0deg" : "-180deg")});
  opacity: ${({ $isVisible }) => ($isVisible ? "1" : "0")};
  transition: all 0.5s ease;
`;

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
      <IconContainer>
        <SunIcon $isVisible={theme === "light"} />
        <MoonIcon $isVisible={theme === "dark"} />
      </IconContainer>
    </ToggleButton>
  );
};

export default ThemeToggle;
