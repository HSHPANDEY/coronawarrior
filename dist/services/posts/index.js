"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var read_dms_1 = __importDefault(require("./read_dms"));
var write_dms_1 = __importDefault(require("./write_dms"));
var moment_1 = __importDefault(require("moment"));
var configs_1 = __importDefault(require("./configs"));
var lodash_1 = __importDefault(require("lodash"));
var searchPosts = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, zones, page_limit, page_count, posts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                tags = data.tags, zones = data.zones, page_limit = data.page_limit, page_count = data.page_count;
                return [4 /*yield*/, read_dms_1.default.searchPostsByTagsAndZones(tags, zones, { limit: page_limit, skip: (page_count - 1) * page_limit })];
            case 1:
                posts = _a.sent();
                return [2 /*return*/, posts];
        }
    });
}); };
var addPosts = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var addPostResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, write_dms_1.default.addPosts(data)];
            case 1:
                addPostResponse = _a.sent();
                return [2 /*return*/, {}];
        }
    });
}); };
var upvotePost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (data.post_id)
                    return [2 /*return*/, {}];
                return [4 /*yield*/, write_dms_1.default.upvotePost(data.post_id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var downvotePost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (data.post_id)
                    return [2 /*return*/, {}];
                return [4 /*yield*/, write_dms_1.default.downvotePost(data.post_id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var archivePost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (data.post_id)
                    return [2 /*return*/, {}];
                return [4 /*yield*/, write_dms_1.default.archivePost(data.post_id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var parkPost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var delayDay, delayHours, delayMinutes, delayTime, parkedPostResponse;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (data.post_id)
                    return [2 /*return*/, {}];
                delayDay = 1;
                delayHours = 0;
                delayMinutes = 0;
                if (data.follow_up_time) {
                    delayDay = lodash_1.default.get(data.follow_up_time, 'delay_in_day', delayDay);
                    delayHours = lodash_1.default.get(data.follow_up_time, 'delay_in_hrs', 0);
                    delayMinutes = lodash_1.default.get(data.follow_up_time, 'delay_in_minutes', 0);
                }
                delayTime = moment_1.default().utc().add(delayDay, 'days');
                if (delayHours) {
                    delayTime = delayTime.startOf('day').hour(delayHours).minutes(delayMinutes);
                }
                return [4 /*yield*/, write_dms_1.default.parkPost(data.post_id, delayTime.toDate())];
            case 1:
                parkedPostResponse = _a.sent();
                return [2 /*return*/, parkedPostResponse];
        }
    });
}); };
var performActionOnPost = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var actionType, actionResponse, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                actionType = lodash_1.default.get(data, 'action_data.action_type');
                _a = actionType;
                switch (_a) {
                    case configs_1.default.PostActions.UPVOTE: return [3 /*break*/, 1];
                    case configs_1.default.PostActions.DOWNVOTE: return [3 /*break*/, 3];
                    case configs_1.default.PostActions.ARCHIVE: return [3 /*break*/, 5];
                    case configs_1.default.PostActions.PARK: return [3 /*break*/, 7];
                }
                return [3 /*break*/, 9];
            case 1: return [4 /*yield*/, upvotePost(data)];
            case 2:
                actionResponse = _b.sent();
                _b.label = 3;
            case 3: return [4 /*yield*/, downvotePost(data)];
            case 4:
                actionResponse = _b.sent();
                _b.label = 5;
            case 5: return [4 /*yield*/, archivePost(data)];
            case 6:
                actionResponse = _b.sent();
                _b.label = 7;
            case 7: return [4 /*yield*/, parkPost(data)];
            case 8:
                actionResponse = _b.sent();
                _b.label = 9;
            case 9:
                actionResponse = {};
                _b.label = 10;
            case 10: return [2 /*return*/, actionResponse];
        }
    });
}); };
exports.default = {
    addPosts: addPosts,
    performActionOnPost: performActionOnPost,
    searchPosts: searchPosts
};
