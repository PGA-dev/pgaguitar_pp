
const LoadingMessage = () => {
    return (
        <>
            <i style={spinStyle} className='fa fa-cog fa-spin fa-3x fa-fw' />
            <p style={loadStyle}>Please Wait Loading...</p>
        </>
    );
};

//fa fa-refresh fa-spin fa-3x fa-fw
//fa fa-spinner fa-pulse fa-3x fa-fw
//fa fa-cog fa-spin fa-3x fa-fw
//fa fa-circle-o-notch fa-spin fa-3x fa-fw

const loadStyle= {
    color: "aqua",
    padding: "2px",
    fontSize: "24px",
    fontFamily: "Papyrus"
};

const spinStyle= {
    color: "magenta"
};

export default LoadingMessage;