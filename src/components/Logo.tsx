import React from 'react';

export const Logo = ({ style, className, color = 'currentColor' }: { style?: React.CSSProperties, className?: string, color?: string }) => (
  <svg 
    viewBox="0 0 200 140" 
    style={{ height: '60px', width: 'auto', ...style }} 
    className={className}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Dot */}
    <circle cx="100" cy="15" r="9" />
    
    {/* The M shape */}
    <path 
      d="M 30,80 
         L 30,30 
         C 30,25 35,22 40,28
         L 100,85
         L 160,28
         C 165,22 170,25 170,30
         L 170,80" 
      fill="none" 
      stroke={color} 
      strokeWidth="7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* The bottom line connecting the inner bottom of M */}
    <line x1="60" y1="85" x2="140" y2="85" stroke={color} strokeWidth="8" strokeLinecap="round" />

    {/* MONA text */}
    <text x="100" y="115" fill={color} textAnchor="middle" fontSize="26" fontWeight="300" letterSpacing="14" fontFamily="'Inter', sans-serif">M O N A</text>
    
    {/* Separator line */}
    <line x1="15" y1="122" x2="185" y2="122" stroke={color} strokeWidth="1" />
    
    {/* KERATINA text */}
    <text x="100" y="138" fill={color} textAnchor="middle" fontSize="16" fontWeight="400" letterSpacing="10" fontFamily="'Inter', sans-serif">KERATINA</text>
  </svg>
);
