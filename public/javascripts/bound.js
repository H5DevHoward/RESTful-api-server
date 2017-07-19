const goSignUpDom = document.getElementsByClassName('go-signup')[0];
const goSignInDom = document.getElementsByClassName('go-signin')[0];
const rightWrapperDom = document.getElementsByClassName('right-wrapper')[0];

if(location.hash === '#signup') {
    rightWrapperDom.classList.add('signup');
}

goSignUpDom.addEventListener('click', () => {
     history.pushState({action: 'go-signup'}, '', '#signup');
     rightWrapperDom.classList.add('signup');
});

goSignInDom.addEventListener('click', () => {
     history.pushState({action: 'go-signin'}, '', '#');
     rightWrapperDom.classList.remove('signup');
});

window.onpopstate = event => {
    console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    if(location.hash === '#signup') {
        rightWrapperDom.classList.add('signup');
    }else {
        rightWrapperDom.classList.remove('signup');
    }
};
