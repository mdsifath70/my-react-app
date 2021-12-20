import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import classes from '../styles/Signup.module.css';
import Button from './Button';
import CheckBox from './CheckBox';
import Form from './Form';
import TextInput from './TextInput';

export default function SignupForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const { signup } = useAuth();
    const history = useHistory();

    console.log(useAuth());

    async function handleSubmit(e) {
        e.preventDefault();

        // Do Validation
        if (password !== confirmPassword) {
            return setError("Password dont't match!");
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            history.push('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to create an account!');
        }
    }

    return (
        <Form className={`${classes.signup}`} onSubmit={handleSubmit}>
            <TextInput
                type="text"
                required
                placeholder="Enter Name"
                icon="person"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <TextInput
                type="email"
                required
                placeholder="Enter Email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                type="password"
                required
                placeholder="Enter Password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <TextInput
                type="password"
                required
                placeholder="Enter Confirm Password"
                icon="lock_clock"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <CheckBox
                text="I agree to the Terms &amp; Conditions"
                required
                value={agree}
                onChange={(e) => setAgree(e.target.value)}
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Already have an account?{' '}
                <Link exact="true" to="login">
                    Login
                </Link>{' '}
                instead.
            </div>
        </Form>
    );
}
