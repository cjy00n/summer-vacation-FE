import React, { useState, useRef, ReactNode, MouseEvent } from "react";

interface DraggableScrollContainerProps {
  children: ReactNode;
}

const DraggableScrollContainer: React.FC<DraggableScrollContainerProps> = ({
  children,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startDragging = (e: MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const onDrag = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // 스크롤 속도 조절을 위한 계수
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={startDragging}
      onMouseLeave={stopDragging}
      onMouseUp={stopDragging}
      onMouseMove={onDrag}
      className="hide-scrollbar flex flex-row gap-2 overflow-x-auto whitespace-nowrap"
    >
      {children}
    </div>
  );
};

export default DraggableScrollContainer;
