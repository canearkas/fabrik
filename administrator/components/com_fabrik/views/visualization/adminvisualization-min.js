var AdminVisualization=new Class({Implements:[Options,Events],options:{},initialize:function(a,b){this.setOptions(a);this.watchSelector()},watchSelector:function(){if(typeof(jQuery)!=="undefined"){jQuery("#jform_plugin").bind("change",function(a){this.changePlugin(a)}.bind(this))}else{document.id("jform_plugin").addEvent("change",function(a){a.stop();this.changePlugin(a)}.bind(this))}},changePlugin:function(b){var a=new Request.HTML({url:"index.php",data:{option:"com_fabrik",task:"visualization.getPluginHTML",format:"raw",plugin:b.target.get("value")},update:document.id("plugin-container")}).send()}});