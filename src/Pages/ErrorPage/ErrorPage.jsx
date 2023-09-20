import React from 'react';
import Container from '../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <Container>
            <div className='my-36 md:my-5 lg:my-14'>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/006/549/647/original/404-landing-page-free-vector.jpg" alt="" />
                </div>
                <div  className='text-center py-10'>
                <Link className='btn hover:bg-[#4ca068] bg-green-400 md:text-2xl p-2 md:p-5 rounded-2xl text-white' to="/">Back To Home</Link>
                </div>
            </div>
        </Container>
    );
};

export default ErrorPage;