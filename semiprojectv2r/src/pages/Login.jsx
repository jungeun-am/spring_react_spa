import {useRef, useState} from "react";
import "../styles/member.css"

// 폼 재설정 함수

// 암호화 함수

// 로그인 처리 함수 + 로그인 요청을 서버에 보내는 함수
const processLoginok = async (values) => {
    fetch("http://localhost:8080/api/auth/signin", { // 서버의 로그인 API 주소
        method: "POST", // 로그인 정보를 서버에 보내는 방식 (POST)
        headers: {
            "Content-Type": "application/json" // JSON 형식으로 데이터를 보낸다는 설정
        },
        body: JSON.stringify(values),  // 사용자가 입력한 로그인 정보를 JSON 형태로 변환하여 보냄
    }).then(async response => {
        if (response.ok) {  // 서버 응답이 정상일 경우
            alert('로그인 성공!!'); // 로그인 성공 알림창 띄우기
            location.href="/member/myinfo"; // 로그인 후 마이페이지로 이동
        } else if (response.status === 400) { // 입력 오류가 있는 경우
            alert(await response.text());  // 서버에서 보낸 오류 메시지 출력
        }
    }).catch(error => {  // 서버와의 통신 중 오류가 발생한 경우
        console.log(error);   // 콘솔에 오류 출력
        alert('서버와 통신하는 중 오류가 발생했습니다!!'); // 오류 알림창 띄우기
    });
};

// Login 함수 컴포넌트 정의 + 로그인 화면을 표시하는 함수형 컴포넌트
const Login = () => {
    // 폼 처리 관련 변수 선언
    const formLoginRef = useRef(null); // 폼 요소에 접근하기 위한 ref 변수 생성
    const [errors, setErrors] = useState({}); // 입력 오류 메시지를 저장하는 state 변수

    // 폼 처리 관련 함수 선언 +  로그인 버튼 클릭 시 실행되는 함수
    const handleLoginSubmit = (e) => {
        e.preventDefault();  // 폼이 기본적으로 제출되는 것을 막음

        // 폼에 입력된 데이터들 가져오기
        const formData = new FormData(formLoginRef.current);
        const formValues = Object.fromEntries(formData.entries());

        // 유효성 검사 실시 (아이디와 비밀번호가 올바르게 입력되었는지 확인)
        const formErrors = validateLoginForm(formValues);

        // 유효성 검사 결과에 따라 개별 처리
        if (Object.keys(formErrors).length === 0) {
            console.log('로그인 요청데이터 : ', formValues);
            processLoginok(formValues);  // 로그인 처리 함수 실행
        } else {
            setErrors(formErrors); // 오류 메시지를 화면에 표시하기 위해 state 업데이트
            console.log(formErrors); // 콘솔에 오류 내용 출력
        }
    }

    // 폼 유효성 검사 함수
    const validateLoginForm = (values) => {
        let formErrors = {}; // 오류 메시지를 저장할 객체

        // 아이디 검사
        if (!values.userid) {
            formErrors.userid = '아이디를 입력하세요!!';
        } else if (values.userid.length < 6) {
            formErrors.userid = '아이디는 6자 이상이어야 합니다!!';
        }

        // 비밀번호 검사
        if (!values.passwd) {
            formErrors.passwd = '비밀번호를 입력하세요!!';
        } else if (values.passwd.length < 6) {
            formErrors.passwd = '비밀번호는 6자 이상이어야 합니다!!';
        }

        return formErrors; // 오류 메시지 반환
    }

    return (
        <main id="content">
            <h2>로그인</h2>
            <form name="loginfrm" id="loginfrm" method="post"
                  ref={formLoginRef} onSubmit={handleLoginSubmit} noValidate>
                <div className="form-floating my-2">
                    <input type="text" name="userid" id="userid"
                           className={`form-control ${errors.userid ? 'is-invalid' : ''}`}
                           required placeholder="아이디"/>
                    <label htmlFor="userid" className="form-label">아이디</label>
                    {errors.userid && <div className="invalid-feedback">{errors.userid}</div>}
                </div>

                <div className="form-floating my-2">
                    <input type="password" name="passwd" id="passwd"
                           className={`form-control ${errors.passwd ? 'is-invalid' : ''}`}
                           required placeholder="비밀번호"/>
                    <label htmlFor="passwd" className="form-label">비밀번호</label>
                    {errors.passwd && <div className="invalid-feedback">{errors.passwd}</div>}
                </div>

                <div className="my-2 d-flex justify-content-center">
                    <img src="/image/captcha.png"/>
                </div>

                <div className="d-flex justify-content-center py-2 gap-2">
                    <button type="submit" className="btn btn-primary">
                        <i className="fa-solid fa-right-to-bracket"></i> 로그인
                    </button>
                    <button type="button" className="btn btn-danger">
                        <i className="fa-solid fa-key"></i> 비밀번호찾기
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Login;