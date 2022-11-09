export const LogIn = () => {
    return (
        <>
            <h2>LogIn Page</h2>
            <form>
                <label>
                    Email:
                    <input type={"email"} placeholder={"your.email@msg.com"} />
                </label>
                <label>
                    Password:
                    <input type={"password"} placeholder={"********"} />
                </label>
            </form>
        </>
    );
}