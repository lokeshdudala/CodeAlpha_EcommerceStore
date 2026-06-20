function logout(){

    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    window.location.href = "login.html";
}