
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const roleSelect = document.getElementById('role');
    const loginButton = document.getElementById('loginButton');
    const togglePassword = document.getElementById('togglePassword');
    const icon = togglePassword.querySelector('i');
    const emailError = document.getElementById('emailError');


    document.getElementById('username').addEventListener("input",check)
    document.getElementById('password').addEventListener("input",check)
    document.getElementById('role').addEventListener("input",check)

    function check() {
        if (usernameInput.value && passwordInput.value && roleSelect.value) {
            loginButton.disabled = false;
        } else {
            loginButton.disabled = true;
        }

        const usernamePattern = /^[0-9]/;
        if (usernamePattern.test(username.value)) {
            emailError.textContent = "";
        } else {
            emailError.textContent = "Please Enter your ID";

        }
    }


    function go(){
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Application-Key': 'TUecac773883f2433fc71a4432562774ce8872bf7fc11dfa548c5808ba62166ed387af71abcc56b4f6da1014ea0197c7d6' // ใส่ token ใน Authorization Header
            },
            body: JSON.stringify({ UserName : usernameInput , PassWord : passwordInput}) // ส่งข้อมูลเป็น JSON
        })
        .then(response => response.json()) // แปลง response กลับมาเป็น JSON
        .then(json =>{
            console.log(json);
            document.getElementById("space1").innerText = json.displayname_en;
            document.getElementById("space2").innerText = json.username;
            document.getElementById("space3").innerText = json.type;
   
        });
    }

 
    togglePassword.addEventListener('click', function() {
        const passwordInput = document.getElementById('password');
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // แสดงหรือซ่อนรหัส
        if (type === 'password') {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });