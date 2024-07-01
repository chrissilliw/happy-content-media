import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MarginWrapperComponent = ({ children }: Props) => {
  return <div className="mx-10">{children}</div>;
};

export default MarginWrapperComponent;
