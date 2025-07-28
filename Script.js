function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // ซ่อนทุกหัวข้อก่อน
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // เอาคลาส active ออกจากทุกปุ่ม
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
  
    // แสดงแท็บที่คลิก และทำปุ่มให้เป็น active
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
  }
  
  // เปิดแท็บแรกโดยอัตโนมัติ
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablink").click();
  });
  