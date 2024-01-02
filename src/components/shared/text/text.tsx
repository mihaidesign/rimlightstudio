import { forwardRef, HTMLAttributes, useRef } from "react";
import { mergeRefs, useObjectRef } from '@react-aria/utils';
import { twMerge } from "tailwind-merge";
import { VariantProps } from "class-variance-authority";
import { textStyles } from "./text.styles";

export type TextProps = VariantProps<typeof textStyles> &
  HTMLAttributes<HTMLElement> & {
    elementType?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "small"
    | "p"
    | "li"
    | "label"
    | "div"
    | "a"
    | "button"
    | "strong"
    | "em";
  };

export const Text = forwardRef<HTMLElement, TextProps>(function Text(
  { variant, color, className, ...props },
  forwardedRef,
) {
  const { elementType = "span", ...domProps } = props;
  const localRef = useRef<HTMLElement>(null);
  const ref = useObjectRef(mergeRefs(localRef, forwardedRef));
  const ElementType = getElementTypeByVariant(elementType, variant);

  return (
    <ElementType
      // @ts-ignore: The ref will be fine like this.
      ref={ref}
      {...domProps}
      className={twMerge(textStyles({ variant, color, className }))}
    />
  );
});

const getElementTypeByVariant = (
  elementType?: TextProps["elementType"],
  variant?: VariantProps<typeof textStyles>["variant"],
) => {
  if (elementType) return elementType;

  switch (variant) {
    case "heading-1":
      return "h1";
    case "heading-2":
      return "h2";
    case "heading-3":
      return "h3";
    case "heading-4":
      return "h4";
    case "heading-5":
      return "h5";
    case "heading-6":
      return "h6";
    case "body":
      return "span";
    default:
      return "span";
  }
};
