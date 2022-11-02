
function App() {
  const name= ', Brad'
  const x= false


  return (
    <div className="App">
      <h1>Hello From React  {name}</h1>
      <h2>Hello {x ? 'Yes' : 'No'}</h2> 
    </div>
  )
}

export default App;
