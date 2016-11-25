<?php
session_start();
/** Validate captcha */
if(isset($_SESSION['captcha_message']))unset($_SESSION['captcha_message']);
if (!empty($_REQUEST['captcha'])) {
    if (empty($_SESSION['captcha']) || trim(strtolower($_REQUEST['captcha'])) != $_SESSION['captcha']) {
        $captcha_message = "您的驗證碼輸入錯誤！";
		//$_SESSION['captcha_message']=$captcha_message;
		//echo $_SESSION['captcha'];
		
		echo("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><script>alert('您的驗證碼輸入錯誤！');</script>");
		$url = "index.php";
		echo "<script type='text/javascript'>";
		echo "window.location.href='$url'";
		echo "</script>";
		
    } else {
        $captcha_message = "Valid captcha";
        // 連結資料庫
		$dbhost = "localhost"; //資料庫網址或IP
		$dbusername = "osaas"; //資料庫帳號
		$dbuserpassword = "29393091"; //資料庫密碼
		$default_dbname = "nccu_project";//資料庫名稱
		$connection = mysql_pconnect($dbhost, $dbusername, $dbuserpassword) or die("無法連結資料庫！");
		$db = mysql_select_db($default_dbname, $connection) or die("無法選擇資料庫");

		$email = $_POST["email"];
		$date=date("Y-m-d H:i:s");
		$sql="INSERT INTO un_email(uu_email,uu_date) VALUES ('$email','$date')";
		$result=mysql_query($sql);

		echo("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><script>alert('您已成功訂閱電子報！');</script>");
		$url = "index.php";
		echo "<script type='text/javascript'>";
		echo "window.location.href='$url'";
		echo "</script>"; 
    }
    unset($_SESSION['captcha']);
}


?>