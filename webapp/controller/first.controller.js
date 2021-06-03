sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("com.hello.first.controller.first", {
			onInit: function () {

            },
            
            first: function ()
            {
                alert("Pragnesh Parmar");
            },
            handleListItemPress : function(oEvent)
            {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    var selectedProductId = oEvent.getSource().getBindingContext().getProperty("ProductID");
                    console.log(selectedProductId);
                    
            }
		});
	});
