import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/Login.module.css';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(email, password);
            history.push('/');
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError('Failed to login!');
        }
    }

    return (
        <Form className={`${styles.login}`} onSubmit={handleSubmit}>
            <TextInput
                type="email"
                placeholder="Enter Email"
                icon="alternate_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
                type="password"
                placeholder="Enter Password"
                icon="lock"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button disabled={loading} type="submit">
                <span>Submit Now</span>
            </Button>

            {error && <p className="error">{error}</p>}

            <div className="info">
                Don&#39;t have an account?{' '}
                <Link exact="true" to="signup">
                    Signup
                </Link>{' '}
                instead.
            </div>
        </Form>
    );
}

export default LoginForm;
