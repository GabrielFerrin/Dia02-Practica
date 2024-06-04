import Card from '../Card/Card'
import './Main.css'

const Main = () => {

  return (
    <div className='cm-main'>
      {cards.map((card) => <Card
        key={card.title}
        title={card.title} subtitle={card.subtitle}
        image={card.image} color={card.color}
      />)}
    </div>
  )
}

export default Main

const cards = [{
  title: 'Supervisor',
  subtitle: 'Monitors activity to identify project roadblocks',
  image: 'icon-supervisor.svg',
  color: '#1EAFAB'
},
{
  title: 'Team Builder',
  subtitle: 'Scan our talent network to create the optimal team for your project',
  image: 'icon-team-builder.svg',
  color: '#BC0000'
},
{
  title: 'Karma',
  subtitle: 'Regularly evaluates our talent to ensure quality',
  image: 'icon-karma.svg',
  color: '#FDBC02'
},
{
  title: 'Calculator',
  subtitle: 'Uses data from past projects to provide better delivery estimates',
  image: 'icon-calculator.svg',
  color: '#0068AF'
}]
