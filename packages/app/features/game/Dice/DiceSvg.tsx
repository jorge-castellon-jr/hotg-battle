// src/features/game/battle/components/DiceSvg.tsx
import React from 'react';
import { Circle, Group, RoundedRect, Shadow } from '@shopify/react-native-skia';

interface DiceSvgProps {
  value: number;
  size: number;
  x: number;
  y: number;
}

export const DiceSvg: React.FC<DiceSvgProps> = ({ value, size, x, y }) => {
  const dotSize = size * 0.15;
  const cornerRadius = size * 0.2;

  const dotPositions = {
    1: [[0.5, 0.5]],
    2: [[0.25, 0.25], [0.75, 0.75]],
    3: [[0.25, 0.25], [0.5, 0.5], [0.75, 0.75]],
    4: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]],
    5: [[0.25, 0.25], [0.75, 0.25], [0.5, 0.5], [0.25, 0.75], [0.75, 0.75]],
    6: [[0.25, 0.25], [0.75, 0.25], [0.25, 0.5], [0.75, 0.5], [0.25, 0.75], [0.75, 0.75]]
  };

  const positions = dotPositions[value as keyof typeof dotPositions] || dotPositions[1];

  return (
    <Group>
      {/* Shadow layer */}
      <Group>
        <Shadow
          dx={2}
          dy={2}
          blur={5}
          color="rgba(0, 0, 0, 0.3)"
        />
        <RoundedRect
          x={x}
          y={y}
          width={size}
          height={size}
          r={cornerRadius}
          color="white"
        />
      </Group>

      {/* Inner shadow effect */}
      <Group>
        <Shadow
          dx={-1}
          dy={-1}
          blur={3}
          color="rgba(255, 255, 255, 0.5)"
        />
        <RoundedRect
          x={x + 2}
          y={y + 2}
          width={size - 4}
          height={size - 4}
          r={cornerRadius - 2}
          color="white"
        />
      </Group>

      {/* Dots with shadow effect */}
      {positions.map((pos, index) => (
        <Group key={index}>
          <Shadow
            dx={1}
            dy={1}
            blur={1}
            color="rgba(0, 0, 0, 0.2)"
          />
          <Circle
            cx={x + size * pos[0]}
            cy={y + size * pos[1]}
            r={dotSize / 2}
            color="black"
          />
        </Group>
      ))}
    </Group>
  );
};
