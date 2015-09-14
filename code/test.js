(function(scope) {
	scope.FunctionName = Function.prototype.name = function() {
		return this.toString();
	}
})(window);