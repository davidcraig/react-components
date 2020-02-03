import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

/**
 * Breadcrumb (Gatsby + Bulma)
 * @param {*} props
 */
export function Breadcrumb (props) {
  if (props.active) {
    return <li className='is-active' key={`${props.name}-breadcrumb`}><a href='#' aria-current='page'>{props.name}</a></li>
  }
  return <li key={`${props.name}-breadcrumb`}><Link to={props.href}><a>{props.name}</a></Link></li>
}

Breadcrumb.propTypes = {
  active: {
    type: PropTypes.boolean,
    required: false
  },
  name: {
    type: PropTypes.string,
    required: true
  },
  href: {
    type: PropTypes.string,
    required: false
  }
}

/**
 * Breadcrumbs (Gatsby + Bulma)
 * @param {*} props
 */
export function Breadcrumbs (props) {
  return <nav className='breadcrumb has-succeeds-separator' aria-label='breadcrumbs'>
    <ul>{props.children}</ul>
  </nav>
}

Breadcrumbs.propTypes = {
  children: {

  }
}

Breadcrumbs.defaultProps = {
  class: 'has-succeeds-seperator'
}
