/*==========================Show Menu=====================*/
/*==========Menu Show===============*/
/* Validate if constant exists*/

/*=================Remove Menu Mobile=============== */
/*=================Scroll Sections Active Link=============== */
/*=================Change Backgraoud Header=============== */
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater than 80 viewport height, add the scroll-header class to header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);
/*=================Show Roll Up=============== */
/*=================About Tabs=============== */
const tabs = document.querySelectorAll('[data-target'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);


        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');

        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        tab.classList.add('tab__active');
    });
});
/*=================Contact Form=============== */

const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactSubject = document.getElementById('contact-subject'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-messagee');

const sendEmail = (e) => {

    e.preventDefault();
    
    //check if the field has a value 
    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '') {
        //Show message
        errorMessage.textContent = 'Write all the input fields'
    }
    else {
        // ServiceID, TempleID, #form, public key
        emailjs.sendForm('service_8dd44bj',
            'template_06usf0h',
            'contact-form',
            '497qMowTLPtw8FTDQ'
        ).then(() => {
            // Show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message sent ✔️';

            //After 5 second message will remove
            setTimeout(() => {
                errorMessage.textContent = '';

            }, 5000);
        }, (error) => {
            alert('OOPS! SOMETING WENT WRONG...', error);
        }
        );

        //Clear input fields
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';

    }
};
contactForm.addEventListener('submit', sendEmail);