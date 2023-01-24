import { useState } from 'react';

export const GifExpertApp = () => {


  const [categories, setCategories] = useState(['One Punch', 'Dragon ball'])

  const onAddCatery = () => {
    setCategories([ ...categories, 'Valoran' ])
  }


  return (
    <>
      <h1>GifExpertApp</h1>
      <button onClick={ onAddCatery }>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}> { category } </li>
        })}
      </ol>
    </>
  )
}
