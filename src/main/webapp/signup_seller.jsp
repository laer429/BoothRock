<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>  
<%
    String phone_number = (String)request.getParameter("phone_number");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>모든 축제의 부스를 담다 - 부스락</title>
    <link rel="stylesheet" href="resources/css/signup.css" type="text/css">
    <script type="text/javascript" src="resources/js/jquery-1.12.3.js"></script>
    <script type="text/javascript" src="resources/js/signup_seller.js"></script>
</head>
<body>
    <%@ include file="header.jsp" %>
    
    <div class="bodywrap" style="margin: 110px 0px 170px;">
    	<div class="signup-form" style="height: 525px;">
    		<h1 style="font-weight: 500; text-align: left;">회원가입</h1>
		    <hr>
    		<form action = "create_account_seller" class="input-form" method="post">
    			<div>
    				<i class="fa-regular fa-user"></i>
					<input type="email" id="user_id" name="user_id" placeholder="이메일" required>
					<button type ="button" id= "emailConfirm">중복확인</button>
    			</div>
    			<div id="password_box">
    				<i class="fa-solid fa-unlock-keyhole"></i>
					<input type="password" id="user_password" name="user_password" placeholder="비밀번호" required>
    				<output id="passwordMessage" style="color: red; font-size : 10px; margin-top: 4px;"></output>
    			</div>
    			<div id="password_box2">
    				<i class="fa-solid fa-unlock-keyhole"></i>
					<input type="password" id="user_password2" name="user_password2" placeholder="비밀번호 찾기" required>
					<output id="passwordMessage2" style="color: red; font-size : 10px; margin-top: 4px;"></output>
    			</div>
    			<div>
    				<i class="fa-regular fa-user"></i>
	    			<input type="text" id="user_name" name="user_name" placeholder="이름" required>
    			</div>
    			<div>
    				<i class="fa-solid fa-mobile-screen"></i>
	    			<input type="text" id="user_tel" name="user_tel" value="<%= phone_number %>" placeholder="전화번호" readonly>
    			</div>
    			<div>
    				<i class="fa-regular fa-address-card"></i>
    				<input type="text" id="selling_number" name="selling_number" placeholder="사업자등록번호" required>
					<button type ="button" id="auth">인증하기</button>
    			</div>
    			<input type="checkbox" id="termsCheckbox"><a href="agree.jsp" target="_blank">개인정보 수집, 조회, 활용 동의서 보기 > </a>
    			<a href="signup_type.jsp" class="behind" style="margin-right: 10px;">뒤로가기</a>
    			<input type="submit" class="signup" value="회원가입">
    		</form>
    	</div>
    </div>
    
    <%@ include file="footer.jsp" %>
    
</body>
</html>
