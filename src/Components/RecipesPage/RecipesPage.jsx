import { Link } from 'react-router-dom'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import '../../styles/recipes.css'
import { usePantry } from '../../hooks/usePantry'

const RecipesPage = () => {
  const { groceries, loading } = usePantry()

  return loading
    ? <LoadingSpinner />
    : (
      <section className='container'>
        <ul className='recipes__container'>
          {groceries?.map((grocery) => (
            <Link
              to={`/recipes/${grocery.id}`}
              key={grocery.id}
              className='recipes__link'
            >
              <li className='image__container'>
                <img
                  src={`${grocery.image}?w=248&fit=crop&auto=format`}
                  alt={grocery.name}
                  loading='lazy'
                  className='image'
                />
                <div className='recipes__title'>
                  <h3>{grocery.name}</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      )
}

export default RecipesPage
