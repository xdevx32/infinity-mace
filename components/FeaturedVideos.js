import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const videoUrls = [
  'https://www.youtube.com/watch?v=4LvDjz76mYw&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=_9-L3njfe4g&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=GAMg-XEygfA&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=7jOOLi_x0U4&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=CxWJuyJlLkI&ab_channel=RedBullBike',
  'https://www.youtube.com/watch?v=z_1WcUAcbgQ&list=RDs-kJU21Flr0&index=3&ab_channel=Disciples',
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
  'https://www.youtube.com/watch?v=s97Mb1TZqbU&list=RDs-kJU21Flr0&index=21&ab_channel=wazeodysseyVEVO',
  'https://www.youtube.com/watch?v=BOFrODIho10&list=RDs-kJU21Flr0&index=17&ab_channel=SubSoul',
  'https://www.youtube.com/watch?v=0yArSfUd1IA&list=RDs-kJU21Flr0&index=16&ab_channel=MrDeepSense',
  'https://www.youtube.com/watch?v=fiore9Z5iUg&list=RDs-kJU21Flr0&index=15&ab_channel=RobinSchulz',
  'https://www.youtube.com/watch?v=ESXgJ9-H-2U&list=RDs-kJU21Flr0&index=14&ab_channel=lokallegend',
  'https://www.youtube.com/watch?v=IetIg7y5k3A&list=RDs-kJU21Flr0&index=12&ab_channel=ArmadaMusicTV',
  'https://www.youtube.com/watch?v=KDxJlW6cxRk&list=RDs-kJU21Flr0&index=9&ab_channel=DukeDumontVEVO',
  'https://www.youtube.com/watch?v=2Y6Nne8RvaA&list=RDs-kJU21Flr0&index=8&ab_channel=KungsVEVO',
  'https://www.youtube.com/watch?v=BS46C2z5lVE&list=RDs-kJU21Flr0&index=4&ab_channel=Route94VEVO',
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
