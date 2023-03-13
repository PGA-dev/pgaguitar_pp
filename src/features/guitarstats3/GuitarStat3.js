

const GuitarStat3 = ({ guitarstat3 }) => {
    const {videoId, text } = guitarstat3;
    return (
        <>
            <ul className='list-unstyled' style={{ padding: '2px', fontFamily: 'papyrus', color: 'slateblue' }}>
                <li>
                    <a href={videoId} target="_blank" rel="noreferrer">{text}</a>
                </li>
            </ul>
        </>
    );
};


export default GuitarStat3;