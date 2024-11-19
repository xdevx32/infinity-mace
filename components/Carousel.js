import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const images = ['/carousel1.jpg', '/carousel2.jpg', '/carousel3.jpg'];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Ensure the initial index is the same on both server and client
    useEffect(() => {
        setCurrentIndex(0);
    }, []);

    // Rest of your component code...
}
