/*eslint-disable */

export function checkTextfieldValue(textfield_data) {

    for (let index = 0; index < textfield_data.length; index++) {
        if (textfield_data[index].value === "")
            return false;
    }
    return true;

}
export function checkBoxChecked(checkbox_data) {
    let chek = false
    checkbox_data.map((data) => {
        console.log(data.checked)
        if (data.checked === true)
            chek = true;
    })
    return chek;
}

export function newTextfieldValue(textfield_data, value, name) {
    const newTextfield_data = [...textfield_data];
    textfield_data.map((data, index) => {
        if (data.id === name || data.title === name)
            newTextfield_data[index].value = value;

    })
    return newTextfield_data;
}

export function isRegex(textfield_data, helperText_data) {
    const idRegex = /^[A-za-z0-9]{8,12}$/;
    const pwRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{10,16}$/;
    const nameRegx = /^[가-힣]{2,4}$/
    const phoneRegex = /^\d{2,3}-\d{3,4}-\d{4}$/;
    const affiliationRegex = /^[가-힣a-zA-Z]+$/;

    const newHelperText_data = [...helperText_data];

    textfield_data.map((data) => {
        if (data.title === 'ID') {
            console.log(idRegex.test(data.value))

            if (idRegex.test(data.value)) {
                newHelperText_data[0] = "❤️CORE❤️";
            } else {
                newHelperText_data[0] = "영문자,숫자 8-12자리"
            }

        }

        if (data.title === 'PW') {
            if (pwRegex.test(data.value)) {
                newHelperText_data[1] = "❤️CORE❤️";
            } else {
                newHelperText_data[1] = "영문자 & 숫자 10-16자리"
            }
        }
        if (data.title === '이름') {
            if (nameRegx.test(data.value)) {
                newHelperText_data[2] = "❤️CORE❤️";
            } else {
                newHelperText_data[2] = "한글 2-4자"
            }
        }
        if (data.title === '전화번호') {
            if (phoneRegex.test(data.value)) {
                newHelperText_data[3] = "❤️CORE❤️";
            } else {
                newHelperText_data[3] = "0xx-xxxx-xxxx"
            }
        }
        if (data.title === '소속') {
            if (affiliationRegex.test(data.value)) {
                newHelperText_data[4] = "❤️CORE❤️";
            } else {
                newHelperText_data[4] = "한글,영어로만"
            }
        }
    })


    return newHelperText_data;


}

