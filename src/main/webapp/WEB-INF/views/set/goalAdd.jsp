<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/set.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/daterangepicker.css">
    
	<div>
		<form id="regGoal" method="post" action="regGoal">
			<table class="table">
			
				<thead>
					<tr>
						<td>
							<select class="custom-select" id="category_seq">
								<option value="empty">카테고리를 설정해주세요</option>
								<option value="1">학습</option>
								<option value="2">건강/운동</option>
								<option value="3">여행</option>
								<option value="4">생활</option>
								<option value="5">자기계발</option>
								<option value="6">기타</option>
							</select>
						</td>
					</tr>
					<th>
						<div class="input-group mb-2">
							<input type="text" name="gam_title_nm" class="form-control" style="width:70%" placeholder="목표 제목을 입력해주세요">
							<input type="text" name="gam_start_dt" id="start" class="form-control" style="width:15%; font-size:20px" placeholder="목표 시작일">
							<input type="text" name="gam_end_dt" id="end" class="form-control" style="width:15%; font-size:20px" placeholder="목표 종료일">
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