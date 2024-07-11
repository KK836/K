import {
  FunctionComponent,
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from "react";
import type { WidthHeight } from "./WidthHeight";

export type ReactDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type DivProps = ReactDivProps & PropsWithChildren<WidthHeight>;

//prettier-ignore

export const Div: FunctionComponent<DivProps> = ({
  width, height, style: _style, ...props
}) => {
  const style = {..._style, width, height}
  return <div {...props} style={style}></div>
}
