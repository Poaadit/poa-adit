import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Pages/Home/Hometest"));
const Services= lazy(()=>import("./Pages/Service/Service"))
const About = lazy(() => import("./Pages/About/About"));
const Contact= lazy(()=>import("./Pages/Contact/Contact"))
const Projects = lazy(() => import("./Pages/Projects/Project"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/our-services" component={Services}/>
          <Route path="/about-us" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact-us" component={Contact}/>
        </Switch>
      </Suspense>
      
    </Router>
  );
}

export default App;
