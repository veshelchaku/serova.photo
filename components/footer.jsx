import styles from '../styles/footer.css';

const Footer = () => (
    <footer>
        <div className={styles.container}>
            <div>
                <a href="https://vk.com/serova_ph">
                    <img src="static/icon/vk.svg" className={styles.icon}/>
                </a>
            </div>

            <div>
                <a href="https://www.instagram.com/serovadar/">
                    <img src="static/icon/inst.svg" className={styles.icon}/>
                </a>
            </div>

            <div className={styles.phone}>
                <span>8 - 906 - 150 - 22 - 70</span>
            </div>
        </div>
        <div className={styles.credits}>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </footer>
)

export default Footer;