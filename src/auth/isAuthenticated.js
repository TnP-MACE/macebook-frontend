export default async function isAuthenticated() {
    try {
        const token = localStorage.getItem("token");
        console.log("Bearer " + token);

        if (!token) {
            console.log("no token");
            return [false, null];
        }

        const response = await fetch("https://mace-connect.herokuapp.com/api/v1/auth", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + JSON.parse(token),
            },
        });
        if (response.status === 200) {
            console.log("successfuly authed");
            const data = await response.json();
            const payload = {
                user: {
                    email: data.email,
                    username: data.username,
                },
                token: JSON.parse(token),
            };
            console.log(payload);
            return [true, payload];
        } else {
            console.log("unauthorized");
            return [false, null];
        }
    } catch (e) {
        console.log(e);
        return [false, null];
    }
}
