
function submitBooking(event) {
    event.preventDefault(); 
    const form = document.getElementById('bookingForm');
    if (!form) return;

    const packageName = form.package.value || "غير محدد";
    const name = form.name.value;
    const email = form.email.value;

    alert(`تم إرسال الحجز بنجاح!\nالاسم: ${name}\nالباقة/الغرفة: ${packageName}\nالبريد: ${email}\nسوف نتواصل معك قريباً لتأكيد الحجز.`);
    
    form.reset();
}
function submitContact(event) {
    event.preventDefault(); 
    const form = document.getElementById('contactForm');
    if (!form) return;

    const name = form.name.value;
    const email = form.email.value;

    alert(`شكراً لتواصلك معنا، ${name}!\nسوف نرد على بريدك: ${email} في أقرب وقت.`);
    
   
    form.reset();
}
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', submitBooking);
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', submitContact);
    }
});