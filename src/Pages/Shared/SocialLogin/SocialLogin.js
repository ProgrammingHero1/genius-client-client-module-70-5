import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/auth';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {

    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSIgnIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setAuthToken(user);
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handleGoogleSIgnIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;