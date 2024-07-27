# Grocery Expert

This is an application created to help manage the pantry of our house. And suggest recipes accordingly to the available products in the pantry. App created for personal and family use. 
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- To log in into the application using email and password or Google Auth. 
- Be able to add products into their own pantry. 
- Be able to see their own list of grocery list.
- Access to their own suggested recipes. 

### Screenshot

![Login ScreenShoot](Screenshot%20app.jpg)) ![Pantry Page ](Screenshot%20Pantry.jpg)

### Links

- Live Site URL: [Grocery Expert](https://grocery-expert.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Material UI 
- Api Context 
- Custom Hooks 
- Mobile-first approach
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [Supabase](https://supabase.com/)
- [Vercel](https://vercel.com/)
- APIs for groceries and recipes 


### What I learned

Building this grocery app was an exciting learning experience for me. Here are some of the key things I learned while working on this project:

  * The importance of using Semantic HTML5 markup to make my app more accessible and search engine friendly.
  * How to create a responsive and beautiful design using Material UI.
  * The benefits of following a mobile-first approach to ensure that my app is  optimized for smaller screens.
  * How to use React as my main JavaScript library to create a maintainable codebase.
  * How to use Vite as my build tool to quickly build and deploy my app to production.
  * How to use Vitest as my testing library to ensure that my app was robust and reliable.
  * How to use Supabase as my backend service to handle data and manage API calls.
  * How to create custom hooks and use API contexts to share data across my app.

Overall, building this grocery app allowed me to explore modern web technologies and gain valuable experience in creating fast, responsive, and reliable apps. I am excited to continue learning and exploring new technologies in my future projects.


To see how you can add code snippets, see below:

```Javascript 
const GroceriesListContext = createContext()

export const GroceriesProvider = ({ children }) => {
  const [groceriesCount, setGroceriesCount] = useState(0)

  // count groceries in the list to buy to show in badge
  const getGroceriesCount = async () => {
    const { data } = await supabase.from('groceries').select().eq('quantity', 0)
    setGroceriesCount(data?.length)
  }

  useEffect(() => {
    getGroceriesCount()
  }, [])

  const value = {
    getGroceriesCount,
    groceriesCount
  }

  return (
    <GroceriesListContext.Provider value={value}>
      {children}
    </GroceriesListContext.Provider>
  )
}
```
```Javascript  
export const useGetRecipes = (id) => {
  const [recipes, setRecipes] = useState([])
  const [groceryName, setGroceryName] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getGroceryName = async () => {
      const singleData = await getGroceries()
      const data = singleData?.filter((el) => el.id === Number(id))
      setGroceryName(data[0])
    }
    getGroceryName()
  }, [id])

  const getRandomRecipes = useCallback(async () => {
    try {
      setLoading(true)
      const data = await getRecipes(groceryName?.name)
      setRecipes(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [groceryName])

  useEffect(() => {
    getRandomRecipes()
  }, [getRandomRecipes])

  return { recipes, loading }
}
```


### Continued development

One of my main goals is to improve the design of the app. While I used Material UI to create a beautiful and responsive design, I believe that there is still room for improvement. I will be experimenting with different color schemes, typography, and layouts to create a more polished and visually appealing app.

Another area that I will be working on is adding all of the services of the login. Currently, the app only supports basic authentication. However, I recognize that there is a need for more advanced features such as "remember me" and "forgot password". I will be working to implement these features to make the app more user-friendly and secure.

## Author

- Github - [Patricio Huerta](https://github.com/HpatricioH)
- LinkedIn - [@PatricioHuerta](www.linkedin.com/in/patricio-huerta)
