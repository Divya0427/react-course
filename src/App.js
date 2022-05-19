/* 
- In react, a component must return something which can be rendered on browser.
- Could be plain string, numbers, boolean(renders nothing), Fragment, Portals, react elements(a native DOM component or user-defined composite component).
- How does react know that this js function is a react component?
  Ans: React checks if it is an object(functions are objects) with a $$typeof of the REACT_ELEMENT_TYPE Symbol
  React.createElement(
    {
      type: 'marquee',
      props: {
        bgcolor: '#ffa7c4',
        children: 'hi',
      },
      key: null,
      ref: null,
      $$typeof: Symbol.for('react.element'),
    }
  )
- Self closing tag <Todo />(when there's nothing to insert) and can also be <todo></todo>(when we have something inside it)

<h1>My Todos</h1>
        <Todo text='1st todo'/>
        <Todo text='2nd todo' />
        <Todo text='3rd todo' />


*/
import Todo from './components/Todo';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import PageNotFound from './pages/PageNotFound';

import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';

function App() {
  console.log("app");
  return (
    <Layout>
      <Routes>
          <Route path='/' element={ <AllMeetupsPage /> }></Route>
          <Route path='/new-meetup' element={ <NewMeetupPage /> }></Route>
          <Route path='/favorites' element={ <FavoritesPage /> }></Route>
          <Route path='/todo' element={ <Todo /> }></Route>
          <Route path='*' element={ <PageNotFound /> }></Route>
      </Routes>
    </Layout>
  );
}

export default App;
