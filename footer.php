<meta http-equiv='X-UA-Compatible' content="IE=edge;IE=10;IE=9; IE=8; IE=7;IE=6;IE=5;IE=EmulateIE8;IE=EmulateIE7;IE=EmulateIE6 IE=EmulateIE5" requiresActiveX="true">
</div><!--right-->
<div id="about">
<div id="aboutinside"> 
<strong>發行人</strong>：唐　揆 ／ <strong>指導教授</strong>：蔡維奇 ／ <strong>總編輯</strong>：賴思穎 
<br><br>
<strong>製作人</strong>：吳予謙 ／ <strong>美術設計</strong>：王妍心<br>
<br>
<strong>執行單位</strong>：商學院學生事務與校友服務辦公室（OSAAS） <br>
<br>
<strong>協辦同仁</strong>：李靜惠 賴慧倩 蔡明潔  陳嘉純 陳慧琦 張靜尹 蔣彥欣 姜妙蓉
<br>
<br>
</div>
</div>
</div><!--end wrapper-->

<!-- <div id="scholarship">
<div id="scholarshipinside">
吳舜文獎學金之優秀成績獎申請<br><br>
申請時間：102年10月1日至10月31日止<br><br>
申請類型：成績獎--五名，每名獎學金新台幣壹萬元<br><br>
申請條件：商學院在學之二、三、四年級學生<br><br>
前一年學年學業成績總平均八十分以上者。<br><br>
 申請應備文件：申請表、自傳、成績單、在學證明、<br><br>
具代表性的學期報告一篇三份。<br><br>
 請備齊書面資料，於期限內送至OSAAS辦公室(逸仙樓三樓)展億助教。<br><br>
詳細內容可參考：http://osaas.nccu.edu.tw/scholarship
</div>
</div> -->



<div id="footer">
<p>本電子報於每週五出刊，請不吝指教。<br>
<strong>版權歸發行者所有，未經確認授權，嚴禁轉貼節錄。</strong><br>
<strong>政大商學院 </strong>地址: 116台北市文山區指南路二段64號<br>
        電話:(02)2939-3091分機65391 傳真:(02)2938-7524</p></strong>		
</div>
<div id="subscription">
<div id="submitinside">
<form method="post" id="submit" action="submit.php">
<img src="captcha.php" id="captcha" /><br/>
<p onclick="document.getElementById('captcha').src='captcha.php?'+Math.random();
    document.getElementById('captcha-form').focus();"
    id="change-image" style="cursor: pointer;">按我換一個</p><br/>

請輸入驗證碼:<input type="text" name="captcha" id="captcha-form" autocomplete="off" /><?=$_SESSION['captcha_message']?><br/><br/>
<label for="email" class="label">請輸入email:</label> <input name="email" type="text" id="email"><br/><br/>
<input type="submit" />

</form>
</div>
</div>
<?



?>

</body>
</html>
