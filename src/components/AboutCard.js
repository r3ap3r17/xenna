function AboutCard({ icon, title, text }) {
    return (
        <div className="about-card">
            <i className={ icon }></i>
            <h1 className="card-title">
                { title }
            </h1>
            <p className="text">
                { text }
            </p>
        </div>
    );
}

export default AboutCard;