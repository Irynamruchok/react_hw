
const Album = ({album}) => {
    return (

        <div key={album.id} >
             <h1>{album.id}</h1>
             <p>{album.title}</p>
        </div>
    );
};

export default Album;