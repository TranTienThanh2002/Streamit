
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch , Route  } from 'react-router-dom';
import Header from './components/header/header';
import { Home } from './home/home';
import { Footer } from './components/footer/footer';
import  {SinglePage}  from './components/watch/SinglePage';
import { ScrollButton } from './components/scrollButton/scrollButton';
import { ContactPage } from './contact/contactPage/contactPage';
import { Genres } from './genres/genres';
import { ViewAllPage } from './viewAll/viewAllPage';
import { BlogPage } from './blog/blogPage';
import { BlogDetails } from './blog/blogDetails';


function App() {
  return (
    <>
      <Router>
        <Header/>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/singlepage/:id" component={SinglePage}  />
          <Route path="/contact" component={ContactPage} />
          <Route path="/genres" component={Genres} />
          <Route path="/view-all/:title" component={ViewAllPage}/>
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/blog/:id" component={BlogDetails}/>
        </Switch>
        
        <Footer/>
        <ScrollButton/>
      </Router>
    </>
  );
}

export default App;
