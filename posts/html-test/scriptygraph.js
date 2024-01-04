(function() {
	const fn = function() {
	  Bokeh.safely(function() {
		(function(root) {
		  function embed_document(root) {
		  const docs_json = document.getElementById('260374').textContent;
		  const render_items = [{"docid":"44abc01a-8b56-40b5-9f06-228079440088","root_ids":["259740"],"roots":{"259740":"d10c8271-6fdf-4c9d-a055-ebf803fafb2b"}}];
		  root.Bokeh.embed.embed_items(docs_json, render_items);
		  }
		  if (root.Bokeh !== undefined) {
			embed_document(root);
		  } else {
			let attempts = 0;
			const timer = setInterval(function(root) {
			  if (root.Bokeh !== undefined) {
				clearInterval(timer);
				embed_document(root);
			  } else {
				attempts++;
				if (attempts > 100) {
				  clearInterval(timer);
				  console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
				}
			  }
			}, 10, root)
		  }
		})(window);
	  });
	};
	if (document.readyState != "loading") fn();
	else document.addEventListener("DOMContentLoaded", fn);
  })();