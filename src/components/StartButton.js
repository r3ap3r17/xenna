function StartButton({ type }) {
    return (
        <button className={ "btn-start " + type + " mx-auto mx-lg-0" }>
            Start your Application
        </button>
    );
}

export default StartButton;