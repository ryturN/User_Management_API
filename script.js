const fetchUsersButton = document.getElementById("fetchUsers");
const userList = document.getElementById("userList");

fetchUsersButton.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:3000/api/users");
        const users = await response.json();

        userList.innerHTML = "<h2>Users:</h2>";
        users.forEach((user) => {
            userList.innerHTML += `<p>${user.username}</p>`;
        });
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});