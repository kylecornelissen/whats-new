import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <aside>
      <ul>
        <li key="local"><a className="category-link" onClick={() => props.changeCategory('local')}>Local News</a></li>
        <li key="technology"><a className="category-link" onClick={() => props.changeCategory('technology')}>Technology</a></li>
        <li key="entertainment"><a className="category-link" onClick={() => props.changeCategory('entertainment')}>Entertainment</a></li>
        <li key="science"><a className="category-link" onClick={() => props.changeCategory('science')}>Science</a></li>
        <li key="health"><a className="category-link" onClick={() => props.changeCategory('health')}>Health</a></li>
      </ul>
    </aside>
  )
}

export default Menu;
