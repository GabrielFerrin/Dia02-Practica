import './Card.css'

const Card = (props) => {
  return (
    <div className='cm-card' style={{ borderColor: props.color }}>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
      <img src={props.image} alt={props.title} height={50} width={50}/>
    </div>
  )
}

export default Card
