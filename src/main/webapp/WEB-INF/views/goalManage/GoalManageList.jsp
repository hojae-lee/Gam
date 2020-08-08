<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>
window.onload = function(){
	
		var pieData = {
			  사과: 500,
			  호두: 200,
			  블루베리: 666,
			  치즈: 54,
			  딸기: 120		
			};
		var chartDonut = c3.generate({
		  bindto: "#piechart",
		  data: {
		    json: [pieData],
		    keys: {
		      value: Object.keys(pieData),
		    },
		    type: "donut",
		  },
		  donut: {
		    title: "파이의 종류",
		  },
		});

		var chartDonutColors = chartDonut.data.colors();
		$("#text-apple").css("color", chartDonutColors["사과"]);
		$("#text-walnut").css("color", chartDonutColors["호두"]);
		$("#text-berry").css("color", chartDonutColors["블루베리"]);
		$("#text-cheese").css("color", chartDonutColors["치즈"]);
		$("#text-strawberry").css("color", chartDonutColors["딸기"]);
}	
</script>
<<c:out value="${req_Start }"></c:out>
<%-- <<c:out value="${req_End }"></c:out>
<<c:out value="${req_Schedule }"></c:out> --%>

<div class="container">
	<div class="row" style="border: 1px solid; border-radius: 10px">
	<div class="panel panel-primary col-md-6 col-sm-4" style="background-color: yellow; height: 500px;" >
	 <div class="panel-heading">진행</div>
	 <div class="panel-body">
		<div id="piechart" style="height: 470px; ">
			<div class="panel-heading"></div>
			<div style="text-align:center">
			  <span id="text-apple"></span>
			  <span id="text-walnut"></span>
			  <span id="text-berry"></span>
			  <span id="text-cheese"></span>
			  <span id="text-strawberry"></span>
			</div>
		</div>
		</div>
	</div>
		<div class="col-md-6 col-sm-4" style="background-color: green; height: 500px; ">
			<div style="background-color: red; height: 100%">
				<div class="panel panel-primary">
				  <div class="panel-heading">예정</div>
				  <div class="panel-body">
				    Panel content
				  </div>
				</div>
			</div>
		</div>
	</div>
	<h1>
		zzzzzzzzzzzzzzzzzzz
	</h1>
	<div class="col-md-12" style="background-color: blue; height: 300px">
		dfdfsdfsdfsdfsdfsf	
	</div>
	
</div>
	