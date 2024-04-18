document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("user"));
    let userActions = document.getElementById("user-actions");
  
    if (user) {
      userActions.innerHTML = `
                  <p style="color: #007bff">${user.username} <i onclick=logout() class="fa-solid fa-right-from-bracket" style="cursor: pointer"></i></p>
                  
              `;
    } else {
      userActions.innerHTML = `
                <a href="../html/dangNhap.html" class="nav-link">TÀI KHOẢN</a>
              `;
    }
  });
  
  function logout() {
    localStorage.removeItem("user");
    location.reload();
  }
  