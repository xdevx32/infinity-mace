import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

export default function FeaturedVideos() {
    return (
        <section className={styles.section}>
            <h2>Featured Videos</h2>
            <div className={styles.videoGallery}>
                <ReactPlayer
                    url="https://www.youtube.com/shorts/Fw52fXCsuNs"
                    className={styles.video}
                    controls
                    width="100%"
                    height="100%"
                />
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=Ij6BD8uP9mU"
                    className={styles.video}
                    controls
                    width="100%"
                    height="100%"
                />
            </div>
        </section>
    );
}
