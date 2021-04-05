import React from 'react'
import LanguageContext from '../contexts/LanguageContext'
import ColorContext from '../contexts/ColorContext'

class Button extends React.Component {
  onSubmitChange = ({ language }) => language === 'english' ? 'Submit' : 'Voorleggen' 
  render () {
    return (
      <ColorContext.Consumer>
        {(color) => {
          return (
            <button
              className={`ui button ${color}`}>
              <LanguageContext.Consumer>
               {this.onSubmitChange}
              </LanguageContext.Consumer>
            </button>
          )
        }}
      </ColorContext.Consumer>
    )
  }
}

export default Button
