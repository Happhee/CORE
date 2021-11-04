export function checkTextfieldValue(textfield_data) {

    for (let index = 0; index < textfield_data.length; index++) {
        if (textfield_data[index].value == "")
            return false;
    }
    return true;

}

