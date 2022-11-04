import React from 'react'
import links from '../Data/LinkData'
import LinkButtons from '../utils/Link'
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <main>
        <div className="links">
            {links.map(LinkButtons)}
            <Link to='/contact'>Contact Me</Link>
        </div>
    </main>
  )
}

export default Links;