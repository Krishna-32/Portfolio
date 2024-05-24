import {useParams} from 'react-router-dom'

const Profile = () => {
    const params = useParams()

    return (
        <>
            <h1>Profile of {params.profileName}</h1>
        </>
    )
}

export default Profile;