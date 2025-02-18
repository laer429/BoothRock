jQuery(document).ready(function(){

	let page = 1;
	let list_url = "fstv_list";
	$("#def-btn").click(function(){
		list_url = "fstv_list";
		$("#def-btn").addClass("bold-text");
		$("#pop-btn").removeClass("bold-text");
		$.ajax({
        	url : list_url,								// 기본순(fstv_list)으로 지정된 url 어노테이션으로 이동
        	data : {
        		page : "1"								// 페이지값 1지정 후 idx계산해서 첫페이지 출력
        	},
        	success : function(list) {
        		$('.fstv-list').empty();				// 기존 fstv-list에 있던 내용들 지우고
        		$('.fstv-list').html(list);				// 기본순 정렬을 불러온다
        		page = 1;								// 인기순으로 늘어나있던 페이지를 다시 1로 돌려주고 스크롤할때 새로 불러와준다
        	}
        })
	});
	
    $("#pop-btn").click(function(){						// 인기순 버튼을 누를때
    	list_url = "fstv_jjim";							// 불러오는 url을 jjim url으로 변경
    	$("#pop-btn").addClass("bold-text");
        $("#def-btn").removeClass("bold-text");
        $.ajax({										// 동시에 ajax
        	url : list_url,								// 인기순(fstv_jjim)으로 지정된 url 어노테이션으로 이동
        	data : {
        		page : "1"								// 페이지값 1지정 후 idx계산해서 첫페이지 출력
        	},
        	success : function(list) {
        		console.log(list_url);
        		$('.fstv-list').empty();				// 기존 fstv-list에 있던 내용들 지우고
        		$('.fstv-list').html(list);				// 인기순 정렬을 불러온다
        		page = 1;								// 기본순으로 늘어나있던 페이지를 다시 1로 돌려주고 스크롤할때 새로 불러와준다
        	}
        })
    });
    
	// 축제 리스트 첫 페이지를 위한 ajax, idx 0~9까지의 결과를 가져온다
	$.ajax({
		url : list_url,
		data : {
			page : "1"
		},
		success : function(list) {
			$('.fstv-list').html(list)
		}
	})
		
	// 기간입력 검색파트
	$('#dateform').submit(function(event) {
		event.preventDefault();					// 폼 전송 막기
		let date1 = document.getElementById('date1').value;
		let date2 = document.getElementById('date2').value;
		list_url = "fstv_date_search";
		console.log(date1);
		$.ajax({
			url : list_url,
			data : {
				date1 : date1,
				date2 : date2,
			},
			success : function(data) {
				$('.fstv-list').html(data);
				page = "1";
			}
		})
	});
	
	// ====================================스크롤 페이징 처리파트============================================
	let loading = false; // 로딩 중인지 여부를 나타내는 변수

	$(window).scroll(function() {
	    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100 && !loading) {
	        // 스크롤이 페이지 하단에 도달하고 로딩 중이 아닐 때
	        loading = true; 								// 로딩 상태로 변경
	        page++;											// 페이지 1추가
	        console.log(page);
	
	        $.ajax({										// AJAX를 사용하여 새로운 리스트를 서버에서 가져옴
	            url: list_url,
	            data : {           	
	            	page : page								// 스크롤할때마다 추가된 page를 controller에 전달
	            },
	            type: 'GET',
	            success: function(data) {					// 새로운 리스트 가져오기 성공 시
	                $('.fstv-list').append(data);			// 가져온 리스트를 추가
	                loading = false;						// 로딩 완료 상태로 변경
	            },
	            error: function() {
	                loading = false;						// 에러 발생 시 로딩 완료 상태로 변경
	            }
	        });
	    }
	});
	
	// ===============================================================================================
	
});