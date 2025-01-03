$(function(){
    // ตรวจสอบว่า class "open" ยังไม่ได้ถูกเพิ่ม
    if (!$('.envelope').hasClass('open')){
        // เพิ่ม event click สำหรับซองจดหมาย
        $('.envelope').click(function(){
            // ลบ class "new" และเพิ่ม class "open"
            $(this).removeClass('new').addClass('open');
        });
    }
});
