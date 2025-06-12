import './ProfileCard.css'

function ProfileCard({ title, description }) {
    return (
        <div className="profile-card">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default ProfileCard;