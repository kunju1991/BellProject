sap.ui.define(['sap/ui/core/UIComponent',
			   'sap/viz/sample/Pie/model/models'],
    function(UIComponent,models) {
    "use strict";

    var Component = UIComponent.extend("sap.viz.sample.Pie.Component", {

    	metadata : {
        	rootView : "sap.viz.sample.Pie.Pie",
            dependencies : {
                libs : [
                    "sap.viz",
                    "sap.m",
                    "sap.ui.ux3"
                ]
            },
            "config": {
				serviceUrl: "/sap/opu/odata/TECHMSAP/BELLSRV_SRV/",
				sample : {
                    stretch : true,
                    files : [
                        "Pie.view.xml",
                        "Pie.controller.js"
                    ]
                }
            }
        }
        /**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * In this function, the resource and application models are set and the router is initialized.
		 * @public
		 * @override
		 */
		// init: function() {
		
		// 	// create and set the ODataModel
		// 	var oModel = models.createODataModel({
		// 		urlParametersForEveryRequest: [
		// 			"sap-server",
		// 			"sap-client",
		// 			"sap-language"
		// 		],
		// 		url: this.getMetadata().getConfig().serviceUrl,
		// 		config: {
		// 			metadataUrlParams: {
		// 				"sap-documentation": "heading"
		// 			}
		// 		}
		// 	});
		// 	this.setModel(oModel);
		// }
    });

    return Component;

});