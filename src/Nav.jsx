import PropTypes from 'prop-types';

function Nav(props) {
    return <a className="underline text-blue-700" href="#" onClick={() => props.onClick(props.page)}>Go to {props.page}</a>
}

Nav.propTypes = {
    page: PropTypes.string,
    onClick: PropTypes.func
}

export default Nav;