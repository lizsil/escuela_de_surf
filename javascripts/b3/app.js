var $select = $("<select></select>");
 $("#menu").append($select);

$("#menu a").each(function(){
	var $anchor = $(this);
	$option = $("<option></option>");
	$option.val($anchor.attr("href"));
	if ($anchor.parent().hasClass(".selected")){
		$option.prop(".selected" , true);
	}
	$option.text($anchor.text());
	$select.append($option);
});

$select.change(function(){
	window.location = $select.val();
});