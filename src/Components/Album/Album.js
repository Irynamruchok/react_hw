import styles from './Album.module.css'
const Album = ({album}) => {
    return (

        <div key={album.id} className={styles.wrapper}>
             <h1>{album.id}</h1>
             <p>{album.title}</p>
        </div>
    );
};

export default Album;