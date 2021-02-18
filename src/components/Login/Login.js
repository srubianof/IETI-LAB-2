import React, {useEffect, useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {Redirect, useHistory} from 'react-router-dom'
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

export const Login = ({setLoggedState, LoggedState: isLogged}) => {
    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');

    useEffect(() => {
        setUser('a@a.com')
        setPasswd('123')
        localStorage.setItem(user, passwd)
    }, [])

    let history = useHistory();
    const handleSubmit = () => {
        localStorage.setItem("isLoggedIn", true);
        setLoggedState(localStorage.getItem("isLoggedIn"));
        history.push("/todo")
    }

    const handleClick = () => {
        console.log(localStorage)
    }

    return (
        <>
            {eval(isLogged)
                ?
                // <CssBaseline/>
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon/>
                        </Avatar>
                        <Typography variant="h2">Sign in</Typography>
                        <form className="form" onSubmit={handleSubmit}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus value={user}/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={passwd}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                onClick={handleClick}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
                : <Redirect to='/'/>
            }
        </>
    );
}
