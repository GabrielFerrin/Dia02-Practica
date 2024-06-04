import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const description = "Owr artificial intelligence powered tools " +
    "use millions of project data points to ensure that your " +
    "project is successful"
  return (
    <>
      <Header
        title="Reliable, efficient delivery"
        subtitle="Powered by Technology"
        description={description}
      />
      <Main />
    </>
  )
}

export default App
