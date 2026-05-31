import styles from './page.module.css';

export const metadata = { title: 'Hobbies | Jhareld Manalo' };

const hobbies = [
  {
    title: 'Chess',
    emoji: '',
    desc: 'I started playing chess during my elementary school years and quickly developed a passion for the game. Over the years, I participated in several school intramural chess competitions, which helped me improve my strategic thinking, patience, and decision-making skills. Chess continues to be one of my favorite hobbies because it challenges me to think ahead and solve problems creatively.',
    tags: ['Tactical', 'Strategic', 'Problem Solving'],
  },
  {
    title: 'Online Games',
    emoji: '',
    desc: 'I enjoy playing various online games and exploring different game genres. Gaming has not only been a source of entertainment for me but also the reason I became interested in technology and game development. It continues to inspire my goal of creating my own games someday.',
    tags: ['Game Development', 'Esports', 'Competitive Gaming'],
  },
  {
    title: 'Side Hustles',
    emoji: '',
    desc: 'I spend some of my free time exploring online side hustles and digital opportunities. Through these experiences, I have learned valuable skills such as communication, problem-solving, marketing, and time management. These side hustles have not only helped me support myself financially but have also taught me practical skills that I continue to use in my daily life and academic projects.',
    tags: ['Money', 'Digital', 'Entrepreneurship'],
  },
  {
    title: 'Reading',
    emoji: '',
    desc: 'I enjoy reading books, especially those focused on self-improvement, productivity, and personal growth. Some of the books I have read include Atomic Habits by James Clear and Ikigai by Héctor García and Francesc Miralles. Reading helps me gain new perspectives, develop positive habits, and continuously improve myself both personally and professionally.',
    tags: ['Books', 'Self Help', 'Growth'],
  },
  {
    title: 'Online Streaming',
    emoji: '',
    desc: 'I enjoy watching movies, television series, and anime across a variety of genres, including action, adventure, science fiction, comedy, and drama. Watching different types of stories allows me to explore new ideas, cultures, and perspectives while also serving as a source of entertainment and inspiration. I appreciate well-written characters, creative storytelling, and the lessons that can be learned from different narratives.',
    tags: ['Movies', 'Series', 'Anime'],
  },
  {
    title: 'Fitness',
    emoji: '',
    desc: 'I enjoy staying active through strength training, running, and cycling. Going to the gym helps me build discipline, consistency, and a healthy lifestyle, while running and cycling allow me to improve my endurance and stay physically fit. These activities help me maintain a balance between academics, personal projects, and overall well-being.',
    tags: ['Lifting', 'Running', 'Cycling'],
  },
];



export default function HobbiesPage() {
  return (
    <div className="container">
      <div className="page-header">
        <p className="label">Hobbies</p>
        <h1>Life outside code</h1>
        <p>Things that keep me balanced, creative, and inspired beyond the screen.</p>
      </div>

      <div className="grid-3">
        {hobbies.map(({ title, emoji, desc, tags }) => (
          <div key={title} className="card">
            <span className={styles.emoji}>{emoji}</span>
            <h3 className={styles.hobbyTitle}>{title}</h3>
            <p className={styles.hobbyDesc}>{desc}</p>
            <div className={styles.hobbyTags}>
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      
    </div>
  );
}
