import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg';
import person from '../../../assets/images/about_us/person.jpg';

const About = () => {
    return (
        <div className="hero bg-base-200 mt-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img
                        src={person}
                        className="rounded-lg shadow-2xl w-3/4" />
                    <img
                        src={parts}
                        className="border-8 border-white rounded-lg shadow-2xl absolute w-1/2 right-5 top-2/3 " />
                </div>
                <div className='space-y-5'>
                    <h2 className='text-4xl text-orange-500'>About Us</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;