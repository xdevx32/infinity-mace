import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const videoUrls = [
  'https://www.youtube.com/watch?v=4LvDjz76mYw&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=_9-L3njfe4g&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=GAMg-XEygfA&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=7jOOLi_x0U4&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=CxWJuyJlLkI&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=FICCSDVvlz4&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=7RKXNhKKD-M&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=WDKc6z4LRgQ&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=2rAi0opB9Cc&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=wsg8k-2HYXA&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=1dgLEDdFddo&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=AynGAP2xi4o&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=SCk-IMZ7RzA&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=BnToMyMy3k0&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=EdE1_md0dn8&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=BVhdT_tT0P0&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=ZkT6xpx02Vc&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=NPTxkz4hLRI&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=lWnFYJ51JKM&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=x_Rx7Zdyh9s&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=3vDnnWm8Oh0&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=Fs0H5sR1CBk&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=hFPv9BaL63Q&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=uTJ7zFw2na8&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=iQh9jG67GJc&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=WnM8hW_rzQ0&ab_channel=PeopleAreAwesome',
  'https://www.youtube.com/watch?v=HDjxG2pxWWs&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=Oi3fYZo7m_0&ab_channel=WatchMojo.com',
  'https://www.youtube.com/watch?v=HGgTLVpMBgE&ab_channel=RedBull',
  'https://www.youtube.com/watch?v=LfVlgXuUshM&ab_channel=RedBull',
];

export default function FeaturedVideos() {
  return (
    <section className={styles.section}>
      <h2>Featured Videos</h2>
      <div className={styles.videoGallery}>
        {videoUrls.map((url, index) => (
          <ReactPlayer
            key={index}
            url={url}
            className={styles.video}
            controls
            width="100%"
            height="100%"
          />
        ))}
      </div>
    </section>
  );
}
