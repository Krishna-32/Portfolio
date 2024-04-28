import styles from './UserGreeting.module.css';
import PropTypes from 'prop-types';

function UserGreeting(props){
    return(props.login ? <h2 className={styles.login}>Welcome {props.username} :)</h2> : 
                        <h2 className={styles.logout}>Please Log in!!! :(</h2>);
}

UserGreeting.proptypes = {
    login : PropTypes.bool.isRequired,
    username : PropTypes.string.isRequired
}

UserGreeting.proptypes = {
    login : false,
    username : "Guest"
}

export default UserGreeting