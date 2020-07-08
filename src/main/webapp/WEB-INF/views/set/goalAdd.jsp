<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/set.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/daterangepicker.css">
    
	<div id="content">
		<form name="regGoal" method="post" action="regGoal">
			<table class="table">
			
				<thead>
					<th>
						<div class="input-group mb-2">
							<input type="text" name="titleText" class="form-control" style="width:70%" placeholder="목표 제목을 입력해주세요">
							<input type="text" name="titlePeri" class="form-control peri" style="width:30%; font-size:20px" placeholder="전체 기간 설정">
						</div>
					</th>
				</thead>
				
				<tbody>
					<tr id="addOne">
						<td>
							<span><i class="fa fa-plus-circle addLvOne fa-1x"></i></span>
						</td>
					</tr>					
				</tbody>
				
				<tfoot>
					<tr>
						<td>
							<div>
								<input type="submit" class="btn btn-success" value="저장">
								<input type="reset" class="btn btn-danger" value="초기화">
							</div>
						</td>
					</tr>
				</tfoot>
			</table>
		</form>
	</div>
	
	
	<script src="./resources/joinPage/lib/jquery-3.5.1.min.js"></script>
	<script src="./resources/joinPage/js/setJS/moment.min.js"></script>
	<script src="./resources/joinPage/js/setJS/daterangepicker.js"></script>
    <script src="./resources/joinPage/js/setJS/set.js"></script>