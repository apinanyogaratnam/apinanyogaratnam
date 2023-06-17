import type { NextApiRequest, NextApiResponse } from "next";

const token =
    "BQAOhLxoyELBtI_m6bTfcp_FwYW4EyubmPs_rz4FDFZRg4bdj6N0ZNHcBM0ZsZx_LaaKYUYgfDHYmKZA0vaP0p8LKxb8ZxsVS98bdDQpml8sQ9MegRy6Jiqbs5wARXV_wjtbjtlLdc8JC7yQkYlTPiv8fRhsepSOMTPN5tuUZo__fuycJr3r_Q_q5S6mBjqtnjGMCQHQyfLcKAOeprhI5M80Kk1hPPGeygGZ91ZYXYSI2hY0g3ADrziJA_3c1eKyiSM";
async function fetchWebApi(endpoint, method, body) {
    const res = await fetch(`https://api.spotify.com/${endpoint}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        method,
        body: JSON.stringify(body),
    });
    return await res.json();
}

async function getTopTracks() {
    // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
    return (await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")).items;
}
console.log(topTracks?.map(({ name, artists }) => `${name} by ${artists.map((artist) => artist.name).join(", ")}`));

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const topTracks = await getTopTracks();
    return res.status(200).json({
        topTracks,
    });
};

export default handler;
