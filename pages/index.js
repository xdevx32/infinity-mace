import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import FeaturedVideos from '../components/FeaturedVideos';
import PhotoGallery from '../components/PhotoGallery';

// Dynamically import the Carousel component
const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false });

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <FeaturedVideos />
            <PhotoGallery />
            <Carousel /> {/* Now rendered only on the client side */}
        </div>
    );
}
