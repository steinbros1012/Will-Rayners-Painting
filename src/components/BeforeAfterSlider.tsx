import { useState, useRef } from 'react';
import { Image } from '@/components/ui/image';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="bg-white rounded-lg overflow-hidden">
        {/* Before/After Slider */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[4/3] cursor-col-resize overflow-hidden bg-gray-200"
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <Image
              src={afterImage}
              alt={`${title} - After`}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Before Image (Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <Image
              src={beforeImage}
              alt={`${title} - Before`}
              width={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-3 shadow-lg">
              <div className="flex gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.5 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM8.5 15a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M11.5 3a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM11.5 15a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-paragraph">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm font-paragraph">
            After
          </div>
        </div>

        {/* Project Details */}
        <div className="p-8 lg:p-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="font-paragraph text-base lg:text-lg text-secondary leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
