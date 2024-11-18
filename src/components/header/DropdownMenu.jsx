import React from 'react';

export const DropdownMenu = ({ title, items, isHovered, onHover, onLeave }) => {
  return (
    <div 
      className="dropdown"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <button
        className="btn btn-danger dropdown-toggle"
        type="button"
        aria-expanded={isHovered}
      >
        {title}
      </button>
      <ul className={`dropdown-menu ${isHovered ? "show" : ""}`}>
        {items.map((item, index) => (
          <li key={index}>
            <a className="dropdown-item" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};