let sidebar = document.querySelector('.sidebar');

// Sidebar HTML tag
sidebar.innerHTML = `
<nav>
    <div class='nav-title'>
        <div class='logo'><img src='../images/logo.png' alt=''></div>
            <div class='nav-text'>
                <h3>Human Body System</h3>
            </div>
            <div class='nav-toggle'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </nav>
    <ul class='nav-menu'>
        <div class='nav-top'>
            <li><a href='../index.html'><i class='fa-solid fa-house'></i> หน้าแรก</a></li>
            <li><a href='../page/lesson.html'><i class='fa-solid fa-book-open'></i> บทเรียน</a></li>
            <li><a href='../page/metaverse.html'><i class='fa-solid fa-vr-cardboard'></i> โลกจำลอง</a></li>
            <li><a href='#'><i class='fa-solid fa-file-lines'></i> แบบทดสอบ</a></li>
        </div>
        <div class='nav-bottom'>
            <li><a href='#'><i class='fa-solid fa-circle-question'></i> วิธีการใช้งาน</a></li>
            <li><a href='#'><i class='fa-solid fa-user'></i> โปรไฟล์</a></li>
        </div>
    </ul>
</nav>
`;

// Sidebar toggle
const nav_toggle = document.querySelector('.nav-toggle');
const sizebar = document.querySelector('.sidebar');
nav_toggle.addEventListener('click', () => {
    nav_toggle.classList.toggle('nav-active');
    sizebar.classList.toggle('open');
});

