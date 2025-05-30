import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface RippleProps {
  x: number;
  y: number;
  size: number;
}

const rippleAnimation = keyframes`
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const RippleContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
`;

const Ripple = styled.div<RippleProps>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: 50%;
  background: ${({ theme }) =>
    theme.mode === "dark"
      ? theme.colors.primary[800] // Light mint for dark mode
      : theme.colors.primary[600]}; // Deep forest for light mode
  opacity: 0.2;
  transform-origin: center;
  animation: ${rippleAnimation} 0.8s ease-out forwards;
  will-change: transform, opacity;
`;

const RippleEffect: React.FC = () => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number; size: number }>
  >([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const size = 50; // Size of the ripple
      const x = e.clientX - size / 2;
      const y = e.clientY - size / 2;

      const newRipple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove the ripple after animation completes
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id)
        );
      }, 800); // Match animation duration
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <RippleContainer>
      {ripples.map((ripple) => (
        <Ripple key={ripple.id} x={ripple.x} y={ripple.y} size={ripple.size} />
      ))}
    </RippleContainer>
  );
};

export default RippleEffect;
