import './Header.css'

const Header = (props) => {
  return (
    <div className='cm-hdr'>
      <h2>{props.title}</h2>
      <h2>{props.subtitle}</h2>
      <p>{props.description}</p>
    </div>
  )
}

export default Header
