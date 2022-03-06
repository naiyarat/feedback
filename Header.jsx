import PropTypes from 'prop-types'

function Header(props) {
    const hs = {
        backgroundColor: props.bgColor,
        color: props.textColor,
    }

    return (
        <header className="container" style={hs}>
            <div className="container">
                <h2>{props.text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'FeedBack UI',
    bgColor: 'rgba(0, 0, 0, 0.4',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header;
