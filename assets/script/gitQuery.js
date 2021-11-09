/*"<div class="repoli">
	<a href='" + GitRepose[i].html_url + "' class='Roboto400 glowLink' style='font-size: 200%;'>" + GitRepose[i].name + "</a>
	<p class='Roboto300 glowLink' style='font-size: 100%;'>" + GitRepose[i].description + "</p>
	
</div>"*/

function gitConnection(){
	var get = new XMLHttpRequest();
	// 2. Configure it: GET-request for the URL /article/.../load
	get.open('GET', 'https://api.github.com/users/Mene-hub/repos', true);

	// 3. Send the request over the network
	get.send();

	// 4. This will be called after the response is received
	get.onload = function() {
		if (get.status != 200) { // analyze HTTP status of the response
            console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            var GitRepose = JSON.parse(get.response);
			var template;
            for(var i = 0; i<GitRepose.length; i++)
			{
				var desc = GitRepose[i].description == null ? "there isn't any description" : GitRepose[i].description;
				template ="<div class='repoli'><a href='" + GitRepose[i].html_url + "' class='Roboto400 glowLink' style='font-size: 200%;'>" + GitRepose[i].name.toLowerCase() + "</a><p style='font-size: 100%;font-family:Cascadia;'>" + desc + "</p>";
				var tmp = document.getElementById("repoHere");
				tmp.innerHTML += template;
			}
		}
	}
}
