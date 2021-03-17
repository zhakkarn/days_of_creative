const linearDiameter = tween(1000, linear);
const cubicDiameter = tween(1000, easeInCubic);
const elasticOutDiameter = tween(1000, easeOutElastic);
const bounceOutDiameter = tween(1000, easeOutBounce);

window.setInterval(() => {
	linearDiameter.reset();
	cubicDiameter.reset();
	elasticOutDiameter.reset();
	bounceOutDiameter.reset();
}, 1500)

function setup() {
  createCanvas(720, 480);
	noStroke();
}

function draw() {
	background(255);
	fill(0);
	circle(width/4, height/4, width/8 * linearDiameter.value);
	circle(width/4 * 2, height/4, width/8 * cubicDiameter.value);
	circle(width/4, height/4 * 2, width/8 * elasticOutDiameter.value);
	circle(width/4 * 2, height/4 * 2, width/8 * bounceOutDiameter.value);

}

function tween(duration, timingFunction){
	return {
		_value: 0,
		_startTimer:performance.now(),
		get value(){
			const now = performance.now();

			if(duration > now-this._startTimer){
				this._value = timingFunction((now-this._startTimer)/duration);
			}

			return this._value;
		},
		reset() {
			this._value = 0;
			this._startTimer = performance.now();
		}
	}
}

function linear(x){
	x = x >= 1
		? 1
		: x + .01;

		return x;
}

function easeOutQuad(x){
	return 1 - (1 - x) * (1 - x);
}

function easeInCubic(x){
	return x * x * x;
}

function easeOutElastic(x){
	const c4 = (2 * Math.PI) / 3
	x = x === 0
		? 0
		: x === 1
		? 1
		: Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
	return x;
}

function easeInElastic(x){
	const c4 = (2 * Math.PI) / 3;

	return x === 0
		? 0
		: x === 1
		? 1
		: -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
}

function easeOutBounce(x){
	const n1 = 7.5625;
	const d1 = 2.75;

	if (x < 1 / d1) {
			return n1 * x * x;
	} else if (x < 2 / d1) {
			return n1 * (x -= 1.5 / d1) * x + 0.75;
	} else if (x < 2.5 / d1) {
			return n1 * (x -= 2.25 / d1) * x + 0.9375;
	} else {
			return n1 * (x -= 2.625 / d1) * x + 0.984375;
	}
}