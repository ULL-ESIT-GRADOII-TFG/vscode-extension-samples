/*
	Here are some ideas for you to try:
		Give the Hello World command a new name in the Command Palette.
		Contribute another command that displays current time in an information message.
		Replace the vscode.window.showInformationMessage with another VS Code API call to show a warning message.
*/
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld-sample" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.holaMundo', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hola VS Code');
	});

	// The commandId parameter must match the command field in package.json
	let disposableHora = vscode.commands.registerCommand('extension.hora', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('La fecha actual es: '+Date());
		vscode.window.showWarningMessage('YOU ARE WARNED!!!');
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(disposableHora);
}

// this method is called when your extension is deactivated
export function deactivate() {}
