import PropTypes from 'prop-types';

function Button(props) {

    return <div>
        <button onClick={props.onClick}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >{props.children}</button>
        {props.myAttr && <div>{props.myAttr}</div>}
    </div>
}

Button.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    myAttr: PropTypes.string
}

export default Button;