export const validateContactForm = (values) => {
    const errors = {};

    // First Name

    const regF = /^[A-Z][a-z]{1,20}$/;
    if (!regF.test(values.firstName)) {
        errors.firstName = 'First name is required and should be in the the Xxxx format...2-15 chars';
    }

    // Last Name

    const regL = /^[A-Z][a-z]{1,20}$/;
    if (!regL.test(values.lastName)) {
        errors.lastName = 'The Last name should be in the the Xxxx format...2-15 chars';
    }




    //Email
    const regE = /^(\w)+([.-]?\w+)*(@)([\w]+)([.-]?\w+)*\.[a-z]{2,3}$/;
    if (!regE.test(values.email)) {
        errors.email = 'Email improperly formated -- please use: xxxxxx@xxxx.xxx';
    }

    //Feedback
    if (!values.feedback) {
        errors.feedback = 'Feedback Field Required';
    }


    return errors;
};


