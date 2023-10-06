import { useState } from 'react'

const Form = () => {
  const [color, setColor] = useState('')
  const [form, setForm] = useState({
    color: '',
    text: '',
  })

  const handleChange = (e) => {
    console.log('changes')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('on submit')
  }

  return (
    <section className='container'>
      <h4>Color generator</h4>
      <form className='color-form'>
        <input type='color' id='color' name='color' value={form.color} />

        <input type='text' id='text' name='text' value={form.text} />

        <button className='btn' type='submit'>
          Submit
        </button>
      </form>
    </section>
  )
}

export default Form
