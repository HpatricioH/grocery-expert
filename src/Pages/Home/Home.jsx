// import loadable from '@loadable/component'

import { lazy, Suspense } from 'react'

// import HomePage from '../../Components/HomePage/HomePage'
const HomePage = lazy(() => import('../../Components/HomePage/HomePage'))

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
}

export default Home
