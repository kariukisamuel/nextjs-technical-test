import React from "react";
import { ReactNode, forwardRef } from "react";

type AnchorSectionProps = {
  id: string;
  title?: string;
  children: ReactNode;
};

const AnchorSection = forwardRef<HTMLDivElement, AnchorSectionProps>(({ id, title, children }, ref) => {
    return (
      <section id={id} className="w-full pt-10" ref={ref}>
        <div className="xs:w-[94%] lg:w-[70%] mx-auto">
          <div>
            <h2 className="text-center text-gray-700 text-2xl font-montserrat font-bold">
              {title}
            </h2>
          </div>
          {children}
        </div>
      </section>
    );
  },
);

// Add displayName for debugging purposes
AnchorSection.displayName = "AnchorSection";
export default AnchorSection;
