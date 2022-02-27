import { useState, useEffect } from 'react';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetch('http://localhost:4000/login')
            .then((res) => res.json())
            .then((data) => {
                setName(data.name);
                setPassword(data.password);
            });
    }, []);
    return (
        <div>
            this is a login page on frontend!
            {name}
            {password}
        </div>
    );
};

export default Login;