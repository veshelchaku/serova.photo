import Instagram from 'instagramjs';

import styles from '../styles/instagram.css';
import Spinner from '../components/spinner';

const token = process.env.secret;
console.log(token);
const access = new Instagram(token)

class InstagramPage extends React.Component {
  constructor() {
    super()
    this.state = { posts: [] }
  }
  componentDidMount() {
    access.user('self').media().get({ count: 18 }).then((result) => {
      this.setState({ posts: result })
    });
  }
  render() {
    return (
      <div className={styles["page-container"]}>
        {this.state.posts.length === 0 && 
          <div className={styles.loading}>
            <Spinner/>
          </div>
        }
        {this.state.posts.length > 0 && 
         <div className={styles["gallery-container"]}>
            <div className={styles["gallery"]}>
              {this.state.posts.map(item =>
                <div key={item.id} className={styles["gallery-item"]}>
                  <img className={styles["gallery-image"]} src={item.images.standard_resolution.url}/>
                  <a href={item.link}>
                    <div className={styles["gallery-link"]}>
                      <img src="static/icon/inst-link.svg" className={styles["gallery-link-icon"]}/>
                    </div>
                  </a>
                </div>
                )}
            </div>
          </div>}
      </div>
    );
  }
}

export default InstagramPage;