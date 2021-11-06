
export function getGrid_data(type) {
    if (type === 'register') {

        return [
            { id: 0, value: "problemAdd" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Answer Code", input: "정답 코드", value: "" }];

    }
    else if (type === 'modify') {
        return [
            { id: 0, value: "problemAdd" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Answer Code", input: "정답 코드", value: "" }];
    }
    else {
        return [
            { id: 0, value: "problemFeedBack" },
            { id: 1, title: "Problem - Chapter", value: "단원" },
            { id: 2, title: "Problem - Number", value: "소문제번호" },
            { id: 3, title: "Problem Title", input: "문제명", value: "" },
            { id: 4, title: "Problem Description", input: "문제 상세 설명", value: "" },
            { id: 5, title: "Student - ID", input: "학생 아이디", value: "" },
            { id: 6, title: "Student - Name", input: "학생 이름", value: "" },
            { id: 7, title: "Student - Code", input: "학생 제출 코드", value: "" }];
    }
}

export function getInput_data(type) {
    if (type === 'register') {

        return [

            { id: "input1", value: '', title: "Input", input: "입력값" },
            { id: "input2", value: '', title: "Input", input: "입력값" },
            { id: "input3", value: '', title: "Input", input: "입력값" },
            { id: "input4", value: '', title: "Input", input: "입력값" },
            { id: "input5", value: '', title: "Input", input: "입력값" },
            { id: "input6", value: '', title: "Input", input: "입력값" },
            { id: "input7", value: '', title: "Input", input: "입력값" },
            { id: "input8", value: '', title: "Input", input: "입력값" },
            { id: "input9", value: '', title: "Input", input: "입력값" },
            { id: "input10", value: '', title: "Input", input: "입력값" }]
    }
    else if (type === 'modify') {
        return [
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            { id: "input1", value: '', title: "Input", input: "입력값" },
            { id: "input2", value: '', title: "Input", input: "입력값" },
            { id: "input3", value: '', title: "Input", input: "입력값" },
            { id: "input4", value: '', title: "Input", input: "입력값" },
            { id: "input5", value: '', title: "Input", input: "입력값" },
            { id: "input6", value: '', title: "Input", input: "입력값" },
            { id: "input7", value: '', title: "Input", input: "입력값" },
            { id: "input8", value: '', title: "Input", input: "입력값" },
            { id: "input9", value: '', title: "Input", input: "입력값" },
            { id: "input10", value: '', title: "Input", input: "입력값" }]


    }
    else {
        return [
            { id: "question1", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question2", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question3", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question4", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question5", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question6", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question7", value: '', title: "Student - Question", input: "학생 질문" },
            { id: "question8", value: '', title: "Student - Question", input: "학생 질문" }]
    }
}

export function getOutput_data(type) {
    if (type === 'register') {

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
    }
    else if (type === 'modify') {
        return [
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!
            // 실제로는 서버로부터 가져와야함!!!!!!!!!!!!!!!!!!!!!

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

    }
    else {
        return [
            { id: "answer1", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer2", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer3", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer4", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer5", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer6", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer7", value: '', title: "Teacher - Answer", input: "선생님 답변" },
            { id: "answer8", value: '', title: "Teacher - Answer", input: "선생님 답변" }]
    }
}