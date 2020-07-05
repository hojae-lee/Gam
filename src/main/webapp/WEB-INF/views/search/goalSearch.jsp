<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/searchCSS/search.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<div class="parents">
	<input type="hidden" id="doSearching" value="${doSearching}">
	<div class="searchArea">
		<div class="searchForm">
			<div class="searchBackground">
				<h1>Search for the goal!</h1>
				<form action="../search/goalSearchResult.do" onsubmit="return GAM.searchCheck();">
					<input type="text" name="searchContents" id="searchContents" placeholder="Let's SEARCH!!">
					<select name="searchTitle" id="searchTitle">
						<option value="user_nicknm" selected>닉네임</option>
						<option value="gam_title_nm">제목</option>
						<option value="gam_type">타입</option>
					</select>
					<button type="submit" class="searchButton">SEARCH</button>
				</form>
				<c:if test="${relationOk eq 'relationOk' }">
					<p class="reP">연관검색어 <i class="fa fa-question"></i></p>
					<c:forEach items="${relationList }" var="relationList" varStatus="loop">
						<button type="button" class="reBtn" onclick="GAM.relationSearch('gam_title_nm', this);">${relationList.gam_title_nm}</button>
					</c:forEach>
				</c:if>
			</div>
		</div>
	</div>
	<div class="listArea">
		<div class="searchForm">
			<div class="listBackground">
				<div class="our-services servic-padding">
					<div class="container">
						<div class="row d-flex justify-contnet-center">
							<!-- list 갯수만큼 루프 돌릴 영역 시작-->
							<c:forEach items="${list }" var="row" varStatus="loop">
								<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
									<div class="single-services text-center mb-30">
										<div class="services-ion">
											<a href="#">
											<h2>${row.category_seq}</h2>
												<h2>${row.gam_type}</h2>
											</a>
										</div>
										<div class="services-cap">
											<a href="#">
												${row.gam_title_nm}: ${row.user_nicknm}
											</a>
										</div>
									</div>
								</div>
							</c:forEach>
							<!-- list 갯수만큼 루프 돌릴 영역 끝 -->
							<!-- <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
								<div class="single-services text-center mb-30">
									<div class="services-ion">
										<span class="flaticon-tour"></span>
									</div>
									<div class="services-cap">
										<h5>8000+ Our Local<br>Guides</h5>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
								<div class="single-services text-center mb-30">
									<div class="services-ion">
										<span class="flaticon-tour"></span>
									</div>
									<div class="services-cap">
										<h5>8000+ Our Local<br>Guides</h5>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
								<div class="single-services text-center mb-30">
									<div class="services-ion">
										<span class="flaticon-pay"></span>
									</div>
									<div class="services-cap">
										<h5>100% Trusted Tour<br>Agency</h5>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
								<div class="single-services text-center mb-30">
									<div class="services-ion">
										<span class="flaticon-experience"></span>
									</div>
									<div class="services-cap">
										<h5>28+ Years of Travel<br>Experience</h5>
									</div>
								</div>
							</div>
							<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
								<div class="single-services text-center mb-30">
									<div class="services-ion">
										<span class="flaticon-good"></span>
									</div>
									<div class="services-cap">
										<h5>98% Our Travelers<br>are Happy</h5>
									</div>
								</div>
							</div> -->
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="${pageContext.request.contextPath}/resources/joinPage/js/searchJS/goalSearch.js"></script>
