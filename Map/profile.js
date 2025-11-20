const profile = new Map([
    ["name", "Junichi Hashimoto"],
    ["age", 45],
    ["job", "Engineer"],
    ["avatar", "/images/profiles/junichi_avatar.jpg"],
    ["background", "/images/backgrounds/tech_bg.png"],
    ["portfolio", [
        "/images/projects/project1.jpg",
        "/images/projects/project2.jpg",
        "/images/projects/project3.jpg"
    ]],
    ["socialMedia", new Map([
        ["github", "https://github.com/junichi"],
        ["linkedin", "/images/social/linkedin_qr.png"]
    ])]
]);

console.log(profile.get("name")); // Junichi Hashimoto
console.log(profile.get("age"));  // 45
console.log(profile.get("job"));  // Engineer
console.log(profile.get("avatar")); // /images/profiles/junichi_avatar.jpg
console.log(profile.get("portfolio")); // Array of image paths
console.log(profile.get("socialMedia").get("linkedin")); // /images/social/linkedin_qr.png