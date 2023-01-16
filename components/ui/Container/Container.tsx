import * as React from "react";
import { ComponentProps } from "../../../types/Component";

export type ContainerProps = ComponentProps & {};

export default function Container({ children }: ContainerProps) {
  return (
    <div
      className={
        "flex p-4 items-center justify-center gap-2 corner rounded-2xl"
      }
    >
      {children}
    </div>
  );
}
