import React from 'react'
import {
//  BrowserRouter as Router,
  HashRouter,
  //MemoryRouter,
  //StaticRouter,
  Route,
  Link,
//  Switch,
//  Redirect,
//  Prompt,
//  BrowserRouter
} from 'react-router-dom';

import './App.css'

/*
* Ex3
*/
/*const Home = (props) => {
  console.log(props)
  return <h1>Home</h1>
}*/

/*const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route
        path="/about"
        children={({match}) => match && <h1>About</h1>} />
    </div>
  </Router>
)*/

/*
* Ex4
*/

/*
const isActiveFunc = (match, location) => {
  console.log(match, location)
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
    <NavLink
      isActive={isActiveFunc}
      activeClassName="active"
      replace to="/contact">Contact</NavLink>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
)
*/

/*
* Ex5
*/
/*const App = (props) => (
  <Router>
    <div>
      <Route path="/:page?-:subpage?" render={({match}) => (
        <h1>
          PAGE: {match.params.page || 'home'}
          SUBPAGE: {match.params.subpage}
        </h1>
      )} />
    </div>
  </Router>
)*/

/*
* Ex6
*/
/*const App = (props) => (
  <Router>
    <div>
      <Route
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({match}) => (
        <h1>
          paramA: {match.params.a}<br />
          paramB: {match.params.b}
        </h1>
      )} />
    </div>
  </Router>
)*/

/*
* Ex7
*/
/*const Links = () => (
  <nav>
    <Link to="/?id=123">Inline</Link>
    <Link to={{pathname: '/', search: '?id=456'}}>Object</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Route path="/" render ={(match, location) => (
        <div>
          <p>root</p>
          <p>{JSON.stringify(match)}</p>
          <p>{JSON.stringify(location)}</p>
          <p>{new URLSearchParams(match.location.search).get('id')}</p>
        </div>
      )} />
    </div>
  </Router>
)*/

/*
* Ex8
*/
/*
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact/xx">Contact</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
      <Switch>
        <Route exact path="/" render ={() => <h1>Home</h1>} />
        <Route path="/about" render ={() => <h1>About</h1>} />
        <Route render ={() => <h1>Page not foud</h1>} />
      </Switch>
    </div>
  </Router>
)
*/
/*
* Ex9
*/
/*
const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
        <Switch>
        <Route exact path="/" render ={() => <h1>Home</h1>} />
        <Route path="/about" render ={() => <h1>About</h1>} />
        <Route path="/contact" render ={() => <h1>Contact</h1>} />
        <Route path="/:itemid" render ={(match) => <h1>Item: {match.match.params.itemid}</h1>} />
        </Switch>
    </div>
  </Router>
)
*/

/*
* Ex10
*/
/*const Links = () => (
  <nav>
    <Link to="/home">Home</Link>
    <Link to="/about">About</Link>
    <Header />
    <Content />
  </nav>
)

const Header = ({match}) => (
  <div className="header">
    <Route path="/:page"
      render={({match}) => (
        <h1>{match.params.page} header</h1>
      )}
    />
  </div>
)

const Content = ({match}) => (
  <div className="content">
    <Route path="/:page"
      render={({match}) => (
        <h1>{match.params.page} Content</h1>
      )}
    />
  </div>
)

const App = (props) => (
  <Router>
    <div>
      <Links />
    </div>
  </Router>
)
*/

/*
* Ex11 Render Nested
*/
/*
const Home = () => (<h1>Home</h1>)
const Menu = () => (
  <div>
    <h1>Menu</h1>
    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drink">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>
    <Route
      path="/menu/:section"
      render={({match}) => <h2>{match.params.section}</h2>}
    />
  </div>
)

const App = (props) => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/menu">menu</Link>
      <Route exact path="/" component={Home} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
)
*/
/*
* Ex12 Redirect to Another Page
*/
/*let loggedin = false;

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/old/123">Old</Link>
    <Link to="/new/456">New</Link>
    <Link to="/protected">Protected</Link>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links />
        <Route exact path="/" render={() => (<h1>Home</h1>)} />
        <Route path="/new/:str" render={({match}) => (<h1>New: {match.params.str}</h1>)} />
        <Route path="/old/:str" render={({match}) => (
          <Redirect to={`/new/${match.params.str}`} />
        )} />
        <Route path="/protected" render={({match}) => (
          loggedin
          ? <h1>Welcome to the protected page</h1>
          : <Redirect to={"/new/Login"} />
        )} />
    </div>
  </Router>
)*/

/*
* Ex13 Intercept Route Changes
*/
/*const Home = () => (<h1>Home</h1>)
class Form extends React.Component {
  state = {dirty: false}
  setDirty = () => this.setState({dirty:true})
  render() {
    return (
      <div>
        <h1>Form</h1>
        <input type="text" onInput={this.setDirty}/>
        <Prompt
          when={this.state.dirty}
          message="Data will be lost!"
        />
      </div>
    )
  }
}
const App = () => (
  <Router>
    <div>
      <Link to="/">Home</Link>
      <Link to="/form">Form</Link>
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
    </div>
  </Router>
)
*/

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route exact path="/about" render={() => <h1>About</h1>} />
  </div>
)

/*const forceRefresh = () => {
  console.log(new Date())
  return false
}*/

/*const BrowserRouterApp = () => (
  <BrowserRouter forceRefresh={forceRefresh()}>
    <LinksRoutes />
  </BrowserRouter>
)*/

const HasRouterApp = () => (
  <HashRouter hashType="noslash">
    <LinksRoutes />
  </HashRouter>
)

/*const MemoryRouterApp = () => (
  <MemoryRouter
  initialEntries={['/', '/about']}
  initialIndex={0}>
    <LinksRoutes />
  </MemoryRouter>
)*/

/*const StaticRouterApp = () => (
  <StaticRouter
  location="/about"
  context={{}} >
    <LinksRoutes />
  </StaticRouter>
)*/

export default HasRouterApp
