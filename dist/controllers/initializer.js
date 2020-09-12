'use strict';
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.create = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
all copyright reservation for S2 Click, Inc
*/
var fs_1 = require('fs');
var latest_version_1 = require('latest-version');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var whatsapp_1 = require('../api/whatsapp');
var create_config_1 = require('../config/create-config');
var semver_1 = require('../utils/semver');
var auth_1 = require('./auth');
var browser_1 = require('./browser');
var chalk = require('chalk');
var boxen = require('boxen');
var Spinnies = require('spinnies');
var path = require('path');
var Counter = require('../lib/counter/Counter.js');
var version = require('../../package.json').version;
// Global
var updatesChecked = false;
var counter = new Counter();
/**
 * Should be called to initialize whatsapp client
 */
function create(session, catchQR, statusFind, options) {
  if (session === void 0) {
    session = 'session';
  }
  return __awaiter(this, void 0, void 0, function () {
    var spinnies,
      mergedOptions,
      waPage,
      authenticated,
      _a,
      data,
      asciiQR,
      localStorage_1,
      _b,
      _c,
      WABrowserId_1,
      WASecretBundle_1,
      WAToken1_1,
      WAToken2_1,
      debugURL;
    return __generator(this, function (_d) {
      switch (_d.label) {
        case 0:
          spinnies = new Spinnies({
            disableSpins: options ? options.disableSpins : '',
          });
          console.log(
            '\n\n\u2597\u2584 \u2584 \u2584  \u2584\u2584\u2584 \u2584   \u2584\u2584\u2584  \u2597\u2584\u2584\u2596\u2597\u2584\u2596 \u2597\u2584\u2596\u2584\u2584\u2584\u2596                           \n \u2588\u259F\u2588\u2599\u2588  \u2588\u2584\u2584 \u2588   \u2588    \u2588 \u2590\u2588 \u2588 \u2588 \u2588 \u2588\u2584\u2584                           \n \u2590\u2588 \u2588\u258C  \u2588\u2584\u2584 \u2588\u2588\u2588 \u259C\u2584\u259B\u2598 \u259C\u2599\u259F\u2580 \u2588   \u2588 \u2588\u2584\u2584\u2596                           \n                                                      \n\u2584\u2584\u2584\u2596       \u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u2584\u259F\u258C\u2580\u2596     \u2597\u2584\u2584\u2596                        \n\u259D\u2584 \u2590\u2596     \u259F\u2598\u2590         \u2590\u258C \u259D\u2599    \u2590  \u258C \u2584\u259E\u2580\u2580\u2580\u2580\u2580\u2584\u2596 \u259B\u2580\u2584        \u2584\u2598\u258C\n \u259D\u2584 \u2590\u2596   \u2590\u2598 \u259F\u2596 \u259C\u2580\u2580\u2580\u2580\u2580\u258C\u2590\u2596  \u259D\u259A\u2596  \u2590  \u2599\u259E\u2598\u2597\u259E\u2580\u2580\u2580\u259A\u2596\u259D\u2599\u259B \u259D\u259C\u2596    \u2597\u2580  \u258C\n  \u2580\u2596 \u259C  \u2597\u2598 \u259F\u2588  \u259C     \u259D\u2590\u258C \u259F\u2596 \u259C\u2596 \u2590  \u2588 \u259F\u2598     \u2590\u2596\u259D\u2588   \u259D\u2599\u2596\u2597\u259E\u2598   \u258C\n   \u259C\u2596 \u259C\u2584\u259B \u2590\u259C\u259D  \u259D \u2598\u259C   \u259D\u258C \u259F\u2580\u2596 \u259D\u2599\u2590  \u258C\u2597\u258C       \u259C \u2599 \u2590\u2599\u2596 \u2580\u2598 \u2597\u259F\u2598 \u258C\n    \u259A\u2596 \u2580 \u2597\u258C\u259D\u259C\u2596 \u259C\u2580\u2580\u2580   \u2590\u258C \u259F \u259D\u2599  \u259C  \u2599 \u2599       \u259B \u2599 \u2590\u258C\u259D\u2584  \u259F\u2580\u2590\u2598 \u258C\n     \u259A\u2596 \u2597\u259B  \u2590\u2596 \u259C    \u2597\u259B\u259C\u258C \u259F   \u259A\u2596   \u2588\u2596\u259D\u2599\u2596   \u2597\u259B \u259F\u259B \u2590\u2596  \u2580\u259E  \u2590\u2596 \u258C\n     \u259D\u259A\u2597\u259B   \u2590   \u2598\u2598\u2598\u2598\u2598 \u2590\u258C \u259F    \u2580\u2584  \u258C\u259D\u2599\u2596\u259D\u2580\u2580\u2580\u2598\u2597\u259E\u2598\u259B \u2590\u258C      \u2590  \u258C\n      \u259D\u259B    \u259D\u2580\u259D\u2598\u2598\u2598\u2598\u2598\u2598\u2580\u259D\u2598\u2598\u2580     \u259D\u2599 \u258C  \u259D\u2580\u2598\u2598\u2580\u2580\u2598  \u2580\u2598\u2580       \u259D\u2580\u259D\u2598\n                                 \u259A\u258C\n                                   \n'
          );
          // Check for updates if needed
          if (!updatesChecked) {
            spinnies.add('venom-version-spinner', {
              text: 'Checking for updates',
            });
            checkVenomVersion(spinnies);
            updatesChecked = true;
          }
          // Initialize whatsapp
          spinnies.add(session + '-auth', {
            text: 'Waiting...',
          });
          mergedOptions = __assign(
            __assign({}, create_config_1.defaultOptions),
            options
          );
          return [4 /*yield*/, browser_1.initWhatsapp(session, mergedOptions)];
        case 1:
          waPage = _d.sent();
          spinnies.update(session + '-auth', { text: 'Authenticating...' });
          return [4 /*yield*/, auth_1.isAuthenticated(waPage)];
        case 2:
          authenticated = _d.sent();
          if (!authenticated) return [3 /*break*/, 4];
          // Wait til inside chat
          if (statusFind) {
            statusFind('isLogged');
          }
          return [4 /*yield*/, auth_1.isInsideChat(waPage).toPromise()];
        case 3:
          _d.sent();
          spinnies.succeed(session + '-auth', { text: 'Authenticated' });
          return [3 /*break*/, 9];
        case 4:
          if (statusFind) {
            statusFind('notLogged');
          }
          spinnies.update(session + '-auth', {
            text: 'Authenticate to continue',
          });
          if (!(mergedOptions.refreshQR <= 0 || mergedOptions.autoClose <= 0))
            return [3 /*break*/, 6];
          return [4 /*yield*/, auth_1.retrieveQR(waPage)];
        case 5:
          (_a = _d.sent()), (data = _a.data), (asciiQR = _a.asciiQR);
          if (catchQR) {
            catchQR(data, asciiQR);
          }
          if (mergedOptions.logQR) {
            console.log('Scan QR for: ' + session);
            console.log(asciiQR);
          }
          return [3 /*break*/, 7];
        case 6:
          process.on('uncaughtException', function (err) {
            if (
              err.message ==
              'Protocol error (Runtime.callFunctionOn): Target closed.'
            )
              spinnies.succeed(session + '-auth', { text: 'Auto closed!' });
          });
          mergedOptions.autoClose
            ? grabQRUntilTimeOut(waPage, mergedOptions, session, catchQR)
            : grabQRUntilInside(waPage, mergedOptions, session, catchQR);
          _d.label = 7;
        case 7:
          // Wait til inside chat
          return [4 /*yield*/, auth_1.isInsideChat(waPage).toPromise()];
        case 8:
          // Wait til inside chat
          _d.sent();
          spinnies.succeed(session + '-auth', { text: 'Compilation Mutation' });
          _d.label = 9;
        case 9:
          spinnies.add(session + '-inject', { text: 'Injecting Sibionte...' });
          return [4 /*yield*/, browser_1.injectApi(waPage)];
        case 10:
          waPage = _d.sent();
          spinnies.succeed(session + '-inject', {
            text: 'Starting With Success!',
          });
          // Saving Token
          spinnies.add(session + '-inject', { text: 'Saving Token...' });
          if (!true) return [3 /*break*/, 12];
          _c = (_b = JSON).parse;
          return [
            4 /*yield*/,
            waPage.evaluate(function () {
              return JSON.stringify(window.localStorage);
            }),
          ];
        case 11:
          localStorage_1 = _c.apply(_b, [_d.sent()]);
          (WABrowserId_1 = localStorage_1.WABrowserId),
            (WASecretBundle_1 = localStorage_1.WASecretBundle),
            (WAToken1_1 = localStorage_1.WAToken1),
            (WAToken2_1 = localStorage_1.WAToken2);
          try {
            setTimeout(function () {
              fs_1.mkdir(
                path.join(path.resolve(process.cwd(), 'tokens')),
                { recursive: true },
                function (err) {
                  if (err) {
                    spinnies.fail(session + '-inject', {
                      text: 'Failed to create folder tokens...',
                    });
                  }
                }
              );
            }, 200);
            setTimeout(function () {
              fs_1.writeFileSync(
                path.join(
                  path.resolve(process.cwd(), 'tokens'),
                  session + '.data.json'
                ),
                JSON.stringify({
                  WABrowserId: WABrowserId_1,
                  WASecretBundle: WASecretBundle_1,
                  WAToken1: WAToken1_1,
                  WAToken2: WAToken2_1,
                })
              );
              spinnies.succeed(session + '-inject', {
                text: 'Token saved successfully...',
              });
            }, 500);
          } catch (error) {
            spinnies.fail(session + '-inject', {
              text: 'Failed to save token...',
            });
          }
          _d.label = 12;
        case 12:
          if (mergedOptions.debug) {
            debugURL =
              'http://localhost:' +
              fs_1
                .readFileSync('./' + session + '/DevToolsActivePort')
                .slice(0, -54);
            console.log('\nDebug: \u001B[34m' + debugURL + '\u001B[0m');
          }
          return [2 /*return*/, new whatsapp_1.Whatsapp(waPage)];
      }
    });
  });
}
exports.create = create;
/**
 * Check the time remaining to autoClose from Counter class
 */
var countDown = function (msTimeOut) {
  return counter.getElapsedTime() < msTimeOut;
};
/**
 * Grab QRcode until timeout
 */
function grabQRUntilTimeOut(waPage, options, session, catchQR) {
  var _this = this;
  var isInside = auth_1.isInsideChat(waPage);
  var timeInterval = 1000; //options.refreshQR > 0 && options.refreshQR <= options.autoClose ? options.refreshQR : 1000
  counter.isFirstCall = true;
  rxjs_1
    .timer(0, timeInterval)
    .pipe(
      operators_1.takeUntil(isInside),
      operators_1.switchMap(function () {
        return auth_1.retrieveQR(waPage);
      })
    )
    .subscribe(function (_a) {
      var data = _a.data,
        asciiQR = _a.asciiQR;
      return __awaiter(_this, void 0, void 0, function () {
        var _b, timeOut;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              counter.counterInit();
              if (
                !(
                  // console.log(waPage.browser().process);
                  countDown(options.autoClose)
                )
              )
                // console.log(waPage.browser().process);
                return [3 /*break*/, 1];
              _b = null;
              return [3 /*break*/, 3];
            case 1:
              return [4 /*yield*/, waPage.close()];
            case 2:
              _b = _c.sent();
              _c.label = 3;
            case 3:
              // console.log(waPage.browser().process);
              _b; //Close Imediatly
              timeOut = Math.round(
                (options.autoClose - counter.getElapsedTime()) / 1000
              );
              if (catchQR) {
                catchQR(data, asciiQR);
              }
              if (options.logQR) {
                console.clear();
                console.log(
                  'Scan QR for: ' +
                    session +
                    '                ' +
                    ('(Time remaining for auto close ' + timeOut + ' sec.)')
                );
                console.log(asciiQR);
              }
              return [2 /*return*/];
          }
        });
      });
    });
}
/**
 * Grab QRcode until synced (inside chat)
 */
function grabQRUntilInside(waPage, options, session, catchQR) {
  var isInside = auth_1.isInsideChat(waPage);
  rxjs_1
    .timer(0, options.refreshQR)
    .pipe(
      operators_1.takeUntil(isInside),
      operators_1.switchMap(function () {
        return auth_1.retrieveQR(waPage);
      })
    )
    .subscribe(function (_a) {
      var data = _a.data,
        asciiQR = _a.asciiQR;
      if (catchQR) {
        catchQR(data, asciiQR);
      }
      if (options.logQR) {
        console.clear();
        console.log('Scan QR for: ' + session + ' ');
        console.log(asciiQR);
      }
    });
}
/**
 * Checs for a new versoin of venom and logs
 */
function checkVenomVersion(spinnies) {
  latest_version_1.default('venom-bot').then(function (latest) {
    if (!semver_1.upToDate(version, latest)) {
      logUpdateAvailable(version, latest);
    }
    spinnies.succeed('venom-version-spinner', { text: 'Checking for updates' });
  });
}
/**
 * Logs a boxen of instructions to update
 * @param current
 * @param latest
 */
function logUpdateAvailable(current, latest) {
  // prettier-ignore
  var newVersionLog = "There is a new version of " + chalk.bold("Venom") + " " + chalk.gray(current) + " \u279C  " + chalk.bold.green(latest) + "\n" +
        "Update your package by running:\n\n" +
        (chalk.bold('\>') + " " + chalk.blueBright('npm update venom-bot'));
  console.log(boxen(newVersionLog, { padding: 1 }));
  console.log(
    'For more info visit: ' +
      chalk.underline(
        'https://github.com/orkestral/venom/blob/master/UPDATES.md'
      ) +
      '\n'
  );
}
