(function(){
	// helper function for opening modal window
	function openModal(modalId){
		var modal = document.getElementById(modalId);
		var wrapper = document.querySelector('.modal-wrapper');
		if(modal && wrapper){
			wrapper.style.display = 'block';
			modal.style.display = 'block';
		}else{
			console.warn('Modal or modal-wrapper DOM elemenent not found.');
		}
	}

	// helper function for closing modal window
	function closeModal(modalId){
		if(modalId){
			var modal = document.getElementById(modalId);
			var wrapper = document.querySelector('.modal-wrapper');
			if(modal && wrapper){
				wrapper.style.display = 'none';
				modal.style.display = 'none';
			}else{
				console.warn('Modal or modal-wrapper DOM elemenent not found.');
			}
		}else{
			document.querySelector('.modal-wrapper').style.display = 'none';
			var modals = document.querySelectorAll('.modal-wrapper > *');
			for(var x = 0, l = modals.length; x < l; x++){
				modals[x].style.display = 'none';
			}
		}
		
	}

	// helper function that binds click event to modal wrapper that closes modal
	function bindModalWrapperClick(){
		var wrapper = document.querySelector('.modal-wrapper');
		if(wrapper){
			wrapper.addEventListener('click', function(e){
				e.preventDefault();
				closeModal();
			});
		}else{
			console.warn('Modal wrapper DOM element not found.');
		}
	}
	bindModalWrapperClick();

	// bind info-button click to show modal
	document.getElementById('info-button').addEventListener('click', function(e){
		e.preventDefault();
		openModal('info-modal');
	});

	// nice scroll plugin initialization
	$('.list-container, .categories').niceScroll({
		cursorcolor: "#e52325",
		cursorborder: "none",
		cursorborderradius: 0
	});
})();