import PropTypes from 'prop-types';

function Heading(props) {
    return <h1 className="font-sans text-7xl">{props.children}</h1>
}

Heading.propTypes = {
    children: PropTypes.node
}

export default Heading;