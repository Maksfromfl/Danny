import Image from 'next/image'

export default function OptimizedImage({
  src,
  alt,
  priority = false,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw',
  fill = true,
  width,
  height
}) {
  if (!src) return null

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt || ''}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
        quality={82}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt || ''}
      width={width || 800}
      height={height || 800}
      priority={priority}
      sizes={sizes}
      className={className}
      quality={82}
    />
  )
}
