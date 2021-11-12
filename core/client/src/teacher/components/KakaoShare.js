import React from 'react'
import { post } from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    }
});


class KakaoShare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userName: '',
            open: false
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.addCustomer = this.addCustomer.bind(this)
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
    }
    componentDidMount() {
        window.Kakao.init('YOUR APP KEY');
    }
    componentDidMount() {
        window.Kakao.Link.createDefaultButton({
            container: '#kakao-link-btn',
            objectType: 'feed',
            content: {
                title: '딸기 치즈 케익',
                description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
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
    handleFormSubmit(e) {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            id: '',
            userName: '',
            open: false
        })
    }

    handleValueChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    /* addCustomer() {
         const url = '/api/KakaoShare';
         const formData = new FormData();
         formData.append('id', this.state.id)
         formData.append('name', this.state.userName)
         formData.append('count', this.state.count)
         const config = {
             headers: {
                 'content-type': 'multipart/form-data'
             }
         }
         return post(url, formData, config)
     }*/

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            id: '',
            userName: '',
            count: '',
            open: false
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button marginleft="300px" variant="contained" color="primary" onClick={this.handleClickOpen}>
                    학생 초대
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>학생 초대</DialogTitle>
                    <DialogContent>
                        <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                        <TextField label="단원명" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br />
                    </DialogContent>
                    <div className="Kakao">
                        <a id="kakao-link-btn" href="javascript:;">
                            <img src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                        </a>
                    </div>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}
export default withStyles(styles)(KakaoShare)
