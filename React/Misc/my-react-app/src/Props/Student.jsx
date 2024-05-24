import styles from './Student.module.css';
import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className={styles.student}>
            <p>
                Name : {props.name}<br/>
                Age : {props.age}<br/>
                Student : {props.student ? "Yes" : "No"}
            </p>
        </div>
    );
}

Student.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    student : PropTypes.bool.isRequired
}

Student.defaultProps = {
    name : "Unknown",
    age : 0,
    student : false
}

export default Student