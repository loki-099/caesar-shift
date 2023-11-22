import React from 'react'
import Main from './components/Main';

const App = () => {
  return (
    <div className="bg-[url('./assets/background.jpg')] w-full h-screen  bg-center bg-no-repeat bg-cover flex items-center justify-center">
      <Main></Main>
    </div>
  )
}

export default App