import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

export function ActiveBreadcrumb (props) {
  return <li className='is-active' key={`${props.name}-breadcrumb`}><a href='#' aria-current='page'>{props.name}</a></li>
}
ActiveBreadcrumb.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

/**
 * Breadcrumb (Gatsby + Bulma)
 * @param {*} props
 */
export function Breadcrumb (props) {
  return <li key={`${props.title}-breadcrumb`}><Link to={props.href}><a>{props.title}</a></Link></li>
}
Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
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
  children: PropTypes.any
}
Breadcrumbs.defaultProps = {
  class: 'has-succeeds-seperator'
}
