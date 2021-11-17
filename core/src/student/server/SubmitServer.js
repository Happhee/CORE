/*eslint-disable */

export function getGrid_data(type) {
    if (type === 'submit') {

        return [
            { id: 0, title: "Problem", value: "student - submit" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "제목 받아오기" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "문제설명받아오기" },
            {
                id: 5, title: "My Code", input: "학생 제출 코드",
                value: "int a,b,sum=0;" +
                    "scanf(a,b,&a,&b);" +
                    "for(int i=a;i<=b;i++){" +
                    "sum+=sum+i; " +
                    "} " +
                    "printf(sum); "
            }];

    }
    else if (type === 'feedback_success') {
        return [
            { id: 0, title: "Problem", value: "student - feedback_success" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "제목 받아오기" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "문제설명받아오기" },
            {
                id: 5, title: "My Code", input: "학생 제출 코드",
                value: "int a,b,sum=0;" +
                    "scanf(a,b,&a,&b);" +
                    "for(int i=a;i<=b;i++){" +
                    "sum+=sum+i; " +
                    "} " +
                    "printf(sum); "
            }];


    }
    //viewSubmit
    else {
        return [
            { id: 0, title: "Problem", value: "student - viewsubmit" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "제목 받아오기" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "문제설명받아오기" },
            {
                id: 5, title: "My Code", input: "학생 제출 코드",
                value: "int a,b,sum=0;" +
                    "scanf(a,b,&a,&b);" +
                    "for(int i=a;i<=b;i++){" +
                    "sum+=sum+i; " +
                    "} " +
                    "printf(sum); "
            }];
    }
}

export function getInput_data(type) {

    return [
        // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
        // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
        // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
        // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
        // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
        [{ id: "input1", value: '', title: "Input", input: "입력값" },
        { id: "input2", value: '', title: "Input", input: "입력값" },
        { id: "input3", value: '', title: "Input", input: "입력값" },
        { id: "input4", value: '', title: "Input", input: "입력값" },
        { id: "input5", value: '', title: "Input", input: "입력값" },
        { id: "input6", value: '', title: "Input", input: "입력값" },
        { id: "input7", value: '', title: "Input", input: "입력값" },
        { id: "input8", value: '', title: "Input", input: "입력값" },
        { id: "input9", value: '', title: "Input", input: "입력값" },
        { id: "input10", value: '', title: "Input", input: "입력값" }],
        [
            { id: "My Question1", value: '', title: "My Question", input: "질문" },
            { id: "My Question2", value: '', title: "My Question", input: "질문" },
            { id: "My Question3", value: '', title: "My Question", input: "질문" },
            { id: "My Question4", value: '', title: "My Question", input: "질문" },
            { id: "My Question5", value: '', title: "My Question", input: "질문" },
            { id: "My Question6", value: '', title: "My Question", input: "질문" },
            { id: "My Question7", value: '', title: "My Question", input: "질문" },
            { id: "My Question8", value: '', title: "My Question", input: "질문" },
            { id: "My Question9", value: '', title: "My Question", input: "질문" },
            { id: "My Question10", value: '', title: "My Question", input: "질문" }
        ]]



}

export function getOutput_data(type) {
    // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
    // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
    // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
    // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
    // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
    if (type === 'submit' || type === 'viewSubmit')
        return [
            { id: "output1", value: '', title: "Output", input: "결과값" },
            { id: "output2", value: '', title: "Output", input: "결과값" },
            { id: "output3", value: '', title: "Output", input: "결과값" },
            { id: "output4", value: '', title: "Output", input: "결과값" },
            { id: "output5", value: '', title: "Output", input: "결과값" },
            { id: "output6", value: '', title: "Output", input: "결과값" },
            { id: "output7", value: '', title: "Output", input: "결과값" },
            { id: "output8", value: '', title: "Output", input: "결과값" },
            { id: "output9", value: '', title: "Output", input: "결과값" },
            { id: "output10", value: '', title: "Output", input: "결과값" }]

    else {
        return [
            [{ id: "output1", value: '', title: "Output", input: "결과값" },
            { id: "output2", value: '', title: "Output", input: "결과값" },
            { id: "output3", value: '', title: "Output", input: "결과값" },
            { id: "output4", value: '', title: "Output", input: "결과값" },
            { id: "output5", value: '', title: "Output", input: "결과값" },
            { id: "output6", value: '', title: "Output", input: "결과값" },
            { id: "output7", value: '', title: "Output", input: "결과값" },
            { id: "output8", value: '', title: "Output", input: "결과값" },
            { id: "output9", value: '', title: "Output", input: "결과값" },
            { id: "output10", value: '', title: "Output", input: "결과값" }],
            [
                { id: "Teacher's Answer1", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer2", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer3", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer4", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer5", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer6", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer7", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer8", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer9", value: '', title: "Teacher's Answer", input: "답변" },
                { id: "Teacher's Answer10", value: '', title: "Teacher's Answer", input: "답변" }
            ]]
    }

}

export function getQuestion_data() {
    return [
    ]
}
