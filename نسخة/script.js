const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");


registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', function() {
    
    const sidebar = document.getElementById('sidebar');
    
    document.getElementById('toggleSidebar').addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    document.getElementById('closeSidebar').addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

});

// تسجيل الدخول
let attempt = 0;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    
    const users = [
        { username: 'user1', password: 'pass1', email: 'user1@example.com' },
        { username: 'user2', password: 'pass2', email: 'user2@example.com' }
    ];
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    

    // تحقق من اسم المستخدم وكلمة المرور (يمكنك تعديلها حسب الحاجة)
    if (username === "ramzi" && password === "r123") {
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "Home.html"; // إعادة التوجيه إلى الصفحة الرئيسية
    } else {
        attempt++;
        
        if (attempt >= 3) {
            alert("لقد أدخلت كلمة المرور بشكل خاطئ ثلاث مرات. سيتم إغلاق الموقع.");
            window.close(); // غلق النافذة (قد لا تعمل في بعض المتصفحات)
        } else {
            document.getElementById('errorMessage').innerText = "اسم المستخدم أو كلمة المرور غير صحيحة.";
        }
        
        // إعادة تعيين الحقول
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
    }
}
);
