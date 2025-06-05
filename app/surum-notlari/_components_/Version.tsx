import React from 'react'

interface VersionProps {
  version: string;
  date: string;
  changes: string[];
}
export const Version = ({ version, date, changes }: VersionProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{version} - {date}</h2>
      <ul className="list-disc list-inside" >
        {changes.map((change) => (
          <li key={change}>{change}</li>
        ))}
      </ul>
    </div>
  );
};
