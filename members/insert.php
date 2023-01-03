<?php 
$table_name = "members";
$u_name = $_POST["u_name"];
$u_id = $_POST["u_id"];
$pwd = $_POST["pwd"];
$mobile = $_POST["mobile"];
$birth = $_POST["birth"];
$email = $_POST["email"];
$ps_code = $_POST["ps_code"];
$b_addr = $_POST["b_addr"];
$d_addr = $_POST["d_addr"];
$reg_date = date("Y-m-d");

/* echo "<p>테이블명 : ".$table_name."</p>";
echo "<p>이름 : ".$u_name."</p>";
echo "<p>아이디 : ".$u_id."</p>";
echo "<p>비밀번호 : ".$pwd."</p>";
echo "<p>전화번호 : ".$mobile."</p>";
echo "<p>생년월일 : ".$birth."</p>";
echo "<p>이메일 : ".$email."</p>";
echo "<p>우편번호 : ".$ps_code."</p>";
echo "<p>기본주소 : ".$b_addr."</p>";
echo "<p>상세주소 : ".$d_addr."</p>";
echo "<p>가입일 : ".$reg_date."</p>";
exit; */

include "../inc/dbcon.php";

$sql = "insert into $table_name";
$sql .= "(u_name, u_id, pwd, mobile, birth, email, ps_code, b_addr, d_addr, reg_date)";
$sql .= "values";
$sql .= "('$u_name', '$u_id', '$pwd', '$mobile', '$birth', '$email', '$ps_code', '$b_addr', '$d_addr', '$reg_date');";
/* echo $sql;
exit; */

mysqli_query($dbcon, $sql);

mysqli_close($dbcon);

echo"
<script type='text/javascript'>
    alert('회원가입이 완료되었습니다');
    location.href='../login/login.php';
</script>";

?>
