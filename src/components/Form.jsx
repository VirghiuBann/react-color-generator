import { useState } from 'react'

const Form = () => {
  const [color, setColor] = useState('')
  // const [form, setForm] = useState({
  //   color: '',
  //   text: '',
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('on submit')
  }

  return (
    <section className='container'>
      <h4>Color generator</h4>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          id='color'
          name='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />

        <input
          type='text'
          id='text'
          name='text'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#ba7264'
        />

        <button className='btn' type='submit' style={{ background: color }}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
