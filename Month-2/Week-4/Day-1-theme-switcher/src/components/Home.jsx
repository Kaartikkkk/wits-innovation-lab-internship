import ThemeButton from "./ThemeButton";

function Home() {
    return (
        <div>
            <h1>Welcome to Theme Switcher</h1>

            <p>
                Click the button below to switch between Light Mode and Dark Mode.
            </p>

            <ThemeButton />
        </div>
    );
}

export default Home;