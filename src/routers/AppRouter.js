import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/header';
import AddExpensePage from '../components/AddExpensePage';
import RemoveExpensePage from '../components/RemoveExpensePage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
            <Route path ="/" component={ExpenseDashboard} exact={true}/>
            <Route path ="/create" component={AddExpensePage} exact={true}/>
            <Route path ="/remove" component={RemoveExpensePage} exact={true}/>
            <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;