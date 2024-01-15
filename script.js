// FridaLab solver

//chall01
function chall01_solver() {
	Java.perform( () => {
		const challenge_01 = Java.use('uk.rossmarks.fridalab.challenge_01');
		challenge_01.getChall01Int.implementation = () => {
			console.log('[*] challenge_01.getChall01Int overloaded');
			return 1;
		}
	});
}

function chall02_solver() {
	Java.perform( () => {
		Java.choose('uk.rossmarks.fridalab.MainActivity', {
			onMatch: (instance) => {
				console.log('[*] Found a MainActivity instance');
				console.log('\t[+] Calling chall02()')
				instance.chall02();
			},
			onComplete: () => {}
		});
	});
}

function main(){
	chall01_solver();
	chall02_solver();
}

main();
