import {useState} from 'react'

const AddTask = (props) =>{

  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState('')


  const onSubmit = (e) =>{
    e.preventDefault()
      if(!text){
        alert('Debes de agregar el nombre del recordatorio')
        return
      }

      props.onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }

return(
  <form className='add-form' onSubmit={onSubmit}>
  <div className='form-control'>
    <label>Recordatorio</label>
    <input type='text' placeholder='Nombre del Recordatorio' value={text} onChange={(e) => setText(e.target.value)} />
  </div>
  <div className='form-control'>
    <label>Fecha</label>
    <input type='text' placeholder='Hora y Fecha' value={day} onChange={(e) => setDay(e.target.value)} />
  </div>
  <div className='form-control'>
    <label>Recordarme?</label>
    <input type='checkbox' value={reminder}  onChange={(e) => setReminder(e.currentTarget.checked)} />
  </div>


  <input className='btn btn-block' type='submit' value='Agregar' />

  </form>
)
}
export default AddTask
