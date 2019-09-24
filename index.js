
const request = require('request');
const CryptoJS = require('crypto-js');

const apiUrl = 'https://voteapi.votenow.tv/s2/vote';
const version_id = '12io31j90ds8ad09';
const versionCheck = 'sa8ljaksjdaklsjkj';

const fixedEncodeURIComponent = (e) => {
	return encodeURIComponent(e).replace(/[!'()]/g, escape).replace(/\*/g, "%2A")
}

const paramsLiteralToQsp = (e) => {
	let t = [];
	for (let i in e) {
		t.push(i + '=' + fixedEncodeURIComponent(e[i]));
	}
	return t.join('&');
}

const qspToHash = (e) => {
	let t = version_id + versionCheck;

	let n = CryptoJS.HmacSHA256(e, t);
	return CryptoJS.enc.Base64.stringify(n);
}

const sendVote = (user) => {
	const data = {
		apiKey: "bringthefunny",
		device: "pc",
		timestamp: (new Date()).getTime(),
		country: "US",
		state: "MN",
		action_type: "vote",
		email: user,
		optin_nbc: 1,
		id: user,
		gender: "Prefer Not To Disclose",
		method: "nbc_id",
		total: 10,
		v: "L1"
	};

	const u = paramsLiteralToQsp(data);
	const c = qspToHash(u);

	request.post(apiUrl + '?' + u, { form: "Authorization=" + encodeURIComponent(c) }, (err, res, body) => {
		if (err) {
			console.error(err);
			return;
		}
		if (res && res.statusCode == 200) {
			console.log(user, JSON.parse(body));
		}
	});
}

const spamVotes = (n) => {
	for (let i = 0; i < n; i++) {
		sendVote('kwijibo' + i + '@maildrop.cc');
	}
}

spamVotes(5);
