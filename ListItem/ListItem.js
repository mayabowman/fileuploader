import React from 'react'
import './ListItem.css'
import ControlBar from '../ControlBar/ControlBar'
import { FontAwesomeIcon } from '@fortawesome-react-fontawesome'
import {
  faFileImage,
  faFileAudio,
  faFileAlt,
  faFileVideo
} from '@fortawesome/free-solid-svg-icons'

class ListItem extends React.Component {
  render() {
    const icons = {
      "jpg": faFileImage,
      "mov": faFileVideo,
      "txt": faFileAlt,
      "mp3": faFileAudio
    }

    return (
      <div className="ListItem">
        <div className="ListItem__icon">
          <div className="ListItem__circle">
            <FontAwesomeIcon icon={icons[this.props.fileType] || faFileAlt} />
          </div>
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    )
  }
}