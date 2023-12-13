import MessageBox from "sap/m/MessageBox";
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import Page from "sap/m/Page";

/**
 * @namespace de.octavia.kleinehelden.controller
 */
export default class Main extends BaseController {
	public sayHello(): void {
		MessageBox.show("Hello World!");
	}

	public addToCounter(): void{
		var oModel =this.getView().getModel("viewModel") as JSONModel;
		var currentCounter = oModel.getProperty("/counter");
		currentCounter += 1;
		oModel.setProperty("/counter",currentCounter);

		var oPage = this.byId("mainPageID") as Page;
		oPage.setTitle("Kleine Helden - Warenkorb: " + currentCounter);
		  

	}
}
