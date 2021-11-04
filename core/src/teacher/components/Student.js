/*eslint-disable */

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
class Student extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }
    state = {
        boards: [
            {
                brdno: 1,
                id: 'aaa',
                name: '김기기',
                phone: '010-1111-1111',
                school: '세종초등학교'
            },
            {
                brdno: 2,
                id: 'bbb',
                name: '김니니',
                phone: '010-2222-2222',
                school: '세종초등학교'
            },
            {
                brdno: 3,
                id: 'ccc',
                name: '김디디',
                phone: '010-3333-3333',
                school: '세종초등학교'
            }
        ]
    }
    componentDidMount() {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('d1a90c494e1cdb68196c4145544ffac1');

        }
<<<<<<< Updated upstream
        window.Kakao.init('d1a90c494e1cdb68196c4145544ffac1');
=======
<<<<<<< HEAD

=======
        window.Kakao.init('d1a90c494e1cdb68196c4145544ffac1');
>>>>>>> [add]위에 헤드 달았어유
>>>>>>> Stashed changes

        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '딸기 치즈 케익',
                description: '여기 링크~!~!',
                imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                    mobileWebUrl: 'https://cheonmro.github.io/',
                    webUrl: 'https://cheonmro.github.io/'
                }
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845
            },
            buttons: [
                {
                    title: '웹으로 보기',
                    link: {
                        mobileWebUrl: 'https://cheonmro.github.io/',
                        webUrl: 'https://cheonmro.github.io/'
                    }
                },
                {
                    title: '앱으로 보기',
                    link: {
                        mobileWebUrl: 'https://cheonmro.github.io/',
                        webUrl: 'https://cheonmro.github.io/'
                    }
                }
            ]
        });
    }

    render() {
        const { boards } = this.state;

        return (
            <div className="main_div">
                < table border="1" >
                    <tbody>
                        <tr align="center">
                            <td width="100">No</td>
                            <td width="200">아이디</td>
                            <td width="200">이름</td>
                            <td width="400">전화번호</td>
                            <td width="200">소속</td>
                        </tr>
                        {
                            boards.map(row =>
                                (<BoardItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table >
                <div className="Kakao">
                    <p></p>
                    <a id="kakao-link-btn" href="javascript:;">
                        <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                    </a>
                </div>            </div >
        );
    }
}
export default Student;

class BoardItem extends React.Component {
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }
    render() {
        return (
            <tr>
                <td>{this.props.row.brdno}</td>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.name}</td>
                <td>{this.props.row.phone}</td>
                <td>{this.props.row.school}</td>
                <td><button onClick={this.handleRemove}>삭제</button></td>
            </tr>
        );
    }
}

const useStyles = makeStyles(() => ({
    container: {                          // container이름의 객체에 스타일링 해주기
        backgroundColor: 'black',
        marginTop: '100px'
    },
    buttons: {                            // buttons 이름의 객체에 스타일링 해주기
        paddingLeft: '20px'
    }
}));