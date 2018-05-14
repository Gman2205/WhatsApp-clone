import React from 'react'
import { AppBar } from 'material-ui';

const MainPageHeader = () => {
  return (
    <div>
      <AppBar 
       style={{backgroundColor:"#075e54"}}
       title="WhatsApp"
       showMenuIconButton={false}
       />
    </div>
  )
}

export default MainPageHeader
