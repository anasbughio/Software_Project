document.getElementById("upload-pic").addEventListener("change", function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        document.getElementById("profile-pic").src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("edit-profile").addEventListener("click", function () {
    alert("Profile editing feature coming soon!");
});
