import styles from './page.module.css';

export const metadata = { title: 'Gallery | Jhareld Manalo' };

// Using picsum.photos for placeholder images
const photos = [
  { id: 1,  caption: 'Gym Session',        category: 'Events',    image: "/images/gym.jpg"},
  { id: 2,  caption: 'Nature Trip',                category: 'Travel',    image: "/images/groupPhoto.jpg",},
  { id: 3,  caption: 'Interval Run',             category: 'Campus',    image: "/images/strava.jpg",},
  { id: 4,  caption: 'Tryout Intrams',            category: 'Hobbies',   image: "/images/chess.jpg"},
  { id: 5,  caption: 'St. Ambrose Garden',           category: 'Academic',  image: "/images/scenery.jpg"},
  { id: 6,  caption: 'Online Hustle',                category: 'Travel',    image: "/images/hustling.jpg"},
  { id: 7,  caption: 'My Drawing',             category: 'Life',      image: "/images/draw.jpg"},
  { id: 8,  caption: 'Growtopia',                category: 'Events',    image: "/images/gt.jpg" },
];



export default function GalleryPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Gallery</p>
        <h1>Moments &amp; Memories</h1>
        <p>A visual diary of adventures, events, and everyday life.</p>
      </div>

      <div className={styles.grid}>
        {photos.map(({ id, caption, category, image }) => (
          <div key={id} className={`${styles.photoCard} ${id % 5 === 0 ? styles.wide : ''}`}>
            <img
              src={image}
              alt={caption}
              className={styles.photo}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <span className={styles.overlayTag}>{category}</span>
              <p className={styles.overlayCaption}>{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
