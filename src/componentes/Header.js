import Button from './Button'

const Header = (props) =>{
  const onClick = () =>{
    console.log('Click');
  }


return(
  <header className='header'>
  <h1>{props.title}</h1>

  {/*//<Button onClick={onClick} text='Nuevo'/>*/}
  <Button text={props.show.showAdd ? 'x' : '+'} onClick={props.onAdd} />

  </header>
)
}

Header.defaultProps={
  title:'Título por defecto'
}

const headingStyle={
color:'red',
backgroundColor:'black'
}


export default Header
