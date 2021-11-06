
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