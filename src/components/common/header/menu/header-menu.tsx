import Link from 'next/link';
import React from 'react';

export interface HeaderMenuProps {
  items: HeaderMenuItem[];
}

export interface HeaderMenuItem {
  title: string;
  link: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  items
}) => {
  return (
    <ul className='flex gap-12 items-center'>
      {items.map((item, index) => (
        <li key={index}><Link href={item.link}>{item.title}</Link></li>
      ))}
    </ul>
  );
};

export default HeaderMenu;