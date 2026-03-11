// FridaLab solver

//chall01
function chall01_solver() {
	Java.perform( () => {
		var challenge_01 = Java.use('uk.rossmarks.fridalab.challenge_01');
		console.log('[*] Hooked challenge 01');
		var v = challenge_01.getChall01Int();
		console.log('[*] 01 value: ' + v);
		challenge_01.chall01.value = 1;
		v = challenge_01.getChall01Int();
		console.log('[*] New 01 value: ' + v);
		}
	)};

//chall02
function chall02_solver(main) {
			main.chall02();
}

//chall03
function chall03_solver(main) {
			main.chall03.overload().implementation = () => {
				console.log('[*] Changing chall03 implementation.');
				return true;
			};
}

//chall04
function chall04_solver(main) {
			main.chall04('frida');
}

function main(){
	setTimeout( () => {
		var main;
		Java.perform( () => {
			Java.choose('uk.rossmarks.fridalab.MainActivity', {
                onMatch: function(instance) {
					console.log('[*] Hooked challenge 02');
    				main = instance;
                },
                onComplete: function() {}
            });
		});
		chall01_solver();
		chall02_solver(main);
		chall03_solver(main);
		chall04_solver(main);
	}, 2000);

}

main();
