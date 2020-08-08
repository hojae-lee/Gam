<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<script>
window.onload = function(){
	
		var pieData = {
			  ���: 500,
			  ȣ��: 200,
			  ��纣��: 666,
			  ġ��: 54,
			  ����: 120		
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
		    title: "������ ����",
		  },
		});

		var chartDonutColors = chartDonut.data.colors();
		$("#text-apple").css("color", chartDonutColors["���"]);
		$("#text-walnut").css("color", chartDonutColors["ȣ��"]);
		$("#text-berry").css("color", chartDonutColors["��纣��"]);
		$("#text-cheese").css("color", chartDonutColors["ġ��"]);
		$("#text-strawberry").css("color", chartDonutColors["����"]);
}	
</script>
<<c:out value="${req_Start }"></c:out>
<%-- <<c:out value="${req_End }"></c:out>
<<c:out value="${req_Schedule }"></c:out> --%>

<div class="container">
	<div class="row" style="border: 1px solid; border-radius: 10px">
	<div class="panel panel-primary col-md-6 col-sm-4" style="background-color: yellow; height: 500px;" >
	 <div class="panel-heading">����</div>
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
				  <div class="panel-heading">����</div>
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
	