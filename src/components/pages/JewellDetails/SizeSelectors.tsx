import React from "react";

function SizeSelectors({ sizes }: { sizes: number[] }) {
  return (
    <div className="mt-5">
      <h1>Size (in):</h1>
      <div className="flex justify-between mb-4">
        {sizes.map((size, index) => (
          <button className="rounded-md border px-8 text-sm py-1" key={index}>{size}</button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelectors;
