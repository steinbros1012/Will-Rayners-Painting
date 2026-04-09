import { forwardRef, type ImgHTMLAttributes } from 'react'
import { cn } from '@/lib/utils';

type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit';
  originWidth?: number;
  originHeight?: number;
  focalPointX?: number;
  focalPointY?: number;
};

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({
    src,
    fittingType = 'fill',
    originWidth,
    originHeight,
    focalPointX,
    focalPointY,
    className,
    style,
    loading = 'lazy',
    decoding = 'async',
    ...props
  }, ref) => {
    if (!src) {
      return <div data-empty-image className={className} />
    }

    const objectPosition =
      typeof focalPointX === 'number' && typeof focalPointY === 'number'
        ? `${focalPointX}% ${focalPointY}%`
        : undefined;

    return (
      <img
        ref={ref}
        src={src}
        loading={loading}
        decoding={decoding}
        className={cn(fittingType === 'fit' ? 'object-contain' : 'object-cover', className)}
        style={{
          objectPosition,
          ...style,
        }}
        {...props}
      />
    )
  }
)
Image.displayName = 'Image'
