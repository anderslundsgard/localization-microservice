var findValue = function(key) {
	db.translations.find(
		{
			"_id": "sv-SE"
		},
		{
			data: { $elemMatch: {key: "Dri1"} }
		}	
	)
}