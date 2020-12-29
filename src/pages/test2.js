import testing from '../context/testing'

export default function asd () {
  let testasd = '123' 
  function handleClick () {
    console.log(testing)
    testing.name = 'asdasd'
    testasd = '21refs'
  }

  return (
    <div>
      <button onClick={handleClick}>asd</button>
      <p>{testing.name}</p>
      <p>{testasd}</p>
    </div>
  )
}