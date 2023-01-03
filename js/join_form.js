/* --------------------------------- 유효성 검사 ---------------------------------- */
/* form_check _ S */
function form_check(){
    var u_name = document.getElementById("u_name");
    var u_id = document.getElementById("u_id");
    var pwd = document.getElementById("pwd");
    var pwdck = document.getElementById("pwdck");
    var mobile = document.getElementById("mobile");
    var birth = document.getElementById("birth");
    var agree = document.getElementById("agree");

    // 이름
    if(!u_name.value){
        var txt=document.getElementById("err_u_name");
        txt.textContent = "이름을 입력하세요";
        u_name.focus();
        return false;
    };
    var u_name_reg = /^[ㄱ-힣a-zA-Z]+$/g;
    if( !u_name_reg.test(u_name.value) ){
        var txt = document.getElementById("err_u_name");
        txt.textContent = "이름은 한글과 영어만 입력가능합니다";
        u_name.focus();
        return false;
    };
    // 아이디
    if(!u_id.value){
        var txt=document.getElementById("err_u_id");
        txt.textContent = "아이디를 입력하세요";
        u_id.focus();
        return false;
    };
    var id_len = u_id.value.length;
    if(id_len < 4 || id_len > 12){
        var txt = document.getElementById("err_u_id");
        txt.textContent = "아이디는 4~12글자만 입력할 수 있습니다";
        u_id.focus();
        return false;
    };
    var u_id_reg = /^[A-Za-z0-9+]*$/;
    if( !u_id_reg.test(u_id.value) ){
        var txt = document.getElementById("err_u_id");
        txt.textContent = "아이디는 영어 또는 숫자만 입력할 수 있습니다";
        u_id.focus();
        return false;
    };
    // 비밀번호
    if(!pwd.value){
        var txt=document.getElementById("err_pwd");
        txt.textContent = "비밀번호를 입력하세요";
        pwd.focus();
        return false;
    };
    var pw_len = pwd.value.length;
    if(pw_len < 4 || pw_len > 12){
        var txt = document.getElementById("err_pwd");
        txt.textContent = "비밀번호는 4~12글자만 입력할 수 있습니다";
        pwd.focus();
        return false;
    };
    var pwd_reg = /^[A-Za-z0-9+]*$/;
    if( !pwd_reg.test(pwd.value) ){
        var txt = document.getElementById("err_pwd");
        txt.textContent = "비밀번호는 영어 또는 숫자만 입력할 수 있습니다";
        pwd.focus();
        return false;
    };
    // 비밀번호 확인
    if(!pwdck.value){
        var txt=document.getElementById("err_pwdck");
        txt.textContent = "비밀번호 확인을 입력하세요";
        pwdck.focus();
        return false;
    };
    if(pwd.value!=pwdck.value){
        var txt=document.getElementById("err_pwdck");
        txt.textContent = "비밀번호가 일치하지 않습니다";
        pwdck.focus();
        return false;
    };
    /* 전화번호 */
    if(!mobile.value){
        var txt=document.getElementById("err_mobile");
        txt.textContent = "전화번호를 입력하세요";
        mobile.focus();
        return false;
    };
    var mobile_reg = /^[0-9]+$/g;
    if( !mobile_reg.test(mobile.value) ){
        var u_name = document.getElementById("unm_id");
        var txt = document.getElementById("err_mobile");
        txt.textContent = "전화번호는 숫자만 입력할 수 있습니다";
        mobile.focus();
        return false;
    };
    /* 생년월일 */
    if(!birth.value){
        var txt=document.getElementById("err_birth");
        txt.textContent = "생년월일을 입력하세요";
        birth.focus();
        return false;
    };
    var birth_len = birth.value.length;
    if(birth_len < 8 || 8 > birth_len){
        var txt = document.getElementById("err_birth");
        txt.textContent = "8자리 숫자로 입력하세요";
        birth.focus();
        return false;
    };
    var birth_reg = /^[0-9]*$/;
    if( !birth_reg.test(birth.value) ){
        var txt = document.getElementById("err_birth");
        txt.textContent = "생년월일은 숫자만 입력가능합니다";
        birth.focus();
        return false;
    };
    /* 약관동의 */
    if(!agree.checked){
        var txt=document.getElementById("err_agree");
        txt.textContent = "약관동의가 필요합니다";
        agree.focus();
        return false;
    };
};
/* form_check _ E */

/* 비밀번호 보이기 */
// Check javascript has loaded
$(document).ready(function(){
    // Click event of the showPassword button
    $('#show_pwd').on('click', function(){
        // Get the password field
        var passwordField = $('#pwd');
        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');
        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');
            // Change the Text on the show password button to Hide
            $(this).val('Hide');
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');
            // Change the value of the show password button to Show
            $(this).val('Show');
        }
    });
});

/* 비밀번호 확인 보이기 */
// Check javascript has loaded
$(document).ready(function(){
    // Click event of the showPassword button
    $('#show_pwdck').on('click', function(){
        // Get the password field
        var passwordField = $('#pwdck');
        // Get the current type of the password field will be password or text
        var passwordFieldType = passwordField.attr('type');
        // Check to see if the type is a password field
        if(passwordFieldType == 'password')
        {
            // Change the password field to text
            passwordField.attr('type', 'text');
            // Change the Text on the show password button to Hide
            $(this).val('Hide');
        } else {
            // If the password field type is not a password field then set it to password
            passwordField.attr('type', 'password');
            // Change the value of the show password button to Show
            $(this).val('Show');
        }
    });
});

/* ---------------------------------주소 검색------------------------------------ */
function sample6_execDaumPostcode() {
    new daum.Postcode({
    oncomplete: function(data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
    
        // 각 주소의 노출 규칙에 따라 주소를 조합한다.
        // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
        var addr = ''; // 주소 변수
        var extraAddr = ''; // 참고항목 변수
    
        //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
        if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
            addr = data.roadAddress;
        } else { // 사용자가 지번 주소를 선택했을 경우(J)
            addr = data.jibunAddress;
        }
    
        // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
        if(data.userSelectedType === 'R'){
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraAddr !== ''){
                extraAddr = ' (' + extraAddr + ')';
            }
            // 조합된 참고항목을 해당 필드에 넣는다.
            document.getElementById("d_addr").value = extraAddr;
        
        } else {
            document.getElementById("d_addr").value = '';
        }
    
        // 우편번호와 주소 정보를 해당 필드에 넣는다.
        document.getElementById("post").value = data.zonecode;
        document.getElementById("b_addr").value = addr;
        // 커서를 상세주소 필드로 이동한다.
        document.getElementById("d_addr").focus();
    }
    }).open();
};