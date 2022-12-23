function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pwd = document.getElementById("password").value;

    if (uname == "123" && pwd == "321") {
        location.replace("sukses.html");
        alert("Login Berhasil");
    } else {
        alert("Login gagal!")
    }
}