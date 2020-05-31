<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- 한글깨짐 방지 태그 -->
<%@ page contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ page session="false" %>
<html>

<head>
	<title>Home</title>
	<!-- 라이브러리/js 경로 설정. -->
	<script src="${pageContext.request.contextPath}/resources/lib/jquery-3.5.1.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/lib/sweetalert2.all.min.js"></script>
	<script src="${pageContext.request.contextPath}/resources/js/jsTest.js"></script>
</head>
<script>
	function button1() {
		// Swal Test
		Swal.fire({
			title: 'Sweet!',
			text: 'Modal with a custom image.',
			imageUrl: 'https://unsplash.it/400/200',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
		})
	}
</script>

<body>
	<h1>
		Hello world!
	</h1>

	<P> The time on the server is ${serverTime}. </P>
	<button onclick="button1();">라이브러리연동버튼</button>
	<button onclick="jsTest();">js연동버튼</button>
</body>

</html>
