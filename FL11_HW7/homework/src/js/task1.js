let userEmail = prompt('Please provide your email');
let minEmailLength = 6;
let minPassLength = 5;
if (userEmail === null || userEmail === '') {
    alert('Canceled');
} else {
    if (userEmail.length < minEmailLength) {
        alert('I don`t know any emails having name length less than 6 symbols');
    } else {
        if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
            let userPass = prompt('Please provide your password');
            if (userPass === '' || userPass === null) {
                alert('Canceled');
            } else {
                if (userPass === 'AdminPass' && userEmail === 'admin@gmail.com' ||
                    userPass === 'UserPass' && userEmail === 'user@gmail.com') {
                    let newPassRequest = confirm('Do you want to change your password?');
                    if (newPassRequest === true) {
                        let oldPass = prompt('Please enter your old password');
                        if (oldPass === userPass && userEmail === 'admin@gmail.com' ||
                            oldPass === userPass && userEmail === 'user@gmail.com') {
                            let newPass = prompt('Please enter your new password,');
                            if (newPass.length < minPassLength) {
                                alert('It�s too short password. Sorry.');
                            } else {
                                let newPassCheck = prompt('Please enter your new password again');
                                if (newPass === newPassCheck) {
                                    alert('You have successfully changed your password.');
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            }
                        } else {
                            alert('Wrong password');
                        }
                    } else {
                        alert('You have failed the change.');
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('I don�t know you');
        }
    }
}