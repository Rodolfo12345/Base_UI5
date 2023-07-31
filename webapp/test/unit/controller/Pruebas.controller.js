/*global QUnit*/

sap.ui.define([
	"pruebas/pruebas/controller/Pruebas.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Pruebas Controller");

	QUnit.test("I should test the Pruebas controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
