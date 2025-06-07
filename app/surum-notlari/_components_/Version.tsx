import React from "react";

interface VersionProps {
  version: string;
  date: string;
  changes: string[];
}
export const Version = ({ version, date, changes }: VersionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="flex font-bold">
        <strong className=" ">{version}</strong>
        <span className="w-8"></span>

        <pre className="inline-block">{date}</pre>
      </h2>
      <ul className="list-inside list-disc">
        {changes.map((change) => (
          <li key={change}>{change}</li>
        ))}
      </ul>
    </div>
  );
};
