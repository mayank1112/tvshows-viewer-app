export default async(url) => {
    let response = await fetch(url);
    return await response.json();
};