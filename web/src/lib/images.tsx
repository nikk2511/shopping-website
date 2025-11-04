type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  srcSetWebp?: string;
};
export function MediaImage({ src, alt, className, srcSetWebp, ...rest }: ImgProps) {
  return (
    <picture>
      {srcSetWebp && <source srcSet={srcSetWebp} type="image/webp" />}
      <img loading="lazy" decoding="async" src={src} alt={alt} className={className} {...rest} />
    </picture>
  );
}
