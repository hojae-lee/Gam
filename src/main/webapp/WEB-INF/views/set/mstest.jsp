<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/set.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/setCSS/daterangepicker.css">
    
	<div id="content">
		<div>
			<table class="table">
			
				<thead>
					<th>
						<div class="mb-2">
							<input class="form-control" type="text" placeholder="목표 제목을 입력해주세요">
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
							<input type="submit" class="btn btn-success" value="제출!">
							<input type="submit" class="btn btn-danger" value="취소!">
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
		
		<div>
			
		</div>
		
	</div>
	
	
	<script src="./resources/joinPage/lib/jquery-3.5.1.min.js"></script>
	<script src="./resources/joinPage/js/setJS/moment.min.js"></script>
	<script src="./resources/joinPage/js/setJS/daterangepicker.js"></script>
    <script src="./resources/joinPage/js/setJS/set.js"></script>