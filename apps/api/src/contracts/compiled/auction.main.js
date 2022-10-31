// Automatically generated with Reach 0.1.10 (c0bba7d2)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (c0bba7d2)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;

  return {
    infos: {
      Auction: {
        bidIncrement: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v505;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v505;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        bids: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return stdlib.checkedBigNumberify('./rsh/auction.rsh:107:20:decimal', stdlib.UInt_max, '0');}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return stdlib.checkedBigNumberify('./rsh/auction.rsh:107:20:decimal', stdlib.UInt_max, '0');}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        charityAddress: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v502;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v502;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        charityPercentage: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v500;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v500;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        closedSys: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v534;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v534;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc3
          },
        creatorAddress: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v503;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v503;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        currentPrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v539;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v539;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        endSecs: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v533;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v533;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        highestBidder: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v536;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v536;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        minBid: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v971;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v563;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        nftId: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v496;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v496;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v495;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v495;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        platformAddress: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v501;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v501;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          },
        reservePrice: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v504;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v504;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          },
        royalty: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
              const [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507] = svs;
              stdlib.assert(false, 'illegal view')
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982] = svs;
              return (await ((async () => {


                return v499;}))(...args));
              }
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
              const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = svs;
              return (await ((async () => {


                return v499;}))(...args));
              }

            stdlib.assert(false, 'illegal view')
            },
          ty: ctc2
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc2, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2],
      3: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc0, ctc2, ctc2, ctc2, ctc2],
      6: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2]
      }
    };

  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function AuctionCreator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AuctionCreator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AuctionCreator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Object({
    bidIncrement: ctc0,
    charityAddress: ctc1,
    charityPercentage: ctc0,
    creatorAddress: ctc1,
    endSecs: ctc0,
    minBid: ctc0,
    nftId: ctc2,
    platformAddress: ctc1,
    reservePrice: ctc0,
    royaltyPercentage: ctc0
    });
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc0]);
  const ctc6 = stdlib.T_Tuple([ctc4]);
  const ctc7 = stdlib.T_Data({
    Bidder_bid0_110: ctc5,
    Bidder_close0_110: ctc6,
    Bidder_touch0_110: ctc6,
    System_close0_110: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc0]);
  const ctc9 = stdlib.T_Bool;


  const v467 = stdlib.protect(ctc3, await interact.getSale(), {
    at: './rsh/auction.rsh:77:36:application',
    fs: ['at ./rsh/auction.rsh:65:22:application call to [unknown function] (defined at: ./rsh/auction.rsh:65:26:function exp)'],
    msg: 'getSale',
    who: 'AuctionCreator'
    });
  const v468 = v467.bidIncrement;
  const v469 = v467.charityAddress;
  const v470 = v467.charityPercentage;
  const v471 = v467.creatorAddress;
  const v472 = v467.endSecs;
  const v473 = v467.minBid;
  const v474 = v467.nftId;
  const v475 = v467.platformAddress;
  const v476 = v467.reservePrice;
  const v477 = v467.royaltyPercentage;
  const v488 = stdlib.ge(v477, stdlib.checkedBigNumberify('./rsh/auction.rsh:78:33:decimal', stdlib.UInt_max, '0'));
  const v489 = stdlib.le(v477, stdlib.checkedBigNumberify('./rsh/auction.rsh:78:59:decimal', stdlib.UInt_max, '90'));
  const v490 = v488 ? v489 : false;
  stdlib.assert(v490, {
    at: './rsh/auction.rsh:78:11:application',
    fs: ['at ./rsh/auction.rsh:65:22:application call to [unknown function] (defined at: ./rsh/auction.rsh:65:26:function exp)'],
    msg: 'invalid royalty amount',
    who: 'AuctionCreator'
    });
  const v491 = stdlib.ge(v470, stdlib.checkedBigNumberify('./rsh/auction.rsh:79:33:decimal', stdlib.UInt_max, '0'));
  const v492 = stdlib.le(v470, stdlib.checkedBigNumberify('./rsh/auction.rsh:79:59:decimal', stdlib.UInt_max, '50'));
  const v493 = v491 ? v492 : false;
  stdlib.assert(v493, {
    at: './rsh/auction.rsh:79:11:application',
    fs: ['at ./rsh/auction.rsh:65:22:application call to [unknown function] (defined at: ./rsh/auction.rsh:65:26:function exp)'],
    msg: 'invalid charity amount',
    who: 'AuctionCreator'
    });
  const v494 = stdlib.gt(v476, v473);
  stdlib.assert(v494, {
    at: './rsh/auction.rsh:80:11:application',
    fs: ['at ./rsh/auction.rsh:65:22:application call to [unknown function] (defined at: ./rsh/auction.rsh:65:26:function exp)'],
    msg: null,
    who: 'AuctionCreator'
    });

  const txn1 = await (ctc.sendrecv({
    args: [v474, v473, v472, v477, v470, v475, v469, v471, v476, v468],
    evt_cnt: 10,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./rsh/auction.rsh:82:18:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:82:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v496, v497, v498, v499, v500, v501, v502, v503, v504, v505], secs: v507, time: v506, didSend: v63, from: v495 } = txn1;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v496
        });
      ;
      sim_r.isHalt = false;

      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v496, v497, v498, v499, v500, v501, v502, v503, v504, v505], secs: v507, time: v506, didSend: v63, from: v495 } = txn1;
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v495, v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v507],
    evt_cnt: 0,
    funcNum: 1,
    lct: v506,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:98:18:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./rsh/auction.rsh:94:15:decimal', stdlib.UInt_max, '1'), v496]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [], secs: v517, time: v516, didSend: v70, from: v515 } = txn2;

      ;
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./rsh/auction.rsh:94:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v496
        });

      const v533 = stdlib.add(v507, v498);
      const v534 = false;
      const v535 = v533;
      const v536 = v495;
      const v537 = true;
      const v538 = true;
      const v539 = v497;
      const v540 = v516;
      const v543 = v517;
      const v547 = stdlib.checkedBigNumberify('./rsh/auction.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');

      if (await (async () => {

        return v538;})()) {
        const v561 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
        const v562 = stdlib.mul(v561, v505);
        const v563 = stdlib.add(v539, v562);
        sim_r.isHalt = false;
        }
      else {
        const v969 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
        const v970 = stdlib.mul(v969, v505);
        const v971 = stdlib.add(v539, v970);
        const v972 = stdlib.gt(v499, stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10'));
        const v973 = v972 ? v499 : stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10');
        const v975 = stdlib.div(v547, stdlib.checkedBigNumberify('./rsh/auction.rsh:230:27:decimal', stdlib.UInt_max, '100'));
        const v976 = stdlib.mul(v973, v975);
        const v977 = stdlib.mul(stdlib.checkedBigNumberify('./rsh/auction.rsh:224:24:decimal', stdlib.UInt_max, '5'), v975);
        const v978 = stdlib.mul(v500, v975);
        const v980 = stdlib.add(v976, v977);
        const v981 = stdlib.add(v980, v978);
        const v982 = stdlib.sub(v547, v981);
        const v983 = stdlib.ge(v539, v504);
        const v985 = v537 ? false : v983;
        if (v985) {
          sim_r.txns.push({
            kind: 'from',
            to: v536,
            tok: v496
            });
          sim_r.txns.push({
            kind: 'from',
            to: v503,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v501,
            tok: undefined /* Nothing */
            });
          sim_r.isHalt = false;
          }
        else {
          sim_r.txns.push({
            kind: 'from',
            to: v536,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'from',
            to: v495,
            tok: v496
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v496
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2, ctc0, ctc0, ctc0, ctc0, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v517, time: v516, didSend: v70, from: v515 } = txn2;
  ;
  ;
  const v527 = stdlib.addressEq(v495, v515);
  stdlib.assert(v527, {
    at: './rsh/auction.rsh:98:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'AuctionCreator'
    });
  stdlib.protect(ctc4, await interact.auctionReady(), {
    at: './rsh/auction.rsh:112:39:application',
    fs: ['at ./rsh/auction.rsh:112:39:application call to [unknown function] (defined at: ./rsh/auction.rsh:112:39:function exp)', 'at ./rsh/auction.rsh:112:39:application call to "liftedInteract" (defined at: ./rsh/auction.rsh:112:39:application)'],
    msg: 'auctionReady',
    who: 'AuctionCreator'
    });

  const v533 = stdlib.add(v507, v498);
  let v534 = false;
  let v535 = v533;
  let v536 = v495;
  let v537 = true;
  let v538 = true;
  let v539 = v497;
  let v540 = v516;
  let v543 = v517;
  let v547 = stdlib.checkedBigNumberify('./rsh/auction.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');

  while (await (async () => {

    return v538;})()) {
    const v561 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
    const v562 = stdlib.mul(v561, v505);
    const v563 = stdlib.add(v539, v562);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc7],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn3;
    switch (v626[0]) {
      case 'Bidder_bid0_110': {
        const v629 = v626[1];
        undefined /* setApiDetails */;
        const v634 = v629[stdlib.checkedBigNumberify('./rsh/auction.rsh:136:11:spread', stdlib.UInt_max, '0')];
        const v642 = stdlib.add(v547, v634);
        ;
        const v645 = v534 ? false : true;
        stdlib.assert(v645, {
          at: './rsh/auction.rsh:146:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'it\'s already closed',
          who: 'AuctionCreator'
          });
        const v646 = stdlib.gt(v634, v539);
        stdlib.assert(v646, {
          at: './rsh/auction.rsh:147:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'bid is too low',
          who: 'AuctionCreator'
          });
        const v648 = stdlib.lt(v543, v535);
        stdlib.assert(v648, {
          at: './rsh/auction.rsh:149:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'auction time is over',
          who: 'AuctionCreator'
          });
        const v649 = [v536, v539];
        await txn3.getOutput('Bidder_bid', 'v649', ctc8, v649);
        if (v537) {
          stdlib.protect(ctc4, await interact.seeBid(v625, v634), {
            at: './rsh/auction.rsh:155:41:application',
            fs: ['at ./rsh/auction.rsh:155:41:application call to [unknown function] (defined at: ./rsh/auction.rsh:155:41:function exp)', 'at ./rsh/auction.rsh:155:41:application call to "liftedInteract" (defined at: ./rsh/auction.rsh:155:41:application)', 'at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
            msg: 'seeBid',
            who: 'AuctionCreator'
            });

          const v672 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
          const v673 = stdlib.gt(v543, v672);
          const v674 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
          const v675 = v673 ? v674 : v535;
          const cv534 = v534;
          const cv535 = v675;
          const cv536 = v625;
          const cv537 = false;
          const cv538 = true;
          const cv539 = v634;
          const cv540 = v627;
          const cv543 = v628;
          const cv547 = v642;

          v534 = cv534;
          v535 = cv535;
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v543 = cv543;
          v547 = cv547;

          continue;}
        else {
          const v662 = stdlib.sub(v642, v539);
          ;
          stdlib.protect(ctc4, await interact.seeBid(v625, v634), {
            at: './rsh/auction.rsh:155:41:application',
            fs: ['at ./rsh/auction.rsh:155:41:application call to [unknown function] (defined at: ./rsh/auction.rsh:155:41:function exp)', 'at ./rsh/auction.rsh:155:41:application call to "liftedInteract" (defined at: ./rsh/auction.rsh:155:41:application)', 'at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
            msg: 'seeBid',
            who: 'AuctionCreator'
            });

          const v665 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
          const v666 = stdlib.gt(v543, v665);
          const v667 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
          const v668 = v666 ? v667 : v535;
          const cv534 = v534;
          const cv535 = v668;
          const cv536 = v625;
          const cv537 = false;
          const cv538 = true;
          const cv539 = v634;
          const cv540 = v627;
          const cv543 = v628;
          const cv547 = v662;

          v534 = cv534;
          v535 = cv535;
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v543 = cv543;
          v547 = cv547;

          continue;}
        break;
        }
      case 'Bidder_close0_110': {
        const v714 = v626[1];
        undefined /* setApiDetails */;
        ;
        stdlib.assert(v534, {
          at: './rsh/auction.rsh:175:18:application',
          fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
          msg: 'system hasn\'t closed the auction yet',
          who: 'AuctionCreator'
          });
        const v764 = stdlib.addressEq(v625, v536);
        stdlib.assert(v764, {
          at: './rsh/auction.rsh:176:18:application',
          fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
          msg: 'unauthorized',
          who: 'AuctionCreator'
          });
        const v765 = null;
        await txn3.getOutput('Bidder_close', 'v765', ctc4, v765);
        const v772 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:181:26:decimal', stdlib.UInt_max, '0') : v539;
        const cv534 = true;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = false;
        const cv538 = false;
        const cv539 = v772;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      case 'Bidder_touch0_110': {
        const v799 = v626[1];
        undefined /* setApiDetails */;
        ;
        const v861 = null;
        await txn3.getOutput('Bidder_touch', 'v861', ctc4, v861);
        const cv534 = v534;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = v537;
        const cv538 = true;
        const cv539 = v539;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      case 'System_close0_110': {
        const v884 = v626[1];
        undefined /* setApiDetails */;
        ;
        const v956 = v534 ? false : true;
        stdlib.assert(v956, {
          at: './rsh/auction.rsh:207:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'it\'s already closed',
          who: 'AuctionCreator'
          });
        const v957 = stdlib.addressEq(v625, v501);
        stdlib.assert(v957, {
          at: './rsh/auction.rsh:208:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'unauthorized',
          who: 'AuctionCreator'
          });
        const v959 = stdlib.ge(v543, v535);
        stdlib.assert(v959, {
          at: './rsh/auction.rsh:209:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'deadline hasn\'t been met yet',
          who: 'AuctionCreator'
          });
        const v960 = null;
        await txn3.getOutput('System_close', 'v960', ctc4, v960);
        const v967 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:215:26:decimal', stdlib.UInt_max, '0') : v539;
        const cv534 = true;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = false;
        const cv538 = true;
        const cv539 = v967;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      }

    }
  const v969 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
  const v970 = stdlib.mul(v969, v505);
  const v971 = stdlib.add(v539, v970);
  const v972 = stdlib.gt(v499, stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10'));
  const v973 = v972 ? v499 : stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10');
  const v975 = stdlib.div(v547, stdlib.checkedBigNumberify('./rsh/auction.rsh:230:27:decimal', stdlib.UInt_max, '100'));
  const v976 = stdlib.mul(v973, v975);
  const v977 = stdlib.mul(stdlib.checkedBigNumberify('./rsh/auction.rsh:224:24:decimal', stdlib.UInt_max, '5'), v975);
  const v978 = stdlib.mul(v500, v975);
  const v980 = stdlib.add(v976, v977);
  const v981 = stdlib.add(v980, v978);
  const v982 = stdlib.sub(v547, v981);
  const v983 = stdlib.ge(v539, v504);
  const v985 = v537 ? false : v983;
  if (v985) {
    ;
    ;
    ;
    const txn3 = await (ctc.sendrecv({
      args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982],
      evt_cnt: 0,
      funcNum: 3,
      lct: v540,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:249:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


        const {data: [], secs: v1008, time: v1007, didSend: v392, from: v1006 } = txn3;

        ;
        sim_r.txns.push({
          kind: 'from',
          to: v502,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v495,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v496
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;

        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc2, ctc0, ctc0, ctc1, ctc1, ctc1, ctc0, ctc0, ctc0, ctc9, ctc1, ctc0, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1008, time: v1007, didSend: v392, from: v1006 } = txn3;
    ;
    ;
    ;
    return;


    }
  else {
    ;
    ;
    return;
    }



  };
export async function _Bidder_bid6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2]);
  const ctc5 = stdlib.T_Null;
  const ctc6 = stdlib.T_Tuple([ctc5]);
  const ctc7 = stdlib.T_Data({
    Bidder_bid0_110: ctc4,
    Bidder_close0_110: ctc6,
    Bidder_touch0_110: ctc6,
    System_close0_110: ctc6
    });
  const ctc8 = stdlib.T_Tuple([ctc0, ctc2]);


  const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2]);
  const v566 = stdlib.protect(ctc4, await interact.in(), {
    at: './rsh/auction.rsh:1:23:application',
    fs: ['at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_bid0_110" (defined at: ./rsh/auction.rsh:136:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v567 = v566[stdlib.checkedBigNumberify('./rsh/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v570 = v534 ? false : true;
  stdlib.assert(v570, {
    at: './rsh/auction.rsh:139:17:application',
    fs: ['at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_bid0_110" (defined at: ./rsh/auction.rsh:136:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'it\'s already closed',
    who: 'Bidder_bid'
    });
  const v571 = stdlib.gt(v567, v539);
  stdlib.assert(v571, {
    at: './rsh/auction.rsh:140:17:application',
    fs: ['at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_bid0_110" (defined at: ./rsh/auction.rsh:136:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'bid is too low',
    who: 'Bidder_bid'
    });
  const v573 = stdlib.lt(v543, v535);
  stdlib.assert(v573, {
    at: './rsh/auction.rsh:142:17:application',
    fs: ['at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:138:15:application call to [unknown function] (defined at: ./rsh/auction.rsh:138:15:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_bid0_110" (defined at: ./rsh/auction.rsh:136:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'auction time is over',
    who: 'Bidder_bid'
    });
  const v577 = ['Bidder_bid0_110', v566];

  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563, v577],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [v567, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;

      switch (v626[0]) {
        case 'Bidder_bid0_110': {
          const v629 = v626[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v634 = v629[stdlib.checkedBigNumberify('./rsh/auction.rsh:136:11:spread', stdlib.UInt_max, '0')];
          const v642 = stdlib.add(v547, v634);
          sim_r.txns.push({
            amt: v634,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v649 = [v536, v539];
          const v650 = await txn1.getOutput('Bidder_bid', 'v649', ctc8, v649);

          if (v537) {
            const v672 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
            const v673 = stdlib.gt(v543, v672);
            const v674 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
            const v675 = v673 ? v674 : v535;
            const v2240 = v534;
            const v2241 = v675;
            const v2242 = v625;
            const v2243 = false;
            const v2245 = v634;
            const v2247 = v628;
            const v2248 = v642;
            const v2249 = stdlib.div(v634, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
            const v2250 = stdlib.mul(v2249, v505);
            const v2251 = stdlib.add(v634, v2250);
            sim_r.isHalt = false;
            }
          else {
            const v662 = stdlib.sub(v642, v539);
            sim_r.txns.push({
              kind: 'from',
              to: v536,
              tok: undefined /* Nothing */
              });
            const v665 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
            const v666 = stdlib.gt(v543, v665);
            const v667 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
            const v668 = v666 ? v667 : v535;
            const v2270 = v534;
            const v2271 = v668;
            const v2272 = v625;
            const v2273 = false;
            const v2275 = v634;
            const v2277 = v628;
            const v2278 = v662;
            const v2279 = stdlib.div(v634, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
            const v2280 = stdlib.mul(v2279, v505);
            const v2281 = stdlib.add(v634, v2280);
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bidder_close0_110': {
          const v714 = v626[1];

          break;
          }
        case 'Bidder_touch0_110': {
          const v799 = v626[1];

          break;
          }
        case 'System_close0_110': {
          const v884 = v626[1];

          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;
  switch (v626[0]) {
    case 'Bidder_bid0_110': {
      const v629 = v626[1];
      undefined /* setApiDetails */;
      const v634 = v629[stdlib.checkedBigNumberify('./rsh/auction.rsh:136:11:spread', stdlib.UInt_max, '0')];
      const v642 = stdlib.add(v547, v634);
      ;
      const v645 = v534 ? false : true;
      stdlib.assert(v645, {
        at: './rsh/auction.rsh:146:18:application',
        fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
        msg: 'it\'s already closed',
        who: 'Bidder_bid'
        });
      const v646 = stdlib.gt(v634, v539);
      stdlib.assert(v646, {
        at: './rsh/auction.rsh:147:18:application',
        fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
        msg: 'bid is too low',
        who: 'Bidder_bid'
        });
      const v648 = stdlib.lt(v543, v535);
      stdlib.assert(v648, {
        at: './rsh/auction.rsh:149:18:application',
        fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
        msg: 'auction time is over',
        who: 'Bidder_bid'
        });
      const v649 = [v536, v539];
      const v650 = await txn1.getOutput('Bidder_bid', 'v649', ctc8, v649);
      if (v277) {
        stdlib.protect(ctc5, await interact.out(v629, v650), {
          at: './rsh/auction.rsh:137:9:application',
          fs: ['at ./rsh/auction.rsh:137:9:application call to [unknown function] (defined at: ./rsh/auction.rsh:137:9:function exp)', 'at ./rsh/auction.rsh:150:17:application call to "notify" (defined at: ./rsh/auction.rsh:145:23:function exp)', 'at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }

      if (v537) {
        const v672 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
        const v673 = stdlib.gt(v543, v672);
        const v674 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
        const v675 = v673 ? v674 : v535;
        const v2240 = v534;
        const v2241 = v675;
        const v2242 = v625;
        const v2243 = false;
        const v2245 = v634;
        const v2247 = v628;
        const v2248 = v642;
        const v2249 = stdlib.div(v634, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
        const v2250 = stdlib.mul(v2249, v505);
        const v2251 = stdlib.add(v634, v2250);
        return;
        }
      else {
        const v662 = stdlib.sub(v642, v539);
        ;
        const v665 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
        const v666 = stdlib.gt(v543, v665);
        const v667 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
        const v668 = v666 ? v667 : v535;
        const v2270 = v534;
        const v2271 = v668;
        const v2272 = v625;
        const v2273 = false;
        const v2275 = v634;
        const v2277 = v628;
        const v2278 = v662;
        const v2279 = stdlib.div(v634, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
        const v2280 = stdlib.mul(v2279, v505);
        const v2281 = stdlib.add(v634, v2280);
        return;
        }
      break;
      }
    case 'Bidder_close0_110': {
      const v714 = v626[1];
      return;
      break;
      }
    case 'Bidder_touch0_110': {
      const v799 = v626[1];
      return;
      break;
      }
    case 'System_close0_110': {
      const v884 = v626[1];
      return;
      break;
      }
    }


  };
export async function _Bidder_close6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_close6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_close6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    Bidder_bid0_110: ctc6,
    Bidder_close0_110: ctc5,
    Bidder_touch0_110: ctc5,
    System_close0_110: ctc5
    });


  const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2]);
  const v579 = ctc.selfAddress();
  const v581 = stdlib.protect(ctc5, await interact.in(), {
    at: './rsh/auction.rsh:1:23:application',
    fs: ['at ./rsh/auction.rsh:169:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:169:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_close0_110" (defined at: ./rsh/auction.rsh:167:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'in',
    who: 'Bidder_close'
    });
  stdlib.assert(v534, {
    at: './rsh/auction.rsh:170:17:application',
    fs: ['at ./rsh/auction.rsh:169:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:169:13:function exp)', 'at ./rsh/auction.rsh:169:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:169:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_close0_110" (defined at: ./rsh/auction.rsh:167:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'system hasn\'t closed the auction yet',
    who: 'Bidder_close'
    });
  const v585 = stdlib.addressEq(v579, v536);
  stdlib.assert(v585, {
    at: './rsh/auction.rsh:171:17:application',
    fs: ['at ./rsh/auction.rsh:169:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:169:13:function exp)', 'at ./rsh/auction.rsh:169:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:169:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_close0_110" (defined at: ./rsh/auction.rsh:167:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'unauthorized',
    who: 'Bidder_close'
    });
  const v589 = ['Bidder_close0_110', v581];

  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563, v589],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:173:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;

      switch (v626[0]) {
        case 'Bidder_bid0_110': {
          const v629 = v626[1];

          break;
          }
        case 'Bidder_close0_110': {
          const v714 = v626[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_close"
            });
          ;
          const v765 = null;
          const v766 = await txn1.getOutput('Bidder_close', 'v765', ctc4, v765);

          const v772 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:181:26:decimal', stdlib.UInt_max, '0') : v539;
          const v2450 = true;
          const v2452 = v536;
          const v2455 = v772;
          const v2462 = stdlib.div(v772, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
          const v2463 = stdlib.mul(v2462, v505);
          const v2464 = stdlib.add(v772, v2463);
          const v2465 = stdlib.gt(v499, stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10'));
          const v2466 = v2465 ? v499 : stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10');
          const v2467 = stdlib.div(v547, stdlib.checkedBigNumberify('./rsh/auction.rsh:230:27:decimal', stdlib.UInt_max, '100'));
          const v2468 = stdlib.mul(v2466, v2467);
          const v2469 = stdlib.mul(stdlib.checkedBigNumberify('./rsh/auction.rsh:224:24:decimal', stdlib.UInt_max, '5'), v2467);
          const v2470 = stdlib.mul(v500, v2467);
          const v2471 = stdlib.add(v2468, v2469);
          const v2472 = stdlib.add(v2471, v2470);
          const v2473 = stdlib.sub(v547, v2472);
          const v2474 = stdlib.ge(v772, v504);
          if (v2474) {
            sim_r.txns.push({
              kind: 'from',
              to: v536,
              tok: v496
              });
            sim_r.txns.push({
              kind: 'from',
              to: v503,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v501,
              tok: undefined /* Nothing */
              });
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'from',
              to: v536,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'from',
              to: v495,
              tok: v496
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v496
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Bidder_touch0_110': {
          const v799 = v626[1];

          break;
          }
        case 'System_close0_110': {
          const v884 = v626[1];

          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;
  switch (v626[0]) {
    case 'Bidder_bid0_110': {
      const v629 = v626[1];
      return;
      break;
      }
    case 'Bidder_close0_110': {
      const v714 = v626[1];
      undefined /* setApiDetails */;
      ;
      stdlib.assert(v534, {
        at: './rsh/auction.rsh:175:18:application',
        fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
        msg: 'system hasn\'t closed the auction yet',
        who: 'Bidder_close'
        });
      const v764 = stdlib.addressEq(v625, v536);
      stdlib.assert(v764, {
        at: './rsh/auction.rsh:176:18:application',
        fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
        msg: 'unauthorized',
        who: 'Bidder_close'
        });
      const v765 = null;
      const v766 = await txn1.getOutput('Bidder_close', 'v765', ctc4, v765);
      if (v277) {
        stdlib.protect(ctc4, await interact.out(v714, v766), {
          at: './rsh/auction.rsh:168:9:application',
          fs: ['at ./rsh/auction.rsh:168:9:application call to [unknown function] (defined at: ./rsh/auction.rsh:168:9:function exp)', 'at ./rsh/auction.rsh:177:12:application call to "k" (defined at: ./rsh/auction.rsh:174:16:function exp)', 'at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
          msg: 'out',
          who: 'Bidder_close'
          });
        }
      else {
        }

      const v772 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:181:26:decimal', stdlib.UInt_max, '0') : v539;
      const v2450 = true;
      const v2452 = v536;
      const v2455 = v772;
      const v2462 = stdlib.div(v772, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
      const v2463 = stdlib.mul(v2462, v505);
      const v2464 = stdlib.add(v772, v2463);
      const v2465 = stdlib.gt(v499, stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10'));
      const v2466 = v2465 ? v499 : stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10');
      const v2467 = stdlib.div(v547, stdlib.checkedBigNumberify('./rsh/auction.rsh:230:27:decimal', stdlib.UInt_max, '100'));
      const v2468 = stdlib.mul(v2466, v2467);
      const v2469 = stdlib.mul(stdlib.checkedBigNumberify('./rsh/auction.rsh:224:24:decimal', stdlib.UInt_max, '5'), v2467);
      const v2470 = stdlib.mul(v500, v2467);
      const v2471 = stdlib.add(v2468, v2469);
      const v2472 = stdlib.add(v2471, v2470);
      const v2473 = stdlib.sub(v547, v2472);
      const v2474 = stdlib.ge(v772, v504);
      if (v2474) {
        ;
        ;
        ;
        return;
        }
      else {
        ;
        ;
        return;
        }
      break;
      }
    case 'Bidder_touch0_110': {
      const v799 = v626[1];
      return;
      break;
      }
    case 'System_close0_110': {
      const v884 = v626[1];
      return;
      break;
      }
    }


  };
export async function _Bidder_touch6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_touch6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_touch6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    Bidder_bid0_110: ctc6,
    Bidder_close0_110: ctc5,
    Bidder_touch0_110: ctc5,
    System_close0_110: ctc5
    });


  const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2]);
  const v593 = stdlib.protect(ctc5, await interact.in(), {
    at: './rsh/auction.rsh:1:23:application',
    fs: ['at ./rsh/auction.rsh:188:11:application call to [unknown function] (defined at: ./rsh/auction.rsh:188:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runBidder_touch0_110" (defined at: ./rsh/auction.rsh:188:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'in',
    who: 'Bidder_touch'
    });
  const v600 = ['Bidder_touch0_110', v593];

  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563, v600],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:190:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;

      switch (v626[0]) {
        case 'Bidder_bid0_110': {
          const v629 = v626[1];

          break;
          }
        case 'Bidder_close0_110': {
          const v714 = v626[1];

          break;
          }
        case 'Bidder_touch0_110': {
          const v799 = v626[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_touch"
            });
          ;
          const v861 = null;
          const v862 = await txn1.getOutput('Bidder_touch', 'v861', ctc4, v861);

          const v2630 = v534;
          const v2631 = v535;
          const v2632 = v536;
          const v2633 = v537;
          const v2635 = v539;
          const v2637 = v628;
          const v2638 = v547;
          const v2639 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
          const v2640 = stdlib.mul(v2639, v505);
          const v2641 = stdlib.add(v539, v2640);
          sim_r.isHalt = false;

          break;
          }
        case 'System_close0_110': {
          const v884 = v626[1];

          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;
  switch (v626[0]) {
    case 'Bidder_bid0_110': {
      const v629 = v626[1];
      return;
      break;
      }
    case 'Bidder_close0_110': {
      const v714 = v626[1];
      return;
      break;
      }
    case 'Bidder_touch0_110': {
      const v799 = v626[1];
      undefined /* setApiDetails */;
      ;
      const v861 = null;
      const v862 = await txn1.getOutput('Bidder_touch', 'v861', ctc4, v861);
      if (v277) {
        stdlib.protect(ctc4, await interact.out(v799, v862), {
          at: './rsh/auction.rsh:189:9:application',
          fs: ['at ./rsh/auction.rsh:189:9:application call to [unknown function] (defined at: ./rsh/auction.rsh:189:9:function exp)', 'at ./rsh/auction.rsh:192:12:application call to "k" (defined at: ./rsh/auction.rsh:191:16:function exp)', 'at ./rsh/auction.rsh:191:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:191:16:function exp)'],
          msg: 'out',
          who: 'Bidder_touch'
          });
        }
      else {
        }

      const v2630 = v534;
      const v2631 = v535;
      const v2632 = v536;
      const v2633 = v537;
      const v2635 = v539;
      const v2637 = v628;
      const v2638 = v547;
      const v2639 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
      const v2640 = stdlib.mul(v2639, v505);
      const v2641 = stdlib.add(v539, v2640);
      return;

      break;
      }
    case 'System_close0_110': {
      const v884 = v626[1];
      return;
      break;
      }
    }


  };
export async function Closer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Closer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Closer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Tuple([ctc1]);
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Data({
    Bidder_bid0_110: ctc3,
    Bidder_close0_110: ctc5,
    Bidder_touch0_110: ctc5,
    System_close0_110: ctc5
    });
  const ctc7 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc8 = stdlib.T_Bool;


  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 10,
    funcNum: 0,
    out_tys: [ctc0, ctc1, ctc1, ctc1, ctc1, ctc2, ctc2, ctc2, ctc1, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v496, v497, v498, v499, v500, v501, v502, v503, v504, v505], secs: v507, time: v506, didSend: v63, from: v495 } = txn1;
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v517, time: v516, didSend: v70, from: v515 } = txn2;
  ;
  ;
  const v527 = stdlib.addressEq(v495, v515);
  stdlib.assert(v527, {
    at: './rsh/auction.rsh:98:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Closer'
    });
  const v533 = stdlib.add(v507, v498);
  let v534 = false;
  let v535 = v533;
  let v536 = v495;
  let v537 = true;
  let v538 = true;
  let v539 = v497;
  let v540 = v516;
  let v543 = v517;
  let v547 = stdlib.checkedBigNumberify('./rsh/auction.rsh:64:9:after expr stmt semicolon', stdlib.UInt_max, '0');

  while (await (async () => {

    return v538;})()) {
    const v561 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
    const v562 = stdlib.mul(v561, v505);
    const v563 = stdlib.add(v539, v562);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc6],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn3;
    switch (v626[0]) {
      case 'Bidder_bid0_110': {
        const v629 = v626[1];
        undefined /* setApiDetails */;
        const v634 = v629[stdlib.checkedBigNumberify('./rsh/auction.rsh:136:11:spread', stdlib.UInt_max, '0')];
        const v642 = stdlib.add(v547, v634);
        ;
        const v645 = v534 ? false : true;
        stdlib.assert(v645, {
          at: './rsh/auction.rsh:146:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'it\'s already closed',
          who: 'Closer'
          });
        const v646 = stdlib.gt(v634, v539);
        stdlib.assert(v646, {
          at: './rsh/auction.rsh:147:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'bid is too low',
          who: 'Closer'
          });
        const v648 = stdlib.lt(v543, v535);
        stdlib.assert(v648, {
          at: './rsh/auction.rsh:149:18:application',
          fs: ['at ./rsh/auction.rsh:145:23:application call to [unknown function] (defined at: ./rsh/auction.rsh:145:23:function exp)'],
          msg: 'auction time is over',
          who: 'Closer'
          });
        const v649 = [v536, v539];
        await txn3.getOutput('Bidder_bid', 'v649', ctc7, v649);
        if (v537) {
          const v672 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
          const v673 = stdlib.gt(v543, v672);
          const v674 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
          const v675 = v673 ? v674 : v535;
          const cv534 = v534;
          const cv535 = v675;
          const cv536 = v625;
          const cv537 = false;
          const cv538 = true;
          const cv539 = v634;
          const cv540 = v627;
          const cv543 = v628;
          const cv547 = v642;

          v534 = cv534;
          v535 = cv535;
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v543 = cv543;
          v547 = cv547;

          continue;}
        else {
          const v662 = stdlib.sub(v642, v539);
          ;
          const v665 = stdlib.sub(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:28:decimal', stdlib.UInt_max, '60'));
          const v666 = stdlib.gt(v543, v665);
          const v667 = stdlib.add(v535, stdlib.checkedBigNumberify('./rsh/auction.rsh:116:42:decimal', stdlib.UInt_max, '120'));
          const v668 = v666 ? v667 : v535;
          const cv534 = v534;
          const cv535 = v668;
          const cv536 = v625;
          const cv537 = false;
          const cv538 = true;
          const cv539 = v634;
          const cv540 = v627;
          const cv543 = v628;
          const cv547 = v662;

          v534 = cv534;
          v535 = cv535;
          v536 = cv536;
          v537 = cv537;
          v538 = cv538;
          v539 = cv539;
          v540 = cv540;
          v543 = cv543;
          v547 = cv547;

          continue;}
        break;
        }
      case 'Bidder_close0_110': {
        const v714 = v626[1];
        undefined /* setApiDetails */;
        ;
        stdlib.assert(v534, {
          at: './rsh/auction.rsh:175:18:application',
          fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
          msg: 'system hasn\'t closed the auction yet',
          who: 'Closer'
          });
        const v764 = stdlib.addressEq(v625, v536);
        stdlib.assert(v764, {
          at: './rsh/auction.rsh:176:18:application',
          fs: ['at ./rsh/auction.rsh:174:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:174:16:function exp)'],
          msg: 'unauthorized',
          who: 'Closer'
          });
        const v765 = null;
        await txn3.getOutput('Bidder_close', 'v765', ctc4, v765);
        const v772 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:181:26:decimal', stdlib.UInt_max, '0') : v539;
        const cv534 = true;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = false;
        const cv538 = false;
        const cv539 = v772;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      case 'Bidder_touch0_110': {
        const v799 = v626[1];
        undefined /* setApiDetails */;
        ;
        const v861 = null;
        await txn3.getOutput('Bidder_touch', 'v861', ctc4, v861);
        const cv534 = v534;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = v537;
        const cv538 = true;
        const cv539 = v539;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      case 'System_close0_110': {
        const v884 = v626[1];
        undefined /* setApiDetails */;
        ;
        const v956 = v534 ? false : true;
        stdlib.assert(v956, {
          at: './rsh/auction.rsh:207:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'it\'s already closed',
          who: 'Closer'
          });
        const v957 = stdlib.addressEq(v625, v501);
        stdlib.assert(v957, {
          at: './rsh/auction.rsh:208:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'unauthorized',
          who: 'Closer'
          });
        const v959 = stdlib.ge(v543, v535);
        stdlib.assert(v959, {
          at: './rsh/auction.rsh:209:18:application',
          fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'deadline hasn\'t been met yet',
          who: 'Closer'
          });
        const v960 = null;
        await txn3.getOutput('System_close', 'v960', ctc4, v960);
        const v967 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:215:26:decimal', stdlib.UInt_max, '0') : v539;
        const cv534 = true;
        const cv535 = v535;
        const cv536 = v536;
        const cv537 = false;
        const cv538 = true;
        const cv539 = v967;
        const cv540 = v627;
        const cv543 = v628;
        const cv547 = v547;

        v534 = cv534;
        v535 = cv535;
        v536 = cv536;
        v537 = cv537;
        v538 = cv538;
        v539 = cv539;
        v540 = cv540;
        v543 = cv543;
        v547 = cv547;

        continue;
        break;
        }
      }

    }
  const v969 = stdlib.div(v539, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
  const v970 = stdlib.mul(v969, v505);
  const v971 = stdlib.add(v539, v970);
  const v972 = stdlib.gt(v499, stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10'));
  const v973 = v972 ? v499 : stdlib.checkedBigNumberify('./rsh/auction.rsh:226:27:decimal', stdlib.UInt_max, '10');
  const v975 = stdlib.div(v547, stdlib.checkedBigNumberify('./rsh/auction.rsh:230:27:decimal', stdlib.UInt_max, '100'));
  const v976 = stdlib.mul(v973, v975);
  const v977 = stdlib.mul(stdlib.checkedBigNumberify('./rsh/auction.rsh:224:24:decimal', stdlib.UInt_max, '5'), v975);
  const v978 = stdlib.mul(v500, v975);
  const v980 = stdlib.add(v976, v977);
  const v981 = stdlib.add(v980, v978);
  const v982 = stdlib.sub(v547, v981);
  const v983 = stdlib.ge(v539, v504);
  const v985 = v537 ? false : v983;
  if (v985) {
    ;
    ;
    ;
    const txn3 = await (ctc.sendrecv({
      args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v536, v539, v971, v978, v982],
      evt_cnt: 0,
      funcNum: 3,
      lct: v540,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:249:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


        const {data: [], secs: v1008, time: v1007, didSend: v392, from: v1006 } = txn3;

        ;
        sim_r.txns.push({
          kind: 'from',
          to: v502,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'from',
          to: v495,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: v496
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;

        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc1, ctc1, ctc2, ctc2, ctc2, ctc1, ctc1, ctc1, ctc8, ctc2, ctc1, ctc1, ctc1, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v1008, time: v1007, didSend: v392, from: v1006 } = txn3;
    ;
    ;
    ;
    return;


    }
  else {
    ;
    ;
    return;
    }



  };
export async function _System_close6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _System_close6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _System_close6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Tuple([ctc2]);
  const ctc7 = stdlib.T_Data({
    Bidder_bid0_110: ctc6,
    Bidder_close0_110: ctc5,
    Bidder_touch0_110: ctc5,
    System_close0_110: ctc5
    });


  const [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2]);
  const v602 = ctc.selfAddress();
  const v604 = stdlib.protect(ctc5, await interact.in(), {
    at: './rsh/auction.rsh:1:23:application',
    fs: ['at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runSystem_close0_110" (defined at: ./rsh/auction.rsh:198:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'in',
    who: 'System_close'
    });
  const v608 = v534 ? false : true;
  stdlib.assert(v608, {
    at: './rsh/auction.rsh:201:17:application',
    fs: ['at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runSystem_close0_110" (defined at: ./rsh/auction.rsh:198:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'it\'s already closed',
    who: 'System_close'
    });
  const v609 = stdlib.addressEq(v602, v501);
  stdlib.assert(v609, {
    at: './rsh/auction.rsh:202:17:application',
    fs: ['at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runSystem_close0_110" (defined at: ./rsh/auction.rsh:198:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'unauthorized',
    who: 'System_close'
    });
  const v611 = stdlib.ge(v543, v535);
  stdlib.assert(v611, {
    at: './rsh/auction.rsh:203:17:application',
    fs: ['at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:200:13:application call to [unknown function] (defined at: ./rsh/auction.rsh:200:13:function exp)', 'at ./rsh/auction.rsh:122:19:application call to "runSystem_close0_110" (defined at: ./rsh/auction.rsh:198:11:function exp)', 'at ./rsh/auction.rsh:122:19:application call to [unknown function] (defined at: ./rsh/auction.rsh:122:19:function exp)'],
    msg: 'deadline hasn\'t been met yet',
    who: 'System_close'
    });
  const v615 = ['System_close0_110', v604];

  const txn1 = await (ctc.sendrecv({
    args: [v495, v496, v499, v500, v501, v502, v503, v504, v505, v533, v534, v535, v536, v537, v539, v543, v547, v563, v615],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc7],
    pay: [stdlib.checkedBigNumberify('./rsh/auction.rsh:205:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };


      const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;

      switch (v626[0]) {
        case 'Bidder_bid0_110': {
          const v629 = v626[1];

          break;
          }
        case 'Bidder_close0_110': {
          const v714 = v626[1];

          break;
          }
        case 'Bidder_touch0_110': {
          const v799 = v626[1];

          break;
          }
        case 'System_close0_110': {
          const v884 = v626[1];
          sim_r.txns.push({
            kind: 'api',
            who: "System_close"
            });
          ;
          const v960 = null;
          const v961 = await txn1.getOutput('System_close', 'v960', ctc4, v960);

          const v967 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:215:26:decimal', stdlib.UInt_max, '0') : v539;
          const v2810 = true;
          const v2811 = v535;
          const v2812 = v536;
          const v2813 = false;
          const v2815 = v967;
          const v2817 = v628;
          const v2818 = v547;
          const v2819 = stdlib.div(v967, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
          const v2820 = stdlib.mul(v2819, v505);
          const v2821 = stdlib.add(v967, v2820);
          sim_r.isHalt = false;

          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc2, ctc0, ctc0, ctc0, ctc2, ctc2, ctc2, ctc3, ctc2, ctc0, ctc3, ctc2, ctc2, ctc2, ctc2, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v626], secs: v628, time: v627, didSend: v277, from: v625 } = txn1;
  switch (v626[0]) {
    case 'Bidder_bid0_110': {
      const v629 = v626[1];
      return;
      break;
      }
    case 'Bidder_close0_110': {
      const v714 = v626[1];
      return;
      break;
      }
    case 'Bidder_touch0_110': {
      const v799 = v626[1];
      return;
      break;
      }
    case 'System_close0_110': {
      const v884 = v626[1];
      undefined /* setApiDetails */;
      ;
      const v956 = v534 ? false : true;
      stdlib.assert(v956, {
        at: './rsh/auction.rsh:207:18:application',
        fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
        msg: 'it\'s already closed',
        who: 'System_close'
        });
      const v957 = stdlib.addressEq(v625, v501);
      stdlib.assert(v957, {
        at: './rsh/auction.rsh:208:18:application',
        fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
        msg: 'unauthorized',
        who: 'System_close'
        });
      const v959 = stdlib.ge(v543, v535);
      stdlib.assert(v959, {
        at: './rsh/auction.rsh:209:18:application',
        fs: ['at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
        msg: 'deadline hasn\'t been met yet',
        who: 'System_close'
        });
      const v960 = null;
      const v961 = await txn1.getOutput('System_close', 'v960', ctc4, v960);
      if (v277) {
        stdlib.protect(ctc4, await interact.out(v884, v961), {
          at: './rsh/auction.rsh:199:9:application',
          fs: ['at ./rsh/auction.rsh:199:9:application call to [unknown function] (defined at: ./rsh/auction.rsh:199:9:function exp)', 'at ./rsh/auction.rsh:210:12:application call to "k" (defined at: ./rsh/auction.rsh:206:16:function exp)', 'at ./rsh/auction.rsh:206:16:application call to [unknown function] (defined at: ./rsh/auction.rsh:206:16:function exp)'],
          msg: 'out',
          who: 'System_close'
          });
        }
      else {
        }

      const v967 = v537 ? stdlib.checkedBigNumberify('./rsh/auction.rsh:215:26:decimal', stdlib.UInt_max, '0') : v539;
      const v2810 = true;
      const v2811 = v535;
      const v2812 = v536;
      const v2813 = false;
      const v2815 = v967;
      const v2817 = v628;
      const v2818 = v547;
      const v2819 = stdlib.div(v967, stdlib.checkedBigNumberify('./rsh/auction.rsh:7:34:decimal', stdlib.UInt_max, '100'));
      const v2820 = stdlib.mul(v2819, v505);
      const v2821 = stdlib.add(v967, v2820);
      return;

      break;
      }
    }


  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Bidder_bid6(ctcTop, interact);}
  };
export async function Bidder_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Bidder_close6(ctcTop, interact);}
  };
export async function Bidder_touch(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_touch expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_touch expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _Bidder_touch6(ctcTop, interact);}
  };
export async function System_close(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for System_close expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for System_close expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 6, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [6]');
  if (step == 6) {return _System_close6(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`Bidder_bid(uint64)(address,uint64)`, `Bidder_close(byte[0])byte[0]`, `Bidder_touch(byte[0])byte[0]`, `System_close(byte[0])byte[0]`],
    pure: [`Auction_bidIncrement()uint64`, `Auction_bids()uint64`, `Auction_charityAddress()address`, `Auction_charityPercentage()uint64`, `Auction_closedSys()byte`, `Auction_creatorAddress()address`, `Auction_currentPrice()uint64`, `Auction_endSecs()uint64`, `Auction_highestBidder()address`, `Auction_minBid()uint64`, `Auction_nftId()uint64`, `Auction_owner()address`, `Auction_platformAddress()address`, `Auction_reservePrice()uint64`, `Auction_royalty()uint64`],
    sigs: [`Auction_bidIncrement()uint64`, `Auction_bids()uint64`, `Auction_charityAddress()address`, `Auction_charityPercentage()uint64`, `Auction_closedSys()byte`, `Auction_creatorAddress()address`, `Auction_currentPrice()uint64`, `Auction_endSecs()uint64`, `Auction_highestBidder()address`, `Auction_minBid()uint64`, `Auction_nftId()uint64`, `Auction_owner()address`, `Auction_platformAddress()address`, `Auction_reservePrice()uint64`, `Auction_royalty()uint64`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_close(byte[0])byte[0]`, `Bidder_touch(byte[0])byte[0]`, `System_close(byte[0])byte[0]`]
    },
  appApproval: `BiAiAAYBAwQIIGSxibvyC73O4oYO6IaU6Q6ri8mJD+ybvqAP5aGMjg7njeDtDPiC7u4Mtqr51g3L5cn7C+yj65kEtOHhyQXf99ifCqu7naAL96PVkQWn9Z3eAfKO4rUDoJu8gQEoMKgBeDygjQYKBSYDAQABAQAiNQAxGEEJ2ypkSSJbNQEhBVs1AjYaABdJQQO1IjUEJDUGSSEIDEAB60khCQxAAOpJIQoMQACUSSELDEAAW0khDAxAACIhDBJENAFJIwxAAAsjEkQhBa81B0IJfyUSRCEFrzUHQgl0IQsSRDQBSSMMQAATIxJEKGQpZFBJNQNX8gg1B0IJVSUSRChkKWRQSTUDV9kINQdCCUIhChJENAFJIwxAABMjEkQoZClkUEk1A1coCDUHQgkjJRJEKGQpZFBJNQNXKAg1B0IJEEkhDQxAABYhDRJENhoBNf+AAQM0/1AhBa9QQgMHIQkSRDQBSSMMQAATIxJEKGQpZFBJNQNX2gg1B0II1CUSRChkKWRQSTUDV9EINQdCCMFJIQ4MQACISSEPDEAAT0khEAxAABYhEBJENhoBNf+AAQI0/1AhBa9QQgKqIQ8SRDQBSSMMQAATIxJEKGQpZFBJNQNXWCA1B0IIdyUSRChkKWRQSTUDV1ggNQdCCGQhDhJENAFJIwxAABMjEkQoZClkUEk1A1cwCDUHQghFJRJEKGQpZFBJNQNXMAg1B0IIMkkhEQxAADIhERJENAFJIwxAABMjEkQoZClkUEk1A1cAIDUHQggMJRJEKGQpZFBJNQNXACA1B0IH+SEIEkQ0AUkjDEAAEyMSRChkKWRQSTUDV6AINQdCB9olEkQoZClkUEk1A1egCDUHQgfHSSESDEABFkkhEwxAAKRJIRQMQABrSSEVDEAAMiEVEkQ0AUkjDEAAEyMSRChkKWRQSTUDVyAINQdCB4wlEkQoZClkUEk1A1cgCDUHQgd5IRQSRDQBSSMMQAATIxJEKGQpZFBJNQNXuSA1B0IHWiUSRChkKWRQSTUDV7EgNQdCB0chExJENAFJIwxAABMjEkQoZClkUEk1A1c4IDUHQgcoJRJEKGQpZFBJNQNXOCA1B0IHFUkhFgxAADIhFhJENAFJIwxAABMjEkQoZClkUEk1A1d4IDUHQgbvJRJEKGQpZFBJNQNXeCA1B0IG3CESEkQ0AUkjDEAAEyMSRChkKWRQSTUDV5gINQdCBr0lEkQoZClkUEk1A1eYCDUHQgaqSSEXDEAATUkhGAxAABQhGBJENhoBNf8pNP9QIQWvUEIAnCEXEkQ0AUkjDEAAEyMSRChkKWRQSTUDV7ABNQdCBmklEkQoZClkUEk1A1ewATUHQgZWSSEZDEAAECEZEkQ2GgE1/yg0/1BCAFOBt+/dZxJENAFJIwxAABMjEkQoZClkUEk1A1eoCDUHQgYdJRJEKGQpZFBJNQNXqAg1B0IGCjYaAhc1BDYaAzYaARdJJQxAAqFJIQQMQAIvIQQSRCM0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpKSkpKSVcAIDX/IQZbNf4hGls1/SEbWzX8VzggNftXWCA1+ld4IDX5gZgBWzX4gaABWzX3IRxbNfZXsAEXNfWBsQFbNfRXuSA181fZARc18oHaAVs18YHiAVs18IHqAVs170k1BTXugATVjh2rNO5QsDTuIlVJgQIMQACISSUMQABLJRJENPUURDEANPsSRDTwNPQPRIAIAAAAAAAAA8CwKjUHNP80/jT9NPw0+zT6NPk0+DT3NPYkNPQ08yIkNPEiNPJNMgYyBzTvQgMSSIAIAAAAAAAAA12wKjUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0NPM08iQ08TIGMgc070IC20kkDEAAQkg09UQxADTzEkSACAAAAAAAAAL9sCo1BzT/NP40/TT8NPs0+jT5NPg09zT2JDT0NPMiIjTxIjTyTTIGMgc070ICk0g07lcBCDXtNO0XNew07zTsCDXrNOyIBHw09RRENOw08Q1ENPA09AxEgAgAAAAAAAACiTTzNPEWUFCwNPM08RZQNQc08kEANDT/NP40/TT8NPs0+jT5NPg09zT2NPU09EkhHQg08DT0IR4JDU0xACIkNOwyBjIHNOtCAhexIrIBNPGyCCSyEDTzsgezNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0SSEdCDTwNPQhHgkNTTEAIiQ07DIGMgc06zTxCUIB0EglNAESRDQESSISTDQCEhFEKGQpZFA1A4AEp2XEtLCxIrIBNAOB4QFbsggkshA0A1dYILIHs7EisgE0A4HpAVuyCCSyEDQDVwAgsgezsSKyASKyEiEEshAyCbIVMgqyFDQDIQZbshGzQgMOSSQMQACFJBJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSVcAIDX/IQZbNf6ABJqLkXSwJDT+iANGNP8xABJENAOBuAFbNAMhG1sINf00/zT+NAOBOFs0A4FAWzQDV0ggNANXaCA0A1eIIDQDIRxbNAOBsAFbNP0iNP00/yQkNAMhGlsyBjIHIkIA2kghH4gC1iI0ARJENARJIhJMNAISEURJNQVJSkpKSiJbNf8hBVs1/oEQWzX9gRhbNfwhBls1+1coIDX6V0ggNflXaCA1+IGIAVs194GQAVs19oAE/UKM8DT/FlA0/hZQNP0WUDT8FlA0+xZQNPpQNPlQNPhQNPcWUDT2FlCwIR+IAlqxIrIBIrISIQSyEDIKshQ0/7IRszEANP8WUDT+FlA0/RZQNPwWUDT7FlA0+lA0+VA0+FA09xZQNPYWUDIHFlAoSwFXAH9nKUsBV39BZ0gkNQEyBjUCQgHFNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNe00+0EAbTT8SSEHCjT1Cwg17DTtNO4WUDTvFlA08BZQNPFQNPJQNPNQNPQWUDT1FlA09hZQNPcWUQcIUDT4FlA0+VA0+hZRBwhQNPwWUDT+FlA0/xZQNOwWUChLAVcAf2cpSwFXf3tnSCM1ATIGNQJCAS00/EkhBwo09QsINew0/yEHCjXrISA070khIA1NNOsLNeohITTrCzXpNPA06ws16DT/NOo06Qg06AgJNec0+hQ0/DT0DxBBAIqxIrIBJLISIQSyEDT5shQ07rIRs7EisgE06rIIJLIQNPOyB7OxIrIBNOmyCCSyEDTxsgezNO007hZQNO8WUDTwFlA08VA08lA081A09BZQNPUWUDT2FlA09xZRBwhQNPlQNPwWUDTsFlA06BZQNOcWUChLAVcAf2cpSwFXf3JnSCU1ATIGNQJCAFuxIrIBNP+yCCSyEDT5sgezsSKyASSyEiEEshA07bIUNO6yEbOxIrIBIrISIQSyEDIJshUyCrIUNO6yEbNCAAAxGSEhEkSxIrIBIrIIJLIQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkkCDIEEkQxFhJEJEMxGSISREL/3yI1ASI1AkL/wzQASUokCDUAOAcyChJEOBAkEkQ4CBJEiTQASUpJJAg1ADgUMgoSRDgQIQQSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 250,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v496",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v498",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v499",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v501",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v502",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v503",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v504",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v496",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v497",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v498",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v499",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v500",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v501",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v502",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v503",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v504",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v505",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bidder_bid0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bidder_close0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bidder_touch0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_System_close0_110",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v626",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v649",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v765",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v861",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v960",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Auction_bidIncrement",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_bids",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_charityAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_charityPercentage",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_closedSys",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_creatorAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_currentPrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_endSecs",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_highestBidder",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_minBid",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_nftId",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_owner",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_platformAddress",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_reservePrice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Auction_royalty",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bidder_bid",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "elem0",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "elem1",
            "type": "uint256"
          }
        ],
        "internalType": "struct T13",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "Bidder_close",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "Bidder_touch",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_a0",
        "type": "bool"
      }
    ],
    "name": "System_close",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T12",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T10",
                    "name": "_Bidder_bid0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bidder_close0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_Bidder_touch0_110",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "internalType": "bool",
                        "name": "elem0",
                        "type": "bool"
                      }
                    ],
                    "internalType": "struct T11",
                    "name": "_System_close0_110",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T12",
                "name": "v626",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162004fd238038062004fd2833981016040819052620000269162000348565b60008055436003556040517f3ba56e34b8686630bc669228016fb5a936ebba32d358c00c1b598911da3b2e329062000062903390849062000422565b60405180910390a16200007834156016620001f2565b6200010a60405180610180016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b33815260208083018051516001600160a01b039081168385015281518301516040808601919091528251810151606080870191909152835101516080808701919091528351015160a08087019190915283510151821660c08087019190915283510151821660e08087019190915283510151909116610100808601919091528251015161012080860191909152915190910151610140840152426101608401526001600081905543905551620001c391839101620004ec565b60405160208183030381529060405260029080519060200190620001e99291906200021c565b505050620005f3565b81620002185760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200022a90620005b6565b90600052602060002090601f0160209004810192826200024e576000855562000299565b82601f106200026957805160ff191683800117855562000299565b8280016001018555821562000299579182015b82811115620002995782518255916020019190600101906200027c565b50620002a7929150620002ab565b5090565b5b80821115620002a75760008155600101620002ac565b604080519081016001600160401b0381118282101715620002f357634e487b7160e01b600052604160045260246000fd5b60405290565b60405161014081016001600160401b0381118282101715620002f357634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146200034357600080fd5b919050565b60008183036101608112156200035d57600080fd5b62000367620002c2565b8351815261014080601f19840112156200038057600080fd5b6200038a620002f9565b92506200039a602086016200032b565b835260408501516020840152606085015160408401526080850151606084015260a08501516080840152620003d260c086016200032b565b60a0840152620003e560e086016200032b565b60c0840152610100620003fa8187016200032b565b60e0850152610120868101519185019190915294015193820193909352602083015250919050565b6001600160a01b0383811682528251602080840191909152830151805190911660408301526101808201906020810151606084015260408101516080840152606081015160a0840152608081015160c084015260a08101516200049060e08501826001600160a01b03169052565b5060c0810151610100620004ae818601836001600160a01b03169052565b60e08301519150610120620004cd818701846001600160a01b03169052565b8184015161014087015280840151610160870152505050509392505050565b81516001600160a01b03168152610180810160208301516200051960208401826001600160a01b03169052565b5060408301516040830152606083015160608301526080830151608083015260a083015160a083015260c08301516200055d60c08401826001600160a01b03169052565b5060e08301516200057960e08401826001600160a01b03169052565b50610100838101516001600160a01b0316908301526101208084015190830152610140808401519083015261016092830151929091019190915290565b600181811c90821680620005cb57607f821691505b60208210811415620005ed57634e487b7160e01b600052602260045260246000fd5b50919050565b6149cf80620006036000396000f3fe60806040526004361061015b5760003560e01c80636ef8a8a0116100c8578063adb3aa1611610084578063cfc3a48c11610061578063cfc3a48c1461037a578063d336c0691461038f578063d7aaca32146103a4578063e7ae026d146103b757005b8063adb3aa1614610319578063b186c9111461032e578063b62792241461034357005b80636ef8a8a01461029157806373b4522c146102a657806381cdf784146102b957806383230757146102cc5780638d04edc1146102e1578063ab53f2c6146102f657005b80633dd8c6f2116101175780633dd8c6f21461021357806343c4a394146102285780635693f8c41461023d5780635705718e1461025257806359674f981461026757806365738a9e1461027c57005b80631223211014610164578063191d9bc51461018c5780631e93b0f11461019f5780631fa4d584146101be5780632c10a159146101eb5780633ccbd570146101fe57005b3661016257005b005b610177610172366004613f82565b6103cc565b60405190151581526020015b60405180910390f35b61017761019a366004613f82565b610426565b3480156101ab57600080fd5b506003545b604051908152602001610183565b3480156101ca57600080fd5b506101d3610480565b6040516001600160a01b039091168152602001610183565b6101626101f9366004613f9f565b6106b8565b34801561020a57600080fd5b506101b06106dc565b34801561021f57600080fd5b506101b0610906565b34801561023457600080fd5b506101d3610b2f565b34801561024957600080fd5b506101b0610d55565b34801561025e57600080fd5b506101b0610f7d565b34801561027357600080fd5b506101b06111b2565b34801561028857600080fd5b506101d36113db565b34801561029d57600080fd5b506101b0611604565b6101626102b4366004613f9f565b61182e565b6101626102c7366004613fb7565b61184e565b3480156102d857600080fd5b506001546101b0565b3480156102ed57600080fd5b506101d361186e565b34801561030257600080fd5b5061030b611a97565b604051610183929190613ff5565b34801561032557600080fd5b506101d3611b34565b34801561033a57600080fd5b50610177611d5d565b61035661035136600461402f565b611f87565b6040805182516001600160a01b031681526020928301519281019290925201610183565b34801561038657600080fd5b506101d3611fed565b34801561039b57600080fd5b506101b0612216565b6101776103b2366004613f82565b612440565b3480156103c357600080fd5b506101b0612499565b60006103d6613cf0565b6103de613d24565b6103e6613d43565b60408051602080820183528715158252608084019190915260038352815180820190925282825283015261041a82846126c2565b50506060015192915050565b6000610430613cf0565b610438613d24565b610440613d43565b60408051602080820183528715158252606084019190915260028352815180820190925282825283015261047482846126c2565b50506040015192915050565b60006001600054141561053d5760006002805461049c9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546104c89061405e565b80156105155780601f106104ea57610100808354040283529160200191610515565b820191906000526020600020905b8154815290600101906020018083116104f857829003601f168201915b505050505080602001905181019061052d91906141de565b905061053b6000600f613070565b505b600360005414156105f3576000600280546105579061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546105839061405e565b80156105d05780601f106105a5576101008083540402835291602001916105d0565b820191906000526020600020905b8154815290600101906020018083116105b357829003601f168201915b50505050508060200190518101906105e891906142a6565b610160015192915050565b600660005414156106a95760006002805461060d9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546106399061405e565b80156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b505050505080602001905181019061069e919061439d565b610180015192915050565b6106b56000600f613070565b90565b6106c0613cf0565b6106d86106d2368490038401846144b1565b82613096565b5050565b600060016000541415610799576000600280546106f89061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546107249061405e565b80156107715780601f1061074657610100808354040283529160200191610771565b820191906000526020600020905b81548152906001019060200180831161075457829003601f168201915b505050505080602001905181019061078991906141de565b90506107976000600e613070565b505b6003600054141561084f576000600280546107b39061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546107df9061405e565b801561082c5780601f106108015761010080835404028352916020019161082c565b820191906000526020600020905b81548152906001019060200180831161080f57829003601f168201915b505050505080602001905181019061084491906142a6565b610120015192915050565b600660005414156108fa576000600280546108699061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546108959061405e565b80156108e25780601f106108b7576101008083540402835291602001916108e2565b820191906000526020600020905b8154815290600101906020018083116108c557829003601f168201915b5050505050806020019051810190610844919061439d565b6106b56000600e613070565b6000600160005414156109c3576000600280546109229061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461094e9061405e565b801561099b5780601f106109705761010080835404028352916020019161099b565b820191906000526020600020905b81548152906001019060200180831161097e57829003601f168201915b50505050508060200190518101906109b391906141de565b90506109c16000600a613070565b505b60036000541415610a78576000600280546109dd9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610a099061405e565b8015610a565780601f10610a2b57610100808354040283529160200191610a56565b820191906000526020600020905b815481529060010190602001808311610a3957829003601f168201915b5050505050806020019051810190610a6e91906142a6565b6060015192915050565b60066000541415610b2357600060028054610a929061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610abe9061405e565b8015610b0b5780601f10610ae057610100808354040283529160200191610b0b565b820191906000526020600020905b815481529060010190602001808311610aee57829003601f168201915b5050505050806020019051810190610a6e919061439d565b6106b56000600a613070565b600060016000541415610bec57600060028054610b4b9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b779061405e565b8015610bc45780601f10610b9957610100808354040283529160200191610bc4565b820191906000526020600020905b815481529060010190602001808311610ba757829003601f168201915b5050505050806020019051810190610bdc91906141de565b9050610bea60006012613070565b505b60036000541415610c9e57600060028054610c069061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610c329061405e565b8015610c7f5780601f10610c5457610100808354040283529160200191610c7f565b820191906000526020600020905b815481529060010190602001808311610c6257829003601f168201915b5050505050806020019051810190610c9791906142a6565b5192915050565b60066000541415610d4957600060028054610cb89061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce49061405e565b8015610d315780601f10610d0657610100808354040283529160200191610d31565b820191906000526020600020905b815481529060010190602001808311610d1457829003601f168201915b5050505050806020019051810190610c97919061439d565b6106b560006012613070565b600060016000541415610e1257600060028054610d719061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610d9d9061405e565b8015610dea5780601f10610dbf57610100808354040283529160200191610dea565b820191906000526020600020905b815481529060010190602001808311610dcd57829003601f168201915b5050505050806020019051810190610e0291906141de565b9050610e1060006008613070565b505b60036000541415610ec657600060028054610e2c9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610e589061405e565b8015610ea55780601f10610e7a57610100808354040283529160200191610ea5565b820191906000526020600020905b815481529060010190602001808311610e8857829003601f168201915b5050505050806020019051810190610ebd91906142a6565b50600092915050565b60066000541415610f7157600060028054610ee09061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610f0c9061405e565b8015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b5050505050806020019051810190610ebd919061439d565b6106b560006008613070565b60006001600054141561103a57600060028054610f999061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054610fc59061405e565b80156110125780601f10610fe757610100808354040283529160200191611012565b820191906000526020600020905b815481529060010190602001808311610ff557829003601f168201915b505050505080602001905181019061102a91906141de565b905061103860006010613070565b505b600360005414156110f0576000600280546110549061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546110809061405e565b80156110cd5780601f106110a2576101008083540402835291602001916110cd565b820191906000526020600020905b8154815290600101906020018083116110b057829003601f168201915b50505050508060200190518101906110e591906142a6565b6101a0015192915050565b600660005414156111a65760006002805461110a9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546111369061405e565b80156111835780601f1061115857610100808354040283529160200191611183565b820191906000526020600020905b81548152906001019060200180831161116657829003601f168201915b505050505080602001905181019061119b919061439d565b610220015192915050565b6106b560006010613070565b60006001600054141561126f576000600280546111ce9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546111fa9061405e565b80156112475780601f1061121c57610100808354040283529160200191611247565b820191906000526020600020905b81548152906001019060200180831161122a57829003601f168201915b505050505080602001905181019061125f91906141de565b905061126d60006014613070565b505b60036000541415611324576000600280546112899061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546112b59061405e565b80156113025780601f106112d757610100808354040283529160200191611302565b820191906000526020600020905b8154815290600101906020018083116112e557829003601f168201915b505050505080602001905181019061131a91906142a6565b60e0015192915050565b600660005414156113cf5760006002805461133e9061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461136a9061405e565b80156113b75780601f1061138c576101008083540402835291602001916113b7565b820191906000526020600020905b81548152906001019060200180831161139a57829003601f168201915b505050505080602001905181019061131a919061439d565b6106b560006014613070565b600060016000541415611498576000600280546113f79061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546114239061405e565b80156114705780601f1061144557610100808354040283529160200191611470565b820191906000526020600020905b81548152906001019060200180831161145357829003601f168201915b505050505080602001905181019061148891906141de565b905061149660006013613070565b505b6003600054141561154d576000600280546114b29061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546114de9061405e565b801561152b5780601f106115005761010080835404028352916020019161152b565b820191906000526020600020905b81548152906001019060200180831161150e57829003601f168201915b505050505080602001905181019061154391906142a6565b6080015192915050565b600660005414156115f8576000600280546115679061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546115939061405e565b80156115e05780601f106115b5576101008083540402835291602001916115e0565b820191906000526020600020905b8154815290600101906020018083116115c357829003601f168201915b5050505050806020019051810190611543919061439d565b6106b560006013613070565b6000600160005414156116c1576000600280546116209061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461164c9061405e565b80156116995780601f1061166e57610100808354040283529160200191611699565b820191906000526020600020905b81548152906001019060200180831161167c57829003601f168201915b50505050508060200190518101906116b191906141de565b90506116bf60006007613070565b505b60036000541415611777576000600280546116db9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546117079061405e565b80156117545780601f1061172957610100808354040283529160200191611754565b820191906000526020600020905b81548152906001019060200180831161173757829003601f168201915b505050505080602001905181019061176c91906142a6565b610100015192915050565b60066000541415611822576000600280546117919061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546117bd9061405e565b801561180a5780601f106117df5761010080835404028352916020019161180a565b820191906000526020600020905b8154815290600101906020018083116117ed57829003601f168201915b505050505080602001905181019061176c919061439d565b6106b560006007613070565b611836613cf0565b6106d8611848368490038401846144b1565b82613316565b611856613cf0565b6106d861186836849003840184614571565b826126c2565b60006001600054141561192b5760006002805461188a9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546118b69061405e565b80156119035780601f106118d857610100808354040283529160200191611903565b820191906000526020600020905b8154815290600101906020018083116118e657829003601f168201915b505050505080602001905181019061191b91906141de565b905061192960006011613070565b505b600360005414156119e0576000600280546119459061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546119719061405e565b80156119be5780601f10611993576101008083540402835291602001916119be565b820191906000526020600020905b8154815290600101906020018083116119a157829003601f168201915b50505050508060200190518101906119d691906142a6565b6020015192915050565b60066000541415611a8b576000600280546119fa9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a269061405e565b8015611a735780601f10611a4857610100808354040283529160200191611a73565b820191906000526020600020905b815481529060010190602001808311611a5657829003601f168201915b50505050508060200190518101906119d6919061439d565b6106b560006011613070565b600060606000546002808054611aac9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611ad89061405e565b8015611b255780601f10611afa57610100808354040283529160200191611b25565b820191906000526020600020905b815481529060010190602001808311611b0857829003601f168201915b50505050509050915091509091565b600060016000541415611bf157600060028054611b509061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611b7c9061405e565b8015611bc95780601f10611b9e57610100808354040283529160200191611bc9565b820191906000526020600020905b815481529060010190602001808311611bac57829003601f168201915b5050505050806020019051810190611be191906141de565b9050611bef60006009613070565b505b60036000541415611ca657600060028054611c0b9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611c379061405e565b8015611c845780601f10611c5957610100808354040283529160200191611c84565b820191906000526020600020905b815481529060010190602001808311611c6757829003601f168201915b5050505050806020019051810190611c9c91906142a6565b60a0015192915050565b60066000541415611d5157600060028054611cc09061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611cec9061405e565b8015611d395780601f10611d0e57610100808354040283529160200191611d39565b820191906000526020600020905b815481529060010190602001808311611d1c57829003601f168201915b5050505050806020019051810190611c9c919061439d565b6106b560006009613070565b600060016000541415611e1a57600060028054611d799061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611da59061405e565b8015611df25780601f10611dc757610100808354040283529160200191611df2565b820191906000526020600020905b815481529060010190602001808311611dd557829003601f168201915b5050505050806020019051810190611e0a91906141de565b9050611e186000600b613070565b505b60036000541415611ed057600060028054611e349061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611e609061405e565b8015611ead5780601f10611e8257610100808354040283529160200191611ead565b820191906000526020600020905b815481529060010190602001808311611e9057829003601f168201915b5050505050806020019051810190611ec591906142a6565b610140015192915050565b60066000541415611f7b57600060028054611eea9061405e565b80601f0160208091040260200160405190810160405280929190818152602001828054611f169061405e565b8015611f635780601f10611f3857610100808354040283529160200191611f63565b820191906000526020600020905b815481529060010190602001808311611f4657829003601f168201915b5050505050806020019051810190611ec5919061439d565b6106b56000600b613070565b6040805180820190915260008082526020820152611fa3613cf0565b611fab613d24565b611fb3613d43565b604080516020808201835287825283810191909152600083528151808201909252828252830152611fe482846126c2565b50505192915050565b6000600160005414156120aa576000600280546120099061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546120359061405e565b80156120825780601f1061205757610100808354040283529160200191612082565b820191906000526020600020905b81548152906001019060200180831161206557829003601f168201915b505050505080602001905181019061209a91906141de565b90506120a86000600c613070565b505b6003600054141561215f576000600280546120c49061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546120f09061405e565b801561213d5780601f106121125761010080835404028352916020019161213d565b820191906000526020600020905b81548152906001019060200180831161212057829003601f168201915b505050505080602001905181019061215591906142a6565b60c0015192915050565b6006600054141561220a576000600280546121799061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546121a59061405e565b80156121f25780601f106121c7576101008083540402835291602001916121f2565b820191906000526020600020905b8154815290600101906020018083116121d557829003601f168201915b5050505050806020019051810190612155919061439d565b6106b56000600c613070565b6000600160005414156122d3576000600280546122329061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461225e9061405e565b80156122ab5780601f10612280576101008083540402835291602001916122ab565b820191906000526020600020905b81548152906001019060200180831161228e57829003601f168201915b50505050508060200190518101906122c391906141de565b90506122d16000600d613070565b505b6003600054141561237e576000600280546122ed9061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546123199061405e565b80156123665780601f1061233b57610100808354040283529160200191612366565b820191906000526020600020905b81548152906001019060200180831161234957829003601f168201915b505050505080602001905181019061069e91906142a6565b60066000541415612434576000600280546123989061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546123c49061405e565b80156124115780601f106123e657610100808354040283529160200191612411565b820191906000526020600020905b8154815290600101906020018083116123f457829003601f168201915b5050505050806020019051810190612429919061439d565b6101c0015192915050565b6106b56000600d613070565b600061244a613cf0565b612452613d24565b61245a613d43565b604080516020808201835287151582528383019190915260018352815180820190925282825283015261248d82846126c2565b50506020015192915050565b600060016000541415612556576000600280546124b59061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546124e19061405e565b801561252e5780601f106125035761010080835404028352916020019161252e565b820191906000526020600020905b81548152906001019060200180831161251157829003601f168201915b505050505080602001905181019061254691906141de565b905061255460006015613070565b505b6003600054141561260b576000600280546125709061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461259c9061405e565b80156125e95780601f106125be576101008083540402835291602001916125e9565b820191906000526020600020905b8154815290600101906020018083116125cc57829003601f168201915b505050505080602001905181019061260191906142a6565b6040015192915050565b600660005414156126b6576000600280546126259061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546126519061405e565b801561269e5780601f106126735761010080835404028352916020019161269e565b820191906000526020600020905b81548152906001019060200180831161268157829003601f168201915b5050505050806020019051810190612601919061439d565b6106b560006015613070565b6126d2600660005414602b613070565b81516126ed9015806126e657508251600154145b602c613070565b6000808055600280546126ff9061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461272b9061405e565b80156127785780601f1061274d57610100808354040283529160200191612778565b820191906000526020600020905b81548152906001019060200180831161275b57829003601f168201915b5050505050806020019051810190612790919061439d565b905061279a613da6565b7f94c666917348af97552cdf68a39b8a5961f1e5583a0e0ed29736a4828910261b33856040516127cb929190614634565b60405180910390a160006020850151515160038111156127ed576127ed614048565b1415612bad576020808501515101518082525161020083015161281091906146cc565b6020820152805151612825903414601f613070565b61284382610140015161283957600161283c565b60005b6020613070565b6101c082015181515161285891106021613070565b61286f826101600151836101e00151106022613070565b610180820151604082810180516001600160a01b0393841690526101c085015181516020908101919091529051825181519094168452810151908301527fcf2be25edf1db0c9efdcb2900d6f014ddc45946e99a07f4d0d794806a46d1883910160405180910390a1604081015183526101a082015115612a22576128f1613de2565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190910152606080860151845190910152608080860151845190841691015260a080860151845190841691015260c0808601518451931692019190915260e080850151835190910152610100808501518351909101526101208085015183519091015261014084015190820151901515905261016083015161299c90603c906146e4565b836101e00151116129b2578261016001516129c4565b60788361016001516129c491906146cc565b602080830180518201929092528151336040909101528151600060609091015281516001608090910152835151825160a0015281514360c09091015281514260e09091015283015190516101000152612a1c816134d8565b5061306a565b8161018001516001600160a01b03166108fc836101c001519081150290604051600060405180830381858888f19350505050158015612a65573d6000803e3d6000fd5b50612a6e613de2565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845190910152606080860151845190910152608080860151845190841691015260a080860151845190841691015260c0808601518451931692019190915260e0808501518351909101526101008085015183519091015261012080850151835190910152610140840151908201519015159052610160830151612b1990603c906146e4565b836101e0015111612b2f57826101600151612b41565b6078836101600151612b4191906146cc565b602080830180518201929092528151336040909101528151600060609091015281516001608090910152835151825160a0015281514360c09091015290514260e0909101526101c084015190830151612b9a91906146e4565b60208201516101000152612a1c816134d8565b6001602085015151516003811115612bc757612bc7614048565b1415612d5b57612bd934156023613070565b612be98261014001516024613070565b612c0d8261018001516001600160a01b0316336001600160a01b0316146025613070565b604051600081527fc2600189504524b1b2fa36dbdb5e840e36b0bae042c8c1ad97f7737adcffbfb39060200160405180910390a160006020840152612c50613de2565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855182015260808088015186519086169082015260a080890151875190871691015260c080890151875190871691015260e0808901518751909101526101008089015187519091015261012080890151875190910152838601805160019052610160890151815190950194909452610180880151845195169490920193909352815160009301839052905101526101a0830151612d2357826101c00151612d26565b60005b60208201805160a0019190915280514360c09091015280514260e09091015261020084015190516101000152612a1c816134d8565b6002602085015151516003811115612d7557612d75614048565b1415612ece57612d8734156026613070565b604051600081527f365745bb2e079b8d4caf8d5801151b5b0c37f21f240522c2dcc4d28d10221c0a9060200160405180910390a160006040840152612dca613de2565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855182015260808088015186519086169082015260a08089015187519087169082015260c0808a015188519088169082015260e0808b01518951820152610100808c01518a51820152610120808d01518b51909101526101408c0151888b0180519115159091526101608d01518151909901989098526101808c01518851991698909601979097526101a08a01518651901515940193909352845160019201919091526101c0880151845190910152825143910152815142930192909252610200850151905190910152612a1c816134d8565b6003602085015151516003811115612ee857612ee8614048565b141561306a57612efa34156027613070565b612f18826101400151612f0e576001612f11565b60005b6028613070565b612f3b82608001516001600160a01b0316336001600160a01b0316146029613070565b612f53826101600151836101e001511015602a613070565b604051600081527f9db9b20461774f3a75df50c693679513012b513df6a986d766f2577acbb12d2e9060200160405180910390a160006060840152612f96613de2565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151855182015260808088015186519086169082015260a080890151875190871691015260c080890151875190871691015260e080890151875190910152610100808901518751909101526101208089015187519091015283860180516001908190526101608a01518251909601959095526101808901518151961695909301949094528151600091015251909101526101a0830151612d2357826101c00151612d26565b50505050565b816106d85760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6130a6600160005414601a613070565b81516130c19015806130ba57508251600154145b601b613070565b6000808055600280546130d39061405e565b80601f01602080910402602001604051908101604052809291908181526020018280546130ff9061405e565b801561314c5780601f106131215761010080835404028352916020019161314c565b820191906000526020600020905b81548152906001019060200180831161312f57829003601f168201915b505050505080602001905181019061316491906141de565b905061317c6040518060200160405280600081525090565b60408051338152855160208083019190915286015115158183015290517f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f19181900360600190a16131cf34156017613070565b6131e96131e23384602001516001613ade565b6018613070565b8151613201906001600160a01b031633146019613070565b816060015182610160015161321691906146cc565b8152613220613de2565b825181516001600160a01b039182169052602080850151835190831690820152608080860151845160409081019190915260a080880151865160609081019190915260c0808a015188519088169086015260e0808b0151895190891690850152610100808c01518a51908a1690840152610120808d01518b518401526101408d01518b518301528b518b5190910152878a0180516000908190528c518251909a01999099528c5181519a16998701999099528851600194018490528851909601929092529289015186519092019190915284514392019190915283514291015291519091015261330f816134d8565b5050505050565b613326600360005414601d613070565b815161334190158061333a57508251600154145b601e613070565b6000808055600280546133539061405e565b80601f016020809104026020016040519081016040528092919081815260200182805461337f9061405e565b80156133cc5780601f106133a1576101008083540402835291602001916133cc565b820191906000526020600020905b8154815290600101906020018083116133af57829003601f168201915b50505050508060200190518101906133e491906142a6565b60408051338152855160208083019190915286015115158183015290519192507f9e33038d0c0154a5ab4cf9e5859ab906867e950883262ffe58911dc6195288c6919081900360600190a161343b3415601c613070565b8060a001516001600160a01b03166108fc826101c001519081150290604051600060405180830381858888f1935050505015801561347d573d6000803e3d6000fd5b5080516101e08201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156134bc573d6000803e3d6000fd5b50600080805560018190556134d390600290613e8b565b505050565b6135186040518060e00160405280600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b816020015160800151156137125781516101000151602083015160a00151613542906064906146fb565b61354c919061471d565b826020015160a0015161355f91906146cc565b81526040805161024081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081018290526101408101829052610160810182905261018081018290526101a081018290526101c081018290526101e0810182905261020081018290526102208101919091528251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528551606090810151818601528651608090810151851690860152865160a090810151851681870152875160c090810151861690870152875160e090810151818801528851610100908101518189015289516101209081015190890152858a0180515115156101408a015280518701516101608a0152805186015190971661018089015286519093015115156101a08801528551909101516101c0870152845101516101e0860152925190920151610200840152835161022084015260066000554360015590516136ee9183910161473c565b6040516020818303038152906040526002908051906020019061306a929190613ec8565b81516101000151602083015160a0015161372e906064906146fb565b613738919061471d565b826020015160a0015161374b91906146cc565b6020808301919091528201516101000151613768906064906146fb565b604080830182905283510151600a1061378257600a613789565b8251604001515b613793919061471d565b606082015260408101516137a890600561471d565b608082015260408101518251606001516137c2919061471d565b60a08201819052608082015160608301516137dd91906146cc565b6137e791906146cc565b826020015161010001516137fb91906146e4565b60c082015260208201516060015161382357815160e00151602083015160a001511015613826565b60005b15613a68576138478260000151602001518360200151604001516001613af6565b815160c0015160608201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015613888573d6000803e3d6000fd5b508160000151608001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156138ce573d6000803e3d6000fd5b5061398760405180610200016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160001515815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081525090565b8251516001600160a01b03908116825283516020908101518216818401528451604090810151818501528551606090810151908501528551608090810151841690850152855160a090810151841681860152865160c090810151851681870152875160e090810151908701528751610100908101519087015287516101209081015190870152838801805151151561014088015280518401519095166101608701529351810151610180860152858301516101a08601528501516101c0850152918401516101e084015260036000554360015590516136ee9183910161485a565b8160200151604001516001600160a01b03166108fc836020015161010001519081150290604051600060405180830381858888f19350505050158015613ab2573d6000803e3d6000fd5b50815160208101519051613ac891906001613af6565b600080805560018190556106d890600290613e8b565b6000613aec83853085613b0a565b90505b9392505050565b613b01838383613be4565b6134d357600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391613b7191614960565b60006040518083038185875af1925050503d8060008114613bae576040519150601f19603f3d011682016040523d82523d6000602084013e613bb3565b606091505b5091509150613bc482826001613cb5565b5080806020019051810190613bd9919061497c565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391613c4391614960565b60006040518083038185875af1925050503d8060008114613c80576040519150601f19603f3d011682016040523d82523d6000602084013e613c85565b606091505b5091509150613c9682826002613cb5565b5080806020019051810190613cab919061497c565b9695505050505050565b60608315613cc4575081613aef565b825115613cd45782518084602001fd5b60405163100960cb60e01b81526004810183905260240161308d565b6040805160c08101825260006080820181815260a08301829052825260208201819052918101829052606081019190915290565b604051806040016040528060008152602001613d3e613f4c565b905290565b6040805160a081019091528060008152602001613d6c6040518060200160405280600081525090565b8152604080516020808201835260008083528185019290925282518082018452828152838501528251908101909252815260609091015290565b60408051608081019091526000606082019081528190815260200160008152602001613d3e604080518082019091526000808252602082015290565b60408051610180810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e082018390526101008201839052610120820183905261014082018390526101608201929092529081908152604080516101208101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e0820181905261010082015291015290565b508054613e979061405e565b6000825580601f10613ea7575050565b601f016020900490600052602060002090810190613ec59190613f5f565b50565b828054613ed49061405e565b90600052602060002090601f016020900481019282613ef65760008555613f3c565b82601f10613f0f57805160ff1916838001178555613f3c565b82800160010185558215613f3c579182015b82811115613f3c578251825591602001919060010190613f21565b50613f48929150613f5f565b5090565b6040518060200160405280613d3e613d43565b5b80821115613f485760008155600101613f60565b8015158114613ec557600080fd5b600060208284031215613f9457600080fd5b8135613aef81613f74565b600060408284031215613fb157600080fd5b50919050565b600060c08284031215613fb157600080fd5b60005b83811015613fe4578181015183820152602001613fcc565b8381111561306a5750506000910152565b828152604060208201526000825180604084015261401a816060850160208701613fc9565b601f01601f1916919091016060019392505050565b60006020828403121561404157600080fd5b5035919050565b634e487b7160e01b600052602160045260246000fd5b600181811c9082168061407257607f821691505b60208210811415613fb157634e487b7160e01b600052602260045260246000fd5b604051610180810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610200810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b604051610240810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff811182821017156140c557634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146141d957600080fd5b919050565b600061018082840312156141f157600080fd5b6141f9614093565b614202836141c2565b8152614210602084016141c2565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a082015261424960c084016141c2565b60c082015261425a60e084016141c2565b60e082015261010061426d8185016141c2565b9082015261012083810151908201526101408084015190820152610160928301519281019290925250919050565b80516141d981613f74565b600061020082840312156142b957600080fd5b6142c16140cb565b6142ca836141c2565b81526142d8602084016141c2565b602082015260408301516040820152606083015160608201526142fd608084016141c2565b608082015261430e60a084016141c2565b60a082015261431f60c084016141c2565b60c082015260e083810151908201526101008084015190820152610120808401519082015261014061435281850161429b565b908201526101606143648482016141c2565b9082015261018083810151908201526101a080840151908201526101c080840151908201526101e0928301519281019290925250919050565b600061024082840312156143b057600080fd5b6143b86140fd565b6143c1836141c2565b81526143cf602084016141c2565b602082015260408301516040820152606083015160608201526143f4608084016141c2565b608082015261440560a084016141c2565b60a082015261441660c084016141c2565b60c082015260e083810151908201526101008084015190820152610120808401519082015261014061444981850161429b565b9082015261016083810151908201526101806144668185016141c2565b908201526101a061447884820161429b565b908201526101c083810151908201526101e080840151908201526102008084015190820152610220928301519281019290925250919050565b6000604082840312156144c357600080fd5b6040516040810181811067ffffffffffffffff821117156144f457634e487b7160e01b600052604160045260246000fd5b60405282358152602083013561450981613f74565b60208201529392505050565b60006020828403121561452757600080fd5b6040516020810181811067ffffffffffffffff8211171561455857634e487b7160e01b600052604160045260246000fd5b604052905080823561456981613f74565b905292915050565b600081830360c081121561458457600080fd5b61458c61412f565b8335815260a0601f19830112156145a257600080fd5b6145aa614160565b6145b2614191565b6020860135600481106145c457600080fd5b81526020603f19850112156145d857600080fd5b6145e0614160565b9350604086013584528360208201526145fc8760608801614515565b604082015261460e8760808801614515565b60608201526146208760a08801614515565b608082015281526020820152949350505050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061467557634e487b7160e01b600052602160045260246000fd5b80604085015250602081015151606084015260408101515115156080840152606081015151151560a0840152608081015151151560c0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156146df576146df6146b6565b500190565b6000828210156146f6576146f66146b6565b500390565b60008261471857634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615614737576147376146b6565b500290565b81516001600160a01b031681526102408101602083015161476860208401826001600160a01b03169052565b506040830151604083015260608301516060830152608083015161479760808401826001600160a01b03169052565b5060a08301516147b260a08401826001600160a01b03169052565b5060c08301516147cd60c08401826001600160a01b03169052565b5060e0838101519083015261010080840151908301526101208084015190830152610140808401511515908301526101608084015190830152610180808401516001600160a01b0316908301526101a0808401511515908301526101c080840151908301526101e08084015190830152610200808401519083015261022092830151929091019190915290565b81516001600160a01b031681526102008101602083015161488660208401826001600160a01b03169052565b50604083015160408301526060830151606083015260808301516148b560808401826001600160a01b03169052565b5060a08301516148d060a08401826001600160a01b03169052565b5060c08301516148eb60c08401826001600160a01b03169052565b5060e083810151908301526101008084015190830152610120808401519083015261014080840151151590830152610160808401516001600160a01b03169083015261018080840151908301526101a080840151908301526101c080840151908301526101e092830151929091019190915290565b60008251614972818460208701613fc9565b9190910192915050565b60006020828403121561498e57600080fd5b8151613aef81613f7456fea26469706673582212203f9144e8ba9907d62e07076ac3b816b218db8618115d5a429b0ec4ea76a55faf64736f6c634300080c0033`,
  BytecodeLen: 20434,
  Which: `oD`,
  version: 7,
  views: {
    Auction: {
      bidIncrement: `Auction_bidIncrement`,
      bids: `Auction_bids`,
      charityAddress: `Auction_charityAddress`,
      charityPercentage: `Auction_charityPercentage`,
      closedSys: `Auction_closedSys`,
      creatorAddress: `Auction_creatorAddress`,
      currentPrice: `Auction_currentPrice`,
      endSecs: `Auction_endSecs`,
      highestBidder: `Auction_highestBidder`,
      minBid: `Auction_minBid`,
      nftId: `Auction_nftId`,
      owner: `Auction_owner`,
      platformAddress: `Auction_platformAddress`,
      reservePrice: `Auction_reservePrice`,
      royalty: `Auction_royalty`
      }
    }
  };
export const _stateSourceMap = {
  1: {
    at: './rsh/auction.rsh:96:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './rsh/auction.rsh:248:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './rsh/auction.rsh:259:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './rsh/auction.rsh:259:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './rsh/auction.rsh:122:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "AuctionCreator": AuctionCreator,
  "Bidder_bid": Bidder_bid,
  "Bidder_close": Bidder_close,
  "Bidder_touch": Bidder_touch,
  "Closer": Closer,
  "System_close": System_close
  };
export const _APIs = {
  Bidder: {
    bid: Bidder_bid,
    close: Bidder_close,
    touch: Bidder_touch
    },
  System: {
    close: System_close
    }
  };
