export const Posts = () => {
    return (
        <>
            <h2>Posts Page</h2>
            <form>
                <label>
                    Title:
                    <input type={"text"} placeholder={"Post's title"} />
                </label>
                <label>
                    Content:
                    <textarea placeholder={"Your message..."}/>
                </label>
            </form>
        </>
    );
}