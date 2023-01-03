/* --------------------------------- 유효성 검사 ---------------------------------- */
/* form_check _ S */
function form_check(){
    var u_id = document.getElementById("u_id");
    var pwd = document.getElementById("pwd");
    // 아이디
    if(!u_id.value){
        var txt=document.getElementById("err_u_id");
        txt.textContent = "아이디를 입력하세요";
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
/* form_check _ E */
};
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