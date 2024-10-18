export const getUrl = () => {
    if (process.env.NODE_ENV === "production") {
        return "https://studio-dev-test.vercel.app";
    }

    return "http://localhost:3000";
};