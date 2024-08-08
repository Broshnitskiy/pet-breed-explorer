import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return (
    <div className="container mx-auto px-5 min-w-[320px] sm:w-[480px] md:px-8 md:w-[768px] lg:px-7 lg:w-[992px] xl:w-[1200px] 2xl:w-[1440px]">
      {children}
    </div>
  );
};
