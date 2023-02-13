import { Link } from 'react-router-dom'
import { useGetGroceries } from '../../hooks/useGetGroceries'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import '../../styles/recipes.css'

export const RecipesPage = () => {
  const { pantryProducts, loading } = useGetGroceries()

  return loading
    ? <LoadingSpinner />
    : (
      <section className='container'>
        <ul className='recipes__container'>
          {pantryProducts?.map((item) => (
            <Link
              to={`/recipes/${item.id}`}
              key={item.id}
              className='recipes__link'
            >
              <li className='image__container'>
                <img
                  src={`${item.image}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading='lazy'
                  className='image'
                />
                <div className='recipes__title'>
                  <h3>{item.name}</h3>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      )
}
