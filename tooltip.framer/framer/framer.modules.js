require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"Tooltip":[function(require,module,exports){
exports.Tooltip = function(layerA, layerB, layerAbgColour) {
  var defaultColour;
  document.body.style.cursor = "auto";
  defaultColour = layerA.backgroundColor.color;
  layerB.states.fade = {
    visible: false
  };
  layerB.states.visible = {
    visible: true
  };
  if (layerB.visible) {
    layerB.visible = false;
  }
  layerA.onMouseOver(function() {
    layerA.style = {
      "cursor": "pointer"
    };
    layerB.animate("visible");
    if (layerAbgColour === void 0) {
      return layerA.backgroundColor = defaultColour;
    } else {
      return layerA.backgroundColor = layerAbgColour;
    }
  });
  return layerA.onMouseOut(function() {
    layerB.stateSwitch("fade");
    return layerA.backgroundColor = defaultColour;
  });
};


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uL21vZHVsZXMvVG9vbHRpcC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgVG9vbHRpcCBmdW5jdGlvblxuZXhwb3J0cy5Ub29sdGlwID0gKGxheWVyQSwgbGF5ZXJCLCBsYXllckFiZ0NvbG91cikgLT5cblxuXHQjIFJlc2V0IHRoZSBjdXJzb3IgdG8gbm9ybWFsXG5cdGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCJcblxuXHRkZWZhdWx0Q29sb3VyID0gbGF5ZXJBLmJhY2tncm91bmRDb2xvci5jb2xvclxuXHQjIEEgbmV3IHN0YXRlIHRpdGxlZCBcImZhZGVcIiBcblx0bGF5ZXJCLnN0YXRlcy5mYWRlID0gdmlzaWJsZTogZmFsc2Vcblx0IyBBIG5ldyBzdGF0ZSB0aXRsZWQgXCJ2aXNpYmxlXCIgXG5cdGxheWVyQi5zdGF0ZXMudmlzaWJsZSA9IHZpc2libGU6IHRydWVcblxuICAjIGluaXRcblx0aWYgbGF5ZXJCLnZpc2libGVcblx0XHRsYXllckIudmlzaWJsZSA9IGZhbHNlXG5cblx0IyBBbmltYXRlIHRvIHRoZSBzdGF0ZVxuXHRsYXllckEub25Nb3VzZU92ZXIgLT4gXG5cdFx0IyBNb3VzZSBIb3ZlclxuXHRcdGxheWVyQS5zdHlsZSA9IFxuXHRcdFx0XCJjdXJzb3JcIjogXCJwb2ludGVyXCJcdFxuXHRcdGxheWVyQi5hbmltYXRlKFwidmlzaWJsZVwiKVxuXG5cdFx0aWYgbGF5ZXJBYmdDb2xvdXIgPT0gdW5kZWZpbmVkXG5cdFx0XHRsYXllckEuYmFja2dyb3VuZENvbG9yID0gZGVmYXVsdENvbG91clxuXHRcdGVsc2UgXG5cdCAgXHRsYXllckEuYmFja2dyb3VuZENvbG9yID0gbGF5ZXJBYmdDb2xvdXJcdFxuXG5cdCMgSW5zdGFudGx5IHN3aXRjaCB0byB0aGUgc3RhdGUgXG5cdGxheWVyQS5vbk1vdXNlT3V0IC0+XG5cdCAgbGF5ZXJCLnN0YXRlU3dpdGNoKFwiZmFkZVwiKVxuXHQgIGxheWVyQS5iYWNrZ3JvdW5kQ29sb3IgPSBkZWZhdWx0Q29sb3VyXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUNBQTtBRENBLE9BQU8sQ0FBQyxPQUFSLEdBQWtCLFNBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsY0FBakI7QUFHakIsTUFBQTtFQUFBLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQXBCLEdBQTZCO0VBRTdCLGFBQUEsR0FBZ0IsTUFBTSxDQUFDLGVBQWUsQ0FBQztFQUV2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQWQsR0FBcUI7SUFBQSxPQUFBLEVBQVMsS0FBVDs7RUFFckIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFkLEdBQXdCO0lBQUEsT0FBQSxFQUFTLElBQVQ7O0VBR3hCLElBQUcsTUFBTSxDQUFDLE9BQVY7SUFDQyxNQUFNLENBQUMsT0FBUCxHQUFpQixNQURsQjs7RUFJQSxNQUFNLENBQUMsV0FBUCxDQUFtQixTQUFBO0lBRWxCLE1BQU0sQ0FBQyxLQUFQLEdBQ0M7TUFBQSxRQUFBLEVBQVUsU0FBVjs7SUFDRCxNQUFNLENBQUMsT0FBUCxDQUFlLFNBQWY7SUFFQSxJQUFHLGNBQUEsS0FBa0IsTUFBckI7YUFDQyxNQUFNLENBQUMsZUFBUCxHQUF5QixjQUQxQjtLQUFBLE1BQUE7YUFHRSxNQUFNLENBQUMsZUFBUCxHQUF5QixlQUgzQjs7RUFOa0IsQ0FBbkI7U0FZQSxNQUFNLENBQUMsVUFBUCxDQUFrQixTQUFBO0lBQ2hCLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE1BQW5CO1dBQ0EsTUFBTSxDQUFDLGVBQVAsR0FBeUI7RUFGVCxDQUFsQjtBQTVCaUIifQ==
