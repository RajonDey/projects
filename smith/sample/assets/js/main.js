
$(document).on('click', '.js-toggleSidebar', function() {
    $( '.sidebar' ).toggleClass( 'sidebar-closed' );
    $( 'body' ).toggleClass( 'no-scroll' );
    $( '.sidebar-overlay' ).fadeToggle( 320 );
});




/*
    Full Side MENU HTML
  ....................................
*/
$(document).ready(function(){
  $("#nav").append(' \
  	<ul>\
  	<li><a href="#"><i class="bi bi-basket3"></i> My Orders <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-person"></i> My Information <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-geo-alt"></i> Shipping Address <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-credit-card-2-front"></i> Payment Method <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-sliders"></i> Settings <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-credit-card-2-front"></i> Payment Method <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-sliders"></i> Settings <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
	<li><a href="#"><i class="bi bi-power"></i> Logout <span class="text-end"><i class="bi bi-chevron-right"></i></span></a></li>\
    </ul>');
});

$(document).ready(function(){
  $("#profile").append('\
<div class="profile-head--content">\
	<table width="100%" border="0" cellpadding="0" cellspacing="0">\
		<tbody><tr>\
			<td align="center" style="width: 110px;">\
				<img src="https://picsum.photos/110/150" alt="profile-pic"> <br>\
				<a href="#" class="text-warning" style="position: relative;top: -10px;">Logout</a>\
			</td>\
			<td width="15"></td>\
			<td>\
				<h3><b>Joyce Lathrop</b></h3>\
				<p>UI Designer</p>\
				<table width="100%" border="0" class="mt-2">\
					<tbody><tr>\
						<td><big>156k</big><p><small>Followers</small></p></td>\
						<td><big>5</big><p><small>Rating</small></p></td>\
					</tr>\
				</tbody></table>\
			</td>\
		</tr>\
	</tbody></table>\
</div> ');
});