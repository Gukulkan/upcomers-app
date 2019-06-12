import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/Home.jsx'
import { Blog } from './blog/Blog.jsx'
import BlogPost from './blog/BlogPost.jsx'


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/post/:postId' component={BlogPost}/>
        </Switch>
    </main>
);

export default Main