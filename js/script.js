
$(document).ready(function(){
  $('.botoes button').focus( function() {
	  $(this).blur();
	});
	
	$('.btnTutoWinMfd').css('background','#0080c0');
	
	$('.btnTutoWinMfd').mouseover(function(){
		$(this).css('background','#31B0D5');
	});
	$('.btnTutoWinMfd').mouseout(function(){
		$(this).css('background','#0080c0');
	});
	
	$('#head').css('position','fixed');
	
	
	// botoes download
	$('#btnTeam').click( function() {
	    window.location.href ="baixar.php?arquivo=downloads/TeamViewer_Setup.exe";
	});
	
	$('#btnWinTag').click( function() {
		window.location.href="baixar.php?arquivo=downloads/Install_WinTAG_1.0.201.exe";
	});
	
	$('#btnAmm').click( function() {
		window.location.href ="baixar.php?arquivo=downloads/AA_v3.5.exe";
	});
	
	$('#btnFire1').click( function() {
		window.location.href ="baixar.php?arquivo=downloads/Firebird-2.5.3.26780_0_Win32.exe";
	});
	
	$('#btnFire2').click( function() {
		window.location.href ="baixar.php?arquivo=downloads/Firebird-2.5.3.26780_0_Win32.exe";
	});
	
	$('#btnWinMFD').click( function() {
		window.location.href="baixar.php?arquivo=downloads/WINMFD2Setup.exe";
	});
	
	$('#btnFox').click( function() {
		window.location.href="baixar.php?arquivo=downloads/FoxitReader706.1126_enu_Setup.exe";
	});
	
	$('#btnAdobe').click( function() {
		window.location.href="baixar.php?arquivo=downloads/install_reader11_br_mssd_aaa_aih.exe";
	});
	
	$('#btnWinrar').click( function() {
		window.location.href="baixar.php?arquivo=downloads/wrar501.exe";
	});
	
	$('#btnWinrar1').click( function() {
		window.location.href="baixar.php?arquivo=downloads/winrar-x64-501.exe";
	});
	
	$('#btnAvast').click( function() {
		window.location.href="baixar.php?arquivo=downloads/avast_free_antivirus_setup_online.exe";
	});
	//////////////////////////////////////////////////////////////////////////////////////////////
	
	
	
})


var n1 = 0;
var n2= 1;

var resultado =n1+n2;


