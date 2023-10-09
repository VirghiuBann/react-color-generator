import { useState } from 'react'
import ColorList from './components/ColorList'
import Form from './components/Form'
import Values from 'values.js'

const App = () => {
  const [colors, setColors] = useState(new Values('#fa7264').all(10))

  return (
    <main>
      <Form />
      <ColorList colors={colors} />
    </main>
  )
}
export default App
