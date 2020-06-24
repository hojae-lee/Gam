<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/setPage/css/set.css">
    
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
							<span></span><i class="fa fa-plus addLvOne fa-1x"></i></span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	
	
	<script src="./resources/joinPage/lib/jquery-3.5.1.min.js"></script>
    <script src="./resources/setPage/js/tree.js"></script>