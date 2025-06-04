import Link from 'next/link'
import React from 'react'


interface Props {
  href: string;
}
export const BaseCard = ({ href }: Props) => {
  return (
    <Link href={href}>
      <div>BaseCard</div>
    </Link>
  );
};
