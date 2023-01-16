import { ImageProps } from "next/image";
import { ReactNode, ForwardedRef, CSSProperties } from "react";

type TypographyProps<T> = {
  children?: ReactNode;
  className?: string;
  id?: string;
  small?: boolean;
  large?: boolean;
  style?: Partial<CSSProperties>;
  ref?: ForwardedRef<T>;
};

type ComponentProps<T> = {
  children?: ReactNode;
  className?: string;
  style?: Partial<CSSProperties>;
  ref?: ForwardedRef<T>;
  forceMobileStyle?: boolean;
  dataTags?: { [k: string]: any };
};

type CardProps = ComponentProps<HTMLDivElement> & {
  caption?: string;
  showFavorites?: boolean;
  showLozenge?: string | boolean;
  /** True if the Card should not allow direct purchases, e.g Base Frames, Gift Cards */
  linkOnly?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  xlarge?: boolean;
  hoverable?: boolean;
  withPointer?: boolean;
  backgroundColor?: string;
  horizontal?: boolean;
  loading?: boolean;
  onMouseEnter?: any;
};

type CardImageProps = CardProps &
  Partial<ImageProps> & {
    contain?: boolean;
    src: string;
    title: string;
    href?: string;
    ref?: ForwardedRef<any>;
    horizontal?: boolean;
    padded?: boolean;
  };

type CardTextProps = CardProps & {
  paragraph?: boolean;
  label?: boolean;
  subheader?: boolean;
  caption?: boolean;
};

type LinkProps<T> = TypographyProps<T> & {
  href: string;
};

export type {
  CardImageProps,
  CardProps,
  CardTextProps,
  ComponentProps,
  LinkProps,
  TypographyProps,
};
