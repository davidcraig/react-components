import React from 'react'
import PropTypes from 'prop-types'

export class Card extends React.Component {
  getLink () {
    if (typeof this.props.url !== 'undefined') {
      return this.props.url
    }
  }

  getContentFragment (fragment) {
    const image = this.renderCardImage()
    const video = this.renderCardYoutubeVideo()
    const header = this.renderCardHeader()
    const content = this.cardContent()
    const link = this.getLink()

    const fragments = {
      card: (
        <div className='card'>
          {image}
          {video}
          {header}
          {content}
        </div>
      ),
      cardHeader: <div className='card-header'>
        <div className='card-header-title'>
          {this.props.title}
        </div>
      </div>
    }
    fragments.linkCard = ''

    if (typeof this.props.url !== 'undefined') {
      fragments.linkCard = <a href={link}>{fragments.card}</a>
    }

    return fragments[fragment]
  }

  /**
   * Render the Card component.
   * @returns {*}
   */
  render () {
    if (typeof this.props.url !== 'undefined') {
      return this.getContentFragment('linkCard')
    }

    return this.getContentFragment('card')
  }

  renderCardHeader () {
    let title = ''
    let header
    if (typeof this.props.title !== 'undefined') {
      title = this.props.title
    }

    let date = ''
    if (typeof this.props.date !== 'undefined') {
      date = this.props.date
    }

    const meta = (
      <>
        <i />{date}
      </>
    )

    if (typeof this.props.title !== 'undefined') {
      header = (
        <>
          <div className='card-meta'>
            {meta}
          </div>
          <div className='card-header'>
            <div className='card-header-title'>
              {title}
            </div>
          </div>
        </>
      )
    }
    return header
  }

  cardContent () {
    if (this.props.children) {
      const content = this.props.children
      return (
        <div className='card-content'>
          {content}
        </div>
      )
    }
  }

  renderCardImage () {
    if (typeof this.props.image !== 'undefined') {
      const title = this.props.title || ''
      return <img src={this.props.image} alt={title} />
    }
    return ''
  }

  renderCardYoutubeVideo () {
    const height = this.props.videoHeight || '175px'

    if (typeof this.props.ytVideo !== 'undefined') {
      const video = 'https://www.youtube.com/embed/' + this.props.ytVideo
      return (
        <iframe width='100%' height={height} src={video} frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen />
      )
    }
    return ''
  }
}
Card.propTypes = {
  children: PropTypes.any,
  /**
   * Date (Meta Tag)
   */
  date: PropTypes.string,
  /**
   * Image.
   * URL of image if image card.
   */
  image: PropTypes.string,
  /**
   * Card Title
   */
  title: PropTypes.string,
  /**
   * URL
   * Clicking on the card will go to this location.
   */
  url: PropTypes.string,
  /**
   * Video Height
   * Used if rendering a video.
   * Format: '180px'.
   */
  videoHeight: PropTypes.string,
  /**
   * YouTube Video
   * ID of youtube video
   */
  ytVideo: PropTypes.string
}

export default Card
