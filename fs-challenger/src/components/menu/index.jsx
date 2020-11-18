import React, { useState, useEffect } from 'react';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './../../features/user/user.actions';

const loggedUser = state => state.user;

const MenuItems = () => {
    return (
        <ul>
            <li>
                <Link to='/'>Dê um kudo</Link>
            </li>
            <li>
                <Link to='/'>Timeline</Link>
            </li>
            <li>
                <Link to='/'>Meus kudos</Link>
            </li>
        </ul>
    );
}

const Menu = () => {
    const [showMenu, toggle] = useState(false);

    const user = useSelector(loggedUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    return (
        <nav>
            <div className='content'>
                <span>Novatics</span>
                <div className='menu'>
                    <MenuItems />
                </div>
                <div className='hamburguer' onClick={() => toggle(!showMenu)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className='profile'>
                    <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
                    <img src={user.data.image}></img>

                    <span>
                        {
                            user.isFetching ?
                                '' :
                                user.data.toString()
                        }
                    </span>
                </div>
                {
                    showMenu &&
                    <div className='hamburguer-menu'>
                        <MenuItems />
                    </div>
                }
            </div>
        </nav>
    );
}

export default Menu;