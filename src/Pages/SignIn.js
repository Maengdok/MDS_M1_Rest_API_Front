export const SignIn = () => {
    return (
        <>
            <h2>SignIn Page</h2>
            <form>
                <label>
                    Email:
                    <input type={"email"} placeholder={"your.email@msg.com"} />
                </label>
                <label>
                    Password:
                    <input type={"password"} placeholder={"********"} />
                </label>
                <label>
                    Repeat password:
                    <input type={"password"} placeholder={"********"} />
                </label>
            </form>
        </>
    );
}