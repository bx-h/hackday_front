var width = 1300;
var height = 700;
var img_w = 80;
var img_h = 80;
var radius = 30; 

var svg = d3.select(".map")
			.append("svg")
			.attr("width",width)
			.attr("height",height);

d3.json("../Model/relation.json",function(error,root){
	if( error ){
		return console.log(error);
	}
	// console.log(root);

	var force = d3.layout.force()
				.nodes(root.nodes)
				.links(root.edges)
				.size([width,height])
				.linkDistance(200)
				.charge(-1500)
				.start();
	// console.log(selected_names);

	var select = d3.select("#check")
			    .on("click",function() {
					var names = [];
					edges_line.style("opacity",function(edge){
						if ((selected_names.indexOf(edge.source.name) != -1 ) && 
							(names.indexOf(edge.target.name) == -1)) {
							names.push(edge.target.name);
						}
						else if ((selected_names.indexOf(edge.target.name) != -1) &&
							(names.indexOf(edge.source.name) == -1)) {
							names.push(edge.source.name);
						}
						else {
							return 0.0;
						}
					});
					nodes_img.style("opacity",function(node){
						var result = 0.0;
						for (i in names) {
							if (selected_names.indexOf(node.name) != -1 || node.name === names[i]) {											
								result = 1.0;
							}
						}
						return result;
					});	
					nodes_text.style("opacity",function(node){
						var result = 0.0;
						for (i in names) {
							if (selected_names.indexOf(node.name) != -1 || node.name === names[i]) {											
								result = 1.0;
							}
						}
						return result;
					});	
				});
							
	var edges_line = svg.selectAll("line")
					.data(root.edges)
					.enter()
					.append("line")
					.style("stroke","#ccc")
					.style("stroke-width",1)
						
	var edges_text = svg.selectAll(".linetext")
					.data(root.edges)
					.enter()
					.append("text")
					.attr("class","linetext")
					.text(function(d){
						return d.relation;
					});
				

	var nodes_img = svg.selectAll("circle")
	                .data(root.nodes)
	                .enter()
	                .append("circle")
	                .attr("class", "circleImg")
	                .attr("r", radius)
	                .attr("fill", function(d, i){
	                    //创建圆形图片
	                    var defs = svg.append("defs").attr("id", "imgdefs")

	                    var catpattern = defs.append("pattern")
	                                    .attr("id", "catpattern" + i)
	                                    .attr("height", 1)
	                                    .attr("width", 1)

	                    catpattern.append("image")
	                            .attr("x", - (img_w / 2 - radius))
	                            .attr("y", - (img_h / 2 - radius))
	                            .attr("width", img_w)
	                            .attr("height", img_h)
	                            .attr("xlink:href", "../Public/imgs/" + d.image)

	                    return "url(#catpattern" + i + ")";
	                })
					.on("click",function(d,i){
						var names = [];
						edges_line.style("opacity",function(edge){
							if (edge.source.name === d.name && names.indexOf(edge.target.name) == -1) {
								names.push(edge.target.name);
							}
							else if (edge.target.name === d.name && names.indexOf(edge.source.name) == -1) {
								names.push(edge.source.name);
							}
							else {
								return 0.0;
							}
						});
						nodes_img.style("opacity",function(node){
							var result = 0.0;
							for (i in names) {
								if (node.name === d.name || node.name === names[i]) {
									result = 1.0;
								}
							}
							return result;
						});	
						nodes_text.style("opacity",function(node){
							var result = 0.0;
							for (i in names) {
								if (node.name === d.name || node.name === names[i]) {
									result = 1.0;
								}
							}
							return result;
						});								
					})
					.call(force.drag);
			
	var text_dx = -25;
	var text_dy = 5;
			
	var nodes_text = svg.selectAll(".nodetext")
						.data(root.nodes)
						.enter()
						.append("text")
						.attr("class","nodetext")
						.attr("dx",text_dx)
						.attr("dy",text_dy)
						.text(function(d){
							return d.name;
						});
			
								
	force.on("tick", function(){
		
		//限制结点的边界
		root.nodes.forEach(function(d,i){
			d.x = d.x - img_w/2 < 0     ? img_w/2 : d.x ;
			d.x = d.x + img_w/2 > width ? width - img_w/2 : d.x ;
			d.y = d.y - img_h/2 < 0      ? img_h/2 : d.y ;
			d.y = d.y + img_h/2 + text_dy > height ? height - img_h/2 - text_dy : d.y ;
		});
	
		//更新连接线的位置
		 edges_line.attr("x1",function(d){ return d.source.x; });
		 edges_line.attr("y1",function(d){ return d.source.y; });
		 edges_line.attr("x2",function(d){ return d.target.x; });
		 edges_line.attr("y2",function(d){ return d.target.y; });
		 
		 //更新连接线上文字的位置
		 edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
		 edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });
		 
		 
		 //更新结点图片和文字
		 nodes_img.attr("cx",function(d){ return d.x - img_w/2 + 30; });
		 nodes_img.attr("cy",function(d){ return d.y - img_h/2 + 30; });
		 
		 nodes_text.attr("x",function(d){ return d.x});
		 nodes_text.attr("y",function(d){ return d.y + img_w/2; });
	});
});

$(".backButton").click(function(){
	window.location.replace("dashboard.html");
});