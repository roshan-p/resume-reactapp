import React, { Component, useState, useEffect } from 'react';
import { Grid, Cell } from 'react-mdl';
import { useTransition, animated } from 'react-spring'
const myAvatar = process.env.PUBLIC_URL + '/my-avatar-2.png';

function Homepage() {
    const [show, setShow] = useState(false);
    const [showAvatar, setShowAvatar] = useState(false);
    const transitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            await next({ opacity: 1 })
        },
        leave: { opacity: 0 },
    });
    const avatarTransitions = useTransition(true, null, {
        from: { opacity: 0 },
        enter: item => async (next, cancel) => {
            await new Promise(resolve => setTimeout(resolve, 500));
            await next({ opacity: 1 })
        },
        leave: { opacity: 0 },
    })
    useEffect(() => {
        setShowAvatar();
        setShow();
    }, []);

    return (

        <header id="home">

            <nav id="nav-wrap">

                <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                <ul id="nav" class="nav">
                    <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
                    <li><a class="smoothscroll" href="#about">About</a></li>
                    <li><a class="smoothscroll" href="#resume">Resume</a></li>
                    <li><a class="smoothscroll" href="#portfolio">Works</a></li>
                    <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                    <li><a class="smoothscroll" href="#contact">Contact</a></li>
                </ul>

            </nav>

            <div class="row banner">
                <div class="banner-text">
                    <h1 class="responsive-headline">I'm Jonathan Doe.</h1>
                    <h3>I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
      effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling</a>
      and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                    <hr />
                    <ul class="social">
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i class="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div>

            <p class="scrolldown">
                <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
            </p>

        </header>

    )

}
export default Homepage;