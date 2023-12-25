import React from "react";

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function layout({ children, modal }: Props) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
