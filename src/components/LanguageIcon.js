import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

import Czech from 'language-icons/icons/cs.svg'
import Dutch from 'language-icons/icons/nl.svg'
import French from 'language-icons/icons/fr.svg'
import German from 'language-icons/icons/de.svg'
import Hungarian from 'language-icons/icons/hu.svg'
import Italian from 'language-icons/icons/it.svg'
import Japanese from 'language-icons/icons/ja.svg'
import Polish from 'language-icons/icons/pl.svg'
import Romanian from 'language-icons/icons/ro.svg'
import Russian from 'language-icons/icons/ru.svg'
import Spanish from 'language-icons/icons/es.svg'

class LanguageIcon extends PureComponent {
  render() {
    // explicitly do not render English
    if (this.props.language === 'English') {
      return null
    }
    let Icon = undefined
    switch (this.props.language) {
      case 'Czech': Icon = Czech; break
      case 'Dutch': Icon = Dutch; break
      case 'French': Icon = French; break
      case 'German': Icon = German; break
      case 'Hungarian': Icon = Hungarian; break
      case 'Italian': Icon = Italian; break
      case 'Japanese': Icon = Japanese; break
      case 'Polish': Icon = Polish; break
      case 'Romanian': Icon = Romanian; break
      case 'Russian': Icon = Russian; break
      case 'Spanish': Icon = Spanish; break
      default: Icon = undefined
    }
    if (Icon !== undefined) {
      return <img
        className='language'
        alt={this.props.language}
        src={Icon}
        title={this.props.language}
      />
    }
    console.log('Unknown language: ' + this.props.language)
    return ' ?'+this.props.language
  }
}

LanguageIcon.propTypes = {
  language: PropTypes.string.isRequired
}

export default LanguageIcon
