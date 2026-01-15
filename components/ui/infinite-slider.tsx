import React from 'react'

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
}

export const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 112,
}) => {
  return (
    <div className="overflow-hidden">
      <div 
        className="flex animate-scroll hover:pause"
        style={{
          gap: `${gap}px`,
          animationDuration: `${speed}s`,
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}