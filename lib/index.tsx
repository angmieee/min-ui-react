import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './icon'

const App = () => {
    return (<>
        <Icon name="setting" onMouseEnter={()=>console.log('enter')} />
        <Icon name="home" onClick={()=>console.log('click')} />
        <Icon name="smile" onMouseLeave={() => console.log('leave')} />
    </>)
}

ReactDOM.render(<App />, document.getElementById('root'))

