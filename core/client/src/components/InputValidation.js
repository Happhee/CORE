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


