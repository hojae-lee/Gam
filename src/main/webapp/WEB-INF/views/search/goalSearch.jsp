<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/joinPage/css/searchCSS/search.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>


<body>
	<div class="parents">
		<div class="searchArea">
			<div class="searchForm">
				<div class="searchBackground">
					<h1>Search for the goal!</h1>
					<form action="" onsubmit="return GAM.searchCheck();">
						<input type="text" name="searchContents" id="searchContents" placeholder="Let's SEARCH!!">
						<select name="searchTitle" id="searchTitle">
							<option value="user_nicknm" selected>닉네임</option>
							<option value="list_nm">제목</option>
						</select>
						<button type="submit" class="searchButton">SEARCH</button>
					</form>
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
								<div class="col-xl-3 col-lg-3 col-md-3 col-sm-6">
									<div class="single-services text-center mb-30">
										<div class="services-ion">
											<a href="#">
												<h2>제목</h2>
											</a>
										</div>
										<div class="services-cap">
											<a href="#">
												작성자
											</a>
										</div>
									</div>
								</div>
								<!-- list 갯수만큼 루프 돌릴 영역 끝 -->
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
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script src="${pageContext.request.contextPath}/resources/joinPage/js/searchJS/goalSearch.js"></script>
</body>
