sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/json/JSONModel',
	'./InitPage'
], function(jQuery, Controller, JSONModel, InitPage) {
	"use strict";

	Controller.extend("sap.viz.sample.Pie.Pie", {

		settingsModel: {
			dataset: {
				name: "Dataset",
				defaultSelected: 0,
				values: [{
					name: "Top 5",
					value: "medium"
				}, {
					name: "Top 10",
					value: "large"
				}]
			}
		},

		oMediumData: {
			"scrap": [{
				"Material Number": "Material 01",
				"Scrapped Units": 110,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1A",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 02",
				"Scrapped Units": 400,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 03",
				"Scrapped Units": 55,
				"Price": "$ 10",
				"VendorDetails": "Steel works Mysore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 04",
				"Scrapped Units": 1233,
				"Price": "$ 10",
				"VendorDetails": "Steel works Mysore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 05",
				"Scrapped Units": 441,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1B",
				"SubAssembly1": "AB"
			}]
		},
		oLargeData: {
			"scrap": [{
				"Material Number": "Material 01",
				"Scrapped Units": 110,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1A",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 02",
				"Scrapped Units": 400,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 03",
				"Scrapped Units": 55,
				"Price": "$ 10",
				"VendorDetails": "Steel works Mysore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 04",
				"Scrapped Units": 1233,
				"Price": "$ 10",
				"VendorDetails": "Steel works Mysore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 05",
				"Scrapped Units": 441,
				"Price": "$ 10",
				"VendorDetails": "24*7 aerospace bangalore",
				"SubAssembly0": "1B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 06",
				"Scrapped Units": 15,
				"Price": "$ 10",
				"VendorDetails": "Recron Mangalore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 07",
				"Scrapped Units": 10,
				"Price": "$ 10",
				"VendorDetails": "Recron Mangalore",
				"SubAssembly0": "3A",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 08",
				"Scrapped Units": 15,
				"Price": "$ 10",
				"VendorDetails": "Steel works Mysore",
				"SubAssembly0": "1B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 09",
				"Scrapped Units": 17,
				"Price": "$ 10",
				"VendorDetails": "Recron Mangalore",
				"SubAssembly0": "2B",
				"SubAssembly1": "AB"
			}, {
				"Material Number": "Material 10",
				"Scrapped Units": 210,
				"Price": "$ 10",
				"VendorDetails": "Recron Mangalore",
				"SubAssembly0": "3A",
				"SubAssembly1": "AB"
			}]
		},
		oPopOverProps: {
			'customDataControl': function(data) {
				if (data.data.val) {
					var exData = [{
						"Material Number": "Material 01",
						"Scrapped Units": 110,
						"Price": "$ 10",
						"VendorDetails": "24*7 aerospace bangalore",
						"SubAssembly0": "1A",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 02",
						"Scrapped Units": 400,
						"Price": "$ 10",
						"VendorDetails": "24*7 aerospace bangalore",
						"SubAssembly0": "1B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 03",
						"Scrapped Units": 55,
						"Price": "$ 10",
						"VendorDetails": "Steel works Mysore",
						"SubAssembly0": "2B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 04",
						"Scrapped Units": 1233,
						"Price": "$ 10",
						"VendorDetails": "Steel works Mysore",
						"SubAssembly0": "2B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 05",
						"Scrapped Units": 441,
						"Price": "$ 10",
						"VendorDetails": "24*7 aerospace bangalore",
						"SubAssembly0": "1B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 06",
						"Scrapped Units": 15,
						"Price": "$ 10",
						"VendorDetails": "Recron Mangalore",
						"SubAssembly0": "2B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 07",
						"Scrapped Units": 10,
						"Price": "$ 10",
						"VendorDetails": "Recron Mangalore",
						"SubAssembly0": "3A",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 08",
						"Scrapped Units": 15,
						"Price": "$ 10",
						"VendorDetails": "Steel works Mysore",
						"SubAssembly0": "1B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 09",
						"Scrapped Units": 17,
						"Price": "$ 10",
						"VendorDetails": "Recron Mangalore",
						"SubAssembly0": "2B",
						"SubAssembly1": "AB"
					}, {
						"Material Number": "Material 10",
						"Scrapped Units": 210,
						"Price": "$ 10",
						"VendorDetails": "Recron Mangalore",
						"SubAssembly0": "3A",
						"SubAssembly1": "AB"
					}];
					var values = data.data.val,
						divStr = "",
						idx = values[2].value;
					var percentage = (data.target.__extra_data__.percentage * 100).toFixed(2) + "%";
					var svg =
						"<svg width='10px' height='10px'><path d='M-5,-5L5,-5L5,5L-5,5Z' fill='#5cbae6' transform='translate(5,5)'></path></svg>";
					divStr = divStr + "<div style = 'margin: 15px 30px 0 10px'>" + svg + "<b style='margin-left:10px'>" + values[0].value +
						"</b></div>";
					divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + values[1].name + "<span style = 'float: right'>" + values[1].value +
						" (" + percentage + ")</span></div>";
					divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "Price <span style = 'float: right'>" + exData[idx].Price +
						"</span></div>";
					divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "Vendor <span style = 'float: right'>" + exData[idx].VendorDetails +
						"</span></div>";
					divStr = divStr + "<div style = 'margin: 5px 30px 0 30px'>" + "SubAssembly 1<span style = 'float: right'>" + exData[idx].SubAssembly0 +
						"</span></div>";
					divStr = divStr + "<div style = 'margin: 5px 30px 15px 30px'>" + "<span>&#x21AA SubAssembly 2<span style = 'float: right'>" +
						exData[idx].SubAssembly1 + "</span> </span></div>";
					return new sap.ui.core.HTML({
						content: divStr
					});
				}
			}
		},

		oVizFrame: null,

		onInit: function(evt) {
			// this.odataCall();
			var oModel = new JSONModel(this.settingsModel);
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
			this.getView().setModel(oModel);

			this.initCustomFormat();
			var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
			oVizFrame.setVizProperties({
				legend: {
					title: {
						visible: false
					}
				},
				title: {
					visible: false
				}
			});
			var dataModel = new JSONModel(this.oMediumData);
			oVizFrame.setModel(dataModel);

			// var oPanel=this.getView().byId("detailsPanel");
			// oPanel.setModel(dataModel);
			// oPanel.setVisible(true);

			this.oPopOver = new sap.viz.ui5.controls.Popover(this.oPopOverProps);
			this.oPopOver.connect(this.oVizFrame.getVizUid());
			this.oPopOver.setActionItems(null);

			//Hide Settings Panel for phone
			if (sap.ui.Device.system.phone) {
				this.getView().byId('settingsPanel').setExpanded(false);
			}
			InitPage.initPageSettings(this.getView());
		},
		// odataCall:function(){
		// 	var sPath, 
		// 		oParams,
		// 		oModel = this.getView().getModel();
		// 	// Network and its navigations
		// 	sPath = "/MATALLSet";
		// 	oParams = {
		// 			success	: jQuery.proxy(this._setNetworkResponse, this)
		// 			//error			: 
		// 	};
		// 	oModel.read(sPath, oParams);

		// 	// Submit deferred batch changes
		// 	oModel.submitChanges({
		// 	});	
		// },
		onAfterRendering: function() {
			var datasetRadioGroup = this.getView().byId('datasetRadioGroup');
			datasetRadioGroup.setSelectedIndex(this.settingsModel.dataset.defaultSelected);
		},
		onDatasetSelected: function(oEvent) {
			var datasetRadio = oEvent.getSource(),
				dataModel;
			if (this.oVizFrame && datasetRadio.getSelected()) {
				var bindValue = datasetRadio.getBindingContext().getObject();
				if (bindValue.value === "medium") {
					dataModel = new JSONModel(this.oMediumData);
				} else {
					dataModel = new JSONModel(this.oLargeData);
				}
				this.oVizFrame.setModel(dataModel);
			}
		},
		initCustomFormat: function() {
			// CustomerFormat.registerCustomFormat();
		}

	});

	return Controller;

});