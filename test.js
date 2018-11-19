//Just importing the requirements
var Trie = require('merkle-patricia-tree/secure');
var levelup = require('levelup');
var leveldown = require('leveldown');
var RLP = require('rlp');
var assert = require('assert');

var utils = require('ethereumjs-util')
var BN = utils.BN;

var Account = require('ethereumjs-account');

//Connecting to the leveldb database
var db = levelup(leveldown('./data/geth/chaindata'));

//Adding the "stateRoot" value from the block so that we can inspect the state root at that block height.
var root0 = '0x79ca4e99605855c439b3d376fb32aa09841bb868ae2d9de2eb710a6fdb6a7bb9';
var root2 = '0x1c4373e461b7997d1ec37f30bea49424a81cdec91f24aa32dfdd7507cd4ce49d';

var root3 = '0x617f742b77f46b5c8f77ba779d49b0f706bce7be0d2805c38220d884489201c6'

var root7 = '0x6a6b63752db46a442dfc293997a578be77abaf4227dc9c78eddc565cacdc35d0'
var root8 = '0xdc128db86c292fb445bcdf5a6f785c517c997bb8ce80265d2a652200c829e055'

var codeHash = '0x3315eeaee8cde0814da4d0144e5d1d32d8f002575b6361208f98c7d71aa08566'

//Creating a trie object of the merkle-patricia-tree library
var trie0 = new Trie(db, root0);
var trie2 = new Trie(db, root2);
var trie3 = new Trie(db, root3);
var trie7 = new Trie(db, root7);
var trie8 = new Trie(db, root8);

//var code = new Trie(db, codeHash);

//code.get()

var address0 = '0xc43c63326f7093a17b526813d19369db31df6401'
var address2 = '0x7dfda809012fb00ba9535105c4ac8043c85adf9f'
// contract address
var address3 = '0xA26663D3e4dea618CEaCCc85E4662f30a8df5167'

trie0.get(address0, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount0 in trie0:')
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})

trie2.get(address2, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount2 in trie2:')
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})


trie3.get(address2, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount2 in trie3:')
	//console.log(raw);
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})

trie7.get(address2, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount2 in trie7:')
	//console.log(raw);
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})


trie7.get(address3, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount3 in trie7:')
	//console.log(raw);
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})

trie8.get(address3, function (err, raw) {
	if(err){
		console.log(err);
		return;
	}

	console.log('\nAccount3 in trie8:')
	//console.log(raw);
	var account = new Account(raw);
	//console.log(account);
	console.log('nonce:', new BN(account.nonce));
	console.log('balance:', new BN(account.balance));
	console.log('storageRoot:', new BN(account.storageRoot));
	console.log('codeHash:', new BN(account.codeHash));
})





/*
//Creating a nodejs stream object so that we can access the data
var stream = trie.createReadStream()

//Turning on the stream (because the node js stream is set to pause by default)
stream.on('data', function (data){
  //printing out the keys of the "state trie"
  console.log(data.key);
});
*/
