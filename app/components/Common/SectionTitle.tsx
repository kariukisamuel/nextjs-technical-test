import React from "react";
type title = {
  title: string;
};
const SectionTitle = ({ title }: title) => {
  return (
    <div>
      <h2 className="text-center text-gray-700 text-2xl font-montserrat font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
